import React from 'react';
import Image from 'next/image';
import { loader } from '../../../assets/icons';

import styles from './button.module.scss';

const Button = ({
  type,
  label,
  onClick,
  onMouseOver,
  disabled,
  loading,
  loadingText,
  className,
  loadingIcon,
  btnIcon,
  variant,
}) => {
  return (
    <button
      type={type || 'button'}
      onClick={onClick}
      onMouseOver={onMouseOver}
      disabled={loading || disabled}
      className={[
        `btn btn-${variant || 'primary'} text-white relative`,
        className,
      ].join(' ')}
      style={
        loading || disabled ? { cursor: 'not-allowed', opacity: '.68' } : null
      }
    >
      {loading ? (
        <div className="flex justify-center align-middle">
          {<Image src={loader} height={40} width={40} alt="loading..." />}
        </div>
      ) : (
        <div className={styles.btn__icon__container}>
          {btnIcon && 'btnICon'}
          <p>{label || 'Button Text'}</p>
        </div>
      )}
    </button>
  );
};

export default Button;
