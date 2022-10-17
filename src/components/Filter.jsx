import { useSelector, useDispatch } from 'react-redux';
import { TextField, Typography, Box } from '@mui/material';
import { filterAdd } from '../redux/contactsSlice';
import { Containerfilter } from './ui/Filter.styled';

export const Filter = () => {
  const valueFilter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  // console.log(valueFilter);

  const filterChange = evt => dispatch(filterAdd(evt.currentTarget.value));

  return (
    <Containerfilter>
      <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'baseline'}}>
       <Typography variant="h6" component="div" sx={{mr: '15px',  letterSpacing: '.2rem'}}>Find contacts</Typography>
      <TextField
        type="search"
        label="Name"
        variant="standard"
        name="filter"
        title="Filter is case insensitive"
        value={valueFilter}
        onChange={filterChange}
      />
</Box>
     
    </Containerfilter>
  );
};
