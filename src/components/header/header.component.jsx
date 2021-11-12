import React from "react";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";

import {
	HeaderContainer,
	LogoContainer,
	OptionsContainer,
	OptionLink,
	OptionDiv,
	LogoAnimated,
} from "./header.styles";

//currentUser is recieved from the Reducer as stated in the mapStateToProps function
const Header = ({ currentUser, hidden }) => (
	<HeaderContainer>
		<LogoContainer to="/">
			<LogoAnimated />
		</LogoContainer>
		<OptionsContainer>
			<OptionLink to="/shop">SHOP</OptionLink>
			<OptionLink to="/contact">CONTACT</OptionLink>
			{currentUser ? (
				<OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
			) : (
				<OptionLink to="/signin">SIGN IN</OptionLink>
			)}
			<CartIcon />
		</OptionsContainer>
		{hidden ? null : <CartDropdown />}
	</HeaderContainer>
);

//root reducer -> user value -> user reducer -> currentUser value
const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
});
export default connect(mapStateToProps)(Header);
