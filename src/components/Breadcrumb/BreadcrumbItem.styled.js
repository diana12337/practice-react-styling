import { propTypes } from 'react-bootstrap/esm/Image';
import styled from 'styled-components';

const StyledBreadcrumbItem = styled.li`
  color: ${(props) => (props.active ? `#6c757d;` : `blue`)};
  display: list-item;
  text-align: -webkit-match-parent;
  unicode-bidi: isolate;
  & + &::before {
    display: inline-block;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
    color: #6c757d;
    content: '/';
  }
`;

export { StyledBreadcrumbItem };
