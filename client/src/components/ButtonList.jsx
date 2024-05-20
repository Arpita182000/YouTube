import React from 'react'
import Button from './Button'
const lists = ["All","javascript","live","Music","React","Arijit Singh","Computer Programming","South Indian movie","For you","Recommended","live","Music","React",]
export default function ButtonList() {
  return (
    <div className='my-5'>
      <Button lists={lists}/>
    </div>
  )
}
