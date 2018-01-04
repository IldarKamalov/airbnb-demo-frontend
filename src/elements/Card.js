import styled, {css} from 'styled-components';

export const Card = styled.div`
`;

export const CardImg = styled.img`
  display: block;
  max-width: 100%;
  margin-bottom: 8px;
`;

export const CardTitle = styled.div`
  margin-bottom: 5px;
  font-size: 15px;
  font-weight: ${props => (props.light ? '300' : '700')};
  line-height: 1.4;
  color: #383838;
  
  &:last-child {
    margin-bottom: 0;
  }
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

export default Card;
