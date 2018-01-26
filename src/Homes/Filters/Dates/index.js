import React, { Component } from 'react';
import 'react-dates/initialize';
import { DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import './ReactDates.css';
import { Button } from '../styled';
import {
  Dropdown,
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
    return `${startDate.format('MMM DD')} – ${endDate.format('MMM DD')}`;
  } else if (isOpen) {
    return 'Check in — Check out';
  }
  return 'Dates';
};

const numberOfMonths = matchMedia('(min-width: 768px)').matches ? 2 : 1;

export default class Dates extends Component {
  state = {
    isOpen: false,
    startDate: null,
    endDate: null,
    focusedInput: this.props.autoFocusEndDate ? 'endDate' : 'startDate',
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.setState({ startDate, endDate });
  }

  onFocusChange = (focusedInput) => {
    this.setState({ focusedInput: !focusedInput ? 'startDate' : focusedInput });
  }

  resetDates = () => {
    this.setState({ startDate: null, endDate: null });
  };

  toggleOpen = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  handleCancel = () => {
    this.setState({ startDate: null, endDate: null, isOpen: false });
  }

  render() {
    return (
      <React.Fragment>
        <Dropdown>
          <Button onClick={this.toggleOpen} isOpen={this.state.isOpen}>
            {formatDateLabel(this.state.startDate, this.state.endDate, this.state.isOpen)}
          </Button>
          {this.state.isOpen &&
            <Content>
              <Title>
                <Close onClick={this.handleCancel} />
                Dates
                <Reset onClick={this.resetDates}>Reset</Reset>
              </Title>

              <Header />

              <DayPickerRangeController
                noBorder
                hideKeyboardShortcutsPanel
                numberOfMonths={numberOfMonths}
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                onDatesChange={this.onDatesChange}
                onFocusChange={this.onFocusChange}
                focusedInput={this.state.focusedInput}
              />
              <Actions>
                <Cancel onClick={this.handleCancel}>Cancel</Cancel>
                <Apply onClick={this.toggleOpen}>Apply</Apply>
                <Save onClick={this.toggleOpen}>Save</Save>
              </Actions>
            </Content>}
        </Dropdown>
        <Backdrop isOpen={this.state.isOpen} onClick={this.handleCancel} />
      </React.Fragment>
    );
  }
}
