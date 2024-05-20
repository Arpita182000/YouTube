import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


export default function Sidebar() {
  const isMenuOpen =  useSelector((store)=>store.app.isMenuOpen)
  if (!isMenuOpen) return null;
  return (
    <div>
      <div className="w-48  px-3 my-5">
        <ul className="border-b border-gray-100">
          <li className="font-bold"><Link to="/">Home</Link></li>
          <li className="my-3">Shorts</li>
          <li className="my-3">Subscription</li>
          <li className="my-3">You</li>
        </ul>
        <ul className="border-b border-gray-100">
          <li className="font-bold">Home</li>
          <li className="my-3">Shorts</li>
          <li className="my-3">Subscription</li>
          <li className="my-3">You</li>
        </ul>
        <ul className="border-b border-gray-100">
          <li className="font-bold">Home</li>
          <li className="my-3">Shorts</li>
          <li className="my-3">Subscription</li>
          <li className="my-3">You</li>
        </ul>
        <ul className="border-b border-gray-100">
          <li className="font-bold">Home</li>
          <li className="my-3">Shorts</li>
          <li className="my-3">Subscription</li>
          <li className="my-3">You</li>
        </ul>
      </div>
    </div>
  );
}
