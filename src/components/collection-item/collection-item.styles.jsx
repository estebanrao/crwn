import styled from 'styled-components';

import CustomButton from '../custom-button/custom-button.component';

export const CustomButtonContainer = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;

  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px 0 10px;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`;

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    ${ImageContainer} {
      opacity: 0.8;
    }

    ${CustomButtonContainer} {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width: 800px) {
    width: 40vw;

    &:hover {
      ${ImageContainer} {
        opacity: unset;
      }

      ${CustomButtonContainer} {
        opacity: unset;
      }
    }
  }
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const CollectionFooterName = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const CollectionFooterPrice = styled.span`
  width: 10%;
`;
