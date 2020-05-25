const  express = require('express')
const config = require('config')
const app = express()
const bodyParser = require('body-parser')
 const todoRoutes = require('./routes/tasks.routes')


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  app.use(bodyParser.json())
  // app.use(todoRoutes)
  // app.engine("view engine", "")
  app.use("/api",require('./routes/tasks.routes'))
  app.use(express.urlencoded({extended:true}))
const mongoose = require('mongoose')


const PORT = config.get('port') || 6000


async function start(){
    try{
           const resp =  await mongoose.connect(config.get('mongoUri'),{
                useNewUrlParser:true,
                useUnifiedTopology: true,
                useCreateIndex:true
            })
            // console.log('resp from db', resp)
    } catch (e){
        console.log('Server Error', e.message)
      //  process.exit( code, 1)
// router.post('createTask', async (req,res)=>{
// }
}
}

start()

app.listen(PORT,()=> console.log(`App has beem started on port ${PORT}...`))