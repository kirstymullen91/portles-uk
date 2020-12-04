import React from 'react';
import PropTypes from 'prop-types';
import './custom-button.styles.scss';

const CustomButton = ({children, isGoogleSignIn, ...otherProps}) => (
  <button
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;

CustomButton.propTypes = {
  children: PropTypes.any,
  isGoogleSignIn: PropTypes.bool,
};
