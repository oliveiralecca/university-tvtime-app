const Home = require('../models/homeModel')

exports.index = async(req,res) => {
    try {
        const home = new Home(req.body);
        await home.findAllFilmes();
        return res.json(home.filmes);
    } catch(e) {
        console.log(e)
    }
}

exports.userList = async(req,res) =>{
    try {
        const home = new Home(req.body);
        await home.findAllUsers();
        return res.json(home.user);
    } catch(e) {
        console.log(e);
        return res.json(e)
    }
}

exports.findUser = async(req,res) => {
    console.log(req.params)
    try {
        const home = new Home(req.body);
        await home.findUser(req.params);
        if (home.errors.length > 0) {
            return res.json(home.errors);
        }
        return res.json(home.user)
    } catch(e) {
        console.log(e)
    }
}

exports.udateUser = async(req,res) => {
    try {
        const home = new Home(req.body);
        await home.updateUser(req.params);
        if (home.errors.length > 0) {
            return res.json(home.errors);
        }
        return res.json(home.user)
    } catch(e) {
        console.log(e)
    }
}

exports.deleteUser = async(req,res) => {
    try {
        const home = new Home(req.body);
        await home.updateUser(req.params);
        if (home.errors.length > 0) {
            return res.json(home.errors);
        }
        return res.json({message: "Usuário deletado"})
    } catch(e) {
        console.log(e)
    }
}