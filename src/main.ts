import express from 'express'
import { PORT } from "./utils/env-util"


const app = express()

app.use(express.json())

app.listen(PORT || 3000, ()=>{
    console.log(`Server is running on port ${PORT || 3000}`)
})