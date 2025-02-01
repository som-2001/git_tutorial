import { createContext, useState } from "react";

export const Context = createContext(null);

export const ContextProvider = ({ children }) => {
  const [name, setName] = useState("someswar1234");
  return (
    <Context.Provider value={{ name, setName }}>{children}
    </Context.Provider>
  );
};
