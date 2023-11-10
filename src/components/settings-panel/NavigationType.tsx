import { useAppContext } from 'providers/AppProvider';
import { ChangeEvent } from 'react';
import { Col, Row } from 'react-bootstrap';
import defaultLight from 'assets/phoenix/img/generic/default-light.png';
import defaultDark from 'assets/phoenix/img/generic/default-dark.png';
import topDefault from 'assets/phoenix/img/generic/top-default.png';
import topDefaultDark from 'assets/phoenix/img/generic/top-default-dark.png';
import navComboLight from 'assets/phoenix/img/generic/nav-combo-light.png';
import navComboDark from 'assets/phoenix/img/generic/nav-combo-dark.png';
import dualLight from 'assets/phoenix/img/generic/dual-light.png';
import dualDark from 'assets/phoenix/img/generic/dual-dark.png';
import RadioItem from './RadioItem';
import { NavPositionVariant } from 'config';
import WarningMessage from 'components/common/WarningMessage';
import { useSettingsPanelContext } from 'providers/SettingsPanelProvider';

const NavigationType = () => {
  const {
    config: { theme, navbarPosition },
    setConfig
  } = useAppContext();

  const {
    settingsPanelConfig: { disableNavigationType }
  } = useSettingsPanelContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setConfig({
      navbarPosition: value as NavPositionVariant
    });
  };

  return (
    <div className="setting-panel-item">
      <h5 className="setting-panel-item-title">Navigation Type</h5>
      <Row className="gx-2">
        <Col xs={6}>
          <RadioItem
            label="Vertical"
            name="nav-type"
            value="vertical"
            thumb={theme === 'light' ? defaultLight : defaultDark}
            checked={navbarPosition === 'vertical'}
            handleChange={handleChange}
            disabled={disableNavigationType}
          />
        </Col>
        <Col xs={6}>
          <RadioItem
            label="Horizontal"
            name="nav-type"
            value="horizontal"
            thumb={theme === 'light' ? topDefault : topDefaultDark}
            checked={navbarPosition === 'horizontal'}
            handleChange={handleChange}
            disabled={disableNavigationType}
          />
        </Col>
        <Col xs={6}>
          <RadioItem
            label="Combo"
            name="nav-type"
            value="combo"
            thumb={theme === 'light' ? navComboLight : navComboDark}
            checked={navbarPosition === 'combo'}
            handleChange={handleChange}
            disabled={disableNavigationType}
          />
        </Col>
        <Col xs={6}>
          <RadioItem
            label="Dual nav"
            name="nav-type"
            value="dual"
            thumb={theme === 'light' ? dualLight : dualDark}
            checked={navbarPosition === 'dual'}
            handleChange={handleChange}
            disabled={disableNavigationType}
          />
        </Col>
      </Row>
      {disableNavigationType && (
        <WarningMessage message="You can't update navigation type here" />
      )}
    </div>
  );
};

export default NavigationType;
