const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

class Filme {
    constructor(body, params){
        this.body = body;
        this.params = params;
        this.errors = [];
        this.filme = null;
    }
    async getDisciplinas() {
        const disciplinas = await prisma.disciplina.findMany();
        return disciplinas;
    } 
    async getEstudantes() {
        const estudantes = await prisma.estudante.findMany();
        let userEstudantes = await Promise.all(estudantes.map(async est => {
            let user = await prisma.usuario.findUnique({where: {cpf: est.cpf}})
            return {...est, ...user}
        }));
        return userEstudantes
    }

    async createFilme() {
        const {titulo, tempo, data_de_estreia, resumo, titulos_equivalentes} = this.body

        const [horas,minutos] = tempo.split(':');
        const tempoDate = new Date();
        tempoDate.setUTCHours(Number(horas),Number(minutos));
        const video = await prisma.video.create({
            data: {
                titulo: titulo,
                tempo: tempoDate,
                data_de_estreia: new Date(data_de_estreia),
                resumo: resumo,
            }
        });
        const filme = await prisma.filme.create({
            data: {
                titulos_equivalentes: titulos_equivalentes,
                id_video: video.id_video,
            }
        });
        this.filme = {...video, ...filme};
    }

    async getTurmas() {
        return await prisma.turma.findMany()
    }

    async getTurma() {
        const { id_turma } = this.params
        this.turma = await prisma.turma.findUnique({where: {id_turma: Number(id_turma)}});
        if (!this.turma) {
            this.errors.push("Turma não existe");
            return;
        }
        const cursa = await prisma.cursa.findMany({where: {id_turma: this.turma.id_turma}})

        let userStudents = await Promise.all(cursa.map(async cursa => {
            const estudante = await prisma.estudante.findUnique({where: {mat_estudante: cursa.mat_estudante}});
            const user = await prisma.usuario.findUnique({where: {cpf: estudante.cpf}});
            return {...user, ...estudante};
        }));
        return userStudents
    }
}

module.exports = Filme;
