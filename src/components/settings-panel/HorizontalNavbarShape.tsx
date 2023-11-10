import { useAppContext } from 'providers/AppProvider';
import { ChangeEvent } from 'react';
import { Col, Row } from 'react-bootstrap';
import topDefault from 'assets/phoenix/img/generic/top-default.png';
import topDefaultDark from 'assets/phoenix/img/generic/top-default-dark.png';
import topSlim from 'assets/phoenix/img/generic/top-slim.png';
import topSlimDark from 'assets/phoenix/img/generic/top-slim-dark.png';
import RadioItem from './RadioItem';
import { NavTopShapeVariant } from 'config';
import WarningMessage from 'components/common/WarningMessage';
import { useSettingsPanelContext } from 'providers/SettingsPanelProvider';

const HorizontalNavbarShape = () => {
  const {
    config: { theme, navbarTopShape },
    setConfig
  } = useAppContext();

  const {
    settingsPanelConfig: { disableHorizontalNavbarShape }
  } = useSettingsPanelContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setConfig({
      navbarTopShape: value as NavTopShapeVariant
    });
  };

  return (
    <div className="setting-panel-item">
      <h5 className="setting-panel-item-title">Horizontal Navbar Shape</h5>
      <Row className="gx-2">
        <Col xs={6}>
          <RadioItem
            label="Default"
            name="top-nav-shape"
            value="default"
            thumb={theme === 'light' ? topDefault : topDefaultDark}
            checked={navbarTopShape === 'default'}
            handleChange={handleChange}
            disabled={disableHorizontalNavbarShape}
          />
        </Col>
        <Col xs={6}>
          <RadioItem
            label="Slim"
            name="top-nav-shape"
            value="slim"
            thumb={theme === 'light' ? topSlim : topSlimDark}
            checked={navbarTopShape === 'slim'}
            handleChange={handleChange}
            disabled={disableHorizontalNavbarShape}
          />
        </Col>
      </Row>
      {disableHorizontalNavbarShape && (
        <WarningMessage message="You can't update horizontal navbar shape here" />
      )}
    </div>
  );
};

export default HorizontalNavbarShape;
