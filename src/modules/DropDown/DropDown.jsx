import { memo } from 'react';
import Select from 'react-select';

import styles from './dropDown.module.css';

const options = [
  { value: 'all', label: 'Show all' },
  { value: 'follow', label: 'Follow' },
  { value: 'following', label: 'Following' },
];

const DropDown = ({ filter, handleDropDownChange }) => {
  const placeholderValue =
    options.find(item => item.value === filter).label || 'Show all';

  return (
    <Select
      className={styles.wrapper}
      defaultValue={filter}
      onChange={handleDropDownChange}
      options={options}
      placeholder={placeholderValue}
    />
  );
};

export default memo(DropDown);
