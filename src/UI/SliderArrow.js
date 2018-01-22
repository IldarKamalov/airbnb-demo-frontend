import styled from 'styled-components';
import chevron from './chevron.svg';

export const SliderArrow = styled.button`
  position: absolute;
  top: 50%;
  right: -20px;
  display: none;
  width: 40px;
  height: 40px;
  margin-top: -20px;
  background: #fff url(${chevron}) no-repeat center;
  background-size: 17px 10px;
  box-shadow: 0 2px 4px 0 rgba(72, 72, 72, 0.16);
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 50%;
  outline: 0;
  transform: rotate(-90deg);
  cursor: pointer;

  @media screen and (min-width: 992px) {
    display: block;
  }
`;

export default SliderArrow;
