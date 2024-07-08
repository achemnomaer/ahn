"use client";
import { createContext, useContext, useState } from "react";

const NavContext = createContext();

export default function NavContextProvider({ children }) {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <NavContext.Provider value={{ navOpen, setNavOpen }}>
      {children}
    </NavContext.Provider>
  );
}

export function useNavContext() {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error("useNavContext must be used within a NavContextProvider");
  }

  return context;
}
