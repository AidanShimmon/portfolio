import * as React from "react"
// Components
import styled from "styled-components";

const Project = (data) => {
    console.log(data.data.projects.projectTitle);
    return(               
        <StyledProjectContent style={{backgroundImage: `url(${data.data.projects.projectImage.sourceUrl})`}}>
            <h3>{data.data.projects.projectTitle}</h3>
        </StyledProjectContent>
    )
}

const StyledProjectContent = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    pointer-events: none;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

export default Project;