import {resizeImage} from '../utilities/imageProcessorUtility'
it("expects resizeImage function to be rejected with error", async () => {
    try{
        await resizeImage('xxx', '200', '200')
    }catch(error){
        expect(error).toBeInstanceOf(Error)
    }
  
});