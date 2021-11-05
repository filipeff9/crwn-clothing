export const addItemToCart = (cartItems, cartItemToAdd) => {
	//Will check if the item we want to add exists in the cart items
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === cartItemToAdd.id
	);
	//returns the items of undefined

	//if it already exists
	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === cartItemToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}
	/* 
  Will loop for all the items and return a new array
  If the item is not the itemToAdd it will be the same item without changes
  If it is, it will increment the quantity!
  
  In case the item does not exist will add it to the cart with the quantity of 1
	!! AVOID APPENDING WITH push(), ALWAYS RETURN A NEW ARRAY WITH THE EXISTING ITEMS + THE NEW ONES !!
  */

	return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === cartItemToRemove.id
	);

	if (existingCartItem.quantity === 1) {
		return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
	}

	return cartItems.map((cartItem) =>
		cartItem.id === cartItemToRemove.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
	);

	/*
	- For each cart item find the one that we want to remove based on the id
	- If the quantity is 1 we will just remove it from all the items
	- If is greater than 1 for that item we decrease the quantity by 1 and keep the other items the same
	*/
};
