import React from "react";
import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop/shop.selectors";
import "./collection.styles.scss";

const CollectionPage = ({ collection }) => {
	const { title, items } = collection;
	return (
		<div className="collection-page">
			<h2 className="title">{title}</h2>
			<div className="items">
				{items.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};

/* ownProps are the props passed to the component itself, in our case since this 
is a Route component we have access to match, history and location as props */

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state),

	/*Because this selector is not just a createSelector (it's a functions that returns the createSelector function)
	to that returned createSelector we must pass the state in this case. Unlike the other mapStateToProps
	where we use createStructuredSelector that passes state implicitly*/
});

export default connect(mapStateToProps)(CollectionPage);
