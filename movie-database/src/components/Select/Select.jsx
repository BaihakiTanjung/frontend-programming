const Select = ({ label, value, options, onChange }) => {
  return (
    <label htmlFor={value}>
      {label}
      <select name={value} id={value} value={value} onChange={onChange}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  );
};

export default Select;
