import React, { createContext, useContext } from "react";
import { AuthService } from "./AuthService";
import { authServiceImpl } from "./authServiceImpl";

const AuthServiceContext = createContext<AuthService>(authServiceImpl);

export function AuthServiceProvider({children}: {children : React.ReactNode}){
  return (
    <AuthServiceContext.Provider value={authServiceImpl}>
      {children}
    </AuthServiceContext.Provider>
  );
}

export function useAuthService(){
  return useContext(AuthServiceContext);
}