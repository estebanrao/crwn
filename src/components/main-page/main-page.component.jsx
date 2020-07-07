import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from '../header/header.component';
import Spinner from '../spinner/spinner.component';
import ErrorBoundary from '../error-boundary/error-boundary.component';

const HomePage = lazy(() => import('../../pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('../../pages/shop/shop.component'));
const SignInAndSignUp = lazy(() =>
  import('../../pages/sign-in-and-sign-up/sign-in-and-sign-up.component')
);
const CheckoutPage = lazy(() =>
  import('../../pages/checkout/checkout.component')
);

const MainPage = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route
              exact
              path="/signin"
              render={() =>
                currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
              }
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
};

export default MainPage;
