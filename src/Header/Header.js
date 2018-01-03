import React from 'react';
import {
  Header,
  Inner,
  Logo,
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
          <Logo src={logo} />

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
