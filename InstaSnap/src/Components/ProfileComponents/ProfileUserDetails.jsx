import React from "react";
import {TbCircleDashed} from "react-icons/tb";

export const ProfileUserDetails = () => {
    return (
        <div className="py-10">
            <div className="flex itmes-center">
                <div className="w-[15]">
                    <img className="w-32 h-32 rounded-full" src="https://cdn.pixabay.com/photo/2025/01/03/06/55/cortina-dampezzo-9307295_1280.jpg" alt="" />
                </div>

                <div>
                    <div>
                        <p>username</p>
                        <button>Edit Profile</button>
                        <TbCircleDashed></TbCircleDashed>
                    </div>
                </div>
            </div>
        </div>
    )
}
    