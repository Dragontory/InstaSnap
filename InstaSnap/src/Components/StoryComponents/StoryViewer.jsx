import React, {useState} from "react";
import styled from "styled-components";

const StoryViewerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: black;
`
const StoryImage = styled.img`
    max-height: 90vh;
    object-fit: contain;
`

const StoryViewer = ({stories}) => {
    const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div>
            <StoryViewerContainer>
                <StoryImage src={stories?.[currentStoryIndex].image}/>
            </StoryViewerContainer>
        </div>
    )
}

export default StoryViewer;