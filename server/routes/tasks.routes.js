const {Router} = require('express')
const Task = require('../models/Task')
const router = Router()
// router.post('createNewTask', async(req,res)=>{
//         const todo = new Task({
//             name: req.body.name
//         })

//        await todo.save()
//        res.redirect("/")
// })
router.post('createTask', async (req,res)=>{
        try{
            console.log("Called post taks")
            console.log('nam----e', req.body);
                // const {name,date} = req.body;
                const calendarTask = req.body.name;
                const calendarDate = req.body.date;
                const calendarBool = req.body.calendarBool

                const  task = new Task({
                    name: calendarTask,
                    date: calendarDate,
                    done: calendarBool,
                })

                await task.save()
                res.send('Task crested')
        }

        catch(e){
            // console.log('errrrror', e)
            res.status(500).json({message:e})
        }
})
router.get("/getAllTasks",async function (req,res){
    console.log("working getAllTasks")
    const todos = await Task.find({})
    console.log(todos)
        res.send(todos)
})


module.exports = router