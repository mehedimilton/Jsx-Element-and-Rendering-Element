import React from 'react';
import ReactDom from 'react-dom';

// const element = React.createElement('h1', null, 'Hello,World!');
// const element = <h1>Hello World</h1>;

// console.log(element);
const index = 0;
const element = (
  <h1 className="heading" tabIndex={index}>
    <span className="text">Hello world!</span>
    <img src="" />
  </h1>
);
ReactDom.render(element, document.getElementById('root'));
