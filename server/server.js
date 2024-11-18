import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from "./configs/mongodb.js";

//App Config
const PORT = process.env.PORT || 4000
const app = express()
await connectDB()

// ??INit Middleware
app.use(express.json())
app.use(cors())

//Api route
app.get('/', (req, res) => {
    res.send("API WORKING")
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})