import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  useContext,
  useEffect,
  useReducer
} from 'react';
import { getColor, getItemFromStore } from 'helpers/utils';
import { Config, initialConfig } from 'config';
import { ACTIONTYPE, configReducer } from 'reducers/ConfigReducer';

interface AppContextInterFace {
  config: Config;
  configDispatch: Dispatch<ACTIONTYPE>;
  toggleTheme: () => void;
  setConfig: (payload: Partial<Config>) => void;
  getThemeColor: (name: string) => string;
}

export const AppContext = createContext({} as AppContextInterFace);

const AppProvider = ({ children }: PropsWithChildren) => {
  const configState: Config = {
    isNavbarVerticalCollapsed: getItemFromStore(
      'isNavbarVerticalCollapsed',
      initialConfig.isNavbarVerticalCollapsed
    ),
    openNavbarVertical: initialConfig.openNavbarVertical,
    theme: getItemFromStore('theme', initialConfig.theme),
    navbarTopAppearance: getItemFromStore(
      'navbarTopAppearance',
      initialConfig.navbarTopAppearance
    ),
    navbarVerticalAppearance: getItemFromStore(
      'navbarVerticalAppearance',
      initialConfig.navbarVerticalAppearance
    ),
    navbarPosition: getItemFromStore(
      'navbarPosition',
      initialConfig.navbarPosition
    ),
    navbarTopShape: getItemFromStore(
      'navbarTopShape',
      initialConfig.navbarTopShape
    ),
    isRTL: getItemFromStore('isRTL', initialConfig.isRTL)
  };

  const [config, configDispatch] = useReducer(configReducer, configState);

  const setConfig = (payload: Partial<Config>) => {
    configDispatch({
      type: 'SET_CONFIG',
      payload
    });
  };

  const toggleTheme = () => {
    configDispatch({
      type: 'SET_CONFIG',
      payload: {
        theme: config.theme === 'dark' ? 'light' : 'dark'
      }
    });
  };

  const getThemeColor = (name: string) => {
    return getColor(name);
  };

  useEffect(() => {
    if (config.navbarTopShape === 'slim') {
      document.body.classList.add('nav-slim');
    } else {
      document.body.classList.remove('nav-slim');
    }

    if (config.navbarPosition === 'combo') {
      document.documentElement.classList.add('navbar-combo');
    } else {
      document.documentElement.classList.remove('navbar-combo');
    }

    if (config.navbarPosition === 'dual') {
      setConfig({
        navbarTopShape: 'default'
      });
      document.documentElement.classList.add('dual-nav');
    } else {
      document.documentElement.classList.remove('dual-nav');
    }

    if (config.navbarPosition === 'horizontal') {
      document.documentElement.classList.add('navbar-horizontal');
    } else {
      document.documentElement.classList.remove('navbar-horizontal');
    }

    if (config.isNavbarVerticalCollapsed) {
      document.documentElement.classList.add('navbar-vertical-collapsed');
    } else {
      document.documentElement.classList.remove('navbar-vertical-collapsed');
    }
  }, [config]);

  return (
    <AppContext.Provider
      value={{ config, setConfig, toggleTheme, getThemeColor, configDispatch }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppProvider;
