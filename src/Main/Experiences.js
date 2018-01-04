import React from 'react';
import {Content, Section, Title, All} from './styled';

import {
  Card,
  CardImg,
  CardTitle,
  CardPrice,
  CardRating,
  CardReview,
} from '../elements/Card';
import Rating from '../elements/Rating';

import forestImage from './experiences/forest.png';
import forestImage2x from './experiences/forest@2x.png';
import mountainImage from './experiences/mountain.png';
import mountainImage2x from './experiences/mountain@2x.png';
import salsaImage from './experiences/salsa.png';
import salsaImage2x from './experiences/salsa@2x.png';
import whaleImage from './experiences/whale.png';
import whaleImage2x from './experiences/whale@2x.png';

export default function Experiences () {
  return (
    <Section>
      <Title>
        Experiences
        <All href="#!">See all</All>
      </Title>
      <div className="row row--overflow">
        <div className="col-sm-6 col-md-4 col-lg-3">
          <Card>
            <CardImg
              src={forestImage}
              srcSet={forestImage2x + ' 2x'}
              alt="main"
            />
            <CardTitle light>
              <CardPrice>$29</CardPrice>
              Paris
            </CardTitle>
            <CardRating>
              <Rating five />
              <CardReview>44 reviews</CardReview>
            </CardRating>
          </Card>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <Card>
            <CardImg
              src={whaleImage}
              srcSet={whaleImage2x + ' 2x'}
              alt="main"
            />
            <CardTitle light>
              <CardPrice>$69</CardPrice>
              Whale watching
            </CardTitle>
            <CardRating>
              <Rating five />
              <CardReview>46 reviews</CardReview>
            </CardRating>
          </Card>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <Card>
            <CardImg
              src={mountainImage}
              srcSet={mountainImage2x + ' 2x'}
              alt="main"
            />
            <CardTitle light>
              <CardPrice>$69</CardPrice>
              Table Mountain Summit, Cable Car Down
            </CardTitle>
            <CardRating>
              <Rating five />
              <CardReview>44 reviews</CardReview>
            </CardRating>
          </Card>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <Card>
            <CardImg
              src={salsaImage}
              srcSet={salsaImage2x + ' 2x'}
              alt="main"
            />
            <CardTitle light>
              <CardPrice>$50</CardPrice>
              Salsa Night
            </CardTitle>
            <CardRating>
              <Rating five />
              <CardReview>44 reviews</CardReview>
            </CardRating>
          </Card>
        </div>
      </div>
    </Section>
  );
}
