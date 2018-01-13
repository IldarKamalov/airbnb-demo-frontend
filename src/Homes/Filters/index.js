import React from 'react';
import { Filters, Button } from './styled';
import Dates from './Dates';

export default function() {
  return (
    <Filters>
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
    </Filters>
  );
}
