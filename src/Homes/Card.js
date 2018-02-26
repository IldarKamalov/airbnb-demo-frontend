import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import times from 'lodash/times';
import Stars from '../UI/Rating';

const Card = styled(Link)`
  display: block;
  margin: 0 auto 25px;
  max-width: 100%;
  text-decoration: none;
  color: #383838;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

const Img = styled.img`
  display: block;
  width: 100%;
  max-width: 100%;
  margin-bottom: 8px;
`;

const Title = styled.p`
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

const Price = styled.strong`
  padding-right: 5px;
  font-weight: bold;
`;

const Rating = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
`;

const Review = styled.span`
  margin-left: 7px;
  font-size: 12px;
  line-height: 1;
`;

const Description = styled.p`
  margin: 0 0 7px 0;
  font-size: 15px;
  font-weight: 300;
`;

const Divider = styled.span`
  padding: 0 5px;
`;

const Superhost = styled.span``;

const homeType = {
  entire_home: 'Entire home',
  private_room: 'Private room',
  shared_room: 'Shared room',
};

export default props => (
  <Card to={props.to}>
    <Img src={props.img} alt="homes" />
    <Title>
      <Price>
        ${props.price}
      </Price>
      {props.title}
    </Title>
    <Description>
      {homeType[props.kind]}
      <Divider>·</Divider>
      {props.beds} {props.beds > 1 ? 'beds' : 'bed'}
    </Description>
    <Rating>
      {times(Number(props.rating), () => <Stars />)}
      <Review>
        {props.reviewsCount}
        {props.isSuperhost &&
          <Superhost>
            <Divider>·</Divider>Superhost
          </Superhost>
        }
      </Review>
    </Rating>
  </Card>
);
