import React from 'react';
import {Section, Title, All, Row} from './styled';

import {
  Card,
  Img as CardImg,
  Title as CardTitle,
  Subtitle as CardSubtitle,
  Description as CardDescription,
} from '../elements/Card';
import SliderArrow from '../elements/SliderArrow';

import chumleyImage from './reservations/chumley.png';
import chumleyImage2x from './reservations/chumley@2x.png';
import hanjanImage from './reservations/hanjan.png';
import hanjanImage2x from './reservations/hanjan@2x.png';
import primeImage from './reservations/prime.png';
import primeImage2x from './reservations/prime@2x.png';
import seapriceImage from './reservations/seaprice.png';
import seapriceImage2x from './reservations/seaprice@2x.png';

export default function Reservations () {
  return (
    <Section>
      <Title>
        Popular reservations around the world
        <All href="#!">See all</All>
      </Title>
      <SliderArrow />
      <Row scroll>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <Card>
            <CardImg
              src={chumleyImage}
              srcSet={chumleyImage2x + ' 2x'}
              alt="main"
            />
            <CardSubtitle>
              Speakeasy
            </CardSubtitle>
            <CardTitle>
              Chumley’s
            </CardTitle>
            <CardDescription price>
              About $60 per person
            </CardDescription>
          </Card>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <Card>
            <CardImg
              src={hanjanImage}
              srcSet={hanjanImage2x + ' 2x'}
              alt="main"
            />
            <CardSubtitle>
              Korean gastropub
            </CardSubtitle>
            <CardTitle>
              Hanjan
            </CardTitle>
            <CardDescription price>
              About $50 per person
            </CardDescription>
          </Card>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <Card>
            <CardImg
              src={primeImage}
              srcSet={primeImage2x + ' 2x'}
              alt="main"
            />
            <CardSubtitle>
              German american
            </CardSubtitle>
            <CardTitle>
              Prime Meats
            </CardTitle>
            <CardDescription price>
              About $55 per person
            </CardDescription>
          </Card>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <Card>
            <CardImg
              src={seapriceImage}
              srcSet={seapriceImage2x + ' 2x'}
              alt="main"
            />
            <CardSubtitle>
              Fine seafood
            </CardSubtitle>
            <CardTitle>
              Seaprice
            </CardTitle>
            <CardDescription price>
              About $70 per person
            </CardDescription>
          </Card>
        </div>
      </Row>
    </Section>
  );
}
