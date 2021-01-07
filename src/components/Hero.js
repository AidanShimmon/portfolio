import * as React from "react"
import {useEffect} from "react"
// Components
import styled from "styled-components";
// Animation
import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
// Images
import Earth from "../images/earth.svg"
import Moon from "../images/Moon.svg"

const Hero = () => {
    useEffect(() => {
        gsap.registerPlugin(CSSRulePlugin, MotionPathPlugin); 
        const r = document.documentElement.clientWidth/2;
        gsap.to("#moon", { 
            motionPath: {
                path: `M ${-r}, 0
                a ${r},${r} 0 1,0 ${r * 2},0
                a ${r},${r} 0 1,0 -${r * 2},0z`,
                alignOrigin: [0.5, 0.5],
                autoRotate: true
            },
            duration: 100,
            ease: "none",
            repeat: -1, 
        })

        gsap.to("#earth", 1, {y:5, ease: "none", yoyo: true, repeat: -1});
    }, [])

    return(
        <StyledHero>
            <div className="hero__intro">
                <h1>Welcome to my portfolio</h1>
                <div className="hero__intro__text">
                    <p>I am a front-end focused developer with a drive to always learn and progres. My current skillset consists of HTML, SCSS, JavaScript, React, Gatsby and Wordpress.</p>
                    <p>Scroll to view my projects</p>
                </div>
            </div>
            <div className="hero__space">
                <img src={Moon} alt="The Moon" id="moon"/>
                <img src={Earth} alt="The Earth" id="earth"/>
            </div>
        </StyledHero>
    )
}

const StyledHero = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    height: 60vh;

    @media(max-width: 1100px) {
        height: 50vh;
    }

    @media(max-width:800px) {
        height: auto;
    }

    .hero__intro {
        padding: 10vh 0;

        @media(max-width:1100px) {
            padding: 5rem 0 0 0;
        }

        @media(max-width:800px) {
            padding: 3rem 0 8rem 0;
        }
    }

    .hero__intro__text {
        p {
            padding-right: 40%;

            @media(max-width:700px) {
                padding-right: 0;
            }
        }
    }

    .hero__space {
        width: auto;
        padding-top: 5vh;
        position: relative;

        @media(max-width:1100px) {
            position: absolute;
            right: 0;
            top: 7rem;
            z-index: -1;
            opacity: 0.5;
        }

        @media(max-width:700px) {
            top: 0;
            opacity: 0.3;
        }
    }

    #moon {
        position: relative;
        z-index: -1;
    }
`

export default Hero;
