import * as React from "react"
// Components
import styled from "styled-components";
// Animation
import { gsap } from "gsap";

const Project = (data) => {
    const projectMouseMove = (e) => {
        const x = (e.clientX - e.currentTarget.offsetParent.offsetLeft);
        const y = e.pageY - (document.documentElement.scrollTop);
        const in_min = 0;
        const out_min = -5;
        const out_max = 5;

        const rotateY = (x - in_min) * (out_max - out_min) / (e.currentTarget.offsetWidth - in_min) + out_min;
        const rotateX = (y - in_min) * (out_max - out_min) / (e.currentTarget.offsetHeight - in_min) + out_min;

        gsap.to(e.currentTarget, {
            rotationX: -rotateX,
            rotationY: rotateY,
            duration: 0.3
        });
    }

    const projectMouseLeave = (e) => {
        gsap.to(e.target, {
            rotationX: 0,
            rotationY: 0,
            duration: 0.5
        });
    }
    return(          
        <StyledProjectImage 
            onMouseMove={projectMouseMove} 
            onMouseLeave={projectMouseLeave}  
            style={{backgroundImage: `url(${data.data.projects.projectImage.sourceUrl})`}}
        >
            <div className="overlay"></div>
            <div className="project__content">
                <h2>{data.data.projects.projectTitle}</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, laboriosam?</p>
            </div>
        </StyledProjectImage>
    )
}

const StyledProjectImage = styled.div`
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: left;

    .overlay {
        background-color: rgba(0, 0, 0, 0.3);
        width: 100%;
        height: 100%;
        transform: translateZ(100px) scale(0.80);
        pointer-events: none;
    }

    .project__content {
        position: absolute;
        bottom: 25px;
        left: 30px;
        color: white;
        transform: translateZ(100px) scale(0.80);
        pointer-events: none;
    }
`

export default Project;