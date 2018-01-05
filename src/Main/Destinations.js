import React from 'react';
import {Section, Title, Row} from './styled';
import {Card, Img as CardImg, Title as CardTitle} from '../elements/Card';
import SliderArrow from '../elements/SliderArrow';

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

const DestinationsArrow = SliderArrow.extend`
  margin-top: 0;
`;

export default function () {
  return (
    <Section>
      <Title>
        Featured destinations
      </Title>
      <DestinationsArrow />
      <Row scroll>
        <div className="col-sm-4 col-md-3 col-lg-2">
          <Card>
            <CardImg
              src={parisImage}
              srcSet={parisImage2x + ' 2x'}
              alt="main"
            />
            <CardTitle bold small>Paris</CardTitle>
          </Card>
        </div>
        <div className="col-sm-4 col-md-3 col-lg-2">
          <Card>
            <CardImg
              src={miamiImage}
              srcSet={miamiImage2x + ' 2x'}
              alt="main"
            />
            <CardTitle bold small>Miami</CardTitle>
          </Card>
        </div>
        <div className="col-sm-4 col-md-3 col-lg-2">
          <Card>
            <CardImg
              src={tokyoImage}
              srcSet={tokyoImage2x + ' 2x'}
              alt="main"
            />
            <CardTitle bold small>Tokyo</CardTitle>
          </Card>
        </div>
        <div className="col-sm-4 col-md-3 col-lg-2">
          <Card>
            <CardImg
              src={capeTownImage}
              srcSet={capeTownImage2x + ' 2x'}
              alt="main"
            />
            <CardTitle bold small>Cape town</CardTitle>
          </Card>
        </div>
        <div className="col-sm-4 col-md-3 col-lg-2">
          <Card>
            <CardImg
              src={seoulImage}
              srcSet={seoulImage2x + ' 2x'}
              alt="main"
            />
            <CardTitle bold small>Seoul</CardTitle>
          </Card>
        </div>
        <div className="col-sm-4 col-md-3 col-lg-2">
          <Card>
            <CardImg
              src={losAngelesImage}
              srcSet={losAngelesImage2x + ' 2x'}
              alt="main"
            />
            <CardTitle bold small>Los Angeles</CardTitle>
          </Card>
        </div>
      </Row>
    </Section>
  );
}
