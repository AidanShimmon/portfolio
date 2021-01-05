import * as React from "react"
import {useEffect} from "react"
// Animation
import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Images
import treesFront from "../images/treesFront.png"
import treesLevel1 from "../images/treesLevel1.svg"
import treesLevel2 from "../images/treesLevel2.svg"
import treesLevel3 from "../images/treesLevel3.svg"

import mailSvg from "../images/mail.svg";
import linkedinSvg from "../images/linkedin.svg";
import githubSvg from "../images/github.svg";

const Footer = () => {
    useEffect(() => {
        gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);

        gsap.to("#treesLayer1", {
            yPercent: 0,
            ease: "none",
            scrollTrigger: {
              trigger: "#trees",
              scrub: true,
            },         
        })
    
        gsap.to("#treesLayer2", {
            yPercent: -75,
            ease: "none",
            scrollTrigger: {
              trigger: "#trees",
              scrub: true
            },         
        })
    
        gsap.to("#treesLayer3", {
            yPercent: -150,
            ease: "none",
            scrollTrigger: {
              trigger: "#trees",
              scrub: true
            },         
        })
    }, [])
        
    return (
        <footer id="footer">
            <div id="trees" className="trees">
                <img 
                    src={treesFront} 
                    id="treesFront" 
                    alt="parallaxed trees front"
                />
                <img 
                    src={treesLevel1} 
                    id="treesLayer1" 
                    alt="parallaxed trees layer 1"
                />
                <img 
                    src={treesLevel2} 
                    id="treesLayer2" 
                    alt="parallaxed trees layer 2"
                />
                <img 
                    src={treesLevel3} 
                    id="treesLayer3" 
                    alt="parallaxed trees layer 3"
                />
            </div>
            <div className="social">
                <a 
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/AidanShimmon"
                >
                    <img src={githubSvg} alt="View my github repo here"/>
                </a>
                <a 
                    target="_blank" 
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/aidan-shimmon-738428168/"
                >
                    <img src={linkedinSvg} alt="Find me on Linkedin"/>
                </a>
                <a href="mailto:aidanshimmon@hotmail.co.uk">
                    <img src={mailSvg} alt="Email me"/>
                </a>
            </div>
        </footer> 
    )
}

export default Footer;