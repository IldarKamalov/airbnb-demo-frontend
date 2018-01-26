import styled from 'styled-components';
import chevron from './chevron.svg';

export default styled.select`
  display: block;
  width: 100%;
  height: 40px;
  margin-bottom: 15px;
  padding: 0 30px 0 10px;
  font-family: Circular, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-weight: 300;
  color: #383838;
  border: solid 1px rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  background: url(${chevron}) no-repeat;
  background-position: right 9px bottom 15px;
  background-size: 12px 7px;
  outline: 0;
  appearance: none;
  cursor: pointer;

  &:focus {
    border-color: #484848;
  }

  &::-ms-expand {
    opacity: 0;
  }

  @media screen and (min-width: 768px) {
    padding: 0 30px 0 10px;
    height: 48px;
    font-size: 15px;
    background-position: right 10px bottom 18px;
    background-size: 13px 9px;
  }

  @media screen and (min-width: 992px) {
    max-width: 230px;
    padding: 0 40px 0 15px;
    font-size: 18px;
    background-position: right 14px bottom 18px;
    background-size: 15px 10px;
  }
`;
