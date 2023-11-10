import { useAppContext } from 'providers/AppProvider';
import { ChangeEvent } from 'react';
import { Form } from 'react-bootstrap';

const RTLMode = () => {
  const {
    config: { isRTL },
    setConfig
  } = useAppContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setConfig({
      isRTL: checked
    });
  };

  return (
    <div className="border rounded-3 p-4 setting-panel-item bg-white">
      <div className="d-flex justify-content-between align-items-center">
        <h5 className="setting-panel-item-title mb-1">RTL </h5>
        <Form.Check
          type="switch"
          id="custom-switch"
          onChange={handleChange}
          defaultChecked={isRTL}
          className="text-end"
        />
      </div>
      <p className="mb-0 text-700">Change text direction</p>
    </div>
  );
};

export default RTLMode;
