import React, {
  Children,
  PropsWithChildren,
  ReactElement,
  cloneElement,
  useState
} from 'react';
import SearchBox, { SearchBoxProps } from './SearchBox';
import { Dropdown } from 'react-bootstrap';

interface DropdownSearchBoxProps extends SearchBoxProps {
  className?: string;
  searchBoxClassName?: string;
}

const DropdownSearchBox = ({
  children,
  className,
  searchBoxClassName,
  ...rest
}: PropsWithChildren<DropdownSearchBoxProps>) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState('');
  return (
    <Dropdown
      className={className}
      onToggle={() => setOpenDropdown(!openDropdown)}
      show={openDropdown}
    >
      <Dropdown.Toggle
        as="div"
        data-toggle="dropdown"
        aria-expanded={openDropdown}
        bsPrefix="toggle"
      >
        <SearchBox
          placeholder="Search..."
          className={searchBoxClassName}
          value={searchInputValue}
          onChange={({ target }) => {
            setSearchInputValue(target.value);
            setOpenDropdown(true);
          }}
          {...rest}
        />
      </Dropdown.Toggle>
      {children && (
        <Dropdown.Menu
          className="dropdown-menu border border-300 font-base start-0 py-0 overflow-hidden w-100"
          style={{ width: 400 }}
        >
          {Children.map(children, child =>
            cloneElement(child as ReactElement, {
              searchValue: searchInputValue
            })
          )}
        </Dropdown.Menu>
      )}
    </Dropdown>
  );
};

export default DropdownSearchBox;
