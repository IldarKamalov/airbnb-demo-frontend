import React from 'react';
import styled from 'styled-components';
import {
  Footer,
  Title,
  Top,
  Bottom,
  Nav,
  Logo,
  Img,
  Copy,
  ListLink,
  InlineLink,
  IconLink
} from './styled';
import logo from './logo.svg';
import twitter from './twitter.svg';
import facebook from './facebook.svg';
import instagram from './instagram.svg';
import Select from '../UI/Select';

export default function () {
  return (
    <Footer>
      <div className="container">
        <Top>
          <div className="row">
            <div className="col-xs-12 col-md-3 col-lg-4">
              <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-12">
                  <Select>
                    <option value="1">English</option>
                    <option value="1">Deutsch</option>
                  </Select>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-12">
                  <Select>
                    <option value="1">United States dollar</option>
                    <option value="1">Russian ruble</option>
                  </Select>
                </div>
              </div>
            </div>
            <div className="hidden-xs hidden-sm col-md-offset-1 col-lg-offset-0 col-md-3 col-lg-3">
              <Title>
                Airbnb
              </Title>
              <ListLink to="/">About us</ListLink>
              <ListLink to="/">Careers</ListLink>
              <ListLink to="/">Press</ListLink>
              <ListLink to="/">Policies</ListLink>
              <ListLink to="/">Help</ListLink>
              <ListLink to="/">Diversity & Belonging</ListLink>
            </div>
            <div className="hidden-xs hidden-sm col-md-3 col-lg-3">
              <Title>
                Discover
              </Title>
              <ListLink to="/">Trust & Safety</ListLink>
              <ListLink to="/">Travel Credit</ListLink>
              <ListLink to="/">Gift Cards</ListLink>
              <ListLink to="/">Airbnb Citizen</ListLink>
              <ListLink to="/">Business Travel</ListLink>
              <ListLink to="/">Guidebooks</ListLink>
              <ListLink to="/">Airbnbmag</ListLink>
            </div>
            <div className="hidden-xs hidden-sm col-md-2 col-lg-2">
              <Title>
                Hosting
              </Title>
              <ListLink to="/">Why Host</ListLink>
              <ListLink to="/">Hospitality</ListLink>
              <ListLink to="/">Responsible Hosting</ListLink>
              <ListLink to="/">Community Center</ListLink>
            </div>
          </div>
        </Top>
        <Bottom>
          <Copy>
            <Logo src={logo} />
            © Airbnb Inc.
          </Copy>
          <Nav>
            <InlineLink to="/">Terms</InlineLink>
            <InlineLink to="/">Privacy</InlineLink>
            <InlineLink to="/">Site map</InlineLink>
            <IconLink to="/">
              <Img src={facebook} />
            </IconLink>
            <IconLink to="/">
              <Img src={twitter} />
            </IconLink>
            <IconLink to="/">
              <Img src={instagram} />
            </IconLink>
          </Nav>
        </Bottom>
      </div>
    </Footer>
  );
}
