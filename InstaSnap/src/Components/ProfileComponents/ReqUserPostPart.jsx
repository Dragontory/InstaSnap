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
        <div>ReqUserPostPart</div>
    )
}

export default ReqUserPostPart

