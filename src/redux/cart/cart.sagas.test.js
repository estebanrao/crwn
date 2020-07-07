import { takeLatest, put } from 'redux-saga/effects';

import UserActionTypes from '../user/user.types';
import { clearCartOnSignOut, onSignOutSuccess } from './cart.sagas';
import { clearCart } from './cart.actions';

describe('CartSagas', () => {
  it('should create on sign out success saga', () => {
    const generator = onSignOutSuccess();
    const value = generator.next().value;

    expect(value).toEqual(
      takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
    );
  });

  it('should clear cart on sign out success', () => {
    const generator = clearCartOnSignOut();
    const value = generator.next().value;

    expect(value).toEqual(put(clearCart()));
  });
});
