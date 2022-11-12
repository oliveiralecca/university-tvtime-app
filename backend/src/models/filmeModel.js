const { PrismaClient } = require('@prisma/client'),
    fs = require('fs'),
    path = require('path'),
    prisma = new PrismaClient();

class Filme {
    constructor(req){
        this.req = req
        this.body = req.body;
        this.errors = [];
        this.filme = null;
    }
    static async getAllGeneros() {
        const generos = await prisma.genero.findMany();
        return generos;
    } 

    async createFilme() {
        this.validate();

        if(this.errors.length > 0) return;

        const {titulo, tempo, data_de_estreia, resumo, titulos_equivalentes, capa, generos} = this.body

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
                capa: this.req.file?'/assets/images/capas/' + this.req.file.filename:null,
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
        this.validate();
        if(this.errors.length>0) return;


        const {titulo, tempo, data_de_estreia, resumo, titulos_equivalentes, generos} = this.body



        const [horas,minutos] = tempo.split(':');
        const tempoDate = new Date();
        let titulosEquivalentesArray = titulos_equivalentes?titulos_equivalentes.split(',').map(tit => tit.trim()):undefined;
        tempoDate.setUTCHours(Number(horas),Number(minutos));
        let generosInt = generos?generos.map(gen => Number(gen)):[];
  
        await Filme.removeImage(filme.capa);

        filme = await prisma.filme.update({
            where: {id_filme: filme.id_filme},
            data: {
                titulos_equivalentes: titulosEquivalentesArray,
                capa: this.req.file?'/assets/images/capas/' + this.req.file.filename:null,
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
            generos: (typeof this.body.generos === 'object')?this.body.generos:''}
    }

    static async removeImage(file) {      
        if (file) {
            const filmeFile = ((file).split('/'));
            const capaPath = path.resolve('public', 'assets', 'images', 'capas', filmeFile[filmeFile.length - 1]);
            if(fs.existsSync(capaPath)) await fs.promises.unlink(capaPath);
        }
    }

}

module.exports = Filme;
