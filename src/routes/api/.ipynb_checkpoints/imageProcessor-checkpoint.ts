import express from 'express'
import { readImage, resizeImage, checkImageExists } from '../../utilities/imageProcessorUtility'
const imageProcessor = express.Router()

imageProcessor.get('/', async (req, res) => {
    let filename : (undefined | string) = (req.query.filename as (undefined | string))
    let width : (undefined | string)  = (req.query.width as (undefined | string))
    let height : (undefined | string) = (req.query.height as (undefined | string))
    
    if(filename === undefined ) {
        res.writeHead(200, {'Content-Type': 'text/plain' });  
        res.end(`Filename is required`);
    }
    
   
    

    
    checkImageExists(`images/thumb/${filename}.jpg`).then(async bool => {
        if(bool){
            readImage(filename as string).then(data => {        
                 res.writeHead(200, {'Content-Type': 'image/jpg' });
                 res.end(data, 'binary');
            })
        }
        else{
            try{
              await resizeImage(filename as string, width as string, height as string) 
                readImage(filename as string).then(data => {        
                 res.writeHead(200, {'Content-Type': 'image/jpg' });
                 res.end(data, 'binary');
            })
            }
            catch(error){
                 res.writeHead(200, {'Content-Type': 'text/plain' });  
                 res.end(`There was problem processing the file. ${error.message}`)
                 
            }
                       
        }
         
    })
   
})

export default imageProcessor