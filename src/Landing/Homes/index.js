import React, { Component } from 'react';
import 'whatwg-fetch';
import { Section, Title, All, Scroll } from '../styled';

import Card from '../../Homes/Card';
import SliderArrow from '../../UI/SliderArrow';

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
      <Section>
        <Title>
          Homes
          <All to="/homes">See all</All>
        </Title>
        <SliderArrow />
        <Scroll>
          {responseData.homes.map(data => (
            <div className="col-sm-8 col-md-5 col-lg-4" key={data.id}>
              <Card
                to="/homes"
                img={data.images[0].picture}
                price={data.price}
                title={data.name}
                beds={data.bedsCount}
                kind={data.kind}
                rating={data.rating}
                reviewsCount={data.reviewsCount}
                isSuperhost={data.isSuperhost}
              />
            </div>
          ))}
        </Scroll>
      </Section>
    );
  }
}
