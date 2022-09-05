import React, { useState, useEffect, createContext } from 'react';
// import CacheStorage from './src/helpers/cacheStorage';

export const GlobalContext = createContext({
  chosenAddOn: {
    onboarding: false,
    payroll: false,
    hiring: false,
    additionalPayrollSupport: false,
    laborLawPoster: false,
    hrOnDemand: false,
    onboardingPro: false,
  },
  // tslint:disable-next-line: no-empty
  handleChosenAddOn: (_addOn) => {},
  // tslint:disable-next-line: no-empty
  resetChosenAddOn: async () => {},
  openMenu: {
    mobile: false,
    shoppingCart: false,
  },
  // tslint:disable-next-line: no-empty
  setOpenMenu: (_newOpenMenu) => {},
});

type GlobalContextProviderProps = {
  children: any;
};

const GlobalContextProvider = (props: GlobalContextProviderProps) => {
  const { children } = props;
  const chosenAddOnDefaultValue = {
    onboarding: false,
    payroll: false,
    hiring: false,
    additionalPayrollSupport: false,
    laborLawPoster: false,
    hrOnDemand: false,
    onboardingPro: false,
  };
  // const cache = new CacheStorage();
  const [chosenAddOn, setChosenAddOn] = useState(chosenAddOnDefaultValue);
  const [openMenu, setOpenMenu] = useState({
    mobile: false,
    shoppingCart: false,
  });

  const handleChosenAddOn = (addOnValue) => {
    setChosenAddOn(addOnValue);
  };

  const resetChosenAddOn = async () => {
    setChosenAddOn(chosenAddOnDefaultValue);
  };

  // useEffect(() => {
  //   // Update cache value if `chosenAddOn` state changes
  //   cache.setChosenAddOnsCache({ data: chosenAddOn });
  // }, [chosenAddOn]);

  return (
    <GlobalContext.Provider
      value={{
        chosenAddOn,
        handleChosenAddOn,
        resetChosenAddOn,
        openMenu,
        setOpenMenu,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default ({ element }) => <GlobalContextProvider>{element}</GlobalContextProvider>;
