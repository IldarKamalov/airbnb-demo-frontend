import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../Footer';
import Content from './styled';
import Explore from './Explore';
import Experiences from './Experiences';
import Homes from './Homes';
import Reservations from './Reservations';
import Destinations from './Destinations';

export default function () {
  return (
    <React.Fragment>
      <div className="container">
        <Helmet>
          <title>Airbnb Frontend | Landing</title>
        </Helmet>

        <Content>
          <Explore />
          <Experiences />
          <Homes />
          <Reservations />
          <Destinations />
        </Content>
      </div>

      <Footer />
    </React.Fragment>
  );
}
