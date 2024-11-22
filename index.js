const express = require('express');
const connectDB = require('./DB/Config')
const cors = require('cors');
const dotenv = require('dotenv')
const Userrouter  =require('./Routes/User')

dotenv.config();

const app = express();

// Enable CORS for all origins
app.use(cors());

//body parser
app.use(express.json());
app.use('/api', Userrouter);


// Basic route (you can keep it as-is for testing purposes)
app.get("/", (req, res) => {
    res.send("Hi from Vinay");
});

connectDB();

app.listen(process.env.PORT , () => console.log("servre is running"))

