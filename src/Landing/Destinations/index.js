import React from 'react';
import { Section, Title, Scroll } from '../styled';
import Card from './Card';
import SliderArrow from '../../UI/SliderArrow';

import capeTownImage from './capeTown.png';
import capeTownImage2x from './capeTown@2x.png';
import losAngelesImage from './losAngeles.png';
import losAngelesImage2x from './losAngeles@2x.png';
import miamiImage from './miami.png';
import miamiImage2x from './miami@2x.png';
import parisImage from './paris.png';
import parisImage2x from './paris@2x.png';
import seoulImage from './seoul.png';
import seoulImage2x from './seoul@2x.png';
import tokyoImage from './tokyo.png';
import tokyoImage2x from './tokyo@2x.png';

const DestinationsArrow = SliderArrow.extend`
  margin-top: 0;
`;

export default function () {
  return (
    <Section>
      <Title>
        Featured destinations
      </Title>
      <DestinationsArrow />
      <Scroll>
        <div className="col-sm-4 col-md-3 col-lg-2">
          <Card
            to="/"
            img={parisImage}
            img2x={parisImage2x}
            title="Paris"
          />
        </div>
        <div className="col-sm-4 col-md-3 col-lg-2">
          <Card
            to="/"
            img={miamiImage}
            img2x={miamiImage2x}
            title="Miami"
          />
        </div>
        <div className="col-sm-4 col-md-3 col-lg-2">
          <Card
            to="/"
            img={tokyoImage}
            img2x={tokyoImage2x}
            title="Tokyo"
          />
        </div>
        <div className="col-sm-4 col-md-3 col-lg-2">
          <Card
            to="/"
            img={capeTownImage}
            img2x={capeTownImage2x}
            title="Cape town"
          />
        </div>
        <div className="col-sm-4 col-md-3 col-lg-2">
          <Card
            to="/"
            img={seoulImage}
            img2x={seoulImage2x}
            title="Seoul"
          />
        </div>
        <div className="col-sm-4 col-md-3 col-lg-2">
          <Card
            to="/"
            img={losAngelesImage}
            img2x={losAngelesImage2x}
            title="Los Angeles"
          />
        </div>
      </Scroll>
    </Section>
  );
}
