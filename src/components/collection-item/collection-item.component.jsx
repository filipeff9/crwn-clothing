import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import "./collection-item.styles.scss";
import { addItem } from "../../redux/cart/cart.actions";

//addItem comes from the cart Reducer
const CollectionItem = ({ item, addItem }) => {
	const { name, price, imageUrl } = item;
	return (
		<div className="collection-item">
			<div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
			<div className="collection-footer">
				<span className="name">{name}</span>
				<span className="price">{price}</span>
			</div>
			<CustomButton onClick={() => addItem(item)} inverted>
				Add to cart
			</CustomButton>
		</div>
	);
};

//Dispatch is a function that changes the Redux state in a way. item is the Payload
const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
});

//No mapStateToProps implies that is passed as null
export default connect(null, mapDispatchToProps)(CollectionItem);
