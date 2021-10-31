import React from "react";
import { withRouter } from "react-router";
import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
	<div
		className={`${size} menu-item`}
		onClick={() => history.push(`${match.url}${linkUrl}`)}
	>
		<div
			style={{
				backgroundImage: `url(${imageUrl})`, //Dynamic style in case the Url changes
			}}
			className="background-image"
		/>
		<div className="content">
			<h1 className="title">{title.toUpperCase()}</h1>
			<span className="subtitle">SHOP NOW</span>
		</div>
	</div>
);

/*
	- withRouter() is an HOC that will provide history, match and location to the component.
		Those are important in the onClick function to give history the desired Url.
	- E.G. We are in / and on clicking the hats MenuItem we will be redirected to ${match.url}${linkUrl}
		in which match.url is / and linkUrl is passed as shops/hats ===> localhost:3000/shops/hats
*/
export default withRouter(MenuItem);
