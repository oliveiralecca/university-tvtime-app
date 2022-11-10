const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();

class Home {
    constructor(body){
        this.body = body;
        this.errors = [];
        this.filme = null;
        this.video
    }

    async findAllFilmes(){
        this.filmes = await prisma.filme.findMany();
        let videoFilmes = await Promise.all(estudantes.map(async est => {
            let user = await prisma.usuario.findUnique({where: {cpf: est.cpf}})
            return {...est, ...user}
        }));
        return userEstudantes
    }

}

module.exports = Home;