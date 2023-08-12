const mongoose=require('mongoose');
const Schema=mongoose.Schema

const reelSchema=new Schema({
    video:{
        type:String,
    },
    caption:{
        type:String
    },
    location:{
        type:String,
    },
    like:[]
},{
    timestamps:true
})

module.exports=mongoose.model("Reel",reelSchema);