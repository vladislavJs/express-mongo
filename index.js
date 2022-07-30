import express from 'express'
import mongoose from "mongoose";
import exphbs from 'express-handlebars'
import rout from './routes/todos.js'
import path from "path";

const app = express()
app.use(express.static(path.resolve('public')))
app.use(express.urlencoded({extended: true}))

console.log(path.resolve('public'))
app.use(rout)
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    },
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')

async function start() {
    try {
        await mongoose.connect('mongodb+srv://user:1234@cluster0.qq2ym.mongodb.net/?retryWrites=true&w=majority')
        app.listen(80, () => console.log('started'))
    } catch (e) {
        console.log(e)
    }
}

start()