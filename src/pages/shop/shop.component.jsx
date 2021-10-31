import React from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview";

class ShopPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			collections: SHOP_DATA,
		};
	}

	render() {
		const { collections } = this.state; //de-structure this.state.collection to a const var

		return (
			<div className="shop-page">
				{collections.map(({ id, ...other }) => (
					<CollectionPreview key={id} {...other} />
				))}
			</div>
		);
	}
}

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

export default ShopPage;
