import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Search_Api } from "../utils/Constants";
import { setInputValue } from "../utils/typedSlice";


export default function Header() {

  const [useInput,setUseInput]=useState("");
  const [getSuggestions,setSuggestions]= useState([]);
  const [showSuggestionBox,setshowSuggestionBox]=useState(false);
  // console.log(useInput);
  // useEffect(()=>{
  //   const timer=setTimeout(()=>{getSearchSuggestion()},200)
  //   return()=>{
  //     clearTimeout(timer)
  //   };
  // },[useInput]);

  // const getSearchSuggestion = async() =>{
  //   const data = await fetch(Search_Api+useInput);
  //   const json = await data.json();
  //   setSuggestions(json[1]);
  //  dispatch(setInputValue(useInput));
  // //  dispatch(setSuggestions(getSuggestions))
  // }
 
  const dispatch = useDispatch();
  const handelMenu=()=>{
    dispatch(toggleMenu());
   
    
  }

  return (
    <div>
      <div className="w-100  shadow-lg p-[5px]">
        <div className="grid grid-flow-col ">
          <div className="flex  px-3 justify-start gap-3 items-center col-span-2">
            <img
            onClick={()=>handelMenu()}
              alt="navbar"
              className="h-8 cursor-pointer"
              src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
            />
            <img
              alt=""
              className="h-8"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
            />
          </div>
          <div className=" col-span-9 flex justify-center items-center  ">
            <input
            name="search"
            value={useInput}
            onChange={(e)=>setUseInput(e.target.value)}
            onFocus={()=>setshowSuggestionBox(true)}
            onBlur={()=>setshowSuggestionBox(false)}
              type="search"
              placeholder="search"
              className="w-1/2 border border-gray-400 p-2 rounded-l-full"
            />
            <button className=" border border-gray-400 p-2 rounded-r-full px-3">
              🔍
            </button>
           {/* {showSuggestionBox && getSuggestions.length > 1 ? 
            <div className="fixed bg-white rounded-lg border border-gray-200 my-[2px] shadow   w-[32rem] top-[3.25rem]">
            <ul className="my-4">
              {getSuggestions.map((v,i)=> <li key={i} className="my-[2px] hover:bg-slate-100 px-5 p-1">{v}</li>
              )}
            </ul>
          </div>
          : 
          null
           } */}
          </div>
        
          <div className="flex justify-center items-center gap-3 col-span-1 ">
            <img
              alt="video"
              className="w-[30px] h-[30px]"
              src="https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/video-512.png"
            />
            <img
              alt="notification"
              className="w-[30px] h-[30px]"
              src="https://cdn-icons-png.flaticon.com/512/3119/3119338.png"
            />
            <img
              alt="profile"
              src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg"
              width={50}
            />
          </div>

        </div>
      </div>
     
    </div>
  );
}
