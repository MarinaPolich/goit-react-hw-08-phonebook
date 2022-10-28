import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <>
      <Label htmlFor="filter">Find contacts by name</Label>
      <Input
        id="filter"
        type="text"
        name="filter"
        onChange={e => onChange(e.target.value)}
        value={value}
      />
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
