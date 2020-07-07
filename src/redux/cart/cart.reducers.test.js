import CartActionTypes from './cart.types';

import cartReducer from './cart.reducer';

describe('cartReducer', () => {
  const INITIAL_STATE = {
    hidden: true,
    cartItems: [],
  };

  it('should return the initial state', () => {
    expect(cartReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should handle TOGGLE_CART_HIDDEN', () => {
    expect(
      cartReducer(undefined, { type: CartActionTypes.TOGGLE_CART_HIDDEN })
    ).toEqual({
      hidden: false,
      cartItems: [],
    });
  });

  it('should handle ADD_ITEM (first item)', () => {
    expect(
      cartReducer(INITIAL_STATE, {
        type: CartActionTypes.ADD_ITEM,
        payload: { id: 1 },
      })
    ).toEqual({
      hidden: true,
      cartItems: [{ id: 1, quantity: 1 }],
    });
  });

  it('should handle ADD_ITEM (same item)', () => {
    INITIAL_STATE.cartItems = [{ id: 1, quantity: 1 }];
    expect(
      cartReducer(INITIAL_STATE, {
        type: CartActionTypes.ADD_ITEM,
        payload: { id: 1 },
      })
    ).toEqual({
      hidden: true,
      cartItems: [{ id: 1, quantity: 2 }],
    });
  });

  it('should handle REMOVE_ITEM (same item)', () => {
    INITIAL_STATE.cartItems = [{ id: 1, quantity: 2 }];
    expect(
      cartReducer(INITIAL_STATE, {
        type: CartActionTypes.REMOVE_ITEM,
        payload: { id: 1 },
      })
    ).toEqual({
      hidden: true,
      cartItems: [{ id: 1, quantity: 1 }],
    });
  });

  it('should handle REMOVE_ITEM', () => {
    INITIAL_STATE.cartItems = [{ id: 1, quantity: 1 }];
    expect(
      cartReducer(INITIAL_STATE, {
        type: CartActionTypes.REMOVE_ITEM,
        payload: { id: 1 },
      })
    ).toEqual({
      hidden: true,
      cartItems: [],
    });
  });

  it('should handle CLEAR_CART', () => {
    INITIAL_STATE.cartItems = [{ id: 1, quantity: 1 }];
    expect(
      cartReducer(INITIAL_STATE, {
        type: CartActionTypes.CLEAR_CART,
      })
    ).toEqual({
      hidden: true,
      cartItems: [],
    });
  });
});
