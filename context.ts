import { createContext } from "react";

export const AppContext = createContext({
  setAuthentication: (data: boolean) => console.log(data),
});

export const TokenContext = createContext("");
