import express from 'express'
import imageProcessor from './api/imageProcessor'
const routes = express.Router()

routes.get('/', (req, res) => {
    res.send("Main route");
})

routes.use('/images', imageProcessor)

export default routes

