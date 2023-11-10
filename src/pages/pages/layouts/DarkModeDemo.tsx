import useConfigMountEffect from 'hooks/useConfigMountEffect';
import useSettingsMountEffect from 'hooks/useSettingsMountEffect';
import Ecommerce from 'pages/dashboard/ecommerce';

const DarkModeDemo = () => {
  useSettingsMountEffect({
    disableNavigationType: true,
    disableHorizontalNavbarAppearance: true,
    disableVerticalNavbarAppearance: true,
    disableHorizontalNavbarShape: true,
    disableResetButton: true
  });

  useConfigMountEffect({
    theme: 'dark'
  });

  return <Ecommerce />;
};

export default DarkModeDemo;
