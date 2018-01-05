import styled, {css} from 'styled-components';

export const Card = styled.a`
  display: block;
  margin: 0 auto;
  max-width: 100%;
  text-decoration: none;
`;

export const CardImg = styled.img`
  display: block;
  width: 100%;
  max-width: 100%;
  margin-bottom: 8px;
`;

export const CardTitle = styled.div`
  margin-bottom: 3px;
  font-size: 15px;
  font-weight: ${props => (props.light ? '300' : '700')};
  line-height: 1.4;
  color: #383838;
  
  &:last-child {
    margin-bottom: 0;
  }

  ${props => props.ellipsis && css`
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  `}
`;

export const CardSubtitle = styled.div`
  margin-bottom: 2px;
  font-size: 10px;
  font-weight: bold;
  text-transform: uppercase;
	color: #383838;
`;

export const CardPrice = styled.strong`
  padding-right: 5px;
  font-weight: bold;
`;

export const CardRating = styled.div`
	display: flex;
  flex-wrap: nowrap;
  align-items: center;
`;

export const CardReview = styled.div`
  margin-left: 6px;
  font-size: 12px;
`;

export const CardReviewType = styled.div``;

export const CardDescription = styled.div`
  margin-bottom: 5px;
  font-size: 15px;
  font-weight: 300;

  ${props => props.price && css`
    margin-bottom: 0;
	  font-size: 18px;
    font-weight: 300;
    opacity: 0.9;
  `}
`;

export const CardDivider = styled.span`
  padding: 0 5px;
`;

export default Card;
