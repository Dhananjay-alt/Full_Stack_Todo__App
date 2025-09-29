const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://coderxdhananjay07:bd6g8IO5pMOGRhFz@cluster0.vllvuky.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,

})

const todo = mongoose.model('todos' , todoSchema);

module.exports = {
    todo
}
