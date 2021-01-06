import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from '../containers/Login'
import WorkBench from '../containers/Workbench'
import Project from '../containers/Project'
import Sale from '../containers/Sale'
import File from '../containers/File'

const Router:any = () => {
    return (
        <Switch>
            <Route exact path="/" component={Login}></Route>
            <Route path="/workBench" component={WorkBench}></Route>
            <Route path="/project" component={Project}></Route>
            <Route path="/sale" component={Sale}></Route>
            <Route path="/file" component={File}></Route>
        </Switch >
    )
}
export default Router