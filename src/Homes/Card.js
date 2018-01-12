import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Stars from '../UI/Rating';

export const Card = styled(Link)`
  display: block;
  margin: 0 auto 25px;
  max-width: 100%;
  text-decoration: none;
  color: #383838;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
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

export const Subtitle = styled.p`
  margin: 0 0 2px 0;
  font-size: 10px;
  font-weight: bold;
  text-transform: uppercase;
  color: #383838;
`;

export const Price = styled.strong`
  padding-right: 5px;
  font-weight: bold;
`;

export const Rating = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
`;

export const Review = styled.span`
  margin-left: 6px;
  font-size: 12px;
`;

export const Description = styled.p`
  margin: 0 0 7px 0;
  font-size: 15px;
  font-weight: 300;
`;

export const Divider = styled.span`
  padding: 0 5px;
`;

export default props => (
  <Card to={props.to}>
    <Img src={props.img} srcSet={`${props.img2x} 2x`} alt="homes" />
    <Title>
      <Price>
        ${props.price}
      </Price>
      {props.title}
    </Title>
    <Description>
      {props.homeType}
      <Divider>·</Divider>
      {props.beds}
    </Description>
    <Rating>
      <Stars five />
      <Review>
        {props.reviewsCount}
        <Divider>·</Divider>
        {props.reviewsType}
      </Review>
    </Rating>
  </Card>
);