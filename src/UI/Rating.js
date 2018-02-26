import styled from 'styled-components';
import star from './star.svg';

export const Rating = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  width: 12px;
  height: 12px;
  margin-right: 4px;
  background: url("${star}") no-repeat left;
  background-size: 12px 12px;

  &:last-of-type {
    margin-right: 0;
  }

  ${props => props.five && `
    width: 76px;
    background-position: center;
    background-repeat: repeat-x;
    background-size: 16px 12px;
  `}
`;

export default Rating;
