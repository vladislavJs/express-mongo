import {Router} from "express";
import TodoController from "../controllers/TodoController.js";

const router = new Router()

router.get('/',  TodoController.get)

router.get('/create', TodoController.create)
router.post('/create', TodoController.store)
router.post('/complete', TodoController.complete)

export default router