import useConfigMountEffect from 'hooks/useConfigMountEffect';
import useSettingsMountEffect from 'hooks/useSettingsMountEffect';
import Ecommerce from 'pages/dashboard/ecommerce';

const NavbarHorizontalSlim = () => {
  useSettingsMountEffect({
    disableNavigationType: true,
    disableHorizontalNavbarAppearance: true,
    disableVerticalNavbarAppearance: true,
    disableHorizontalNavbarShape: true,
    disableResetButton: true
  });

  useConfigMountEffect({
    navbarTopShape: 'slim',
    navbarPosition: 'horizontal'
  });

  return <Ecommerce />;
};

export default NavbarHorizontalSlim;
