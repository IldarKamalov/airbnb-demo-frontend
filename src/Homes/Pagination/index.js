import React from 'react';
import styled from 'styled-components';
import arrow from './arrow.svg';

const Wrap = styled.div`
  max-width: 265px;
  margin: 5px auto 30px;
  text-align: center;
`;

const Pages = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const Number = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  text-decoration: none;
  color: #0f7276;
  border-radius: 50%;

  ${props => props.current && `
    color: #fff;
    background-color: #008489;
  `}
`;

const Next = Number.extend`
  margin-left: 10px;
  background: url(${arrow}) no-repeat 13px 10px;
  background-size: 6px 10px;
  border: solid 1px #008489;
`;

const Total = styled.p`
  margin: 0;
  font-size: 16px;
  color: #383838;
`;

export default props => {
  return (
    <div>
      <Wrap>
        <Pages>
          <Number to="/homes" current={true}>1</Number>
          <Number to="/homes">2</Number>
          <Number to="/homes">3</Number>
          <Number to="/homes">...</Number>
          <Number to="/homes">17</Number>
          <Next to="/homes" />
        </Pages>
        <Total>
          1 – 18 of 300+ Rentals
        </Total>
      </Wrap>
    </div>
  );
}
