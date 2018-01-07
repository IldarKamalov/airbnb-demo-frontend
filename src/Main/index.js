import React from 'react';
import Content from './styled';
import Explore from './Explore';
import Experiences from './Experiences';
import Homes from './Homes';
import Reservations from './Reservations';
import Destinations from './Destinations';

export default function () {
  return (
    <div className="container">
      <Content>
        <Explore />
        <Experiences />
        <Homes />
        <Reservations />
        <Destinations />
      </Content>
    </div>
  );
}
