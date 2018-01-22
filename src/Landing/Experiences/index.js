import React from 'react';
import { Section, Title, All, Scroll } from '../styled';

import Card from './Card';
import SliderArrow from '../../UI/SliderArrow';

import forestImage from './forest.png';
import forestImage2x from './forest@2x.png';
import mountainImage from './mountain.png';
import mountainImage2x from './mountain@2x.png';
import salsaImage from './salsa.png';
import salsaImage2x from './salsa@2x.png';
import whaleImage from './whale.png';
import whaleImage2x from './whale@2x.png';

export default function Experiences () {
  return (
    <Section>
      <Title>
        Experiences
        <All to="/">See all</All>
      </Title>
      <SliderArrow />
      <Scroll>
        <div className="col-xs-6 col-md-4 col-lg-3">
          <Card
            to="/"
            img={forestImage}
            img2x={forestImage2x}
            price={29}
            title="Forest therapy"
            reviewsCount="44 reviews"
          />
        </div>
        <div className="col-xs-6 col-md-4 col-lg-3">
          <Card
            to="/"
            img={whaleImage}
            img2x={whaleImage2x}
            price={69}
            title="Whale watching"
            reviewsCount="46 reviews"
          />
        </div>
        <div className="col-xs-6 col-md-4 col-lg-3">
          <Card
            to="/"
            img={mountainImage}
            img2x={mountainImage2x}
            price={69}
            title="Table Mountain Summit, Cable Car Down"
            reviewsCount="44 reviews"
          />
        </div>
        <div className="col-xs-6 col-md-4 col-lg-3">
          <Card
            to="/"
            img={salsaImage}
            img2x={salsaImage2x}
            price={50}
            title="Salsa Night"
            reviewsCount="44 reviews"
          />
        </div>
      </Scroll>
    </Section>
  );
}
