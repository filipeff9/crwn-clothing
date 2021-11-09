import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

const Directory = ({ sections }) => (
	<div className="directory-menu">
		{/*
			- For each OBJECT in the sections ARRAY render a MenuItem with all the information
			- key is very important in case only 1 element changes React will only re-render that one
			- in .map() we are de-sctructuring the object so that we don't have to type "section.title" etc. 
		*/}

		{sections.map(({ title, imageUrl, id, size, linkUrl }) => (
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

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
