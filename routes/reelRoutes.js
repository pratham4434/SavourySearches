const express=require("express");
const {createReel,likeReel,getAllReel}=require("../Controllers/postreelController");

const router=express.Router();

router.route('/')
.post(createReel)
.get(getAllReel)

router.route('/:id/like')
.put(likeReel)

module.exports=router;