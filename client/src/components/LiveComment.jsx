import React from 'react'

export default function LiveComment({name,message}) {
    // console.log(name)
  return (
    <div className="flex justify-start items-start m-3 gap-3 ">
    <div> <img
       alt="profile"
       src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
       width={30}
     /></div>

         <h3 className='text-[14px] font-semibold'>{name}</h3>
         <h3 className='text-[12px] text-start'>{message}</h3>
        

     </div>
  )
}
