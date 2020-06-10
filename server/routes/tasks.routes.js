const {Router} = require('express')
const Task = require('../models/Task')
const Calendar = require('../models/Calendar')
const router = Router()
// router.post('createNewTask', async(req,res)=>{
//         const todo = new Task({
//             name: req.body.name
//         })

//        await todo.save()
//        res.redirect("/")
// })
router.post('/createTask', async (req,res)=>{
    console.log("Enter Create Task---")
        try{
            console.log("Called post taks")
            console.log('nam----e', req.body);
                // const {name,date} = req.body;
                const calendarTask = req.body.name;
                const calendarDone = req.body.done; 
                
                const  task = new Task({
                    name: calendarTask,
                    done: calendarDone,
                })

                await task.save()
                res.send('Task crested')
        }

        catch(e){
             console.log('errrrror', e)
            res.status(500).json({message:e})
        }
})
router.get("/getAllTasks", async function (req,res){
    console.log("working getAllTasks")
    const todos = await Task.find({})
    
    console.log(todos)
        res.send(todos)
       
})

router.delete("/deleteTasks/:id", async function(req,res){
    const todosId = await Task.find({})
    Task.findByIdAndRemove({_id: req.params.id}).then(function(ninja){
        res.send(todosId)
        
    
})
})
router.put("/putTasks/:id", async function(req,res){
    Task.findByIdAndUpdate({_id:req.params.id}, req.body).then(function(){
    Task.findOne({_id: req.params.id}).then(function(server){
        res.send(server)
    })
    
    })
})
// router.post('/postCalendar', async (req,res)=>{
//     console.log("Enter Create Calendar---")
//         try{
//             console.log("Called post Calendar")
//             console.log('nam----e', req.body)
                
//                 const calendarObject = req.body.calendar;

//                 const  calendarTask = new Calendar({
//                     calendar: calendarObject
//                 })

//                 await calendarTask.save()
//                 res.send('Calendar created')
//         }

//         catch(e){
//              console.log('errrrror', e)
//             res.status(500).json({message:e})
//         }
// })
router.get("/getCalendar", async function (req,res){
    console.log("working calendar")
    const postCalendar = await Calendar.find({})
    console.log( postCalendar)
        res.send( postCalendar)
})
router.delete("/deleteCalendar/:id", async function(req,res){
    const CalendarId = await Calendar.find({})
    Calendar.findByIdAndRemove({_id: req.params.id}).then(function(ninja){
        res.send(CalendarId)
        
    
})
})

module.exports = router