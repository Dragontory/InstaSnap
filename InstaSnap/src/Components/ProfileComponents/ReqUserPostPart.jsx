import React from 'react'
import { AiOutlineTable, AiOutlineUser} from 'react-icons/ai'
import {RiVideoAddLine} from 'react-icons/ri'
import {BiBookmark} from 'react-icons/bi'

const ReqUserPostPart = () => {
    const tabs=[
        {
            tab: "Posts",
            icon: <AiOutlineTable></AiOutlineTable>,
            activeTab: ""
        },
        {
            tab: "Reels",
            icon: <RiVideoAddLine></RiVideoAddLine>,
        },
        {
            tab: "Saved",
            icon: <BiBookmark></BiBookmark>,
        },
        {
            tab: "Tagged",
            icon: <AiOutlineUser></AiOutlineUser>,
        },
    ]
    return (
        <div>
            <div className="flex space-x-14 border-t relative">
                {tabs.map((item)=>
                    <div className="flex items-center cursor-pointer py-2 text-sm">
                        <p>{item.icon}</p>
                        <p>{item.tab}</p>
                    </div>
                )}
                
            </div>
            
        </div>
    )
}

export default ReqUserPostPart

