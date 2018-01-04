import React from 'react';
import {Content, Section, Title} from './styled';
import Rating from '../elements/Rating';
import {
  Category,
  CategoryImg,
  CategoryTitle,
  CategoryDescription,
} from '../elements/Category';

import homeImage from './explore/home.png';
import homeImage2x from './explore/home@2x.png';
import experiencesImage from './explore/experiences.png';
import experiencesImage2x from './explore/experiences@2x.png';
import restaurantsImage from './explore/restaurants.png';
import restaurantsImage2x from './explore/restaurants@2x.png';

export default function Explore () {
  return (
    <Section>
      <Title>
        Explore Airbnb
      </Title>
      <div className="row row--overflow">
        <div className="col-xs col-sm col-md-5 col-lg-4">
          <Category>
            <CategoryImg
              src={homeImage}
              srcSet={homeImage2x + ' 2x'}
              alt="main"
            />
            <CategoryDescription>
              <CategoryTitle>Homes</CategoryTitle>
            </CategoryDescription>
          </Category>
        </div>
        <div className="col-xs col-sm col-md-5 col-lg-4">
          <Category>
            <CategoryImg
              src={experiencesImage}
              srcSet={experiencesImage2x + ' 2x'}
              alt="main"
            />
            <CategoryDescription>
              <CategoryTitle>Experiences</CategoryTitle>
            </CategoryDescription>
          </Category>
        </div>
        <div className="col-xs col-sm col-md-5 col-lg-4">
          <Category>
            <CategoryImg
              src={restaurantsImage}
              srcSet={restaurantsImage2x + ' 2x'}
              alt="main"
            />
            <CategoryDescription>
              <CategoryTitle>Restaurants</CategoryTitle>
            </CategoryDescription>
          </Category>
        </div>
      </div>
    </Section>
  );
}
