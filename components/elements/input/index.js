// hello
import React, { useRef, useState } from 'react';

const Input = ({
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
  label,
  inputRef,
  message,
}) => {
  // const inputRef = useRef();
  return (
    <div>
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
            value={value}
            onClick={onClick}
            error={error}
            onChange={onChange}
            name={name}
            ref={inputRef}
            {...props}
          />
        </div>
      </div>
      {error && <small style={{ color: '#e11900' }}>{message}</small>}
    </div>
  );
};

export default Input;
