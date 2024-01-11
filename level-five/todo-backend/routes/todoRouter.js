const express = require("express")
const todoRouter = express.Router()
const {v4: uuidv4} = require("uuid")

const todos = [
    { name: "wear a watch", completed: false, _id: uuidv4() },
    { name: "charge phone", completed: false, _id: uuidv4() },
    { name: "buy a wiggly doll", completed: true, _id: uuidv4() },
    { name: "prevent WWIII", completed: false, _id: uuidv4() },
    { name: "waitch a movie", completed: true, _id: uuidv4() },
]

// Get All
todoRouter.get("/", (req, res) => {
    res.send(todos)
})

// Get One
todoRouter.get("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const foundTodo = todos.find(todo => todo._id === todoId)
    res.send(foundTodo)
})

// Post One
todoRouter.post("/", (req, res) => {
    const newTodo = req.body
    newTodo._id = uuidv4()
    todos.push(newTodo)
    res.send(`successfully added ${newTodo.name} to the todo list`)
})

// Delete One
todoRouter.delete("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    todos.splice(todoIndex, 1)
    res.send("Successfully deleted todo.")
})

// Update One
todoRouter.put("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const updateObject = req.body
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    const updatedTodo = Object.assign(todos[todoIndex], updateObject)
    res.send(updatedTodo)
})

module.exports = todoRouter