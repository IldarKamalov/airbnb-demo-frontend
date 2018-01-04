import React from 'react';
import {Content, Section, Title, All} from './styled';
import Rating from '../elements/Rating';

import firstHomeImage from './homes/first.png';
import firstHomeImage2x from './homes/first@2x.png';
import secondHomeImage from './homes/second.png';
import secondHomeImage2x from './homes/second@2x.png';
import thirdHomeImage from './homes/third.png';
import thirdHomeImage2x from './homes/third@2x.png';

export default function Homes () {
  return (
    <Section>
      <Title>
        Homes
        <All href="#!">See all</All>
      </Title>
      <div className="row">
        <div className="col-xs-4">
          <div className="card">
            <img
              src={firstHomeImage}
              srcSet={firstHomeImage2x + ' 2x'}
              alt="main"
              className="card__image"
            />
            <div className="card__title card__title--bold">
              <strong className="card__price">$82</strong>
              La Salentina, see, nature & relax
            </div>
            <div className="card__description">
              <span className="card__description-item">
                Entire house
              </span>
              <span className="card__description-item">
                9 beds
              </span>
            </div>
            <div className="card__rating">
              <Rating five />
              <div className="card__reviews">
                <span className="card__reviews-item">
                  97
                </span>
                <span className="card__reviews-item">
                  Superhost
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-4">
          <div className="card">
            <img
              src={secondHomeImage}
              srcSet={secondHomeImage2x + ' 2x'}
              alt="main"
              className="card__image"
            />
            <div className="card__title card__title--bold">
              <strong className="card__price">$82</strong>
              Your private 3 bedr. riad and exclusi…
            </div>
            <div className="card__description">
              <span className="card__description-item">
                Entire house
              </span>
              <span className="card__description-item">
                5 beds
              </span>
            </div>
            <div className="card__rating">
              <Rating five />
              <div className="card__reviews">
                <span className="card__reviews-item">
                  97
                </span>
                <span className="card__reviews-item">
                  Superhost
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-4">
          <div className="card">
            <img
              src={thirdHomeImage}
              srcSet={thirdHomeImage2x + ' 2x'}
              alt="main"
              className="card__image"
            />
            <div className="card__title card__title--bold">
              <strong className="card__price">$200</strong>
              Dreamy Tropical Tree House
            </div>
            <div className="card__description">
              <span className="card__description-item">
                Entire treehouse
              </span>
              <span className="card__description-item">
                1 bed
              </span>
            </div>
            <div className="card__rating">
              <Rating five />
              <div className="card__reviews">
                <span className="card__reviews-item">
                  97
                </span>
                <span className="card__reviews-item">
                  Superhost
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
