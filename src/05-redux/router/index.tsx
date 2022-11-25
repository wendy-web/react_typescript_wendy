import React, { Component } from 'react';
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';
import Film from '../view/Film';
import Cineme from '../view/Cineme';
import Center from '../view/Center';
import Detail from '../view/Detail';
export default class IndexRouter extends Component {
  render() {
    return (
      <div>
        <HashRouter>
            <Switch>
                <Route path='/film' component={Film}></Route>
                <Route path='/cineme' component={Cineme}></Route>
                <Route path='/center' component={Center}></Route>
                <Route path='/detail/:myid' component={Detail}></Route>

                <Redirect from='/' to='/film'></Redirect>
            </Switch>
        </HashRouter>
      </div>
    )
  }
}
