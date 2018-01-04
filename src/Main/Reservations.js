import React from 'react';
import {Content, Section, Title} from './styled';

import {
  Card,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardPrice,
  CardRating,
  CardReview,
  CardDivider,
  CardDescription,
} from '../elements/Card';

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
      </Title>
      <div className="row row--overflow">
        <div className="col-xs-3">
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
        <div className="col-xs-3">
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
        <div className="col-xs-3">
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
        <div className="col-xs-3">
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
      </div>
    </Section>
  );
}