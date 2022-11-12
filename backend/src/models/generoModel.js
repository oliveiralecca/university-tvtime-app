const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

class Genero {
    constructor(body){
        this.body = body;
        this.errors = [];
        this.genero = null;
    }

    static async getAllFilmes(){
        const filmes = await prisma.filme.findMany();
        let filmesVideos = await Promise.all(filmes.map(async filme => {
            const video = await prisma.video.findUnique({where: {id_video: filme.id_video}})
            return {...video, ...filme};
        }))
        return filmesVideos;
    }

    async createGenero(){
        const {nome, filmes, icone} = this.body;
        let filmesInt = filmes?filmes.map(film => Number(film)):[]
        this.genero = await prisma.genero.create({
            data: {
                nome,
                icone: icone?icone:undefined,
                video_tem: filmesInt.length > 0?{
                    create: filmesInt.map(film => {
                        return {id_video: film}
                    }),
                }:undefined,
            },
        })
    }

    async getGeneros() {
        this.genero = await prisma.genero.findMany();
    }

    async getGenero(id){
        const genero = await prisma.genero.findUnique({where: {id_genero: Number(id)}});
        if (!genero) {
            this.errors.push("Filme não encontrado");
            return
        }
        const video_tem = await prisma.video_tem.findMany({where: {id_genero: genero.id_genero}});
        let filmes = await Promise.all(video_tem.map(async gen => {
            const video = await prisma.video.findUnique({where: {id_video: gen.id_video}});
            const filme = await prisma.filme.findUnique({where: {id_video: video.id_video}});
            return {...video,...filme};
        }));
        this.genero = {...genero,filmes}
    }

    async updateGenero(id){
        const genero = await prisma.genero.findUnique({where: {id_genero: Number(id)}});
        if (!genero) {
            this.errors.push("Filme não encontrado");
            return
        }
        const {nome, filmes,icone} = this.body;
        let filmesInt = filmes?filmes.map(film => Number(film)):[]
        this.genero = await prisma.genero.update({
            where: {id_genero: genero.id_genero},
            data: {
                nome,
                icone: icone?icone:undefined,
                video_tem: filmesInt.length > 0?{
                    create: filmesInt.map(film => {
                        return {id_video: film}
                    }),
                }:undefined,
            },
        })
    }

    async deleteGenero(id) {
        const genero = await prisma.genero.findUnique({where: {id_genero: Number(id)}});
        if (!genero) {
            this.errors.push("Genero não encontrado");
            return;
        }
        await prisma.genero.delete({where: {id_genero: genero.id_genero}});
    }

}

module.exports = Genero;