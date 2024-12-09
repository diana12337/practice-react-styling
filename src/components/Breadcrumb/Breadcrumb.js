import React from 'react';
import BreadcrumbItem from './BreadcrumbItem';
import { StyledBreadcrumb } from './Breadcrumb.styled';

const Breadcrumb = props => {
    return (
        <StyledBreadcrumb active={props.active}>{props.children}</StyledBreadcrumb>
    );
}

export default Object.assign(Breadcrumb, {
    Item: BreadcrumbItem,
  });

