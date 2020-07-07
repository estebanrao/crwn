import {
  addItem,
  clearCart,
  clearItemFromCart,
  removeItem,
  toggleCartHidden,
} from './cart.actions';
import CartActionTypes from './cart.types';

describe('CartActions', () => {
  it('should create an action to toggle cart hidden', () => {
    expect(toggleCartHidden()).toEqual({
      type: CartActionTypes.TOGGLE_CART_HIDDEN,
    });
  });

  it('should create an action to add item to cart', () => {
    expect(addItem('a')).toEqual({
      type: CartActionTypes.ADD_ITEM,
      payload: 'a',
    });
  });

  it('should create an action to remove item to cart', () => {
    expect(removeItem('a')).toEqual({
      type: CartActionTypes.REMOVE_ITEM,
      payload: 'a',
    });
  });

  it('should create an action to clear item from cart', () => {
    expect(clearItemFromCart('a')).toEqual({
      type: CartActionTypes.CLEAR_ITEM_FROM_CART,
      payload: 'a',
    });
  });

  it('should create an action to clear the entire cart', () => {
    expect(clearCart()).toEqual({
      type: CartActionTypes.CLEAR_CART,
    });
  });
});
