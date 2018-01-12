import React, { Component } from 'react';
import 'react-dates/initialize';
import { DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import styled from 'styled-components';
import { Filter } from './styled.js';

const Dates = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: middle;
`;

const Content = styled.div`
  position: absolute;
  top: 40px;
  left: 0;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid rgba(72,72,72,0.2);
  border-radius: 4px;
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
`;

const Action = styled.button`
  padding: 22px 25px;
  font-family: Circular, "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-decoration: none;
  color: #636363;
  border: 0;
  outline: 0;
  border-radius: 4px;
  cursor: pointer;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

const Cancel = styled(Action)``;

const Apply = styled(Action)`
  color: #0f7276;
`;

export default class Dropdown extends Component {
  state = {
    isOpen: false,
  };

  toggleOpen = () => {
    this.setState ({
      isOpen: !this.state.isOpen,
    });
  };

  render () {
    return (
      <Dates>
        <Filter onClick={this.toggleOpen}>Dates</Filter>
        {this.state.isOpen &&
          <Content>
            <DayPickerRangeController
              noBorder
              hideKeyboardShortcutsPanel
              numberOfMonths={2}
              onPrevMonthClick={this.onPrevMonthClick}
              onNextMonthClick={this.onNextMonthClick}
            />
            <Actions>
              <Cancel>Cancel</Cancel>
              <Apply>Apply</Apply>
            </Actions>
          </Content>}
      </Dates>
    );
  }
}
