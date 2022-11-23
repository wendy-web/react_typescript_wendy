import { Component } from 'react';
interface IState {
  name: string
}
// <属性值接口， 状态值接口>
export default class App extends Component<any, IState> {
  state = {
    name: 'wendy'
  }
  render() {
    return (
      <div>
        <p>组件的state -- {this.state.name}</p>
        <button onClick={() => {
          this.setState({
            name: 'Tan wendy'
          })
        }}>更改state的值</button>
      </div>
    )
  }
}
