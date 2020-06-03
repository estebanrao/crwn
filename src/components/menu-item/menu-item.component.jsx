import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  BackgroundImage,
  Content,
  ContentSubtitle,
  ContentTitle,
  MenuItemContainer,
} from './menu-item.style';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <MenuItemContainer
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImage
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <Content>
      <ContentTitle>{title.toUpperCase()}</ContentTitle>
      <ContentSubtitle>SHOP NOW</ContentSubtitle>
    </Content>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
