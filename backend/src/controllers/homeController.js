const Home = require('../models/homeModel')

exports.index = (req,res) => {
    res.render('index');
}

exports.userRegister = async (req, res) => {
    try {
        const home = new Home(req.body);
        await home.createUser();

        if (home.errors.length > 0) {
            return res.json(home.errors);
        }
        console.log(home.user)
        return res.json([home.user,home.student]);
    } catch(e) {
        console.log(e);
        return res.json(e);
    }
}

exports.userList = async(req,res) =>{
    try {
        const home = new Home(req.body);
        await home.findAllUsers();
        return res.json(home.user);
    } catch(e) {
        console.log(e)
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