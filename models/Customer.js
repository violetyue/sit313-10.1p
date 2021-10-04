const mongoose = require("mongoose")

const customerSchema = new mongoose.Schema(
    {
        taskType: String,
        taskTitle: String,
        taskDescription: String,
        suburb: String,
        date: String,
        budgetType: String,
        budget: String
    }
)

module.exports = mongoose.model("Customer", customerSchema)