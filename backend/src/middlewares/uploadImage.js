
var admin = require("firebase-admin");

var serviceAccount = require("../../firebase-key.json");


const BUCKET = "tvtimeapi.appspot.com";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: BUCKET,
});


const bucket = admin.storage().bucket();

const uploadImage = (req,res,next) => {
    
    req.bucket = bucket;
    if(!req.file || (req.method !== "PUT" && req.method !== "POST") ) return next();
    


    const imagem = req.file;
    const imagemParts = imagem.originalname.split('.');
    const nomeArquivo = Date.now() + "_" + imagemParts[0] + '.' + imagemParts[imagemParts.length - 1];

    const file = bucket.file(nomeArquivo);

    const stream = file.createWriteStream({
        metadata: {
            contentType: imagem.mimetype,
        },
    });

    stream.on("error", (e) => {
        console.error(e);
    })

    stream.on("finish", async () => {
        await file.makePublic();

        req.file.firebaseUrl = `https://storage.googleapis.com/${BUCKET}/${nomeArquivo}`;

        next();
    });

    stream.end(imagem.buffer);
};

module.exports = uploadImage;
