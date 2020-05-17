import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../components/Header';
import Navigation from '../components/navigation';
import Home from '../components/body';
import Dummy from '../components/dummyCompo';
import { Route, Switch, HashRouter } from "react-router-dom";

const AdminPanel = () => {
    return(<React.Fragment>
        <HashRouter>
            <div style={{display:'flex'}}>
                <CssBaseline />
                <Header/>
                <Navigation/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/dummyComponent" component={Dummy}/>
                </Switch>
            </div>
        </HashRouter>
        </React.Fragment>)
}

export default AdminPanel;