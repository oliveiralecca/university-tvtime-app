const Filme = require('../models/filmeModel');

exports.index = async (req,res) => {
    try {  
        const generos = await Filme.getAllGeneros();
        res.json(generos);
    } catch(e) {
        console.log(e)
    }
}

exports.register = async(req,res) => {
    try {
        const filme = new Filme(req.body)
        await filme.createFilme();
        if (filme.errors.length > 0){
            return res.json({errors: filme.errors})
        }
        return res.json(filme.filme)
    } catch(e) {
        console.log(e)
        return res.json({errors: e})
    }
    
}

exports.list = async(req,res) => {
    try {
        const filme = new Filme(req.body);
    
        await filme.getFilmes();
        const generos = await Filme.getAllGeneros();
        res.json({filmes:filme.filme,generos});
    } catch(e) {
        console.log(e)
    }
}

exports.single = async(req,res) => {
    if (!req.params.id_filme) return res.json({errors: "Id não encontrado"})
    try {
        const filme = new Filme(req.body);
        await filme.getFilme(req.params.id_filme)
        if (filme.errors.length > 0){
            return res.json({errors: filme.errors});
        }
        res.json(filme.filme);
    } catch(e) {
        console.log(e)
        res.json({errors: "Rota inválida"});
    }
}

