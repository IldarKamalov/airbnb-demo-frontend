import React, { Component } from 'react';
import { Wrap, Button } from './styled';
import Dates from './Dates';

export default class Filters extends Component {
  render () {
    return (
      <Wrap>
        <div className="container">
          <Dates />
          <Button type="button">
            Guests
          </Button>
          <Button type="button" hiddenMobile>
            Room type
          </Button>
          <Button type="button" hiddenMobile>
            Price
          </Button>
          <Button type="button" hiddenMobile>
            Instant book
          </Button>
          <Button type="button">
            More filters
          </Button>
        </div>
      </Wrap>
    );
  }
}
