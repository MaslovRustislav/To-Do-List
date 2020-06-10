const {Schema,model,Types} =require('mongoose')

const schema = new Schema({

    calendar:{
        type:Array,
        required:true
    },

   
   
    
    links : [{
        type:Types.ObjectId, 
        ref:'Link'
    }]
})
module.exports = model( "Calendar",schema)