import styled from 'styled-components';

export const Filters = styled.div`
  position: fixed;
  top: 81px;
  left: 0;
  width: 100%;
  padding: 12px 0;
  white-space: nowrap;
  background-color: #fff;
  box-shadow: 0 0.5px 0 0 rgba(72, 72, 72, 0.3);
  z-index: 1;
`;

export const Button = styled.button`
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
  padding: 7px 15px;
  font-family: Circular, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  border: solid 1px rgba(72, 72, 72, 0.2);
  border-radius: 4px;
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

export default Filters;
