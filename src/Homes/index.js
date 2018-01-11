import React from 'react';
import { Helmet } from "react-helmet";
import { Homes, Cards, MapContainer } from './styled';
import GoogleMap from './GoogleMap';
import Filters from './Filters';
import Card from './Card';
import Info from './Info';
import Pagination from './Pagination';
import Location from './Location';

import home1Image from './homes/first.png';
import home1Image2x from './homes/first@2x.png';
import home2Image from './homes/second.png';
import home2Image2x from './homes/second@2x.png';
import home3Image from './homes/third.png';
import home3Image2x from './homes/third@2x.png';
import home4Image from './homes/home4.png';
import home4Image2x from './homes/home4@2x.png';
import home5Image from './homes/home5.png';
import home5Image2x from './homes/home5@2x.png';
import home6Image from './homes/home6.png';
import home6Image2x from './homes/home6@2x.png';

export default function () {
  return (
    <Homes>
      <Helmet>
          <title>Airbnb Frontend | Homes</title>
      </Helmet>

      <Filters />
      <div className="container">
        <Cards>
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <Card
                to="/homes"
                img={home1Image}
                img2x={home1Image2x}
                price={82}
                title="La Salentina, see, nature & relax"
                homeType="Entire house"
                beds="9 beds"
                reviewsCount={97}
                reviewsType="Superhost"
              />
            </div>

            <div className="col-xs-12 col-sm-6">
              <Card
                to="/homes"
                img={home2Image}
                img2x={home2Image2x}
                price={82}
                title="Your private 3 bedr. riad and exclusive something"
                homeType="Entire house"
                beds="5 beds"
                reviewsCount={161}
                reviewsType="Superhost"
              />
            </div>

            <div className="col-xs-12 col-sm-6">
              <Card
                to="/homes"
                img={home3Image}
                img2x={home3Image2x}
                price={200}
                title="Dreamy Tropical Tree House"
                homeType="Entire treehouse"
                beds="1 bed"
                reviewsCount={364}
                reviewsType="Superhost"
              />
            </div>

            <div className="col-xs-12 col-sm-6">
              <Card
                to="/homes"
                img={home4Image}
                img2x={home4Image2x}
                price={110}
                title="Best location old town luxury loft"
                homeType="Entire apartment"
                beds="1 bed"
                reviewsCount={369}
                reviewsType="Superhost"
              />
            </div>

            <div className="col-xs-12 col-sm-6">
              <Card
                to="/homes"
                img={home5Image}
                img2x={home5Image2x}
                price={83}
                title="Lussuoso. Vista incantevole."
                homeType="Entire apartment"
                beds="6 beds"
                reviewsCount={105}
                reviewsType="Superhost"
              />
            </div>

            <div className="col-xs-12 col-sm-6">
              <Card
                to="/homes"
                img={home6Image}
                img2x={home6Image2x}
                price={72}
                title="In the historical center of Lecce"
                homeType="Entire house"
                beds="3 bed"
                reviewsCount={221}
                reviewsType="Superhost"
              />
            </div>
          </div>
          <Pagination />
          <Info />
        </Cards>
      </div>

      <MapContainer>
        <GoogleMap />
      </MapContainer>

      <Location />
    </Homes>
  );
}
