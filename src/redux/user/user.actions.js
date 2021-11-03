import { UserActionTypes } from "./user.types";

export const setCurretUser = (user) => ({
	type: UserActionTypes.SET_CURRENT_USER,
	payload: user,
});
