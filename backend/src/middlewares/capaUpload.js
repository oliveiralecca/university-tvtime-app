const path = require('path');

const os = require('os');
const fs = require('fs');

const Busboy = require('busboy');

const multer = require('multer');

const uploadCapa = multer({
    storage: multer.memoryStorage(), 
}).single('capa')


module.exports= (req,res,next) => {
    try {
        if (req.method !== 'POST') {
            // Return a "method not allowed" error
            return res.status(405).end();
        }
        console.log(req.headers)
        const busboy = Busboy({headers: req.headers});
        const tmpdir = os.tmpdir();
    
        // This object will accumulate all the fields, keyed by their name
        const fields = {};
    
        // This object will accumulate all the uploaded files, keyed by their name.
        const uploads = {};
    
        // This code will process each non-file field in the form.
        busboy.on('field', (fieldname, val) => {
        /**
         *  TODO(developer): Process submitted field values here
         */
        console.log(`Processed field ${fieldname}: ${val}.`);
        fields[fieldname] = val;
        });
    
        const fileWrites = [];
    
        // This code will process each file uploaded.
        busboy.on('file', (fieldname, file, {filename}) => {
            // Note: os.tmpdir() points to an in-memory file system on GCF
            // Thus, any files in it must fit in the instance's memory.
            console.log(`Processed file ${filename}`);
            const filepath = path.join(tmpdir, filename);
            uploads[fieldname] = filepath;
        
            const writeStream = fs.createWriteStream(filepath);
            file.pipe(writeStream);
        
            // File was processed by Busboy; wait for it to be written.
            // Note: GCF may not persist saved files across invocations.
            // Persistent files must be kept in other locations
            // (such as Cloud Storage buckets).
            const promise = new Promise((resolve, reject) => {
                file.on('end', () => {
                writeStream.end();
                });
                writeStream.on('finish', resolve);
                writeStream.on('error', reject);
            });
            fileWrites.push(promise);
        });
    
        // Triggered once all uploaded files are processed by Busboy.
        // We still need to wait for the disk writes (saves) to complete.
        busboy.on('finish', async () => {
        await Promise.all(fileWrites);
    
        /**
         * TODO(developer): Process saved files here
         */
        for (const file in uploads) {
            fs.unlinkSync(uploads[file]);
        }
        });
        
        busboy.end(req.rawBody);
        
    } catch(e) {
        console.log(e);
    }
    
    uploadCapa(req,res,function(err) {
        if(err) {
            console.log("erro",err);
            return res.status(400).send({errors: ["Falha no upload da imagem"]});
        }
        next();
    })
}
