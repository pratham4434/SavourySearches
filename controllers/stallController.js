const asyncHandler=require("express-async-handler");
const postStall=require("../lib/db/models/stallModel");
const stallModel = require("../lib/db/models/stallModel");

const createStall=asyncHandler(async(req,res)=>{
    try{
        await postStall.create(req.body);
        res.status(200).json("stall created successfully");
    }catch(error){
        res.status(500).json("something is missing");
    }
})

const getStall=asyncHandler(async(req,res)=>{
    try{
        const get=await postStall.find({})
        if(get){
            res.status(200).json(get);
        }
    }catch(error){
        res.status(500).json("something went wrong");
    }
})

const updateStall=asyncHandler(async(req,res)=>{
    const id=req.params.id
    const {email,...otherDetails}=req.body
    try{
        const post=await postStall.findById(id)
        if(post.postedBy==email){
            await post.updateOne({$set:otherDetails});
            res.status(200).json("posted updated!!");
        }else{
            res.status(403).json("you are not the correct user for modify");
        }
    }catch(error){
        res.status(500).json("something is missing");
    }
})

const getStallById=asyncHandler(async(req,res)=>{
    const id=req.params.id;
    try{
        const stall=await postStall.findById(id);
        if(stall){
            res.status(200).json(stall);
        }
    }catch(error){
        res.status(500).json(error);
    }
})

const addCommentOnStall=asyncHandler(async(req,res)=>{
    const stallid=req.params.id
    const { comment, username, email }=req.body
    try{
        const stall=await postStall.findById(stallid);
        if(stall){
            stall.comments.push({
                comment: comment,
                username: username,
                email: email,
            });

            const stallBoost=await stall.save();
            if(stallBoost){
                const stally=await postStall.findById(stallid)

                if(stally){
                    res.status(200).json(stally);
                }
            }
        }else{
            res.status(403).json("stall doesnot exists");
        }
    }catch(error){
        res.status(500).json("something went wrong while adding comment");
        console.log(error);
    }
})
const addReportToStall=asyncHandler(async(req,res)=>{
    const id=req.params.id;
    const {report}=req.body;

    try{

    const stall = await postStall.findById(id);
    if (stall) {
        stall.reports.push({
          report:report,
          stallid:id
        });
        await stall.save();
        res.status(200).json({report:stall.reports})
      }
    } catch (error) {
      res.status(500).json("error is occured while reporting!!!")
    }
})
const addStar = asyncHandler(async (req, res) => {
    const stallId = req.params.id;
    const { rating,email } = req.body;
    
    try {
      const stall = await postStall.findById(stallId);
      if (stall) {
        const ratings = stall.ratings || [];
        const ratingBy=stall.ratingBy || [];
  
        if(!ratingBy.includes(email)){
            ratings.push(rating);
            ratingBy.push(email);

            const a=stall.ratings.reduce(add,0);
            function add(accumulator,a){
                return accumulator+a
            }

            // function findIndexByKey(ratingBy,key){
            //     return array.reduce((accumulator,cV,index)=>{
            //         if(cV===key){
            //             return index;
            //         }
            //     })
            // }

            // const index=findIndexByKey(ratingBy,email)
            console.log(a);
            console.log(stall.ratings.length)
            let c=a/stall.ratings.length;
    
            await stall.updateOne({ ratings });
            await stall.updateOne({ ratingBy });
    
            res.status(200).json(c);
        }else{
            res.status(404).json("this user already rate the stall");
        }
      } else {
        res.status(403).json('Stall does not exist');
      }
    } catch (error) {
      res.status(500).json('Something went wrong while adding rating');
      console.error(error);
    }
});

module.exports={
    createStall,
    getStall,
    updateStall,
    addCommentOnStall,
    getStallById,addStar,
    addReportToStall
}