import React from "react";
import {BsThreeDots} from "react-icons/bs";

const PostCard = () => {
    return (
        <div>
            <div>
                <div className="flex justify-between items-center w-full py-4 px-5">
                    <div className="flex items-center">
                        <img className="h-12 w-12 rounded-full" src="https://cdn.pixabay.com/photo/2023/11/02/14/07/minimalism-8360717_1280.jpg" alt="" />

                        <div className="pl-2">
                            <p className="font-semibold text-sm">username</p>
                            <p className="font-thin text-sm">location</p>
                        </div>
                    </div>
                    <div>
                        <BsThreeDots />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCard;