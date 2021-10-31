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
				.map(({ id, ...other }) => (
					<CollectionItem key={id} {...other} />
				))}
		</div>
	</div>
);

/*
	- Only render 4 previews for each collection
	- Again in CollectionItem the "...other" is the remaining 
		of the item Object content (name,imageUrl,price)
*/

export default CollectionPreview;
