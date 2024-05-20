import React from 'react'
import { useLocation } from 'react-router-dom'


export default function Button({lists}) {

  let location = useLocation();
  console.log(location)
  return (
    <div className='flex justify-start items-start gap-3'>
        {lists.length > 0 ? 
        lists.map((v,i)=>{
            return(
                <div key={i}>
                    <div className='bg-gray-100 px-[8px]  py-[5px] rounded'>{v}</div>
                </div>
            )
        })
         : ""}
    </div>
  )
}
