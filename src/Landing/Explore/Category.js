import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Category = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: #383838;
  box-shadow: 0 2px 4px 0 rgba(72, 72, 72, 0.08);

  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 100%;
  }
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  max-width: 100%;
  position: relative;
  border-radius: 4px 4px 0 0;

  @media screen and (min-width: 768px) {
    width: auto;
    border-radius: 4px 0 0 4px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 12px;
  border-radius: 0 0 4px 4px;
  border: solid 1px rgba(72, 72, 72, 0.2);
  border-top: 0;

  @media screen and (min-width: 768px) {
    font-size: 17px;
    border-radius: 0 4px 4px 0;
    border: solid 1px rgba(72, 72, 72, 0.2);
    border-left: 0;
  }
`;

export const Name = styled.p`
  width: 100%;
  margin: 0;
  padding: 12px 12px 13px 12px;

  @media screen and (min-width: 768px) {
    padding-left: 24px;
  }
`;

export default props => (
  <Category to={props.href}>
    <Img src={props.img} srcSet={`${props.img2x} 2x`} alt="explore" />
    <Wrap>
      <Name>
        {props.name}
      </Name>
    </Wrap>
  </Category>
);
