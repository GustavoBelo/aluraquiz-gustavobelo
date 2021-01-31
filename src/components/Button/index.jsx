import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.git};
  border: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.contrastText};
  font-size: 14px;
  font-weight: bold;
  line-height: 1;
  outline: 0;
  padding: 10px 16px;
  text-transform: uppercase;
  transition: .3s;
  width: 100%;
  cursor: pointer;
  &:hover,
  &:focus {
    opacity: .5;
  }
  &:disabled {
    background-color: #979797;
    cursor: not-allowed;
  }
`;

Button.Confirm = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  border: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.mainBg};
  font-size: 14px;
  font-weight: bold;
  line-height: 1;
  margin-top: 8px;
  outline: 0;
  padding: 10px 16px;
  text-transform: uppercase;
  transition: .3s;
  width: 100%;
  cursor: pointer;
  &:hover,
  &:focus {
    opacity: .5;
  }
  &:disabled {
    background-color: #979797;
    cursor: not-allowed;
  }
`;

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
