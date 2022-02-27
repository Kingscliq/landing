import React from 'react';

const TextArea = ({
  name,
  placeholder,
  label,
  value,
  onChange,
  ref,
  textAreaName,
  error,
  message,
}) => {
  return (
    <div>
      <div>
        <label
          htmlFor={name}
          className={`${error ? 'text-red-500' : 'text-primary'} font-bold`}
        >
          {label || 'Text Area Label'}
        </label>
        <textarea
          placeholder={placeholder}
          className={`${
            error ? 'border-red-500' : 'border-gray'
          } border rounded bg-transparent w-full h-24 my-1 outline-none px-3 py-4 resize-none`}
          value={value}
          onChange={onChange}
          ref={ref}
          name={textAreaName}
        ></textarea>
      </div>
      {error && <small className="text-red-500">{message}</small>}
    </div>
  );
};

export default TextArea;
