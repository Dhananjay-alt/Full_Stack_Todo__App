const express = require("express");
const {createTodo , updateTodo} = require("./types")
const {todo} = require("./db");
const app = express();
const cors = require("cors");

app.use(cors({}));
app.use(express.json());

app.post("/todo", async function(req, res) {
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload)
    if(!parsePayload.success){
        res.status(411).json({
            msg:"You sent the wrong inputs"
        })
        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg:"Todo created"
    })

})

app.get("/todos" , async function(req, res) {
    const todos = await todo.find({});
    res.json({
        todos
    })
})

app.put("/completed" , async function(req, res) {
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload)
    if(!parsePayload.success){
        res.status(411).json({
            msg:"You sent the wrong inputs"
        })
        return;
    }
    await todo.findByIdAndUpdate({
        _id: req.body._id
    }, {
        completed: true
    })
    res.json({
        msg:"Todo marked completed"
    })
})

app.listen(3000);


