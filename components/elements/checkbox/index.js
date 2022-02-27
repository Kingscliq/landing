import React from 'react';

const CheckBox = ({
  label,
  className,
  id,
  htmlFor,
  checkref,
  checked,
  onChange,
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      <input
        type="checkbox"
        className="w-5 h-5 border rounded-[0.5rem] mr-2 checked:bg-primary"
        id={id}
        ref={checkref}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={htmlFor} className="text-primary">
        {label || 'Checkbox'}
      </label>
    </div>
  );
};

export default CheckBox;
