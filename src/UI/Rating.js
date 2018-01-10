import styled from 'styled-components';
import star from './star.svg';

export const Rating = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  width: 76px;
  height: 12px;
  background: url("${star}") repeat-x center;
  background-size: 16px 12px;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 11px;
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
