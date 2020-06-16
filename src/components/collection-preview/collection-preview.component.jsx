import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';

import {
  CollectionPreviewContainer,
  PreviewContainer,
  Title,
} from './collection-preview.styles';

const CollectionPreview = ({ title, items, match, routeName }) => (
  <CollectionPreviewContainer>
    <Title>
      <Link to={`${match.path}/${routeName}`}>{title.toUpperCase()}</Link>
    </Title>
    <PreviewContainer>
      {items
        .filter((items, index) => index < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);
