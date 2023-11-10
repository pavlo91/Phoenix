import useConfigMountEffect from 'hooks/useConfigMountEffect';
import useSettingsMountEffect from 'hooks/useSettingsMountEffect';
import Ecommerce from 'pages/dashboard/ecommerce';

const SidenavCollapse = () => {
  useSettingsMountEffect({
    disableNavigationType: true,
    disableHorizontalNavbarAppearance: true,
    disableVerticalNavbarAppearance: true,
    disableHorizontalNavbarShape: true,
    disableResetButton: true
  });

  useConfigMountEffect({
    isNavbarVerticalCollapsed: true
  });

  return <Ecommerce />;
};

export default SidenavCollapse;
