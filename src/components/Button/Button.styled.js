import styled from 'styled-components';

const StyledButtonDefault = styled.button`
  opacity: ${(props) => (props.disabled ? `.65` : `1`)};

  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: 0.3rem;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
`;

const StyledButton = styled(StyledButtonDefault)(
  ({ theme, variant }) => theme.button.color[variant]
);

export { StyledButton };
