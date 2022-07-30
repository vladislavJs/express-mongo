import Todo from "../models/Todo.js";

class TodoController {
    async get(req, res) {
        const todos = await Todo.find({})
        res.render('index', {
            title: 'Todos list',
            isIndex: true,
            todos
        })
    }

    async create(req, res) {
        res.render('create', {
            title: 'Create todo',
            isCreate: true
        })
    }

    async store(req, res) {
        const todo = new Todo({
            title: req.body.title
        })

        await todo.save()
        res.redirect('/')
    }

    async complete(req, res) {
        await Todo.findByIdAndUpdate(req.body.id, {completed: !!req.body.completed}, {new: true})

        res.redirect('/')

    }
}

export default new TodoController()