const Genero = require('../models/generoModel');

exports.index = async (req,res) => {
    try {  
        const filmes = await Genero.getAllFilmes();
        res.json(filmes);
    } catch(e) {
        console.log(e);
        res.json({errors: "Erro na busca por genêros"})
    }
}

exports.register = async (req,res) => {
    try {
        const genero = new Genero(req);
        await genero.createGenero();
        res.json(genero.genero)
    } catch(e) {
        console.log(e);
        res.json({errors: "Erro na criação do gênero"})
    }
}

exports.list = async (req,res) => {
    try {
        const genero = new Genero(req);
        await genero.getGeneros();
        res.json(genero.genero)
    } catch(e) {
        console.log(e);
        res.json({errors: "Erro na busca por gêneros"})
    }
}

exports.single = async(req,res) => {
    if (!req.params.id_genero) return res.json({errors: "Id não encontrado"})
    try {
        const genero = new Genero(req);
        await genero.getGenero(req.params.id_genero);
        const filmes = await Genero.getAllFilmes();
        if (genero.errors.length > 0){
            return res.json({errors: genero.errors});
        }
        res.json(genero.genero);
    } catch(e) {
        console.log(e);
        res.json({errors: "Erro na busca por gênero"})
    }
}

exports.update = async(req,res) => {
    if (!req.params.id_genero) return res.json({errors: "Id não encontrado"})
    try {
        const genero = new Genero(req)
        await genero.updateGenero(req.params.id_genero);
        if (genero.errors.length > 0){
            req.file && await Genero.removeImage(req.file.filename);
            return res.json({errors: genero.errors})
        }
        return res.json(genero.genero)
    } catch(e) {
        req.file && await Genero.removeImage(req.file.filename);
        console.log(e)
        return res.json({errors: "Erro na edição de gênero"})
    }
    
}

exports.delete = async (req,res) => {
    if (!req.params.id_genero) return res.json({errors: "Id não encontrado"})
    try {
        const genero = new Genero(req)
        await genero.deleteGenero(req.params.id_genero);
        if (genero.errors.length > 0){
            return res.json({errors: genero.errors})
        }
        return res.json({success: "Gênero deletado com sucesso"})
    } catch(e) {
        console.log(e)
        return res.json({errors: e})
    }
}