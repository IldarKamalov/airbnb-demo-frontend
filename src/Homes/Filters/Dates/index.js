import React, { Component } from 'react';
import 'react-dates/initialize';
import { DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import './react_dates_overrides.css';
import { Button } from '../styled';
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

const formatDateLabel = (startDate, endDate, isOpen) => {
  if (startDate && endDate) {
    return `${startDate.format("MMM DD")} – ${endDate.format("MMM DD")}`;
  } else if (isOpen) {
    return "Check in — Check out";
  } else {
    return "Dates";
  }
};

export default class Dropdown extends Component {
  state = {
    isOpen: false,
    startDate: null,
    endDate: null,
    focusedInput: this.props.autoFocusEndDate ? "endDate" : "startDate"
  };

  toggleOpen = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.setState({ startDate, endDate });
  }

  resetDates = () => {
    this.setState({ startDate: null, endDate: null });
  };

  onFocusChange = (focusedInput) => {
    this.setState({ focusedInput: !focusedInput ? "startDate" : focusedInput });
  }

  render () {
    return (
      <React.Fragment>
        <Dates>
          <Button onClick={this.toggleOpen} isOpen={this.state.isOpen}>
            {formatDateLabel(this.state.startDate, this.state.endDate, this.state.isOpen)}
          </Button>
          {this.state.isOpen &&
            <Content>
              <Title>
                <Close onClick={this.toggleOpen} />
                Dates
                <Reset onClick={this.resetDates}>Reset</Reset>
              </Title>

              <Header />

              <DayPickerRangeController
                noBorder
                hideKeyboardShortcutsPanel
                numberOfMonths={
                  matchMedia ('(min-width: 576px)').matches ? 2 : 1
                }
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                onDatesChange={this.onDatesChange}
                onFocusChange={this.onFocusChange}
                focusedInput={this.state.focusedInput}
              />
              <Actions>
                <Cancel onClick={this.toggleOpen}>Cancel</Cancel>
                <Apply onClick={this.toggleOpen}>Apply</Apply>
                <Save onClick={this.toggleOpen}>Save</Save>
              </Actions>
            </Content>}
        </Dates>
        <Backdrop isOpen={this.state.isOpen} onClick={this.toggleOpen} />
      </React.Fragment>
    );
  }
}
