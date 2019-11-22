import React from "react";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";

import Brand from "./Brand";
import BurgerMenu from "./BurgerMenu";
import CollapseMenu from "./CollapseMenu";
import "./Navigation.scss";
import Search from "./Search";

const Navigation = props => {
  const barAnimation = useSpring({
    from: { transform: "translate3d(0, -10rem, 0)" },
    transform: "translate3d(0, 0, 0)"
  });

  const linkAnimation = useSpring({
    from: { transform: "translate3d(0, 30px, 0)", opacity: 0 },
    to: { transform: "translate3d(0, 0, 0)", opacity: 1 },
    delay: 800,
    config: config.wobbly
  });

  return (
    <>
      <NavBar style={barAnimation}>
        <div className="nav-container">
          <Brand />
          <Search />
          <NavLinks className="navlink" style={linkAnimation}>
            <a href="/inventory" className="current">
              Inventory
            </a>
            <a href="/warehouses">Locations</a>
          </NavLinks>
          <div>
            <BurgerMenu
              navbarState={props.navbarState}
              handleNavbar={props.handleNavbar}
            />
          </div>
        </div>
      </NavBar>
      <CollapseMenu
        navbarState={props.navbarState}
        handleNavbar={props.handleNavbar}
      />
    </>
  );
};

const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: #323232;
  z-index: 1;
  font-size: 1.4rem;
`;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 950px;
  

  & a {
    color: #dfe6e9;
    font-size: 14px;
    line-height: 22px;

    // border-bottom: 1px solid white;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid white;
    }

    // @media (max-width: 768px) {
    //   display: none;
    }
  }
`;

export default Navigation;
