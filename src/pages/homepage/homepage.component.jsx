import React from "react";
import Directory from "../../components/directory/directory.component";
import HomePageContainer from "./homepage.styles";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import { connect } from "react-redux";

class HomePage extends React.Component {
	componentDidMount() {
		const { fetchCollectionsStart } = this.props;
		fetchCollectionsStart();
	}

	render() {
		return (
			<HomePageContainer>
				<Directory />
			</HomePageContainer>
		);
	}
}

/* const HomePage = () => (
	<HomePageContainer>
		<Directory />
	</HomePageContainer>
); */

const mapDispatchToProps = (dispatch) => ({
	fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(HomePage);
