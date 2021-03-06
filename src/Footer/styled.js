import styled from 'styled-components';
import { Link as RouteLink } from 'react-router-dom';

export const Footer = styled.footer`
  box-shadow: 0 -0.5px 0 0 rgba(72, 72, 72, 0.3);
`;

export const Top = styled.div`
  padding: 16px 0 10px;

  @media screen and (min-width: 768px) {
    padding: 48px 0;
  }
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 0;
  border-top: 1px solid #f3f2f2;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    padding: 32px 0;
  }
`;

export const Column = styled.div`
  text-align: center
`;

export const Title = styled.div`
  margin-bottom: 15px;
  font-size: 12px;
  font-weight: bold;
  color: #383838;

  @media screen and (min-width: 992px) {
    font-size: 15px;
  }
`;

export const Link = styled(RouteLink)`
  display: block;
  margin-bottom: 12px;
  font-size: 12px;
  text-decoration: none;
  line-height: 1.4;
  color: #636363;

  &:hover,
  &:focus {
    text-decoration: underline;
  }

  @media screen and (min-width: 992px) {
    font-size: 15px;
  }
`;

export const InlineLink = Link.extend`
  display: inline-block;
  vertical-align: middle;
  margin: 0 15px 0 0;
`;

export const IconLink = Link.extend`
  margin: 2px 12px 0 0;

  &:last-child {
    margin-right: 0;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin-left: auto;
  }
`;

export const Logo = styled.img`
  display: block;
  min-width: 20px;
  padding-right: 12px;
`;

export const Img = styled.img`
  display: block;
  max-width: 18px;

  @media screen and (min-width: 768px) {
    max-width: 24px;
  }
`;

export const Copy = styled.span`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  font-size: 12px;
  color: #636363;

  @media screen and (min-width: 992px) {
    margin-bottom: 0;
    font-size: 15px;
  }
`;

export default Footer;
