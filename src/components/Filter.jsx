import { useSelector, useDispatch } from 'react-redux';
import { filterAdd } from '../redux/contactsSlice';
import { Containerfilter, LabelFilter, InputFiler } from './ui/Filter.styled';

export const Filter = () => {
  const valueFilter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  // console.log(valueFilter);

  const filterChange = evt => dispatch(filterAdd(evt.currentTarget.value));

  return (
    <Containerfilter>
      <LabelFilter htmlFor="filterContact">Find contacts by name </LabelFilter>
      <InputFiler
        type="text"
        name="filter"
        placeholder="Enter a name for the search query"
        id="filterContact"
        title="Filter is case insensitive"
        value={valueFilter}
        onChange={filterChange}
      />
    </Containerfilter>
  );
};
