const {Schema,model,Types} =require('mongoose')

const schema = new Schema({
    name:{
        type:String, 
        required:true
},

    done:{
        type:Number,
        required:true
    },
   
    links : [{
        type:Types.ObjectId, 
        ref:'Link'
    }]
})
module.exports = model( "Task",schema)