import * as React from "react"
import {Link} from "gatsby"
// Components
import styled from "styled-components";

const Nav = () => {
    return (
        <StyledNav>
            <Link className="logo" to="/">
                AS
            </Link>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
padding: 2rem 5rem;

.logo {
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 4px;
    font-size: 3rem;
    color: white;
}
`

export default Nav;