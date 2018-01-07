import styled from 'styled-components';

export const Card = styled.a`
  display: block;
  margin: 0 auto;
  max-width: 100%;
  text-decoration: none;
  color: #383838;
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  max-width: 100%;
  margin-bottom: 8px;
`;

export const Title = styled.p`
  margin: 0 0 3px 0;
  font-size: 15px;
  font-weight: ${props => (props.light ? '300' : '700')};
  line-height: 1.4;
  color: #383838;
  
  &:last-child {
    margin-bottom: 0;
  }

  ${props => props.ellipsis && `
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  `}
`;

export const Subtitle = styled.p`
  margin: 0 0 2px 0;
  font-size: 10px;
  font-weight: bold;
  text-transform: uppercase;
  color: #383838;
`;

export const Price = styled.strong`
  padding-right: 5px;
  font-weight: bold;
`;

export const Rating = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
`;

export const Review = styled.span`
  margin-left: 6px;
  font-size: 12px;
`;

export const Description = styled.p`
  margin: 0 0 5px 0;
  font-size: 15px;
  font-weight: 300;

  ${props => props.price && `
    margin: 0;
    font-size: 18px;
    font-weight: 300;
    opacity: 0.9;
  `}
`;

export const Divider = styled.span`
  padding: 0 5px;
`;

export default Card;
