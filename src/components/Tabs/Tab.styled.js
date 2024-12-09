import styled from 'styled-components';

const StyledTab = styled.li`
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

export { StyledTab };
