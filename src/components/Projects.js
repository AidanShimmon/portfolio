import * as React from "react"
import { graphql, useStaticQuery } from "gatsby";
// Components
import styled from "styled-components";
import Project from "./Project"

const Projects = () => {

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
            <div className="projects__grid">
                {projectsData.allWpPost.edges.map(({ node }) => (
                    <div className="project">
                        <Project data={node} />
                    </div>      
                ))}
            </div>
        </StyledProjects>
    )
}

const StyledProjects = styled.div`
    position: relative;
    padding-bottom: 10vh;
    z-index: 5;

    .projects__grid {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: repeat(5, minmax(300px, 1fr));
        grid-row-gap: 7rem;

        @media(max-width: 1100px) {
            grid-template-rows: repeat(4, minmax(300px, 1fr));
            grid-row-gap: 4rem;
        }
    }

    .project {
        position: relative;
        height: auto;
        perspective: 500px;

        :nth-child(1) {
            grid-column: 6/13;
            grid-row: 1/3;

            @media(max-width: 1100px) {
                grid-column: 1/13;
                grid-row: unset;
            }
        }

        :nth-child(2) {
            grid-column: 1/5;
            grid-row: 2/4;

            @media(max-width: 1100px) {
                grid-column: 1/13;
                grid-row: unset;
            }
        }

        :nth-child(3) {
            grid-column: 9/13;
            grid-row: 3/5;

            @media(max-width: 1100px) {
                grid-column: 1/13;
                grid-row: unset;
            }
        }

        :nth-child(4) {
            grid-column: 1/8;
            grid-row: 4/6;

            @media(max-width: 1100px) {
                grid-column: 1/13;
                grid-row: unset;
            }
        }
    }
`

export default Projects