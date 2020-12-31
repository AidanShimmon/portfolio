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
}

h1 {
    font-weight: 400;
    margin-bottom: 4rem;
    font-size: 6rem;
}

p, a {
    font-size: 1.75rem;
    margin-bottom: 2rem;
    color: white;
}

footer {
    position: absolute;
    bottom: 0;
    height: 30vw;
    width: 100%;

    .trees {
        position: relative;
        height: 30vw;

        img {
            position: absolute;
            width: 100%;
            bottom: 0;
            height: 35vw;
            object-fit: cover;
            object-position: top;
            z-index: -1;
        }

        #treesFront {
            z-index: 4;
            opacity: 0.2;
            height: 40vw;
        }

        #treesLayer1 {
            z-index: 3;
        }
        #treesLayer2 {
            z-index: 2;
        }
        #treesLayer3 {
            z-index: 1;
            height: 42vw;
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
}
`;

export default GlobalStyle;
