import styled from 'styled-components';
import Button from '../../UI/Button';

export const Wrap = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  width: 100%;
  height: 56px;
  padding: 12px 0;
  background-color: #fff;
  box-shadow: 0 0.5px 0 0 rgba(72, 72, 72, 0.3);
  z-index: 2;
`;

export const Filter = Button.extend`
  margin-right: 10px;
  outline: 0;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #f2f2f2;
    border-color: #f2f2f2;
  }

  ${props => props.isOpen && `
    color: #fff;
    background-color: #008489;

    &:hover,
    &:focus {
      background-color: #008489;
      border-color: #008489;
    }
  `}

  ${props => props.hiddenMobile && `
    display: none;

    @media screen and (min-width: 992px) {
      display: inline-block;
    }
  `}
`;

export default Wrap;
