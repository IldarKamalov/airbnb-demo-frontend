import React, { Component } from 'react';
import 'react-dates/initialize';
import { DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { Filter } from '../styled';
import {
  Dates,
  Content,
  Actions,
  Cancel,
  Apply,
  Backdrop,
  Title,
  Close,
  Reset,
  Save,
} from './styled';
import Header from './Header';

export default class Dropdown extends Component {
  state = {
    isOpen: false,
  };

  toggleOpen = () => {
    this.setState (prevState => ({isOpen: !prevState.isOpen}));
  };

  render () {
    return (
      <React.Fragment>
        <Dates>
          <Filter onClick={this.toggleOpen} isOpen={this.state.isOpen}>
            {this.state.isOpen ? 'Check in — Check out' : 'Dates'}
          </Filter>
          {this.state.isOpen &&
            <Content>
              <Title>
                <Close onClick={this.toggleOpen} />
                Dates
                <Reset>Reset</Reset>
              </Title>

              <Header />

              <DayPickerRangeController
                noBorder
                numberOfMonths={
                  matchMedia ('(min-width: 768px)').matches ? 2 : 1
                }
                hideKeyboardShortcutsPanel
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                onDatesChange={this.onDatesChange}
                focusedInput={this.state.focusedInput}
                onFocusChange={this.onFocusChange}
              />
              <Actions>
                <Cancel onClick={this.toggleOpen}>Cancel</Cancel>
                <Apply>Apply</Apply>
                <Save>Save</Save>
              </Actions>
            </Content>}
        </Dates>
        <Backdrop isOpen={this.state.isOpen} onClick={this.toggleOpen} />
      </React.Fragment>
    );
  }
}
