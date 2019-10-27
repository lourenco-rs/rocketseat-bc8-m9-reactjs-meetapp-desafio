import React from 'react';
import PropTypes from 'prop-types';
import { FaSpinner } from 'react-icons/fa';

import { Button as StyledButton } from './styles';

export default function Button({ children, isLoading, ...props }) {
  return (
    <StyledButton isLoading={isLoading} {...props}>
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
};

Button.defaultProps = {
  isLoading: false,
};
