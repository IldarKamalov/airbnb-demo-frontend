import React from 'react';
import {Content, Section, Title, All} from './styled';

import {
  Card,
  CardImg,
  CardTitle,
  CardPrice,
  CardRating,
  CardReview,
  CardDivider,
  CardDescription,
} from '../elements/Card';
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
      <div className="row row--overflow">
        <div className="col-sm-8 col-md-5 col-lg-4">
          <Card>
            <CardImg
              src={firstHomeImage}
              srcSet={firstHomeImage2x + ' 2x'}
              alt="main"
            />
            <CardTitle>
              <CardPrice>$82</CardPrice>
              La Salentina, see, nature & relax
            </CardTitle>
            <CardDescription>
              Entire house
              <CardDivider> · </CardDivider>
              9 beds
            </CardDescription>
            <CardRating>
              <Rating five />
              <CardReview>
                97
                <CardDivider> · </CardDivider>
                Superhost
              </CardReview>
            </CardRating>
          </Card>
        </div>
        <div className="col-sm-8 col-md-5 col-lg-4">
          <Card>
            <CardImg
              src={secondHomeImage}
              srcSet={secondHomeImage2x + ' 2x'}
              alt="main"
            />
            <CardTitle>
              <CardPrice>$82</CardPrice>
              Your private 3 bedr. riad and exclusive
            </CardTitle>
            <CardDescription>
              Entire house
              <CardDivider> · </CardDivider>
              5 beds
            </CardDescription>
            <CardRating>
              <Rating five />
              <CardReview>
                97
                <CardDivider> · </CardDivider>
                Superhost
              </CardReview>
            </CardRating>
          </Card>
        </div>
        <div className="col-sm-8 col-md-5 col-lg-4">
          <Card>
            <CardImg
              src={thirdHomeImage}
              srcSet={thirdHomeImage2x + ' 2x'}
              alt="main"
            />
            <CardTitle>
              <CardPrice>$200</CardPrice>
              Dreamy Tropical Tree House
            </CardTitle>
            <CardDescription>
              Entire treehouse
              <CardDivider> · </CardDivider>
              1 bed
            </CardDescription>
            <CardRating>
              <Rating five />
              <CardReview>
                197
                <CardDivider> · </CardDivider>
                Superhost
              </CardReview>
            </CardRating>
          </Card>
        </div>
      </div>
    </Section>
  );
}
