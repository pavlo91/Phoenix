import { useAppContext } from 'providers/AppProvider';
import { ChangeEvent } from 'react';
import { Col, Row } from 'react-bootstrap';
import topDefault from 'assets/phoenix/img/generic/top-default.png';
import topDefaultDarker from 'assets/phoenix/img/generic/top-default-dark.png';
import navTopLight from 'assets/phoenix/img/generic/navbar-top-style-light.png';
import navTopLighter from 'assets/phoenix/img/generic/top-style-lighter.png';
import RadioItem from './RadioItem';
import { NavbarAppearanceVariant } from 'config';
import classNames from 'classnames';
import WarningMessage from 'components/common/WarningMessage';
import { useSettingsPanelContext } from 'providers/SettingsPanelProvider';

interface TopNavbarAppearanceProps {
  className?: string;
}

const TopNavbarAppearance = ({ className }: TopNavbarAppearanceProps) => {
  const {
    config: { theme, navbarTopAppearance },
    setConfig
  } = useAppContext();

  const {
    settingsPanelConfig: { disableHorizontalNavbarAppearance }
  } = useSettingsPanelContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setConfig({
      navbarTopAppearance: value as NavbarAppearanceVariant
    });
  };

  return (
    <div className={classNames(className, 'setting-panel-item')}>
      <h5 className="setting-panel-item-title">Horizontal Navbar Appearance</h5>
      <Row className="gx-2">
        <Col xs={6}>
          <RadioItem
            label="Default"
            name="top-navbar-appearance"
            value="default"
            thumb={theme === 'light' ? topDefault : topDefaultDarker}
            checked={navbarTopAppearance === 'default'}
            handleChange={handleChange}
            disabled={disableHorizontalNavbarAppearance}
          />
        </Col>
        <Col xs={6}>
          <RadioItem
            label={theme === 'light' ? 'Darker' : 'Lighter'}
            name="top-navbar-appearance"
            value="darker"
            thumb={theme === 'light' ? navTopLight : navTopLighter}
            checked={navbarTopAppearance === 'darker'}
            handleChange={handleChange}
            disabled={disableHorizontalNavbarAppearance}
          />
        </Col>
      </Row>
      {disableHorizontalNavbarAppearance && (
        <WarningMessage message="You can't update horizontal navbar appearance here" />
      )}
    </div>
  );
};

export default TopNavbarAppearance;
