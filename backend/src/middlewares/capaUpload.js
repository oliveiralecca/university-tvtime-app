const multer = require('multer');
const uploadCapa = multer({
    storage: multer.diskStorage(
        {
            destination: function (req, file, cb) {
                cb(null, 'public/assets/images/capas/');
            },
            filename: function (req, file, cb) {
                cb(
                    null,
                    new Date().valueOf() + 
                    '_' +
                    file.originalname
                );
            }, 
        }
    ), 
    
}).single('capa')


module.exports= (req,res,next) => {
    uploadCapa(req,res,function(err) {
        if(err) {
            console.log(err);
            return res.status(400).send({errors: ["Falha no upload da imagem"]});
        }
        next();
    })
}
