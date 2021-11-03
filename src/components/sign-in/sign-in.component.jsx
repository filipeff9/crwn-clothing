import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle, auth } from "../../firebase/firebase.utils";
import "./sign-in.styles.scss";

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		// email and password will be dynamic as the user types
		this.state = {
			email: "",
			password: "",
		};
	}

	handleSubmit = async (event) => {
		/* The default behaviour of a form submit is to Reload the page
		We prevent that because we only want to clear the inputs to be the only visual clue */
		event.preventDefault();

		const { email, password } = this.state;

		try {
			auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: "", password: "" });
		} catch (error) {
			console.log(error);
		}
	};

	handleChange = (event) => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="sign-in">
				<h2 className="title">I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="email"
						type="email"
						label="Email"
						value={this.state.email}
						handleChange={this.handleChange}
						required
					/>
					<FormInput
						name="password"
						type="password"
						label="Password"
						value={this.state.password}
						handleChange={this.handleChange}
						required
					/>

					<div className="buttons">
						<CustomButton type="submit">Sign In</CustomButton>
						<CustomButton
							type="button"
							onClick={signInWithGoogle}
							isGoogleSignIn
						>
							Sign In With Google
							{/*This is passed as props.children or just children*/}
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
