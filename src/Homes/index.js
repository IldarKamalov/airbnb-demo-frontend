import React, { Component } from 'react';
import 'whatwg-fetch';
import { Helmet } from 'react-helmet';
import { Wrapper, Cards, MapContainer } from './styled';
import GoogleMap from './GoogleMap';
import Filters from './Filters';
import Card from './Card';
import Info from './Info';
import Pagination from './Pagination';
import ShowMap from './ShowMap';

const requestURL = 'https://airbnb-demo-api.now.sh/v1/homes?limit=8';

export default class Homes extends Component {
  state = { homes: [] };

  componentWillMount() {
    fetch(requestURL)
      .then(response => response.json())
      .then((data) => {
        this.setState({ homes: data.items });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const responseData = this.state;

    return (
      <Wrapper>
        <Helmet>
          <title>Airbnb Frontend | Homes</title>
        </Helmet>

        <Filters />
        <div className="container">
          <Cards>
            <div className="row">
              {responseData.homes.map(data => (
                <div className="col-xs-12 col-sm-6" key={data.id}>
                  <Card
                    to="/homes"
                    img={data.images[0].picture}
                    price={data.price}
                    title={data.name}
                    beds={data.bedsCount}
                    kind={data.kind}
                    reviewsCount={data.reviewsCount}
                    isSuperhost={data.isSuperhost}
                  />
                </div>
              ))}
            </div>
            <Pagination />
            <Info />
          </Cards>
        </div>

        <MapContainer>
          <GoogleMap />
        </MapContainer>

        <ShowMap />
      </Wrapper>
    );
  }
}
