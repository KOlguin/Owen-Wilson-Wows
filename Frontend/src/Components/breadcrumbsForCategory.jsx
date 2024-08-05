import React from 'react'

import Breadcrumb from 'react-bootstrap/Breadcrumb';

import '../assets/styles/breadcrumbsCategory.css'

function BreadcrumbCategory(props) {
  return (
    <div id="breadcrumDiv">
        <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>{props.categoryName}</Breadcrumb.Item>
        </Breadcrumb>
    </div>
  );
}

export default BreadcrumbCategory;