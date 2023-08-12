const mongoose=require("mongoose");
const Schema=mongoose.Schema

const userSchema=new Schema({
    _id: {
        type: String,
      },
      email: {
        type: String,
      },
      profileImg: {
        type: String,
      },
  
      followers: [],
      following: [],
    },
    {
      timestamps: true,
    })
module.exports=mongoose.model("User",userSchema);
