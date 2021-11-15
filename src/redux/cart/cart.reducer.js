import { CartActionTypes } from "./cart.types";
import { addItemToCart, removeItemFromCart } from "./cart.utils";

const INITIAL_STATE = {
	hidden: true,
	cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CartActionTypes.TOGGLE_CART_HIDDEN:
			return {
				...state, //Clone all the current state
				hidden: !state.hidden, //And change only the elements that we want
			};
		case CartActionTypes.ADD_ITEM:
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, action.payload), //Utility function only for this Reducer
			};
		case CartActionTypes.CLEAR_ITEM_FROM_CART:
			return {
				...state,
				cartItems: state.cartItems.filter(
					(cartItem) => cartItem.id !== action.payload.id
				),
			};
		case CartActionTypes.REMOVE_ITEM:
			return {
				...state,
				cartItems: removeItemFromCart(state.cartItems, action.payload),
			};
		case CartActionTypes.CLEAR_CART:
			return {
				...state,
				cartItems: [],
			};
		default:
			return state; //If is neither of the ActionTypes return the same state unaltered
	}
};

export default cartReducer;
