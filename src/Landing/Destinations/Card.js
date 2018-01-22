import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Card = styled(Link)`
  display: block;
  margin: 0 auto;
  max-width: 100%;
  text-decoration: none;
  color: #383838;
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  max-width: 100%;
  margin-bottom: 8px;
`;

export const Title = styled.p`
  margin: 0 0 3px 0;
  font-size: 15px;
  font-weight: 700;
  line-height: 1.4;
  text-overflow: ellipsis;
  color: #383838;
  white-space: nowrap;
  overflow: hidden;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export default props => (
  <Card to={props.to}>
    <Img src={props.img} srcSet={`${props.img2x} 2x`} alt="reservations" />
    <Title>
      {props.title}
    </Title>
  </Card>
);
