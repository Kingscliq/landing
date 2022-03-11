import React from 'react';

export const Subheading = ({ children, className, props, style }) => {
  return (
    <h4
      className={['text-lg font-bold', className].join(' ')}
      {...props}
      style={style}
    >
      {children || 'This is a SubHeading'}
    </h4>
  );
};

export const SmallText = ({ children, className, props, style }) => {
  return (
    <p className={['text-base', className].join(' ')} {...props} style={style}>
      {children || 'This is a small text'}
    </p>
  );
};

export const Heading = ({ children, className, props, style }) => {
  return (
    <h2
      className={['text-lg lg:text-xl font-sans font-bold', className].join(
        ' '
      )}
      {...props}
      style={style}
    >
      {children || 'This is a heading component'}
    </h2>
  );
};

export const SmallHeading = ({ children, className, props, style }) => {
  return (
    <h2
      className={['font-sans uppercase text-sm', className].join(' ')}
      {...props}
      style={style}
    >
      {children || 'Small Text'}
    </h2>
  );
};
