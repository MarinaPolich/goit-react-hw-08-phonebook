export const Filter = ({ value, onChange }) => {
  return (
    <label htmlFor="filter">
      Find contacts by name
      <input
        id="filter"
        type="text"
        name="filter"
        onChange={e => onChange(e.target.value)}
        value={value}
      />
    </label>
  );
};
