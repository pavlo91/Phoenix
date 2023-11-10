import useConfigMountEffect from 'hooks/useConfigMountEffect';
import useSettingsMountEffect from 'hooks/useSettingsMountEffect';
import Ecommerce from 'pages/dashboard/ecommerce';
import React from 'react';

const DualNav = () => {
  useSettingsMountEffect({
    disableNavigationType: true,
    disableVerticalNavbarAppearance: true,
    disableHorizontalNavbarShape: true,
    disableResetButton: true
  });

  useConfigMountEffect({
    navbarPosition: 'dual',
    navbarTopShape: 'default'
  });

  return <Ecommerce />;
};

export default DualNav;
