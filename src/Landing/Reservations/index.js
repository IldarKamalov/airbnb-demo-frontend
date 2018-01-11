import React from 'react';
import { Section, Title, All, Scroll } from '../styled';

import Card from './Card';
import SliderArrow from '../../UI/SliderArrow';

import chumleyImage from './chumley.png';
import chumleyImage2x from './chumley@2x.png';
import hanjanImage from './hanjan.png';
import hanjanImage2x from './hanjan@2x.png';
import primeImage from './prime.png';
import primeImage2x from './prime@2x.png';
import seapriceImage from './seaprice.png';
import seapriceImage2x from './seaprice@2x.png';

export default function Reservations () {
  return (
    <Section>
      <Title>
        Popular reservations around the world
        <All to="/">See all</All>
      </Title>
      <SliderArrow />
      <Scroll>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <Card
            href="/"
            img={chumleyImage}
            img2x={chumleyImage2x}
            title="Chumley’s"
            subtitle="Speakeasy"
            description="About $60 per person"
          />
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <Card
            href="/"
            img={hanjanImage}
            img2x={hanjanImage2x}
            title="Hanjan"
            subtitle="Korean gastropub"
            description="About $50 per person"
          />
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <Card
            href="/"
            img={primeImage}
            img2x={primeImage2x}
            title="Prime Meats"
            subtitle="German american"
            description="About $55 per person"
          />
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <Card
            href="/"
            img={seapriceImage}
            img2x={seapriceImage2x}
            title="Seaprice"
            subtitle="Fine seafood"
            description="About $70 per person"
          />
        </div>
      </Scroll>
    </Section>
  );
}
