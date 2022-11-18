const multer = require('multer');

const uploadCapa = multer({
    storage: multer.memoryStorage(), 
}).single('capa')


module.exports= (req,res,next) => {
    uploadCapa(req,res,function(err) {
        if(err) {
            console.log("erro",err);
            return res.status(400).send({errors: ['Falha ao buscar por campo file "icone"']});
        }
        next();
    })
}
