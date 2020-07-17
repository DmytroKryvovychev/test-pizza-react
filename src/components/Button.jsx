import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

function Button({ href, onClick, className, outline, children }) {
  return (
    <button
      className={classNames('button', className, {
        'button--outline': outline,
      })}
      onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
