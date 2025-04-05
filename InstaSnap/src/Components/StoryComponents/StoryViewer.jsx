import React from "react";
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

const StoryViewer = () => {
    return (
        <div>
            <StoryViewerContainer>
                <StoryImage/>
            </StoryViewerContainer>
        </div>
    )
}

export default StoryViewer;