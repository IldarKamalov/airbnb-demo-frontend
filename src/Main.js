import React from 'react';
import {Content, Section, Title, All} from './Main/styled';
import Rating from './elements/Rating';
import {
  Category,
  CategoryImg,
  CategoryTitle,
  CategoryDescription,
} from './elements/Category';
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
