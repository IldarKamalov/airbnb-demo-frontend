import styled from 'styled-components';

export const Header = styled.header`
  box-shadow: 0 0.5px 0 0 rgba(72, 72, 72, 0.3);
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
`;

export const Logo = styled.img`
  display: block;
  max-width: 30px;
  margin-right: 30px;

  @media screen and (min-width: 1024px) {
    margin-right: 50px;
  }
`;

export const Search = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  width: 392px;
  height: 48px;
  padding: 14px 16px;
  box-shadow: 0 2px 4px 0 rgba(72, 72, 72, 0.08);
  border: solid 1px rgba(72, 72, 72, 0.2);
  border-radius: 4px;
`;

export const SearchIcon = styled.img`
  display: block;
  max-width: 20px;
`;

export const SearchInput = styled.input`
  height: 24px;
  padding: 0 15px;
  font-family: Circular, "Helvetica Neue", Helvetica, Arial, sans-serif;
	font-size: 16px;
  color: #383838;
  border: 0;
  outline: 0;
`;

export const Nav = styled.nav`
  display: none;
  margin-left: auto;
  text-align: right;

  @media screen and (min-width: 1024px) {
    display: block;
  }
`;

export const Link = styled.a`
  margin-right: 8px;
  padding: 8px;
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
