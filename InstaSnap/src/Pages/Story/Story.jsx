import React from "react";
import StoryViewer from "../../Components/StoryViewer/StoryViewer";

const Story = () => {

  const story = [
    {
      image: "https://cdn.pixabay.com/photo/2025/03/14/16/41/snow-covered-mountain-9470471_1280.jpg"
    },
    {
      image: "https://cdn.pixabay.com/photo/2025/03/31/08/17/penguin-9504250_1280.jpg"
    },
    {
      image: "https://cdn.pixabay.com/photo/2024/11/14/14/58/grass-9197163_1280.jpg"
    },
    {
      image: "https://cdn.pixabay.com/photo/2025/03/17/14/43/bird-9476034_1280.png"
    }
  ]
  return (
    <div>
      <StoryViewer  stories ={} />
    </div>
  );
}

export default Story;