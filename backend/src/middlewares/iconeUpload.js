const multer = require('multer');
const uploadIcone = multer({
    storage: multer.diskStorage(
        {
            destination: function (req, file, cb) {
                cb(null, 'public/assets/images/icones/');
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
    
}).single('icone')


module.exports= (req,res,next) => {
    uploadIcone(req,res,function(err) {
        if(err) {
            console.log(err);
            return res.status(400).send({errors: ["Falha no upload da imagem"]});
        }
        next();
    })
}
