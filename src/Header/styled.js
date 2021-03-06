import styled from 'styled-components';
import { Link as RouteLink } from 'react-router-dom';
import chevron from '../UI/chevron.svg';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  border-bottom: 0.5px solid rgba(72,72,72,0.3);
  z-index: 1;
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
`;

export const Logo = styled(RouteLink)`
  position: relative;
  display: block;
  margin-right: 10px;
  padding: 0 15px 0 0;

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    width: 10px;
    height: 6px;
    margin-top: -3px;
    background: url(${chevron}) no-repeat center;
    background-size: contain;
    opacity: 0.8;
  }

  @media screen and (min-width: 768px) {
    margin-right: 17px;
    padding: 0 17px 0 0;
  }

  @media screen and (min-width: 992px) {
    margin-right: 25px;
    padding: 0 25px 0 0;

    &:after {
      display: none;
    }
  }
`;

export const LogoImage = styled.img`
  display: block;
  max-width: 30px;
`;

export const Search = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  width: 392px;
  height: 48px;
  padding: 14px 12px;
  box-shadow: 0 2px 4px 0 rgba(72, 72, 72, 0.08);
  border: solid 1px rgba(72, 72, 72, 0.2);
  border-radius: 4px;

  @media screen and (min-width: 768px) {
    padding: 14px 16px;
  }
`;

export const SearchIcon = styled.img`
  display: block;
  max-width: 15px;

  @media screen and (min-width: 768px) {
    max-width: 20px;
  }
`;

export const SearchInput = styled.input`
  display: block;
  width: 100%;
  height: 24px;
  padding: 0 10px;
  font-family: Circular, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #383838;
  border: 0;
  outline: 0;

  @media screen and (min-width: 768px) {
    padding: 0 15px;
    font-size: 16px;
  }
`;

export const Nav = styled.nav`
  display: none;
  margin-left: auto;
  text-align: right;

  @media screen and (min-width: 992px) {
    display: block;
  }
`;

export const Link = styled(RouteLink)`
  margin-right: 10px;
  padding: 8px 10px;
  text-decoration: none;
  color: #383838;
  border-bottom: 2px solid transparent;

  &:hover,
  &:focus {
    border-bottom-color: #767676;
  }

  &:last-child {
    margin-right: 0;
  }
`;

export default Header;
