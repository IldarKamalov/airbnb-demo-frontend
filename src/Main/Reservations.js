import React from 'react';
import {Content, Section, Title} from './styled';

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
      <div className="row">
        <div className="col-xs-3">
          <div className="card">
            <img
              src={chumleyImage}
              srcSet={chumleyImage2x + ' 2x'}
              alt="main"
              className="card__image"
            />
            <div className="card__subtitle">
              Speakeasy
            </div>
            <div className="card__title">
              Chumley’s
            </div>
            <div className="card__description card__description--price">
              About $60 per person
            </div>
          </div>
        </div>
        <div className="col-xs-3">
          <div className="card">
            <img
              src={hanjanImage}
              srcSet={hanjanImage2x + ' 2x'}
              alt="main"
              className="card__image"
            />
            <div className="card__subtitle">
              Speakeasy
            </div>
            <div className="card__title">
              Chumley’s
            </div>
            <div className="card__description card__description--price">
              About $60 per person
            </div>
          </div>
        </div>
        <div className="col-xs-3">
          <div className="card">
            <img
              src={primeImage}
              srcSet={primeImage2x + ' 2x'}
              alt="main"
              className="card__image"
            />
            <div className="card__subtitle">
              Korean gastropub
            </div>
            <div className="card__title">
              Chumley’s
            </div>
            <div className="card__description card__description--price">
              About $60 per person
            </div>
          </div>
        </div>
        <div className="col-xs-3">
          <div className="card">
            <img
              src={seapriceImage}
              srcSet={seapriceImage2x + ' 2x'}
              alt="main"
              className="card__image"
            />
            <div className="card__subtitle">
              Speakeasy
            </div>
            <div className="card__title">
              Chumley’s
            </div>
            <div className="card__description card__description--price">
              About $60 per person
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
