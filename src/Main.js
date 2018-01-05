import React from 'react';
import Content from './Main/styled';
import Explore from './Main/Explore';
import Experiences from './Main/Experiences';
import Homes from './Main/Homes';
import Reservations from './Main/Reservations';
import Destinations from './Main/Destinations';

export default function () {
  return (
    <Content>
      <Explore />
      <Experiences />
      <Homes />
      <Reservations />
      <Destinations />
    </Content>
  );
}
