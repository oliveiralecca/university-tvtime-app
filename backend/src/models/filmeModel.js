const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

class Filme {
    constructor(body){
        this.body = body;
        this.errors = [];
        this.filme = null;
    }
    static async getAllGeneros() {
        const generos = await prisma.genero.findMany();
        return generos;
    } 

    async createFilme() {
        const {titulo, tempo, data_de_estreia, resumo, titulos_equivalentes,capa, generos} = this.body

        const [horas,minutos] = tempo.split(':');
        const tempoDate = new Date();
        let titulosEquivalentesArray = titulos_equivalentes?titulos_equivalentes.split(',').map(tit => tit.trim()):undefined;
        tempoDate.setUTCHours(Number(horas),Number(minutos));
        let generosInt = generos?generos.map(gen => Number(gen)):[];

        const video = await prisma.video.create({
            data: {
                titulo: titulo,
                tempo: tempoDate,
                data_de_estreia: new Date(data_de_estreia),
                resumo: resumo,
                video_tem: generosInt.length>0?{
                    create: generosInt.map(gen => {
                        return {id_genero: gen};
                    }),
                }:undefined,
            }
        });
        const filme = await prisma.filme.create({
            data: {
                titulos_equivalentes: titulosEquivalentesArray,
                id_video: video.id_video,
                capa: capa?capa:undefined
            }
        });
        this.filme = {...video, ...filme};
    }

    async getFilmes() {
        const filmes = await prisma.filme.findMany();
        this.filme = await Promise.all(filmes.map(async film => {
            let video = await prisma.video.findUnique({where: {id_video: film.id_video}});
            return {...video, ...film};
        }))
    }

    async getFilme(id) {
        const filme = await prisma.filme.findUnique({where: {id_filme: Number(id)}});
        if (!filme) {
            this.errors.push("Filme não encontrado");
            return;
        }
        const video = await prisma.video.findUnique({where: {id_video: filme.id_video}});
        const video_tem = await prisma.video_tem.findMany({where: {id_video: video.id_video}});

        let generos = video_tem.length>0?await Promise.all(video_tem.map(async relation => {
            return await prisma.genero.findUnique({where: {id_genero: relation.id_genero}})
        })):[]
        this.filme = {...video,...filme,generos}
    }

    async updateFilme(id) {
        let filme = await prisma.filme.findUnique({where: {id_filme: Number(id)}});
        if (!filme) {
            this.errors.push("Filme não encontrado");
            return;
        }

        const {titulo, tempo, data_de_estreia, resumo, titulos_equivalentes,capa, generos} = this.body

        const [horas,minutos] = tempo.split(':');
        const tempoDate = new Date();
        let titulosEquivalentesArray = titulos_equivalentes?titulos_equivalentes.split(',').map(tit => tit.trim()):undefined;
        tempoDate.setUTCHours(Number(horas),Number(minutos));
        let generosInt = generos?generos.map(gen => Number(gen)):[];

        filme = await prisma.filme.update({
            where: {id_filme: filme.id_filme},
            data: {
                titulos_equivalentes: titulosEquivalentesArray,
                capa: capa?capa:undefined
            }
        });
        const video = await prisma.video.update({
            where: {id_video: filme.id_video},
            data: {
                titulo: titulo,
                tempo: tempoDate,
                data_de_estreia: new Date(data_de_estreia),
                resumo: resumo,
                video_tem: generosInt.length>0?{
                    create: generosInt.map(gen => {
                        return {id_genero: gen};
                    }),
                }:undefined,
            }
        });
        
        this.filme = {...video, ...filme};
    }

    async deleteFilme(id) {
        const filme = await prisma.filme.findUnique({where: {id_filme: Number(id)}});
        if (!filme) {
            this.errors.push("Filme não encontrado");
            return;
        }
        await prisma.video.delete({where: {id_video: filme.id_video}});
    }

}

module.exports = Filme;
