const express = require("express")
const bodyParser = require("body-parser")
const https = require("https")
const mongoose = require("mongoose")
const cors = require("cors")
const Customer = require("./models/Customer")

const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use(bodyParser.json())

mongoose.connect("mongodb://localhost:27017/customerDB", {useNewUrlParser: true, useUnifiedTopology: true})

app.post('/', (req,res)=>{
    const customer = new Customer({
      taskType: req.body.taskType,
      taskTitle: req.body.taskTitle,
      taskDescription: req.body.taskDescription,
      suburb: req.body.suburb,
      date: req.body.date,
      budgetType: req.body.budgetType,
      budget: req.body.budget
    });
    customer.save()
    .catch((err)=>console.log(err));
    res.json(('save to databse: ' + customer));
})

let port = process.env.PORT;
if (port == null || port == "") {
    port = 5000;
}

app.listen(port, (req,res)=>{
    console.log("Server is running successfully!")
})