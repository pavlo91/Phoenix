/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Config } from 'config';
import {
  SettingsPanelConfig,
  useSettingsPanelContext
} from 'providers/SettingsPanelProvider';
import { useEffect } from 'react';

const useSettingsMountEffect = (effects: Partial<SettingsPanelConfig>) => {
  const { settingsPanelConfig, setSettingsPanelConfig } =
    useSettingsPanelContext();
  useEffect(() => {
    setSettingsPanelConfig(effects);
    const undoEffects = Object.keys(effects).reduce((acc, effect) => {
      // @ts-ignore
      acc[effect] = settingsPanelConfig[effect as keyof Config];
      return acc;
    }, {} as Partial<SettingsPanelConfig>);
    return () => {
      setSettingsPanelConfig(undoEffects);
    };
  }, []);
};

export default useSettingsMountEffect;
