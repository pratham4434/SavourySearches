import React,{useState} from 'react'
import { Avatar } from '@mantine/core';
import { Textarea } from '@mantine/core';
import { Button } from '@mantine/core';
const Review = () => {
    const [comment,setComment]=useState("");

    const send=async()=>{
        // // const res=await axios.post(`/api/stalls/${id}/comments`,{
        // //     comment,username,email
        // });
        // console.log(res);
    }
  return (
    <>
      <div>
        <div class="w-11/12 border-2 rounded-lg p-3">
          <div class="flex flex-row justify-start ml-5">
            <div class="mt-5">
              <Avatar
                src="https://cdn2.iconfinder.com/data/icons/circle-avatars-1/128/008_girl_avatar_profile_woman_hat-512.png"
                alt="it's me"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row">
                <div class="m-2 font-bold">jyotiraditya</div>
                <p className="text-slate-300 m-2 text-sm">today 4:30pm</p>
              </div>
              <div className="m-4 ">hello</div>
            </div>
          </div>
        </div>

{/* comment */}
<div className='flex flex-row mt-5'>
 <Textarea
      placeholder="Your comment"
      label="Your comment"
      withAsterisk
      className='w-1/2 rounded-lg'
      value={comment}
      onChange={(e)=>setComment(e.target.value)}
      
    />
   <div className='mt-10 ml-5'>
   <svg onClick={send} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 mb-3 cursor-pointer">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
</svg>
   </div>


 
</div>
</div>
</>
  )
}

export default Review