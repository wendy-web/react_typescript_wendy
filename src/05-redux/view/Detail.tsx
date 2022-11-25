import React, { Component } from 'react'
import { RouteComponentProps } from 'react-router-dom';
import store from '../redux/store';
// 接口约束的写法
interface Iparams {
    myid: string
}
export default class Detail extends Component<RouteComponentProps<Iparams>, any> {
    // 以断言的方式使用
    componentDidMount() {
        store.dispatch({
            type: 'hide'
        });
    }
    componentWillUnmount(){
        store.dispatch({
            type: 'show'
        });
    }
    render() {
        return (
            <div>Detail</div>
        )
    }
}
