import { createContext, useState, useContext } from 'react';

export const AppContext = createContext({} as ReturnType<typeof useAppState>);

export function useAppState() {
	const [isLoginPage, setIsLoginPage] = useState(true);
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	return {
		isLoginPage,
		setIsLoginPage,
		isAuthenticated,
		setIsAuthenticated,
	};
}

export function useAppContext() {
	return useContext(AppContext);
}
