import React from 'react';
import {Content, Section, Title, All} from './styled';
import {Card, CardImg, CardTitle} from '../elements/Card';

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
    <Section>
      <Title>
        Featured destinations
        <All href="#!">See all</All>
      </Title>
      <div className="row row--overflow">
        <div className="col-xs-4 col-sm-3 col-md-2">
          <Card>
            <CardImg
              src={parisImage}
              srcSet={parisImage2x + ' 2x'}
              alt="main"
            />
            <CardTitle bold small>Paris</CardTitle>
          </Card>
        </div>
        <div className="col-xs-4 col-sm-3 col-md-2">
          <Card>
            <CardImg
              src={miamiImage}
              srcSet={miamiImage2x + ' 2x'}
              alt="main"
            />
            <CardTitle bold small>Miami</CardTitle>
          </Card>
        </div>
        <div className="col-xs-4 col-sm-3 col-md-2">
          <Card>
            <CardImg
              src={tokyoImage}
              srcSet={tokyoImage2x + ' 2x'}
              alt="main"
            />
            <CardTitle bold small>Tokyo</CardTitle>
          </Card>
        </div>
        <div className="col-xs-4 col-sm-3 col-md-2">
          <Card>
            <CardImg
              src={capeTownImage}
              srcSet={capeTownImage2x + ' 2x'}
              alt="main"
            />
            <CardTitle bold small>Cape town</CardTitle>
          </Card>
        </div>
        <div className="col-xs-4 col-sm-3 col-md-2">
          <Card>
            <CardImg
              src={seoulImage}
              srcSet={seoulImage2x + ' 2x'}
              alt="main"
            />
            <CardTitle bold small>Seoul</CardTitle>
          </Card>
        </div>
        <div className="col-xs-4 col-sm-3 col-md-2">
          <Card>
            <CardImg
              src={losAngelesImage}
              srcSet={losAngelesImage2x + ' 2x'}
              alt="main"
            />
            <CardTitle bold small>Los Angeles</CardTitle>
          </Card>
        </div>
      </div>
    </Section>
  );
}
