import React, { Component } from 'react';
import { Wrap, FiltersButton } from './styled';
import Dates from './Dates';

export default class Filters extends Component {
  render () {
    return (
      <Wrap>
        <div className="container">
          <Dates />
          <FiltersButton type="button">
            Guests
          </FiltersButton>
          <FiltersButton type="button" hiddenMobile>
            Room type
          </FiltersButton>
          <FiltersButton type="button" hiddenMobile>
            Price
          </FiltersButton>
          <FiltersButton type="button" hiddenMobile>
            Instant book
          </FiltersButton>
          <FiltersButton type="button">More filters</FiltersButton>
        </div>
      </Wrap>
    );
  }
}
