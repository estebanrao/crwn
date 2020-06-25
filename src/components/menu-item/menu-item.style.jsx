import styled, { css } from 'styled-components';

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
`;

export const Content = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: #fff;
  opacity: 0.7;
  position: absolute;
`;
export const ContentTitle = styled.h1`
  font-weight: bold;
  margin: 0 0 6px;
  font-size: 22px;
  color: #4a4a4a;
`;

export const ContentSubtitle = styled.div`
  font-weight: lighter;
  font-size: 16px;
`;

const getMenuSizeStyles = (props) => {
  if (props.size === 'large') {
    return css`
      height: 380px;
    `;
  }
};

export const MenuItemContainer = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${Content} {
      opacity: 0.9;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  ${getMenuSizeStyles}

  @media screen and (max-width: 800px) {
    height: 200px;
  }
`;
