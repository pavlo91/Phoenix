import { Dropdown } from 'react-bootstrap';

const ActionDropdownItems = () => {
  return (
    <>
      <Dropdown.Item eventKey="1">View</Dropdown.Item>
      <Dropdown.Item eventKey="2">Export</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="4" className="text-danger">
        Remove
      </Dropdown.Item>
    </>
  );
};

export default ActionDropdownItems;
