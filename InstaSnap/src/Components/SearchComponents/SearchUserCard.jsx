import React from "react";

const SearchUserCard = ({ user }) => {
    return (
        <div>
            <div>
                <img className="w-10 h-10 rounded-full" src="https://cdn.pixabay.com/photo/2025/04/21/17/33/goose-9548203_1280.jpg" alt="" />

                <div className="ml-3">
                    <p>Full Name</p>
                    <p className="opacity-70">username</p>
                </div>
            </div>
        </div>
    )
}

export default SearchUserCard;