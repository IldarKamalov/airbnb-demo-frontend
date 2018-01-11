import React, { Component } from 'react';
import { Wrap, Filter } from './styled';
import Dates from './Dates';

export default class Filters extends Component {
  render () {
    return (
      <Wrap>
        <div className="container">
          <Dates />
          <Filter type="button">
            Guests
          </Filter>
          <Filter type="button" hiddenMobile>
            Room type
          </Filter>
          <Filter type="button" hiddenMobile>
            Price
          </Filter>
          <Filter type="button" hiddenMobile>
            Instant book
          </Filter>
          <Filter type="button">
            More filters
          </Filter>
        </div>
      </Wrap>
    );
  }
}
