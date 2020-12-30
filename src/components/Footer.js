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
import mountain1 from "../images/Mountain_footer_1.svg"
import mountain2 from "../images/Mountain_footer_2.svg"

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
            yPercent: -50,
            ease: "none",
            scrollTrigger: {
              trigger: "#trees",
              scrub: true
            },         
        })
    
        gsap.to("#treesLayer3", {
            yPercent: -100,
            ease: "none",
            scrollTrigger: {
              trigger: "#trees",
              scrub: true
            },         
        })

        gsap.to("#mountain1", {
            yPercent: -150,
            ease: "none",
            scrollTrigger: {
              trigger: "#trees",
              scrub: true
            },         
        })

        gsap.to("#mountain2", {
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
                <img 
                    src={mountain1} 
                    id="mountain1" 
                    alt="mountain layer 1"
                />
                <img 
                    src={mountain2} 
                    id="mountain2" 
                    alt="mountain layer 2"
                />
            </div>
        </footer> 
    )
}

export default Footer;