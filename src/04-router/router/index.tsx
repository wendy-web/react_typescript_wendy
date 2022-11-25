import React, { Component } from 'react';
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';
import Film from '../view/Film';
import Cineme from '../view/Cineme';
import Center from '../view/Center';

export default class IndexRouter extends Component {
  render() {
    return (
      <div>
        <HashRouter>
            <Switch>
                <Route path='/film' component={Film}></Route>
                <Route path='/cineme' component={Cineme}></Route>
                <Route path='/center' component={Center}></Route>

                <Redirect from='/' to='/film'></Redirect>
            </Switch>
        </HashRouter>
      </div>
    )
  }
}
