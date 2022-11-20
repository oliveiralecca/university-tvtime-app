const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

class Filme {
    constructor(req){
        this.req = req
        this.body = req.body;
        this.errors = [];
        this.filme = null;
    }
    static async getAllGeneros() {
        const generos = await prisma.genero.findMany();
        await prisma.$disconnect();
        return generos;
    } 

    async createFilme() {
        this.validate();

        if(this.errors.length > 0) {
            await prisma.$disconnect();
            return;
        }

        const {titulo, tempo, data_de_estreia, resumo, titulos_equivalentes, generos} = this.body

        const [horas,minutos] = tempo.split(':');
        const tempoDate = new Date();
        let titulosEquivalentesArray = titulos_equivalentes?titulos_equivalentes.split(',').map(tit => tit.trim()):[];
        tempoDate.setUTCHours(Number(horas),Number(minutos));
        let generosInt = generos?generos.map(gen => Number(gen)):[];

        const video = await prisma.video.create({
            data: {
                titulo: titulo,
                tempo: tempoDate,
                data_de_estreia: new Date(data_de_estreia),
                resumo: resumo,
                video_tem: {
                    create: generosInt.map(gen => {
                        return {id_genero: gen};
                    }),
                },
            }
        });
        const filme = await prisma.filme.create({
            data: {
                titulos_equivalentes: titulosEquivalentesArray,
                id_video: video.id_video,
                capa: this.req.file?this.req.file.firebaseUrl:null,
            }
        });
        this.filme = {...video, ...filme};
        await prisma.$disconnect();
    }

    async getFilmes() {
        const filmes = await prisma.filme.findMany();
        this.filme = await Promise.all(filmes.map(async film => {
            let video = await prisma.video.findUnique({where: {id_video: film.id_video}});
            return {...video, ...film};
        }));
        await prisma.$disconnect();
    }

    async getFilme(id) {
        const filme = await prisma.filme.findUnique({where: {id_filme: Number(id)}});
        if (!filme) {
            this.errors.push("Filme não encontrado");
            await prisma.$disconnect();
            return;
        }
        const video = await prisma.video.findUnique({where: {id_video: filme.id_video}});
        const video_tem = await prisma.video_tem.findMany({where: {id_video: video.id_video}});

        let generos = video_tem.length>0?await Promise.all(video_tem.map(async relation => {
            return await prisma.genero.findUnique({where: {id_genero: relation.id_genero}})
        })):[]
        this.filme = {...video,...filme,generos};
        await prisma.$disconnect();
    }

    async updateFilme(id) {
        let filme = await prisma.filme.findUnique({where: {id_filme: Number(id)}});
        
        if (!filme) {
            this.errors.push("Filme não encontrado");
            await prisma.$disconnect();
            return;
        }
        this.validate();
        if(this.errors.length>0) {
            await prisma.$disconnect();
            return;
        }

        await Filme.deleteCapa(filme.capa, this.req.bucket);

        const video_tem = await prisma.video_tem.findMany({where: {id_video: filme.id_video}});

        const {titulo, tempo, data_de_estreia, resumo, titulos_equivalentes, generos} = this.body;


        const [horas,minutos] = tempo.split(':');
        const tempoDate = new Date();
        let titulosEquivalentesArray = titulos_equivalentes?titulos_equivalentes.split(',').map(tit => tit.trim()):[];
        tempoDate.setUTCHours(Number(horas),Number(minutos));
        let generosInt = generos?generos.map(gen => Number(gen)):[];
        

        filme = await prisma.filme.update({
            where: {id_filme: filme.id_filme},
            data: {
                titulos_equivalentes: titulosEquivalentesArray,
                capa: this.req.file?this.req.file.firebaseUrl:null,
            }
        });
        const video = await prisma.video.update({
            where: {id_video: filme.id_video},
            data: {
                titulo: titulo,
                tempo: tempoDate,
                data_de_estreia: new Date(data_de_estreia),
                resumo: resumo,
                video_tem: {
                    delete: video_tem.map(vidGen => {
                        return {id_genero_id_video: {id_genero: vidGen.id_genero, id_video: vidGen.id_video}}
                    }),
                    create: generosInt.map(gen => {
                        return {id_genero: gen};
                    }),
                },
            }
        });
        
        this.filme = {...video, ...filme};
        await prisma.$disconnect();
    }

    async deleteFilme(id) {
        const filme = await prisma.filme.findUnique({where: {id_filme: Number(id)}});
        await Filme.deleteCapa(filme.capa, this.req.bucket);
        if (!filme) {
            this.errors.push("Filme não encontrado");
            await prisma.$disconnect();
            return;
        }
        await prisma.video.delete({where: {id_video: filme.id_video}});
        await prisma.$disconnect();
    }


    validate() {
        this.cleanUp();
        const {titulo, tempo, data_de_estreia,resumo} = this.body
        if(!titulo) this.errors.push('Título obrigatório');
        if(titulo.length > 45) this.errors.push('Título muito grande');
        const rgxTime = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
        if(!rgxTime.test(tempo)) this.errors.push('Tempo inválido');
        if(!Date.parse(data_de_estreia)) this.errors.push('Data Inválida');
        if(resumo.length > 300) this.errors.push('Resumo muito grande');
    }

    cleanUp() {
        this.body = {
            titulo: (typeof this.body.titulo === 'string')?this.body.titulo:'', 
            tempo: (typeof this.body.tempo === 'string')?this.body.tempo:'',
            data_de_estreia: (typeof this.body.data_de_estreia === 'string')?this.body.data_de_estreia:'', 
            resumo: (typeof this.body.resumo === 'string')?this.body.resumo:'', 
            titulos_equivalentes: (typeof this.body.titulos_equivalentes === 'string')?this.body.titulos_equivalentes:'',
            generos: (typeof this.body.generos === 'object')?this.body.generos:'',
            capa: this.body.capa,
        }
    }

    static async deleteCapa(fileName,bucket) {
        try {
            if(fileName && typeof fileName === "string" && bucket) {
                const capaSplited = fileName.split('/')
                const file = bucket.file(capaSplited[capaSplited.length - 1]);
                await file.delete();
            } 
        } catch(e) {console.log(e)};
        
    }

}

module.exports = Filme;
