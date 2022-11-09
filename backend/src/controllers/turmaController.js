const Turma = require('../models/turmaModel');

exports.index = async (req,res) => {
    try {
        const turma = new Turma(req.body);
    
        res.locals.disciplinas = await turma.getDisciplinas();
        res.locals.estudantes = await turma.getEstudantes();
        res.render('createTurma');
    } catch(e) {
        console.log(e)
    }
}

exports.createTurma = async(req,res) => {
    try {
        const turma = new Turma(req.body)
        await turma.createTurma();
        if (turma.errors.length > 0){
            return res.json(turma.errors)
        }
        return res.json(turma.turma)
    } catch(e) {
        return res.json(e)
    }
    
}

exports.turmas = async(req,res) => {
    try {
        const turma = new Turma(req.body);
    
        res.locals.turmas = await turma.getTurmas();
        res.render('turmas');
    } catch(e) {
        console.log(e)
    }
}

exports.turma = async(req,res) => {
    try {
        const turma = new Turma(req.body, req.params);
        res.locals.estudantes = await turma.getTurma();
        res.locals.turma = turma.turma;
        res.render('turma');
    } catch(e) {
        console.log(e)
    }
}