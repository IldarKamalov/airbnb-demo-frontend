import React from 'react';
import {
  Footer,
  Title,
  Link,
  Top,
  Bottom,
  Nav,
  Logo,
  Img,
  Copy,
  InlineLink,
  IconLink,
} from './styled';
import logo from './logo.svg';
import twitter from './twitter.svg';
import facebook from './facebook.svg';
import instagram from './instagram.svg';
import Select from '../elements/Select';

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
              <Link href="#!">About us</Link>
              <Link href="#!">Careers</Link>
              <Link href="#!">Press</Link>
              <Link href="#!">Policies</Link>
              <Link href="#!">Help</Link>
              <Link href="#!">Diversity & Belonging</Link>
            </div>
            <div className="hidden-xs hidden-sm col-md-3 col-lg-3">
              <Title>
                Discover
              </Title>
              <Link href="#!">Trust & Safety</Link>
              <Link href="#!">Travel Credit</Link>
              <Link href="#!">Gift Cards</Link>
              <Link href="#!">Airbnb Citizen</Link>
              <Link href="#!">Business Travel</Link>
              <Link href="#!">Guidebooks</Link>
              <Link href="#!">Airbnbmag</Link>
            </div>
            <div className="hidden-xs hidden-sm col-md-2 col-lg-2">
              <Title>
                Hosting
              </Title>
              <Link href="#!">Why Host</Link>
              <Link href="#!">Hospitality</Link>
              <Link href="#!">Responsible Hosting</Link>
              <Link href="#!">Community Center</Link>
            </div>
          </div>
        </Top>
        <Bottom>
          <Copy>
            <Logo src={logo} />
            © Airbnb Inc.
          </Copy>
          <Nav>
            <InlineLink href="#!">Terms</InlineLink>
            <InlineLink href="#!">Privacy</InlineLink>
            <InlineLink href="#!">Site map</InlineLink>
            <IconLink href="#!">
              <Img src={facebook} />
            </IconLink>
            <IconLink href="#!">
              <Img src={twitter} />
            </IconLink>
            <IconLink href="#!">
              <Img src={instagram} />
            </IconLink>
          </Nav>
        </Bottom>
      </div>
    </Footer>
  );
}
