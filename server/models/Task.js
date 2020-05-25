const {Schema,model,Types} =require('mongoose')

const schema = new Schema({
    name:
    {
    type:String, 
    required:true
},
    date:{
        type:String,
        required:true
    },
    links : [{
        type:Types.ObjectId, 
        ref:'Link'
    }]
})
module.exports = model( "Task",schema)