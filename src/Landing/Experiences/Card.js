import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Stars from '../../UI/Rating';

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
  font-weight: 300;
  line-height: 1.4;
  text-overflow: ellipsis;
  color: #383838;
  white-space: nowrap;
  overflow: hidden;
  
  &:last-child {
    margin-bottom: 0;
  }
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

export default props => (
  <Card to={props.href}>
    <Img src={props.img} srcSet={`${props.img2x} 2x`} alt="homes" />
    <Title>
      <Price>
        {props.price}
      </Price>
      {props.title}
    </Title>
    <Rating>
      <Stars five />
      <Review>
        {props.reviewsCount}
      </Review>
    </Rating>
  </Card>
);
