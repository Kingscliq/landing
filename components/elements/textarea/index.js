import React from 'react';

const TextArea = ({ name, placeholder, label }) => {
  return (
    <div>
      <label htmlFor={name} className="text-primary font-bold">
        {label || 'Text Area Label'}
      </label>
      <textarea
        placeholder={placeholder}
        className="border-gray border rounded bg-transparent w-full h-24 my-1 outline-none px-3 py-4"
      ></textarea>
    </div>
  );
};

export default TextArea;
