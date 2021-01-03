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
        const out_min = -3;
        const out_max = 3;

        const rotateY = (x - in_min) * (out_max - out_min) / (e.currentTarget.offsetWidth - in_min) + out_min;
        const rotateX = (y - in_min) * (out_max - out_min) / (e.currentTarget.offsetHeight - in_min) + out_min;

        gsap.to(e.currentTarget, {
            rotationX: -rotateX,
            rotationY: rotateY,
            duration: 0.3
        });
    }

    const projectMouseLeave = (e) => {
        gsap.to(e.currentTarget, {
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
            <div className="project__overlay"></div>
            <div className="project__content">
                <h3>{data.data.projects.projectTitle}</h3>
                <div dangerouslySetInnerHTML={{__html: data.data.projects.projectDescription}}/>
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

    &:hover {
        .project__content {
            opacity: 1;
        }
    }

    .project__content {
        transition: opacity 0.5s ease;
        opacity: 0;
        position: absolute;
        bottom: 12%;
        right: 1rem;
        left: 1rem;
        padding: 2rem;
        color: white;
        transform: translateZ(150px) scale(0.70);
        pointer-events: none;
        background-color: rgba(0,0,0,0.2);
        backdrop-filter: blur(10px);

        h3 {
            font-size: 2.5rem;
            line-height: 1;
            font-weight:  400;
            margin-bottom: 1.5rem;
        }

        p {
            margin-bottom : 1rem;
        }
    }
`

export default Project;