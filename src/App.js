import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MainPage from './components/main-page/main-page.component';

import { GlobalStyle } from './global.styles';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

const App = (props) => {
  return (
    <div>
      <GlobalStyle />
      <MainPage {...props} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
