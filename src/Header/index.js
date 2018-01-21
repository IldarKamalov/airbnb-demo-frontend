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
  Link,
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
            <Link to="/become-a-host">Become a host</Link>
            <Link to="/help">Help</Link>
            <Link to="/sign-up">Sign Up</Link>
            <Link to="/login">Login</Link>
          </Nav>
        </Inner>
      </div>
    </Header>
  );
}
