import React, { Component } from 'react';
import IndexRouter from './router/index';
export default class App extends Component {
  render() {
    return (
      <div>
        <p>路由的type的类型的使用 - @type/router</p>
        <IndexRouter></IndexRouter>
      </div>
    )
  }
}
