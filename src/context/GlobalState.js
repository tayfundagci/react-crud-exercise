import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial State
const initialState = {
  users: [
    {
      id: 1,
      name: "Tayfun",
    },
    {
      id: 2,
      name: "Gökalp",
    },
    {
      id: 3,
      name: "Ulgar",
    },
  ],
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        users: state.users,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
