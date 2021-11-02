import React from "react";
import "./App.css";
import { Switch, Route } from "react-router";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
	constructor() {
		super(); //Always necessary with extended classes

		this.state = {
			currentUser: null,
		};
	}

	unsubscribeFromAuth = null; //Method declared

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				userRef.onSnapshot((snapShot) => {
					this.setState({
						currentUser: { id: snapShot.id, ...snapShot.data() },
					});
					console.log(this.state);
				});
			} else {
				this.setState({ currentUser: userAuth });
			}
		});
	}

	componentWillUnmount() {
		/*
			- unsubscribeFromAuth is initialized as null
			- unsubscribeFromAuth is reassigned to the return value of calling auth.onAuthStateChanged(),
			this method returns another method: firebase.unsubscribe().
			- When unsubscribeFromAuth() is called inside the componentWillUnmount,
			it now has the value of firebase.unsubscribe(), which executes, closing the session.
		*/
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser} />
				{/*Switch will only render the 1st Route that matches the current location*/}
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route path="/signin" component={SignInAndSignUpPage} />
				</Switch>
			</div>
		);
	}
}

export default App;
