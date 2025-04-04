import React, {useState} from 'react';
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";

const CommentCard = () => {
    const [isCommentLike, isCommentLikeSet] = React.useState();

    const handleLikeComment = () => {
        isCommentLikeSet(!isCommentLike);
    }

    return (
        <div>
            <div className="flex items-center justify-between py-5">
                <div className="flex items-center">
                    <div>
                        <img className="w-9 h-9 rounded-full" src="https://cdn.pixabay.com/photo/2024/12/30/17/00/landscape-9300672_1280.jpg" alt="" />
                    </div>
                    <div className="ml-3">
                        <p>
                            <span className="font-semibold">username</span>
                            <span className="ml-2">cool post bro</span>
                        </p>
                        <div className="flex items-center space-x-3 text-xs opacity-60 pt-2">
                            <span>1 hour ago</span>
                            <span>900 likes</span>
                        </div>
                    </div>
                </div>

                {isCommentLike?<AiFillHeart onClick={handleLikeComment} className="text-xs hover:opacity-50 cursor-pointer text-red-600" />:<AiOutlineHeart onClick={handleLikeComment} className="text-xs hover:opacity-50 cursor-pointer" />}
            </div>
        </div>
    )
}

export default CommentCard;