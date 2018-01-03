import styled, {css} from 'styled-components';
import chevron from './chevron.svg';

export const Footer = styled.footer`
  box-shadow: 0 -0.5px 0 0 rgba(72, 72, 72, 0.3);
`;

export const Top = styled.div`
  padding: 48px 0;
`;

export const Bottom = styled.div`
  display: flex;
  align-items: center;
  padding: 32px 0;
  border-top: 1px solid #f3f2f2;
`;

export const Column = styled.div`
  text-align: center
`;

export const Title = styled.div`
  margin-bottom: 15px;
  font-size: 15px;
  font-weight: bold;
  color: #383838;
`;

export const Link = styled.a`
  display: block;
  margin-bottom: 10px;
  font-size: 15px;
  text-decoration: none;
  color: #636363;

  &:hover,
  &:focus {
    text-decoration: underline;
  }

  ${props => props.bottom && css`
    margin: 0 15px 0 0;
  `}

  ${props => props.icon && css`
    margin: 2px 12px 0 0;

    &:last-child {
      margin-right: 0;
    }
  `}
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const Logo = styled.img`
  display: block;
  min-width: 20px;
  padding-right: 12px;
`;

export const Icon = styled.img`
  display: block;
  max-width: 100%;
`;

export const Copy = styled.span`
  font-size: 15px;
  color: #636363;
`;

export const Select = styled.select`
  display: block;
  width: 100%;
  max-width: 230px;
  height: 48px;
  margin-bottom: 15px;
  padding: 0 40px 0 15px;
  font-family: Circular, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 18px;
  font-weight: 300;
  color: #383838;
  border: solid 1px rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  background: url(${chevron}) no-repeat;
  background-position: right 14px bottom 18px;
  background-size: 15px 10px;
  outline: 0;
  appearance: none;
  cursor: pointer;

  &:focus {
      border-color: #484848;
  }

  &::-ms-expand {
      opacity: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;
