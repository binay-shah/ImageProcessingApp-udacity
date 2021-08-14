# Image Processing API
---------------

API that can be used in two different ways. As a simple placeholder API, the first allows you to place images into your frontend with the size set via URL parameters (and additional stylization if you choose) for rapid prototyping. The second use case is as a library to serve properly scaled versions of your images to the front end to reduce page load size. Rather than needing to resize and upload multiple copies of the same image to be used throughout your site, the API you create will handle resizing and serving stored images for you.


## Instructions

1. Clone the repo https://github.com/binay-shah/ImageProcessingApp-udacity.git
2. cd ImageProcessingApp-udacity
3. npm install
4. npm run start
5. run test with npm run test
6. open the browser with endpoint localhost:3000/api/
7. open the browser with endpoint localhost:3000/api/images?filename=fjord&width=200&height=200