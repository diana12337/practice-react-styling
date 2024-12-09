import React, { useState } from 'react';

import { StyledTabs, StyledNavLink, StyledNav } from './Tabs.styled';

const Tabs = ({ children, defaultActiveKey }) => {
  const [active, setActive] = useState(defaultActiveKey);

  function handleClick(key, disabled) {
    if (!disabled) {
      setActive(key);
    }
  }
  return (
    <>
      <nav>
        <StyledNav>
          {React.Children.map(children, (child) => (
            <StyledNavLink
              active={child.props.eventKey === active}
              disabled={child.props.disabled}
            >
              <a
                key={child.props.eventKey}
                onClick={() =>
                  handleClick(child.props.eventKey, child.props.disabled)
                }
              >
                {child.props.title}
              </a>
            </StyledNavLink>
          ))}
        </StyledNav>
      </nav>
      <StyledTabs active={active}>
        {React.Children.map(
          children,
          (child) =>
            child.props.eventKey === active && (
              <div key={child.props.eventKey}>{child}</div>
            )
        )}
      </StyledTabs>
    </>
  );
};

export default Tabs;
