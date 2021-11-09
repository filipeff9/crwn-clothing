import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import CollectionPreview from "../collection-preview/collection-preview";
import "./collections-overview.styles.scss";

const CollectionsOverview = ({ collections }) => (
	<div className="collections-overview">
		{collections.map(({ id, ...other }) => (
			<CollectionPreview key={id} {...other} />
		))}
	</div>
);

/*
	- From the collection we only de-structure the id for the key
		The rest (...) is up to the declaration of the component to get the desired info 

	other: {
			title: string;
			routeName: string;
			items: {
					id: number;
					name: string;
					imageUrl: string;
					price: number;
			}[];
*/

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
