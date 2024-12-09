import styled from 'styled-components';

export const StyledTabs = styled.div`
  li {
    margin-top: 18px;
    list-style-type: none;
  }
`;
export const StyledNav = styled.ul`
  margin: 0;
  padding: 0;
`;
export const StyledNavLink = styled.li`
  display: inline-block;
  cursor: pointer;
  padding: 10px 20px 10px 20px;
  border-radius: 5px 5px 0 0;
  margin: 0;
  color: ${(props) => (props.active || props.disabled ? 'grey' : 'blue')};
  border-top: ${(props) => (props.active ? '1px solid lightgrey' : 'none')};
  border-right: ${(props) => (props.active ? '1px solid lightgrey' : 'none')};
  border-left: ${(props) => (props.active ? '1px solid lightgrey' : 'none')};
  border-bottom: ${(props) => (!props.active ? '1px solid lightgrey' : 'none')};
`;
