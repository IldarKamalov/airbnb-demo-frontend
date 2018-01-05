import styled from 'styled-components';
import chevron from '../elements/chevron.svg';

export const Content = styled.div`
  padding: 45px 0 60px;
`;

export const Section = styled.div`
  position: relative;
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  font-size: 24px;
  font-weight: bold;
  line-height: 1.06;
  color: #383838;

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`;

export const All = styled.a`
  margin-left: 5px;
  font-size: 14px;
  font-weight: normal;
  text-decoration: none;
  color: #383838;
  white-space: nowrap;

  &:hover,
  &:focus {
    text-decoration: underline;
  }

  &:after {
    content: "";
    position: relative;
    top: -1px;
    display: inline-block;
    vertical-align: middle;
    width: 11px;
    height: 7px;
    margin-left: 5px;
    background: url(${chevron}) no-repeat center;
    background-size: 100%;
    transform: rotate(-90deg);
  }
`;

export const Row = styled.div`
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
  margin-right: -8px;
  margin-left: -8px;

  ${props => props.scroll && `
    flex-wrap: nowrap;
    padding: 5px 0;
    overflow-y: auto;
  `}
`;

export default Content;
