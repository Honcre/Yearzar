//https://www.babelcoder.com/blog/posts/react-redux-isomorphic-day1-introduction-to-webpack2
//https://weblog.west-wind.com/posts/2017/Mar/04/Getting-JavaScript-Properties-for-Object-Maps-by-Index-or-Name
require('./lib');

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/site.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './reactcomponent';

import ES6Lib from './es6codelib';

ReactDOM.render(
    <Counter />,
    document.getElementById('basicreactcomponent')
);



module.hot.accept();


/*
 * React is object
 * var React = {
  Children: {
    map: ReactChildren_1.map,
    forEach: ReactChildren_1.forEach,
    count: ReactChildren_1.count,
    toArray: ReactChildren_1.toArray,
    only: onlyChild_1
  },

  Component: ReactBaseClasses.Component,
  PureComponent: ReactBaseClasses.PureComponent,
  unstable_AsyncComponent: ReactBaseClasses.AsyncComponent,

  createElement: createElement,
  cloneElement: cloneElement,
  isValidElement: ReactElement_1.isValidElement,

  createFactory: createFactory,

  version: ReactVersion,

  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
    ReactCurrentOwner: ReactCurrentOwner_1,
    // Used by renderers to avoid bundling object-assign twice in UMD bundles:
    assign: index
  }
};
 */