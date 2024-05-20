import React, { useState } from "react";
import {apiKey} from "../utils/Constants";
import VideoCard from "./VideoCard";
import { Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { google_Api_key } from "../utils/Constants";
import Searchon from '../components/Searchon'
import { addMovieList } from "../utils/movieSlice";


export default function VideoContainer() {
  // const [getapi, setGetApi] = useState([]);
  const dispatch = useDispatch();

  // const [searchDatah,setSearchData]=useState();
 const inputValue = useSelector((store)=>store.type.inputValue);
 const getapi = useSelector((store)=>store.movie.movieList);
//  console.log(getapi)

  const getData = async () => {
    const data = await fetch(apiKey);
    const json = await data.json();
    dispatch(addMovieList(json.items))
  };
  useState(() => {
    getData();
  }, []);

  return getapi &&(
    <div className="flex flex-wrap gap-4">
      {
       getapi.map((v, i) => <Link key={i} to={"/watch?v="+ v.id}><VideoCard key={v.id} info={v}/></Link> )}

    </div>
  );
}
