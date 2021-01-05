import React from "react"
import Seo from "../components/Seo"
import {graphql} from "gatsby"
import Img from "gatsby-image";
import styled from "styled-components";

const projectTemplate = ({data}) => {
    return (
        <ProjectMain>
            <Seo title={data.wpPost.projects.projectTitle} description={data.wpPost.excerpt} />
            <h1>{data.wpPost.projects.projectTitle}</h1>
            <div className="banner">
                <Img 
                    fluid={data.wpPost.projects.projectImage.localFile.childImageSharp.fluid} 
                    alt={data.wpPost.projects.projectImage.title}
                />
            </div>
            <div dangerouslySetInnerHTML={{__html: data.wpPost.content}}/>
        </ProjectMain>
    )
}

const ProjectMain = styled.main`
    position: relative;
    z-index: 5;
    margin-bottom: 10vh;

    .banner {
        width: 50%;
        margin: 0 auto 4rem 0;
    }
`

export default projectTemplate;

export const query = graphql`
  query($id: String) {
    wpPost(id:{eq: $id}) {
        title
        content
        excerpt
        projects {
            projectTitle
            projectDescription
            projectImage {
                title
                localFile {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid_noBase64
                        }
                    }  
                }
            }
        }
    }
  }
`