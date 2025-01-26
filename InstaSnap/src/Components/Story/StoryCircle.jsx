import React from "react";

const StoryCircle = ({ story }) => {
  return (
    <div className="cursor-pointer flex flex-col items-center">
      <img className="w-16 h-16 rounded-full" src="https://cdn.pixabay.com/photo/2020/11/22/11/53/sky-5766341_1280.jpg" alt="" />
      <p>username</p>
    </div>
  )
}

export default StoryCircle;