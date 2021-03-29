import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;

      const existItem = state.cartItems.find(
        (currentItem) => currentItem.product === item.product
      );

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((currentItem) =>
            currentItem.product === existItem.product ? item : currentItem
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (currentItem) => currentItem.product !== action.payload
        ),
      };
    default:
      return state;
  }
};