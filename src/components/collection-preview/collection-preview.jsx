import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import "./collection-preview.styles.scss";

// From the "...other" retrieve only the title and items Array
const CollectionPreview = ({ title, items }) => (
	<div className="collection-preview">
		<h1 className="title">{title.toUpperCase()}</h1>
		<div className="preview">
			{items
				.filter((_item, idx) => idx < 4)
				.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
		</div>
	</div>
);

/*
	- .filter(item, index) will return array items based on a condition, _item has a "_" to simbolize
	it's not used in .filer() but is still required

	- Only render 4 previews for each collection

	- Again in CollectionItem the "...other" is the remaining 
	of the item Object content (name,imageUrl,price)
*/

export default CollectionPreview;
