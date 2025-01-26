import React from "react";
import StoryCircle from "../../Components/Story/StoryCircle";

const HomePage = () => {
  return (
    <div>
      <div>
        <div>
          <div className="storyDiv flex space-x-2 border p-4 rounded-md justify-start w-full">
            {[1,1,1,1].map((item)=><StoryCircle />)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;