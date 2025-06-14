//import { createContext } from "react";
import { createContext, useState } from "react";

export const AuthContext = createContext({});

function AuthContextProvidor({ children }) {
  const [auth, setAuth] = useState({ userName: "Klenam" });
  // const [isLoading, setIsLoading] = useState(false);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvidor;
