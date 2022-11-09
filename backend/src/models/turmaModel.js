const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

class Turma {
    constructor(body, params){
        this.body = body;
        this.params = params;
        this.errors = [];
        this.turma = null;
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

    async createTurma() {
        const {id_turma, turma, ano, semestre, cod_disc, estudantes} = this.body
        this.turma = await prisma.turma.findUnique({where: {id_turma: Number(id_turma)}});
        if (this.turma) {
            this.errors.push("Turma já existente");
            return;
        }

        this.turma = await prisma.turma.create({
            data: {
                id_turma: Number(id_turma),
                turma: Number(turma),
                ano: Number(ano),
                semestre: Number(semestre),
                cod_disc,
                cursa: {
                    create: estudantes.map(est => {
                        return {mat_estudante: est}
                    }),
                },
            }
        })
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

module.exports = Turma
