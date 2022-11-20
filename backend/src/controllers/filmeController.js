const Filme = require('../models/filmeModel');

// Controller de criação de novo filme
exports.register = async(req,res) => {
    try {
        // Tratamento dos gêneros para quando eles não são enviados como array (caso de uso da biblietaca axios no frontend)
        if (!req.body.generos) {
            const generos = [];
            for (let i=0; i<11; i++) {
                req.body[`generos.${i}`] && generos.push(req.body[`generos.${i}`])
            }
            req.body.generos = generos;
        }
        // Instanciação do model filme
        const filme = new Filme(req);
        // Criação de um novo filme
        await filme.createFilme();
        // Retorno de possiveis erros de validação. Imagem cadastrada é deletada caso ocorram erros
        if (filme.errors.length > 0){
            req.file && await Filme.deleteCapa(req.file.firebaseUrl, req.bucket);
            return res.status(400).send({errors: filme.errors})
        }
        // Caso não ocorram erros, retorna um json com o filme cadastrado
        return res.json(filme.filme)
    } catch(e) {
        req.file && await Filme.deleteCapa(req.file.firebaseUrl, req.bucket);
        console.log(e)
        return res.status(400).send({errors: [e]})
    }
    
}

// Controller de busca por todos os filmes
exports.list = async(req,res) => {
    try {
        const filme = new Filme(req);
    
        await filme.getFilmes();
        const generos = await Filme.getAllGeneros();
        // Retorna todos os filmes e todos os gêneros, já que os mesmos são exibidos na página dos filmes
        res.json({filmes:filme.filme,generos});
    } catch(e) {
        console.log(e)
    }
}

// Controller de busca por um filme específico
exports.single = async(req,res) => {
    if (!req.params.id_filme) return res.status(400).send({errors: ["Id não encontrado"]});
    try {
        const filme = new Filme(req);
        await filme.getFilme(req.params.id_filme);
        if (filme.errors.length > 0){
            return res.status(400).send({errors: filme.errors});
        }
        res.json(filme.filme);
    } catch(e) {
        console.log(e)
        res.status(400).send({errors: ["Rota inválida"]});
    }
}

// Controller de atualização de um filme existente
exports.update = async(req,res) => {
    if (!req.params.id_filme) {
        req.file && await Filme.deleteCapa(req.file.firebaseUrl, req.bucket);
        return res.status(400).send({errors: ["Id não encontrado"]})
    }
    try {
        if (!req.body.generos) {
            const generos = [];
            for (let i=0; i<11; i++) {
                req.body[`generos.${i}`] && generos.push(req.body[`generos.${i}`])
            }
            req.body.generos = generos;
        }
        const filme = new Filme(req)
        await filme.updateFilme(req.params.id_filme);
        if (filme.errors.length > 0){
            req.file && await Filme.deleteCapa(req.file.firebaseUrl, req.bucket);
            return res.status(400).send({errors: filme.errors})
        }
        return res.json(filme.filme)
    } catch(e) {
        req.file && await Filme.deleteCapa(req.file.firebaseUrl, req.bucket);
        console.log(e)
        return res.status(400).send({errors: [e]})
    }
    
}

// Controller de deleção de um filme
exports.delete = async (req,res) => {
    if (!req.params.id_filme) return res.json({errors: ["Id não encontrado"]})
    try {
        const filme = new Filme(req)
        await filme.deleteFilme(req.params.id_filme);
        if (filme.errors.length > 0){
            return res.json({errors: filme.errors})
        }
        return res.json({success: "Filme deletado com sucesso"})
    } catch(e) {
        console.log(e)
        return res.json({errors: [e]})
    }
}

