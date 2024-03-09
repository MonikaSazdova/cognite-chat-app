import { createContext, useContext } from "react";
import { users } from "../data";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const loggedUser = users.find(user => user.userId === "00");
	return (
		<UserContext.Provider value={loggedUser}>
			{children}
		</UserContext.Provider>
	)
}

export const useUser = () => useContext(UserContext);