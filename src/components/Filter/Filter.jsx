import { Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { getFilter } from 'redux/contacts/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);

  return (
    <>
      <Input
        id="filter"
        type="text"
        name="filter"
        placeholder="Введіть ім'я друзяки"
        onChange={e => dispatch(setFilter(e.target.value))}
        value={value}
      />
    </>
  );
};
