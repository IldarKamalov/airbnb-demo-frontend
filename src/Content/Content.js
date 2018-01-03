import React from 'react';

import homeImage from './explore/home.png';
import homeImage2x from './explore/home@2x.png';
import experiencesImage from './explore/experiences.png';
import experiencesImage2x from './explore/experiences@2x.png';
import restaurantsImage from './explore/restaurants.png';
import restaurantsImage2x from './explore/restaurants@2x.png';

import forestImage from './experiences/forest.png';
import forestImage2x from './experiences/forest@2x.png';
import mountainImage from './experiences/mountain.png';
import mountainImage2x from './experiences/mountain@2x.png';
import salsaImage from './experiences/salsa.png';
import salsaImage2x from './experiences/salsa@2x.png';
import whaleImage from './experiences/whale.png';
import whaleImage2x from './experiences/whale@2x.png';

import firstHomeImage from './homes/first.png';
import firstHomeImage2x from './homes/first@2x.png';
import secondHomeImage from './homes/second.png';
import secondHomeImage2x from './homes/second@2x.png';
import thirdHomeImage from './homes/third.png';
import thirdHomeImage2x from './homes/third@2x.png';

import chumleyImage from './reservations/chumley.png';
import chumleyImage2x from './reservations/chumley@2x.png';
import hanjanImage from './reservations/hanjan.png';
import hanjanImage2x from './reservations/hanjan@2x.png';
import primeImage from './reservations/prime.png';
import primeImage2x from './reservations/prime@2x.png';
import seapriceImage from './reservations/seaprice.png';
import seapriceImage2x from './reservations/seaprice@2x.png';

import capeTownImage from './destinations/capeTown.png';
import capeTownImage2x from './destinations/capeTown@2x.png';
import losAngelesImage from './destinations/losAngeles.png';
import losAngelesImage2x from './destinations/losAngeles@2x.png';
import miamiImage from './destinations/miami.png';
import miamiImage2x from './destinations/miami@2x.png';
import parisImage from './destinations/paris.png';
import parisImage2x from './destinations/paris@2x.png';
import seoulImage from './destinations/seoul.png';
import seoulImage2x from './destinations/seoul@2x.png';
import tokyoImage from './destinations/tokyo.png';
import tokyoImage2x from './destinations/tokyo@2x.png';

export default function () {
  return (
    <div className="content">
      <div className="content__section">
        <div className="content__title">
          Explore Airbnb
        </div>
        <div className="content__cards">
          <div className="row">
            <div className="col-xs-4">
              <div className="card card--horizontal">
                <img
                  src={homeImage}
                  srcSet={homeImage2x + ' 2x'}
                  alt="image"
                  className="card__image"
                />
                <img src="" alt="" className="card__image" />
                <div className="card__title">
                  Homes
                </div>
              </div>
            </div>
            <div className="col-xs-4">
              <div className="card card--horizontal">
                <img
                  src={experiencesImage}
                  srcSet={experiencesImage2x + ' 2x'}
                  alt="image"
                  className="card__image"
                />
                <div className="card__title">
                  Experiences
                </div>
              </div>
            </div>
            <div className="col-xs-4">
              <div className="card card--horizontal">
                <img
                  src={restaurantsImage}
                  srcSet={restaurantsImage2x + ' 2x'}
                  alt="image"
                  className="card__image"
                />
                <div className="card__title">
                  Restaurants
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="content__section">
        <div className="content__title">
          Experiences
        </div>
        <div className="content__cards">
          <div className="row">
            <div className="col-xs-3">
              <div className="card">
                <img
                  src={forestImage}
                  srcSet={forestImage2x + ' 2x'}
                  alt="image"
                  className="card__image"
                />
                <div className="card__title">
                  <strong className="card__price">$29</strong>
                  Forest therapy
                </div>
                <div className="card__rating">
                  <div className="rating rating--5stars" />
                  <div className="card__reviews">44 reviews</div>
                </div>
              </div>
            </div>
            <div className="col-xs-3">
              <div className="card">
                <img
                  src={mountainImage}
                  srcSet={mountainImage2x + ' 2x'}
                  alt="image"
                  className="card__image"
                />
                <div className="card__title">
                  <strong className="card__price">$29</strong>
                  Forest therapy
                </div>
                <div className="card__rating">
                  <div className="rating rating--5stars" />
                  <div className="card__reviews">44 reviews</div>
                </div>
              </div>
            </div>
            <div className="col-xs-3">
              <div className="card">
                <img
                  src={salsaImage}
                  srcSet={salsaImage2x + ' 2x'}
                  alt="image"
                  className="card__image"
                />
                <div className="card__title">
                  <strong className="card__price">$29</strong>
                  Forest therapy
                </div>
                <div className="card__rating">
                  <div className="rating rating--5stars" />
                  <div className="card__reviews">44 reviews</div>
                </div>
              </div>
            </div>
            <div className="col-xs-3">
              <div className="card">
                <img
                  src={whaleImage}
                  srcSet={whaleImage2x + ' 2x'}
                  alt="image"
                  className="card__image"
                />
                <div className="card__title">
                  <strong className="card__price">$29</strong>
                  Forest therapy
                </div>
                <div className="card__rating">
                  <div className="rating rating--5stars" />
                  <div className="card__reviews">44 reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content__section">
        <div className="content__title">
          Homes
        </div>
        <div className="content__cards">
          <div className="row">
            <div className="col-xs-4">
              <div className="card">
                <img
                  src={firstHomeImage}
                  srcSet={firstHomeImage2x + ' 2x'}
                  alt="image"
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
                  <div className="rating rating--5stars" />
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
                  alt="image"
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
                  <div className="rating rating--5stars" />
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
                  alt="image"
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
                  <div className="rating rating--5stars" />
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
        </div>
      </div>

      <div className="content__section">
        <div className="content__title">
          Popular reservations around the world
        </div>
        <div className="content__cards">
          <div className="row">
            <div className="col-xs-3">
              <div className="card">
                <img
                  src={chumleyImage}
                  srcSet={chumleyImage2x + ' 2x'}
                  alt="image"
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
                  alt="image"
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
                  alt="image"
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
                  src={seapriceImage}
                  srcSet={seapriceImage2x + ' 2x'}
                  alt="image"
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
        </div>
      </div>

      <div className="content__section">
        <div className="content__title">
          Featured destinations
        </div>
        <div className="content__cards">
          <div className="row">
            <div className="col-xs-2">
              <div className="card">
                <img
                  src={parisImage}
                  srcSet={parisImage2x + ' 2x'}
                  alt="image"
                  className="card__image"
                />
                <div className="card__title card__title--bold card__title--small">
                  Paris
                </div>
              </div>
            </div>
            <div className="col-xs-2">
              <div className="card">
                <img
                  src={miamiImage}
                  srcSet={miamiImage2x + ' 2x'}
                  alt="image"
                  className="card__image"
                />
                <div className="card__title card__title--bold card__title--small">
                  Miami
                </div>
              </div>
            </div>
            <div className="col-xs-2">
              <div className="card">
                <img
                  src={tokyoImage}
                  srcSet={tokyoImage2x + ' 2x'}
                  alt="image"
                  className="card__image"
                />
                <div className="card__title card__title--bold card__title--small">
                  Tokyo
                </div>
              </div>
            </div>
            <div className="col-xs-2">
              <div className="card">
                <img
                  src={capeTownImage}
                  srcSet={capeTownImage2x + ' 2x'}
                  alt="image"
                  className="card__image"
                />
                <div className="card__title card__title--bold card__title--small">
                  Cape town
                </div>
              </div>
            </div>
            <div className="col-xs-2">
              <div className="card">
                <img
                  src={seoulImage}
                  srcSet={seoulImage2x + ' 2x'}
                  alt="image"
                  className="card__image"
                />
                <div className="card__title card__title--bold card__title--small">
                  Seoul
                </div>
              </div>
            </div>
            <div className="col-xs-2">
              <div className="card">
                <img
                  src={losAngelesImage}
                  srcSet={losAngelesImage2x + ' 2x'}
                  alt="image"
                  className="card__image"
                />
                <div className="card__title card__title--bold card__title--small">
                  Los Angeles
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
