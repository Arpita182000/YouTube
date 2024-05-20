import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { google_Api_key } from "../utils/Constants";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";
import { addMessages } from "../utils/chatSlice";


export default function WatchPage() {
  const [searchParam] = useSearchParams();
  const [watchList, setwatchList] = useState("");
  const [watchList2, setwatchList2] = useState("");
  const [liveMessage,setliveMessage]=useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    getApi();
    dispatch(closeMenu());
  }, []);
  const getApi = async () => {
    let response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${searchParam.get("v")}&key=${google_Api_key}`
    );
    let json = await response.json();
    // console.log(json)
    setwatchList(json.items[0].snippet);
    setwatchList2(json.items[0].statistics)
  };


  return (

    // {watchList.length>=0 ? "" :"hii"}
    <div className="w-[1320px] mx-auto mt-8">
      <div className="mt-5 flex justify-bewteen gap-3">
        <div>
          <iframe
            width="900"
            height="600"
            className="rounded-xl"
            src={"https://www.youtube.com/embed/" + searchParam.get("v")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
                
        </div>
        <div className=" w-[500px] h-[600px] bg-slate-50 rounded  text-center overflow-y-scroll flex-col-reverse">
          <LiveChat/>
        
        </div>
        
      </div>
      <div className="w-full  flex ">
            <div> <div className="w-[57rem] font-bold text-lg tracking-wide">{watchList.title}</div> 
              <div className="flex">
                {/* <div ><img src={image}/></div> */}
                <div className="font-semibold my-3">{watchList.channelTitle}</div>
              </div></div>
              <div className="flex-end w-full">
               <form onSubmit={(e)=>{
                e.preventDefault();
                dispatch(addMessages({
                  name:"Arpita",
                  description: liveMessage,
                }))
                setliveMessage("");
               }}>
               <input type="text " className="border-2 border-gray-100 w-[20rem]" value={liveMessage} onChange={(e)=>setliveMessage(e.target.value)}/>
                <button className="bg-green-50">submit</button>
               </form>
              </div>
          </div>
      <div className=" py-5 p-2">
            <p className="font-bold text-lg"> {watchList2.commentCount}&nbsp;&nbsp;Comments</p>
            <div className="flex justify-start items-center gap-3">
            <img
              alt="profile"
              src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg"
              width={70}
            />
            <input className="border-b-2 border-gray-200 w-full focus:outline-none" placeholder="Add a comment..."/>
            </div>
            <CommentContainer />
           
          </div>
    </div>
  );
}
