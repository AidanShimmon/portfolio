import * as React from "react"
import {Link} from "gatsby"
// Components
import styled from "styled-components";
// images
import mailSvg from "../images/mail.svg";
import linkedinSvg from "../images/linkedin.svg";
import githubSvg from "../images/github.svg";

const Nav = () => {
    return (
        <StyledNav>
            <Link className="logo" to="/">
                AS
            </Link>
            <div className="social">
                <a 
                    target="_blank"
                    href="https://github.com/AidanShimmon"
                >
                    <img src={githubSvg} alt="View my github repo here"/>
                </a>
                <a 
                    target="_blank" 
                    href="https://www.linkedin.com/in/aidan-shimmon-738428168/"
                >
                    <img src={linkedinSvg} alt="Find me on Linkedin"/>
                </a>
                <a href="mailto:aidanshimmon@hotmail.co.uk">
                    <img src={mailSvg} alt="Email me"/>
                </a>
            </div>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 5rem;

    @media(max-width: 1100px) {
        padding: 2rem 3rem;
    }

    @media(max-width: 600px) {
        padding: 1.5rem;
    }

    .logo {
        text-transform: uppercase;
        text-decoration: none;
        letter-spacing: 4px;
        font-size: 3rem;
        margin-bottom: 0;
        color: white;
    }

    .social {
        a {
            margin-left: 1rem;

            @media(max-width: 800px) {
                margin-left: 1rem;
            }

            @media(max-width: 600px) {
                margin-left: 0.5rem;
            }
        }

        img {
            transform: scale(0.8);

            @media(max-width: 600px) {
                transform: scale(0.7);
            }
        }
    }
`

export default Nav;