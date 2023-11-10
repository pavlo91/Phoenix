import useConfigMountEffect from 'hooks/useConfigMountEffect';
import useSettingsMountEffect from 'hooks/useSettingsMountEffect';
import Ecommerce from 'pages/dashboard/ecommerce';

const NavbarTopSlim = () => {
  useSettingsMountEffect({
    disableNavigationType: true,
    disableHorizontalNavbarAppearance: true,
    disableVerticalNavbarAppearance: true,
    disableHorizontalNavbarShape: true,
    disableResetButton: true
  });

  useConfigMountEffect({
    navbarTopShape: 'slim',
    navbarPosition: 'horizontal',
    navbarTopAppearance: 'darker'
  });

  return <Ecommerce />;
};

export default NavbarTopSlim;
