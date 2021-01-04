import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    position: relative;
    background: linear-gradient(180deg, #000000 0%, #0094FF 100%);
    font-family: 'Fanwood Text', serif;
    min-height: 100vh;
    color: white;
    overflow-x: hidden;
}

main, nav {
    max-width: 2000px;
    padding: 0 5rem;
    margin: 0 auto;

    @media(max-width: 1100px) {
        padding: 0 3rem;
    }

    @media(max-width: 600px) {
        padding: 0 1.5rem;
    }
}

h1 {
    font-weight: 400;
    margin-bottom: 4rem;
    font-size: 6rem;

    @media(max-width: 1400px) {
      font-size: 4rem;
      margin-bottom: 2rem;
    }

    @media(max-width: 800px) {
        font-size: 3rem;
    }

    @media(max-width: 600px) {
        font-size: 2rem;
        margin-bottom: 1rem;
    }
}

h3 {
    font-size: 2.5rem;
    line-height: 1;
    font-weight:  400;
    margin-bottom: 1.5rem;

    @media(max-width: 600px) {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }
}

p, a {
    font-size: 1.75rem;
    margin-bottom: 2rem;
    color: white;

    @media(max-width: 1400px) {
        font-size: 1.5rem;
    }

    @media(max-width: 600px) {
        font-size: 1rem;
        margin-bottom: 1rem;
    }
}

footer {
    margin: 0 auto;
    max-width: 2000px;
    width: 100%;
    position: relative;

    .trees {   
        height: 50vh;
        pointer-events: none;

        img {
            position: absolute;
            width: 100%;
            bottom: 0;
            height: 45vh;
            object-fit: cover;
            object-position: top;
            z-index: -1;
        }

        #treesFront {
            z-index: 4;
            opacity: 0.8;
            height: 50vh;
        }

        #treesLayer1 {
            z-index: 3;
        }
        #treesLayer2 {
            z-index: 2;
        }
        #treesLayer3 {
            z-index: 1;
            height: 55vh;
        }

        #mountain1 {
            z-index: 0;
            object-fit: scale-down;
            object-position: left;
        }

        #mountain2 {
            z-index: 0;
            object-fit: scale-down;
            object-position: right;
        }      
    }    
    
    .social {
        position: absolute;
        bottom: 2rem;
        right: 2rem;
        z-index: 5;

        a {
            margin-left: 1.5rem;

            @media(max-width: 800px) {
                margin-left: 1rem;
            }

            @media(max-width: 600px) {
                margin-left: 0.5rem;
            }
        }

        img {
            @media(max-width: 600px) {
                transform: scale(0.7);
            }
        }
    }
}
`;

export default GlobalStyle;
