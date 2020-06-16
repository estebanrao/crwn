import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import {
  BackgroundImage,
  Content,
  ContentSubtitle,
  ContentTitle,
  MenuItemContainer,
} from './menu-item.style';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <MenuItemContainer as={Link} size={size} to={`${match.url}${linkUrl}`}>
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
