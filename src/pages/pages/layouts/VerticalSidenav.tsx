import useConfigMountEffect from 'hooks/useConfigMountEffect';
import useSettingsMountEffect from 'hooks/useSettingsMountEffect';
import Ecommerce from 'pages/dashboard/ecommerce';

const VerticalSidenav = () => {
  useSettingsMountEffect({
    disableNavigationType: true,
    disableHorizontalNavbarAppearance: true,
    disableVerticalNavbarAppearance: true,
    disableHorizontalNavbarShape: true,
    disableResetButton: true
  });

  useConfigMountEffect({
    navbarPosition: 'vertical'
  });

  return <Ecommerce />;
};

export default VerticalSidenav;
