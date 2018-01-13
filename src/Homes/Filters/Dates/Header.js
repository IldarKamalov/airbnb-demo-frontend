import React from 'react';
import styled from 'styled-components';
import arrow from './arrow.svg';

const Header = styled.div`
  padding: 0 8px 6px;
  border-bottom: 0.5px solid rgba(72, 72, 72, 0.3);

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Days = styled.p`
  display: flex;
  justify-content: center;
  margin: 0;
`;

const Day = styled.span`
  padding: 0 12px;
  font-size: 12px;
  color: #636363;
`;

const Check = styled.div`
  margin-bottom: 20px;
`;

const Text = styled.span`
  padding: 2px 0;
  font-size: 18px;
  font-weight: 300;
  color: #636363;

  &:first-child {
    color: #0f7276;
    border-bottom: 1px solid #008489;
  }
`;

const Arrow = styled.img`
  margin: 0 15px;
`;

export default function () {
  return (
    <Header>
      <Check>
        <Text>Check in</Text>
        <Arrow src={arrow} />
        <Text>Check out</Text>
      </Check>
      <Days>
        <Day>Su</Day>
        <Day>Mo</Day>
        <Day>Tu</Day>
        <Day>We</Day>
        <Day>Th</Day>
        <Day>Fr</Day>
        <Day>Sa</Day>
      </Days>
    </Header>
  );
};
