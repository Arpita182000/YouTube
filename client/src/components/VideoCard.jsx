import React from 'react'

export default function VideoCard({info}) {
  let trunCateText = (text,maxValue)=>{
    if(text.length <maxValue ){
      return text;
    }
    return text.substring(0,maxValue) + ".....";
  }
  
  return (
    <div className='h-[300px]'>
          <div  className='p-2 w-72 shadow-lg rounded-lg'>
            <img alt='' className='rounded-lg' src={info.snippet.thumbnails.medium.url} />
            <div className='font-bold py-2'>{trunCateText(info.snippet.title,30)}</div>
            <div>{trunCateText(info.snippet.channelTitle,20)}</div>
            <div>{info.statistics.viewCount}</div>
            </div>
    </div>
  )
}

// {truncateText(restaurant.info.cuisines.join(','),30)}
