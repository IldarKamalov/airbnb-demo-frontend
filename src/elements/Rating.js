import styled from 'styled-components';
import star from './star.svg';

export const Rating = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  width: 60px;
  height: 12px;
  background-image: url("${star}");
  background-repeat: repeat-x;
  background-position: center;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 12px;
    background-color: #fff;
  }

  ${props => props.five && `
    &:after {
      width: 0;
    }
  `}

  ${props => props.four && `
    &:after {
      width: 12px;
    }
  `}

  ${props => props.three && `
    &:after {
      width: 24px;
    }
  `}

  ${props => props.two && `
    &:after {
      width: 36px;
    }
  `}

  ${props => props.one && `
    &:after {
      width: 48px;
    }
  `}
`;

export default Rating;
