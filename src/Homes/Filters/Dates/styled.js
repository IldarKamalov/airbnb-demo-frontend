import styled from 'styled-components';
import cross from './cross.svg';

export const Dates = styled.div`
  position: relative;
  z-index: 3;
  display: inline-block;
  vertical-align: middle;
`;

export const Content = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background-color: #fff;

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 40px;
    left: 0;
    right: initial;
    bottom: initial;
    padding: 3px;
    border: 1px solid rgba(72,72,72,0.2);
    border-radius: 4px;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  padding: 8px;
  box-shadow: 0 -1px 0 0 #d5d5d5;

  @media screen and (min-width: 768px) {
    padding: 0;
    box-shadow: none;
  }
`;

export const Action = styled.button`
  display: none;
  padding: 22px 25px;
  font-family: Circular, "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-decoration: none;
  color: #636363;
  border: 0;
  outline: 0;
  border-radius: 4px;
  cursor: pointer;

  &:hover,
  &:focus {
    text-decoration: underline;
  }

  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 136px;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  display: ${props => (props.isOpen ? 'block' : 'none')};
  background: rgba(255, 255, 255, 0.8);
`;

export const Cancel = styled(Action)``;

export const Apply = styled(Action)`
  color: #0f7276;
`;

export const Save = styled.button`
  display: block;
  width: 100%;
  padding: 12px;
  font-family: Circular, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 18px;
  color: #fff;
  background-color: #ff5a5f;
  border: 0;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #f53d43;
  }

  &:focus,
  &:active {
    background-color: #ed262c;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Title = styled.p`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 16px 8px 30px;
  font-size: 14px;
  color: #383838;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Close = styled.button`
  width: 16px;
  height: 16px;
  padding: 0;
  background: url(${cross}) no-repeat center;
  border: 0;
  cursor: pointer;
`;

export const Reset = styled.button`
  padding: 0;
  font-family: Circular, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #0f7276;
  border: 0;
  background-color: transparent;
  cursor: pointer;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export default Dates;
