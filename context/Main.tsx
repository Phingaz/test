import React, { createContext } from "react";
import { useCycle } from "framer-motion";

type MainContext = {
  mobileNav: boolean;
  toggleMobileNav: () => void;
};

const Main = createContext<MainContext>({
  mobileNav: false,
  toggleMobileNav: () => {},
});

export function MainCtxProvider({ children }: React.PropsWithChildren<{}>) {
  const [mobileNav, toggleMobileNav] = useCycle(false, true);

  const contextValue = {
    mobileNav,
    toggleMobileNav,
  };

  return <Main.Provider value={contextValue}>{children}</Main.Provider>;
}

export default Main;
