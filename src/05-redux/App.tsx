import React, { Component } from 'react';
import store from './redux/store';
import IndexRouter from './router/index';
export default class App extends Component {
  state = {
    isShow: (store.getState() as any).isShow
  }
  componentDidMount() {
    
    store.subscribe(() => {
      console.log((store.getState() as any).isShow);
      this.setState({
        isShow: (store.getState() as any).isShow
      })
    })
  }
  render() {
    return (
      <div>
        <p>路由的type的类型的使用 - @type/router</p>
        <IndexRouter></IndexRouter>

        { this.state.isShow && <p style={{background: 'red'}}>此处为模拟选项卡的展示内容</p>}
      </div>
    )
  }
}
