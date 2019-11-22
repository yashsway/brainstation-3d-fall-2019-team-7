import React from "react";
import styled from "styled-components";
import "./CollapseMenu.scss";
import { useSpring, animated } from "react-spring";

const CollapseMenu = props => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  if (props.navbarState === true) {
    return (
      <CollapseWrapper
        className="collapseWrapper"
        style={{
          transform: open
            .interpolate({
              range: [0, 0.2, 0.3, 1],
              output: [0, -20, 0, -200]
            })
            .interpolate(openValue => `translate3d(0, ${openValue}px, 0`)
        }}
      >
        <ul>
          <li>
            <a href="/" onClick={props.handleNavbar}>
              Inventory
            </a>
          </li>
          <li>
            <a href="/" onClick={props.handleNavbar}>
              Locations
            </a>
          </li>
        </ul>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  background: #2d3436;
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
`;
