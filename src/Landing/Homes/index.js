import React from 'react';
import { Section, Title, All, Scroll } from '../styled';

import Card from '../../Homes/Card';
import SliderArrow from '../../UI/SliderArrow';

import firstHomeImage from './first.png';
import firstHomeImage2x from './first@2x.png';
import secondHomeImage from './second.png';
import secondHomeImage2x from './second@2x.png';
import thirdHomeImage from './third.png';
import thirdHomeImage2x from './third@2x.png';

export default function Homes () {
  return (
    <Section>
      <Title>
        Homes
        <All to="/homes">See all</All>
      </Title>
      <SliderArrow />
      <Scroll>
        <div className="col-sm-8 col-md-5 col-lg-4">
          <Card
            to="/homes"
            img={firstHomeImage}
            img2x={firstHomeImage2x}
            price={82}
            title="La Salentina, see, nature & relax"
            homeType="Entire house"
            beds="9 beds"
            reviewsCount="97"
            reviewsType="Superhost"
          />
        </div>
        <div className="col-sm-8 col-md-5 col-lg-4">
          <Card
            to="/homes"
            img={secondHomeImage}
            img2x={secondHomeImage2x}
            price={82}
            title="Your private 3 bedr. riad and exclusive something"
            homeType="Entire house"
            beds="5 beds"
            reviewsCount="161"
            reviewsType="Superhost"
          />
        </div>
        <div className="col-sm-8 col-md-5 col-lg-4">
          <Card
            to="/homes"
            img={thirdHomeImage}
            img2x={thirdHomeImage2x}
            price={200}
            title="Dreamy Tropical Tree House"
            homeType="Entire treehouse"
            beds="1 bed"
            reviewsCount="364"
            reviewsType="Superhost"
          />
        </div>
      </Scroll>
    </Section>
  );
}
