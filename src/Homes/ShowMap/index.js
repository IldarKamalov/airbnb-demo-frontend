import React, { Component } from 'react';
import styled from 'styled-components';
import locationIcon from './location.svg';

const Location = styled.button`
  position: fixed;
  right: 10px;
  bottom: 25px;
  width: 40px;
  height: 40px;
  background: #fff url(${locationIcon}) no-repeat center center;
  background-size: 16px 20px;
  box-shadow: 0 2px 4px 0 rgba(72, 72, 72, 0.16);
  border: solid 1px rgba(72, 72, 72, 0.16);
  border-radius: 50%;
  outline: 0;

  @media screen and (min-width: 992px) {
    display: none;
  }
`;

export default class ShowMap extends Component {
  render () {
    return <Location />;
  }
}
