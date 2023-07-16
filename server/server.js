import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db.js';
import colors from 'colors';
import cors from 'cors';
import apiRoutes from './routes/index.js'

const PORT = 8080

// config .env file
dotenv.config();

// database config
connectDB();

// rest object
const app = express();

// middlewares
app.use(express.json());
app.use(cors({
    origin: true,
    optionsSuccessStatus: 200,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: false
}))



// routes
app.use("/api", apiRoutes)

app.get("/", async (req, res) => {
    res.status(200).send("<h1> Welcome to online Compiler API </h1>  <h2> Please Enter a valid url from below: </h2> <h4> GET Languages : /api/v1/languages </h4> <h4> GET Language by ID : /api/v1/languages/:language_id </h4>")
})
app.get("*", async (req, res) => {
    res.status(200).send("<h1> Welcome to online Compiler API </h1>  <h2> Please Enter a valid url from below: </h2> <h4> GET Languages : /api/v1/languages </h4> <h4> GET Language by ID : /api/v1/languages/:language_id </h4>")
})



// listen server
app.listen(PORT, () => {
    console.log(`Server is Running on PORT : ${PORT}`.bgCyan.white)
})


