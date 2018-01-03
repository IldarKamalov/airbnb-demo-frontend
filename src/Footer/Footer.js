import React from 'react';
import {
  Footer,
  Top,
  Column,
  Title,
  Link,
  Bottom,
  Nav,
  Logo,
  Icon,
  Copy,
  Select,
} from './styled';
import logo from './logo.svg';
import twitter from './twitter.svg';
import facebook from './facebook.svg';
import instagram from './instagram.svg';

export default function () {
  return (
    <Footer>
      <div className="container">
        <Top>
          <div className="row">
            <div className="col-xs-4">
              <Select>
                <option value="1">English</option>
                <option value="1">Deutsch</option>
              </Select>
              <Select>
                <option value="1">United States dollar</option>
                <option value="1">Russian ruble</option>
              </Select>
            </div>
            <div className="col-xs-3">
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
            <div className="col-xs-3">
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
            <div className="col-xs-2">
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
          <Logo src={logo} />
          <Copy>© Airbnb Inc.</Copy>
          <Nav>
            <Link bottom href="#!">Terms</Link>
            <Link bottom href="#!">Privacy</Link>
            <Link bottom href="#!">Site map</Link>
            <Link icon href="#!">
              <Icon src={facebook} />
            </Link>
            <Link icon href="#!">
              <Icon src={twitter} />
            </Link>
            <Link icon href="#!">
              <Icon src={instagram} />
            </Link>
          </Nav>
        </Bottom>
      </div>
    </Footer>
  );
}
