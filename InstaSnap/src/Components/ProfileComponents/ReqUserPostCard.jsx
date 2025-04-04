import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import "./ReqUserPostCard.css";

const ReqUserPostCard = () => {
    return ( 
        <div className="p-2">
            <div className="post w-60 h-60">
                <img className="cursor-pointer" src="https://cdn.pixabay.com/photo/2022/01/29/07/12/chinese-lion-6976588_1280.png" alt="" />
                <div className="overlay">
                    <div className="overlay-text flex justify-between">
                        <div>
                            <AiFillHeart></AiFillHeart> <spans>10</spans>
                        </div>
                        <div>
                            <FaComment></FaComment> <spans>30</spans>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReqUserPostCard;