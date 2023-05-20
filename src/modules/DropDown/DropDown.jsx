import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';

import { selectFilter } from '../../redux/tweets/tweets-selectors';
import { setFilter } from '../../redux/tweets/tweets-slice';

const options = [
  { value: 'all', label: 'Show all' },
  { value: 'follow', label: 'Follow' },
  { value: 'following', label: 'Following' },
];

const DropDown = () => {
  console.log('Dropdown render');
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = ({ value }) => dispatch(setFilter(value));

  return (
    <Select
      // className={}
      defaultValue={filter}
      onChange={handleChange}
      options={options}
    />
  );
};

export default memo(DropDown);
