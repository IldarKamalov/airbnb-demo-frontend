import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
  margin: 0 0 80px;
  text-align: center;
  line-height: 1.4;
  color: #636363;

  @media screen and (min-width: 768px) {
    margin-bottom: 25px;
  }
`;

export default function () {
  return (
    <Text>
      Enter dates to see full pricing. Additional fees apply. Taxes may be added.
    </Text>
  );
}
