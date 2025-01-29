import React, {useState} from "react";
import {BsThreeDots} from "react-icons/bs";
import "./PostCard.css";
import { AiFillAlert, AiOutlineHeart } from "react-icons/ai";

const PostCard = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const handleClick = () => {
        setShowDropdown(!showDropdown);
    }

    return (
        <div>
            <div className="border rounded-md w-full">
                <div className="flex justify-between items-center w-full py-4 px-5">
                    <div className="flex items-center">
                        <img className="h-12 w-12 rounded-full" src="https://cdn.pixabay.com/photo/2023/11/02/14/07/minimalism-8360717_1280.jpg" alt="" />

                        <div className="pl-2">
                            <p className="font-semibold text-sm">username</p>
                            <p className="font-thin text-sm">location</p>
                        </div>
                    </div>
                    <div className="dropdown">
                        <BsThreeDots className="dots" onClick={handleClick}/>
                        <div className="dropdown-content">
                            {showDropdown && <p className="bg-black text-white py-1 px-4 rounded-md cursor-pointer">Delete</p>}
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <img className="w-full" src="https://cdn.pixabay.com/photo/2024/08/15/19/19/highland-cow-8972000_1280.jpg" alt="" />
                </div>

                <div>
                    <div>
                        <AiFillAlert />
                        <AiOutlineHeart />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCard;