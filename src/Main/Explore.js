import React from 'react';
import styled from 'styled-components';
import { Section, Title, Scroll } from './styled';

import homeImage from './explore/home.png';
import homeImage2x from './explore/home@2x.png';
import experiencesImage from './explore/experiences.png';
import experiencesImage2x from './explore/experiences@2x.png';
import restaurantsImage from './explore/restaurants.png';
import restaurantsImage2x from './explore/restaurants@2x.png';

const Category = styled.a`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: #383838;
  box-shadow: 0 2px 4px 0 rgba(72, 72, 72, 0.08);

  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 100%;
  }
`;

const Img = styled.img`
  display: block;
  width: 100%;
  max-width: 100%;
  position: relative;
  border-radius: 4px 4px 0 0;

  @media screen and (min-width: 768px) {
    width: auto;
    border-radius: 4px 0 0 4px;
  }
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 12px;
  border-radius: 0 0 4px 4px;
  border: solid 1px rgba(72, 72, 72, 0.2);
  border-top: 0;

  @media screen and (min-width: 768px) {
    font-size: 17px;
    border-radius: 0 4px 4px 0;
    border: solid 1px rgba(72, 72, 72, 0.2);
    border-left: 0;
  }
`;

const Name = styled.p`
  width: 100%;
  margin: 0;
  padding: 12px 12px 13px 12px;

  @media screen and (min-width: 768px) {
    padding-left: 24px;
  }
`;

export default function Explore () {
  return (
    <Section>
      <Title>
        Explore Airbnb
      </Title>
      <Scroll>
        <div className="col-xs-6 col-md-5 col-lg-4">
          <Category href="#!">
            <Img src={homeImage} srcSet={homeImage2x + ' 2x'} alt="main" />
            <Wrap>
              <Name>Homes</Name>
            </Wrap>
          </Category>
        </div>
        <div className="col-xs-6 col-md-5 col-lg-4">
          <Category href="#!">
            <Img
              src={experiencesImage}
              srcSet={experiencesImage2x + ' 2x'}
              alt="main"
            />
            <Wrap>
              <Name>Experiences</Name>
            </Wrap>
          </Category>
        </div>
        <div className="col-xs-6 col-md-5 col-lg-4">
          <Category href="#!">
            <Img
              src={restaurantsImage}
              srcSet={restaurantsImage2x + ' 2x'}
              alt="main"
            />
            <Wrap>
              <Name>Restaurants</Name>
            </Wrap>
          </Category>
        </div>
      </Scroll>
    </Section>
  );
}
