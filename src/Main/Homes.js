import React from 'react';
import {Section, Title, All, Row} from './styled';

import {
  Card,
  Img as CardImg,
  Title as CardTitle,
  Price as CardPrice,
  Rating as CardRating,
  Review as CardReview,
  Divider as CardDivider,
  Description as CardDescription,
} from '../elements/Card';
import Rating from '../elements/Rating';
import SliderArrow from '../elements/SliderArrow';

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
      <SliderArrow />
      <Row scroll>
        <div className="col-sm-8 col-md-5 col-lg-4">
          <Card>
            <CardImg
              src={firstHomeImage}
              srcSet={firstHomeImage2x + ' 2x'}
              alt="main"
            />
            <CardTitle ellipsis>
              <CardPrice>$82</CardPrice>
              La Salentina, see, nature & relax
            </CardTitle>
            <CardDescription>
              Entire house
              <CardDivider>·</CardDivider>
              9 beds
            </CardDescription>
            <CardRating>
              <Rating five />
              <CardReview>
                97
                <CardDivider>·</CardDivider>
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
            <CardTitle ellipsis>
              <CardPrice>$82</CardPrice>
              Your private 3 bedr. riad and exclusive
            </CardTitle>
            <CardDescription>
              Entire house
              <CardDivider>·</CardDivider>
              5 beds
            </CardDescription>
            <CardRating>
              <Rating five />
              <CardReview>
                97
                <CardDivider>·</CardDivider>
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
            <CardTitle ellipsis>
              <CardPrice>$200</CardPrice>
              Dreamy Tropical Tree House
            </CardTitle>
            <CardDescription>
              Entire treehouse
              <CardDivider>·</CardDivider>
              1 bed
            </CardDescription>
            <CardRating>
              <Rating five />
              <CardReview>
                197
                <CardDivider>·</CardDivider>
                Superhost
              </CardReview>
            </CardRating>
          </Card>
        </div>
      </Row>
    </Section>
  );
}
