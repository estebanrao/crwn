import React from 'react';
import { shallow } from 'enzyme';

import { CartDropdown } from './cart-dropdown.component';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

const mockProps = {
  cartItems: [],
  dispatch: jest.fn(),
};
let wrapper;

beforeEach(() => {
  wrapper = shallow(<CartDropdown {...mockProps} />);
});

describe('CartDropdown', () => {
  it('should render CardDropdown component correctly with empty message', () => {
    expect(wrapper.debug()).toMatchSnapshot(); // First snapshot created with EmptyMessage element
    expect(wrapper.find('EmptyMessage').length).toEqual(1);
  });

  it('should render CardDropdown component correctly with cart items passed in props', () => {
    wrapper.setProps({ cartItems: [{ id: 'a' }, { id: 'b' }] });
    expect(wrapper.debug()).toMatchSnapshot(); // Second snapshot created with CartItem elements
    expect(wrapper.find(CartItem).length).toEqual(2);
  });

  it('should toggle cart hidden on checkout button click', () => {
    wrapper.find(CustomButton).simulate('click');
    expect(mockProps.dispatch).toHaveBeenCalledWith(toggleCartHidden());
  });
});
