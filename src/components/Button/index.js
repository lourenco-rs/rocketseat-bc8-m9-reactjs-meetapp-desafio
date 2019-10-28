import React from 'react';
import PropTypes from 'prop-types';
import { FaSpinner } from 'react-icons/fa';

import { Button as StyledButton } from './styles';

export default function Button({ children, isLoading, disabled, ...props }) {
  return (
    <StyledButton isLoading={isLoading} isDisabled={disabled} {...props}>
      {isLoading ? <FaSpinner /> : children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  isLoading: false,
  disabled: false,
};
