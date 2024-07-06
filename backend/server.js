const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const cors = require("cors")
const routes = require("./routes/ToDoRoutes")

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req,res) => {
    res.send("Hi..");
})
mongoose
.connect(process.env.MONGO_URL)
.then(() => console.log("MongoDB connected..."))
.catch((err) => console.log(err))

app.use("/api", routes);

app.listen(PORT, () => 
console.log(`Listening at port ${PORT}`));