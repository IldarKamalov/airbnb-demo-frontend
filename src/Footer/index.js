import React from 'react';
import {
  Footer,
  Title,
  Top,
  Bottom,
  Nav,
  Logo,
  Img,
  Copy,
  Link,
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
              <Link to="/">About us</Link>
              <Link to="/">Careers</Link>
              <Link to="/">Press</Link>
              <Link to="/">Policies</Link>
              <Link to="/">Help</Link>
              <Link to="/">Diversity & Belonging</Link>
            </div>
            <div className="hidden-xs hidden-sm col-md-3 col-lg-3">
              <Title>
                Discover
              </Title>
              <Link to="/">Trust & Safety</Link>
              <Link to="/">Travel Credit</Link>
              <Link to="/">Gift Cards</Link>
              <Link to="/">Airbnb Citizen</Link>
              <Link to="/">Business Travel</Link>
              <Link to="/">Guidebooks</Link>
              <Link to="/">Airbnbmag</Link>
            </div>
            <div className="hidden-xs hidden-sm col-md-2 col-lg-2">
              <Title>
                Hosting
              </Title>
              <Link to="/">Why Host</Link>
              <Link to="/">Hospitality</Link>
              <Link to="/">Responsible Hosting</Link>
              <Link to="/">Community Center</Link>
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
