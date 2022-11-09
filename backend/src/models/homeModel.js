const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

class Home {
    constructor(body){
        this.body = body;
        this.errors = [];
        this.user = null;
        this.student = null;
    }

    async createUser(){
        const {cpf, primeiro_nome, sobrenome, mat_estudante, mc} = this.body;

        this.user = await prisma.usuario.findUnique({where: { cpf }});
        this.student = await prisma.estudante.findUnique({where: { mat_estudante }});

        if (this.user || this.student) {
            this.errors.push("User already exists");
            return
        }

        this.user = await prisma.usuario.create({
            data: {
                cpf,
                primeiro_nome,
                sobrenome,
            }
        });

        this.student = await prisma.estudante.create({
            data: {
                mat_estudante,
                cpf: this.user.cpf,
                mc: Number(mc),
            }
        })
    }

    async findAllUsers(){
        this.user = await prisma.usuario.findMany()
    }

    async findUser(params) {
        const { user } = params
        this.user = await prisma.usuario.findUnique({where: {cpf: user}});

        if(!this.user) {
            this.errors.push('Não foi possível encontrar usuário com esse parametro')
        }
    }

    async updateUser(params) {
        const { user } = params
        const {nome, sobrenome} = this.body;
        this.user = await prisma.usuario.findUnique({where: {cpf: user}});

        if(!this.user) {
            this.errors.push('Não foi possível encontrar usuário com esse parametro');
            return
        }

        this.user = await prisma.usuario.update({
            where: {cpf: user},
            data: {nome, sobrenome}
        })
    }

    async deleteUser(params) {
        const { user } = params
        this.user = await prisma.usuario.findUnique({where: {cpf: user}});

        if(!this.user) {
            this.errors.push('Não foi possível encontrar usuário com esse parametro');
            return
        }

        await prisma.usuario.delete({where: {cpf: user}})
    }
}

module.exports = Home;