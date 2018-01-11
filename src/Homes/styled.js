import styled from 'styled-components';

export const Homes = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 80px;
`;

export const Cards = styled.div`
  min-height: 100vh;
  padding-top: 80px;

  @media screen and (min-width: 992px) {
    width: 65%;
    padding-right: 35px;
  }
`;

export const MapContainer = styled.div`
  display: none;
  position: fixed;
  top: 136px;
  bottom: 0;
  right: 0;
  width: 100%;

  @media screen and (min-width: 992px) {
    display: block;
    left: calc(50% + 125px);
    width: auto;
  }

  @media screen and (min-width: 1200px) {
    left: calc(50% + 155px);
  }
 `;

export default Homes;
