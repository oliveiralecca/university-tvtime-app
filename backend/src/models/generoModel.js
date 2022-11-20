const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

class Genero {
    constructor(req){
        this.req = req
        this.body = req.body;
        this.errors = [];
        this.genero = null;
    }

    async createGenero(){
        const {nome, filmes} = this.body;
        let filmesInt = filmes?filmes.map(film => Number(film)):[];
        this.genero = await prisma.genero.create({
            data: {
                nome,
                icone: this.req.file?this.req.file.firebaseUrl:null,
                video_tem: filmesInt.length > 0?{
                    create: filmesInt.map(film => {
                        return {id_video: film};
                    }),
                }:undefined,
            },
        });
        await prisma.$disconnect();
    }

    async getGeneros() {
        this.genero = await prisma.genero.findMany();
    }

    async getGenero(id){
        const genero = await prisma.genero.findUnique({where: {id_genero: Number(id)}});
        if (!genero) {
            this.errors.push("Filme não encontrado");
            await prisma.$disconnect();
            return;
        }
        const video_tem = await prisma.video_tem.findMany({where: {id_genero: genero.id_genero}});
        let filmes = await Promise.all(video_tem.map(async gen => {
            const video = await prisma.video.findUnique({where: {id_video: gen.id_video}});
            const filme = await prisma.filme.findUnique({where: {id_video: video.id_video}});
            return {...video,...filme};
        }));
        this.genero = {...genero,filmes};
        await prisma.$disconnect();
    }

    async updateGenero(id){
        const genero = await prisma.genero.findUnique({where: {id_genero: Number(id)}});
        if (!genero) {
            this.errors.push("Filme não encontrado");
            await prisma.$disconnect();
            return
        }
        this.req.file && await Genero.deleteIcone(genero.icone, this.req.bucket);
        const {nome, filmes} = this.body;
        let filmesInt = filmes?filmes.map(film => Number(film)):[];

        this.genero = await prisma.genero.update({
            where: {id_genero: genero.id_genero},
            data: {
                nome,
                icone: this.req.file?this.req.file.firebaseUrl:genero.icone,
                video_tem: filmesInt.length > 0?{
                    create: filmesInt.map(film => {
                        return {id_video: film};
                    }),
                }:undefined,
            },
        });
        await prisma.$disconnect();
    }

    async deleteGenero(id) {
        const genero = await prisma.genero.findUnique({where: {id_genero: Number(id)}});
        await Genero.deleteIcone(genero.icone, this.req.bucket);
        if (!genero) {
            this.errors.push("Genero não encontrado");
            await prisma.$disconnect();
            return;
        }
        await prisma.genero.delete({where: {id_genero: genero.id_genero}});
        await prisma.$disconnect();
    }

    static async deleteIcone(fileName,bucket) {
        try {
            if(fileName && typeof fileName === "string" && bucket) {
                const iconeSplited = fileName.split('/')
                const file = bucket.file(iconeSplited[iconeSplited.length - 1]);
                await file.delete();
            } 
        } catch(e) {console.log(e)};
        
    }

}

module.exports = Genero;