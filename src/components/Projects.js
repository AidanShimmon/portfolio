import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby";
// Components
import styled from "styled-components";
import Project from "./Project"
// Animation
import { gsap } from "gsap";

const Projects = () => {
    const moveForce = 10; // max movement in pixels
    const rotateForce = 5; // max rotaion in deg

    const projectMouseMove = (e) => {
        const docX = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        const docY = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

        const moveX = (e.pageX - docX/2) / (docX/2) * moveForce;
        const moveY = (e.pageY - docY/2) / (docY/2) * moveForce;

        const rotateY = (e.pageX / docX * rotateForce*2) - rotateForce;
        const rotateX = ((e.pageY / docY * rotateForce*2) - rotateForce);

        gsap.to(e.target, {
            x: moveX,
            y: moveY,
            rotationX: rotateX,
            rotateY: rotateY,
            duration: 0.3
        });
    }

    const projectMouseLeave = (e) => {
        gsap.to(e.target, {
            x: 0,
            y: 0,
            rotationX: 0,
            rotateY: 0,
            duration: 0.5
        });
    }

    const projectsData = useStaticQuery(graphql`
        query {
            allWpPost(limit: 4) {
                edges {
                node {
                    projects {
                    projectTitle
                    projectDescription
                    projectImage {
                        srcSet
                        sourceUrl
                    }
                    }
                }
                }
            }
        }
    `)

    return (
        <StyledProjects>
            <h1>Projects</h1>
            <div className="projects__grid">
                {projectsData.allWpPost.edges.map(({ node }) => (
                    <div
                        onMouseMove={projectMouseMove} 
                        onMouseLeave={projectMouseLeave}  
                        className="project">
                        <Project data={node} />
                    </div>      
                ))}
            </div>
        </StyledProjects>
    )
}

const StyledProjects = styled.div`
padding-bottom: 35vh;
position: relative;

.projects__grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(6, minmax(300px, 1fr));
    grid-row-gap: 7rem;
}

.project {
    position: relative;
    background-color: white;
    height: auto;
    box-shadow: 0 0 40px 20px rgba(0,0,0,.15);
    overflow: hidden;

    :nth-child(1) {
        grid-column: 6/13;
        grid-row: 1/3;
    }

    :nth-child(2) {
        grid-column: 1/5;
        grid-row: 2/4;
    }

    :nth-child(3) {
        grid-column: 9/13;
        grid-row: 3/5;
    }

    :nth-child(4) {
        grid-column: 1/8;
        grid-row: 4/6;
    }
}
`

export default Projects