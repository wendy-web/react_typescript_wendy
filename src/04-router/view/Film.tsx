import React, { Component } from 'react'
import { RouteComponentProps } from 'react-router-dom'; // router传递过来的router的值
export default class Film extends Component<RouteComponentProps, any> {
  render() {
    return (
      <div>
        <p>Film</p>
        <div onClick={() => {
          this.props.history.push('/detail/10')
        }}>跳转到detail的页面</div>
      </div>
    )
  }
}
