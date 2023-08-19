import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  display: block;
  height: 50px;
  background-color: #191919;
  padding-inline: 40px;

  > nav {
    height: 100%;
    display: flex;
    align-items: center;
    gap: 40px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  color: #fff;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  font-family: Poppins;
  font-size: 20px;
  display: inline-block;
  font-weight: 600;
  padding: 13px 12px;
  border-radius: 10px;

  &.active {
    background: #3dd2cc;
  }
`;
