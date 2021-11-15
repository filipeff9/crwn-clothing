import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import { selectCurrentUser } from "./redux/user/user.selector";
import { checkUserSession } from "./redux/user/user.actions";

class App extends React.Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { checkUserSession } = this.props;
		checkUserSession();
	}

	/* componentWillUnmount() {
		
			- unsubscribeFromAuth is initialized as null
			- unsubscribeFromAuth is reassigned to the return value of calling auth.onAuthStateChanged(),
			this method returns another method: firebase.unsubscribe().
			- When unsubscribeFromAuth() is called inside the componentWillUnmount,
			it now has the value of firebase.unsubscribe(), which executes, closing the session.
		
		this.unsubscribeFromAuth();
	} */

	render() {
		return (
			<div>
				<Header />
				{/*Switch will only render the 1st Route that matches the current location*/}
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route exact path="/checkout" component={CheckoutPage} />
					<Route
						exact
						path="/signin"
						render={() =>
							this.props.currentUser ? (
								<Redirect to="/" />
							) : (
								<SignInAndSignUpPage />
							)
						}
					/>
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
	checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
