import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './main-page.component';

it('should render MainPage component', () => {
  expect(shallow(<MainPage />)).toMatchSnapshot();
});
