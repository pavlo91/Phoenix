/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Config, initialConfig } from 'config';
import { useAppContext } from 'providers/AppProvider';
import { useEffect } from 'react';

const useConfigMountEffect = (effects: Partial<Config>) => {
  const { setConfig } = useAppContext();
  useEffect(() => {
    setConfig(effects);

    return () => {
      const undoEffects = Object.keys(effects).reduce((acc, effect) => {
        // @ts-ignore
        acc[effect] = initialConfig[effect as keyof Config];
        return acc;
      }, {} as Partial<Config>);

      setConfig(undoEffects);
    };
  }, []);
};

export default useConfigMountEffect;
