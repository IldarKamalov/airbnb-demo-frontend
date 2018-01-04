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
} from './Header/styled';
import logo from './Header/colorLogo.svg';
import icon from './Header/searchIcon.svg';

export default function () {
  return (
    <Header>
      <div className="container">
        <Inner>
          <Logo type="button">
            <LogoImage src={logo} />
          </Logo>

          <Search>
            <SearchIcon src={icon} />
            <SearchInput type="text" placeholder="Try “Miami”" />
          </Search>

          <Nav>
            <Link href="/become-a-host">Become a host</Link>
            <Link href="/help">Help</Link>
            <Link href="/sign-up">Sign Up</Link>
            <Link href="/login">Login</Link>
          </Nav>
        </Inner>
      </div>
    </Header>
  );
}
