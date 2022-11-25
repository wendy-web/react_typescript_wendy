import React, { Component } from 'react'
import { RouteComponentProps } from 'react-router-dom';
// 接口约束的写法
interface Iparams {
    myid: string
}
export default class Detail extends Component<RouteComponentProps<Iparams>, any> {
    // 以断言的方式使用
    componentDidMount() {
        console.log(this.props.match.params.myid);
    }
    render() {
        return (
            <div>Detail</div>
        )
    }
}
