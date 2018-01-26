import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled(Link)`
  display: block;
  margin: 0 auto
  max-width: 100%;
  text-decoration: none;
  color: #383838;
`;

const Img = styled.img`
  display: block;
  width: 100%;
  max-width: 100%;
  margin-bottom: 8px;
`;

const Title = styled.p`
  margin: 0 0 4px 0;
  font-size: 18px;
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

const Subtitle = styled.p`
  margin: 0 0 2px 0;
  font-size: 10px;
  font-weight: bold;
  text-transform: uppercase;
  color: #383838;
`;

const Description = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 300;
  opacity: 0.9;
`;

export default props => (
  <Card to={props.to}>
    <Img src={props.img} srcSet={`${props.img2x} 2x`} alt="reservations" />
    <Subtitle>
      {props.subtitle}
    </Subtitle>
    <Title>
      {props.title}
    </Title>
    <Description>
      {props.description}
    </Description>
  </Card>
);
