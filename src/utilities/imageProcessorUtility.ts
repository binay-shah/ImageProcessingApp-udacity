import sharp from 'sharp'
import {promises as fsPromises} from 'fs';


const resizeImage = async (filename: string, width: string, height: string): Promise<void> =>{
    try{
        const bool = await checkImageExists(`images/full/${filename}.jpg`)
        if(!bool){
            throw new Error('Input file is missing')
        }
        await sharp(`images/full/${filename}.jpg`)
      .resize(parseInt(width), parseInt(height))
      .toFormat('jpeg')      
      .toFile(`images/thumb/${filename}.jpg`); 
    }
    catch(error){
        throw Error(error)
    }
}


const checkImageExists = async (filepath: string): Promise<boolean> => {  
  try {
    await fsPromises.access(filepath)
    return true
  } catch {
    return false
  }
}


const readImage = async (filename: string) => {
    try{
        const imageData = await fsPromises.readFile(`images/thumb/${filename}.jpg`);   
        return imageData
    }catch(error){
        throw Error(error)
    }  
}

export  {resizeImage, readImage, checkImageExists}
