import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
import { GridItem, Grid } from "./Header.styled"
import styled from "styled-components";

export const NavLinkStyled = styled(NavLink)`
  color: green;
  font-size: 24;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  transition-property: color, background-color, transform;
  transition-duration: 0.2s;
  transition-timing-function: cubicBezier;
  transform: scale(0.9);
  &:hover,
  &:focus {
    color: pink;
  } 
   &.active {
    color: blue;
   
    transform: scale(1);
    pointer-events: none;
  }
`;
const Header = () => {
    return (
        <>
            <header>
                <Grid>
                    <GridItem>
                        <NavLinkStyled to="/" >Home</NavLinkStyled>
                    </GridItem>
                    <GridItem>
                        <NavLinkStyled to="/movies" >Movies</NavLinkStyled>
                    </GridItem>
                </Grid>
            </header>
            <main>
                <Suspense fallback={<div>loading ...</div>}>
                    <Outlet />
                </Suspense>
            </main>
        </>
    );
};

export default Header;