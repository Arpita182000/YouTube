import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
export default function MainContainer() {
  return (
    <div className='w-[100%]  px-5'>
        <ButtonList/>
        <VideoContainer/>
    </div>
  )
}
