import React, { useEffect } from "react";
import LiveComment from "./LiveComment";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/chatSlice";
import {generate} from '../utils/helpers'
import {makeRandomText} from '../utils/helpers'
import Searchon from "./Searchon";
console.log(generate)
export default function LiveChat() {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.message);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessages({
          name: generate(),
          description: makeRandomText(20),
        })
      );
      // console.log("app poling");
    }, 2500);

    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <div className=" w-full ">
      {chatMessages.map((c,i)=><LiveComment key={i}name={c.name} message={c.description}/>)}

    </div>
      
  );
}
