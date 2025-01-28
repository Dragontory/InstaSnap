import React from "react";

const PostCard = () => {
    return (
        <div>
            <div>
                <div>
                    <div>
                        <img className="h-12 w-12 rounded-full" src="https://cdn.pixabay.com/photo/2023/11/02/14/07/minimalism-8360717_1280.jpg" alt="" />

                        <div>
                            <p className="font-semibold text-sm">username</p>
                            <p className="font-thin text-sm">location</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCard;