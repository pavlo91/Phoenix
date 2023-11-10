import { Config, initialConfig } from 'config';
import { setItemToStore } from 'helpers/utils';

export type ACTIONTYPE =
  | { type: 'SET_CONFIG'; payload: Partial<Config> }
  | { type: 'REFRESH' }
  | { type: 'RESET' };

export const configReducer = (state: Config, action: ACTIONTYPE) => {
  switch (action.type) {
    case 'SET_CONFIG': {
      const { payload } = action;
      Object.keys(payload).forEach(key => {
        if (
          [
            'theme',
            'navbarTopShape',
            'navbarPosition',
            'navbarTopAppearance',
            'navbarVerticalAppearance',
            'isRTL',
            'isNavbarVerticalCollapsed'
          ].includes(key)
        ) {
          setItemToStore(key, String(payload[key as keyof Config]));
        }
      });
      return {
        ...state,
        ...payload
      };
    }
    case 'REFRESH':
      return {
        ...state
      };
    case 'RESET':
      localStorage.clear();
      return {
        ...initialConfig
      };
    default:
      return state;
  }
};
