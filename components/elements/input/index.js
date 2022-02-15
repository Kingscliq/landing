// hello
import React, { useState } from 'react';

const Input = ({
  disabled,
  focused,
  filled,
  fullwidth,
  required,
  onEmpty,
  type,
  placeholder,
  value,
  onClick,
  error,
  className,
  onChange,
  name,
  success,
  props,
  max,
  maxLength,
  onFocus,
  onBlur,
  label,
}) => {
  return (
    <div>
      <label
        className="text-primary font-bold"
        style={error ? { color: '#e11900' } : null}
      >
        {label || 'Form label'}
      </label>
      <div
        className={[
          className,
          'border-gray border rounded bg-transparent w-full h-12 my-1',
        ].join(' ')}
        style={
          error
            ? {
                backgroundColor: '#ffefed',
                border: '1px solid #e11900',
                color: 'rgba(15, 55, 90, 1)',
              }
            : success
            ? {
                border: '2px solid var(--secondary)',
                color: 'var(--neutral-dark)',
              }
            : null
        }
      >
        <input
          type={type || 'text'}
          className={
            'border-0 outline-none bg-transparent px-3 py-4 h-12 w-full'
          }
          placeholder={placeholder || 'this is a placeholder'}
          onFocus={onFocus}
          value={value}
          onClick={onClick}
          onEmptied={onEmpty}
          required={required}
          onBlur={onBlur}
          fullwidth={fullwidth}
          error={error}
          focused={focused}
          filled={filled}
          disabled={disabled}
          onChange={onChange}
          name={name}
          max={max}
          maxLength={maxLength}
          {...props}
        />
      </div>
    </div>
  );
};

export default Input;
