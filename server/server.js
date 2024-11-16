import 'dotenv/config'
import express from 'express'
import cors from 'cors'

//App Config
const PORT = process.env.PORT || 4000
const app = express()

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