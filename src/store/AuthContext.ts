import { useContext, createContext } from "react";

interface AuthContext {
    user?: {
        displayName: string
    },
    googleSignIn: () => void,
    logOut: () => void,
}

const authContextInitialValue: AuthContext = {
    user: undefined,
    googleSignIn: () => {},
    logOut: () => {},
};
export const AuthContext = createContext(authContextInitialValue);

export const UserAuth = () => {
  return useContext(AuthContext);
};

