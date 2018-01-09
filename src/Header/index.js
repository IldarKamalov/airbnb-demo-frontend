import React from 'react';
import {
  Header,
  Inner,
  Logo,
  LogoImage,
  Search,
  SearchIcon,
  SearchInput,
  Nav,
  InlineLink,
} from './styled';
import logo from './colorLogo.svg';
import icon from './searchIcon.svg';

export default function () {
  return (
    <Header>
      <div className="container">
        <Inner>
          <Logo to="/">
            <LogoImage src={logo} />
          </Logo>

          <Search>
            <SearchIcon src={icon} />
            <SearchInput type="text" placeholder="Try “Miami”" />
          </Search>

          <Nav>
            <InlineLink to="/become-a-host">Become a host</InlineLink>
            <InlineLink to="/help">Help</InlineLink>
            <InlineLink to="/sign-up">Sign Up</InlineLink>
            <InlineLink to="/login">Login</InlineLink>
          </Nav>
        </Inner>
      </div>
    </Header>
  );
}
