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
        const r = 700;
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
                    <a href="/#prjects">View my projects below</a>
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
display: flex;
justify-content: space-between;
height: 60vh;

.hero__intro {
    padding: 10vh 0;
}

.hero__intro__text {
    p {
        padding-right: 40%;
    }
}

.hero__space {
    width: auto;
    padding-top: 5vh;
}

#moon {
    position: relative;
    z-index: -1;
}

#earth {

}
`

export default Hero;
