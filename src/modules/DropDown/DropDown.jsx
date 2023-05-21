import { memo } from 'react';
import Select from 'react-select';

const options = [
  { value: 'all', label: 'Show all' },
  { value: 'follow', label: 'Follow' },
  { value: 'following', label: 'Following' },
];

const DropDown = ({ filter, handleDropDownChange }) => {
  return (
    <Select
      // className={}
      defaultValue={filter}
      onChange={handleDropDownChange}
      options={options}
    />
  );
};

export default memo(DropDown);
