const postReel=require("../lib/db/models/reelModel");
const asyncHandler=require("express-async-handler");

const createReel=asyncHandler(async(req,res)=>{
    try{
        await postReel.create(req.body);
        res.status(200).json("posted successfully");
    }catch(error){
        res.status(500).json({message:error})
    }
})

const getAllReel=asyncHandler(async(req,res)=>{
    try{
        const get=await postReel.find({})
        if(get){
            res.status(200).json(get);
        }
    }catch(error){
        res.status(500).json({message:error})
    }
})

const likeReel=asyncHandler(async(req,res)=>{
    const id = req.params.id;
    const { userId } = req.body;
    try {
      const post = await postReel.findById(id);
      if (post.like.includes(userId)) {
        await post.updateOne({ $pull: { like: userId } });
        res.status(200).json("Post disliked");
      } else {
        await post.updateOne({ $push: { like: userId } });
        res.status(200).json("Post liked");
      }
    } catch (error) {
      res.status(500).json(error);
    }
})
module.exports={
    createReel,
    likeReel,getAllReel
}