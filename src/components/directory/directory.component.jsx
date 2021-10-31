import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

class Directory extends React.Component {
	constructor() {
		super();

		this.state = {
			//Data that in a real case would be retrieved from a server!
			sections: [
				{
					title: "hats",
					/* imageUrl: "https://i.ibb.co/cvpntL1/hats.png", */
					imageUrl:
						"https://images.pexels.com/photos/8182318/pexels-photo-8182318.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
					id: 1,
					linkUrl: "shop/hats",
				},
				{
					title: "jackets",
					/* imageUrl: "https://i.ibb.co/px2tCc3/jackets.png", */
					imageUrl:
						"https://images.pexels.com/photos/4850415/pexels-photo-4850415.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
					id: 2,
					linkUrl: "shop/jackets",
				},
				{
					title: "sneakers",
					/* imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png", */
					imageUrl:
						"https://images.pexels.com/photos/4061385/pexels-photo-4061385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
					id: 3,
					linkUrl: "shop/sneakers",
				},
				{
					title: "womens",
					/* imageUrl: "https://i.ibb.co/GCCdy8t/womens.png", */
					imageUrl:
						"https://images.pexels.com/photos/10069438/pexels-photo-10069438.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
					size: "large",
					id: 4,
					linkUrl: "shop/womens",
				},
				{
					title: "mens",
					/* imageUrl: "https://i.ibb.co/R70vBrQ/men.png", */
					imageUrl:
						"https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
					size: "large",
					id: 5,
					linkUrl: "shop/mens",
				},
			],
		};
	}

	render() {
		return (
			<div className="directory-menu">
				{/*
					- For each OBJECT in the sections ARRAY render a MenuItem with all the information
					- key is very important in case only 1 element changes React will only re-render that one
					- in .map() we are de-sctructuring the object so that we don't have to type "section.title" etc. 
				*/}

				{this.state.sections.map(({ title, imageUrl, id, size, linkUrl }) => (
					<MenuItem
						key={id}
						title={title}
						imageUrl={imageUrl}
						size={size}
						linkUrl={linkUrl}
					/>
				))}
			</div>
		);
	}
}

export default Directory;
