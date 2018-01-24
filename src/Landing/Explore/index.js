import React from 'react';
import { Section, Title, Scroll } from '../styled';
import Category from './Category';

import homeImage from './home.png';
import homeImage2x from './home@2x.png';
import experiencesImage from './experiences.png';
import experiencesImage2x from './experiences@2x.png';
import restaurantsImage from './restaurants.png';
import restaurantsImage2x from './restaurants@2x.png';

export default function Explore() {
  return (
    <Section>
      <Title>
        Explore Airbnb
      </Title>
      <Scroll>
        <div className="col-xs-6 col-md-5 col-lg-4">
          <Category
            to="/homes"
            img={homeImage}
            img2x={homeImage2x}
            name="Homes"
          />
        </div>
        <div className="col-xs-6 col-md-5 col-lg-4">
          <Category
            to="/"
            img={experiencesImage}
            img2x={experiencesImage2x}
            name="Experiences"
          />
        </div>
        <div className="col-xs-6 col-md-5 col-lg-4">
          <Category
            to="/"
            img={restaurantsImage}
            img2x={restaurantsImage2x}
            name="Restaurants"
          />
        </div>
      </Scroll>
    </Section>
  );
}
