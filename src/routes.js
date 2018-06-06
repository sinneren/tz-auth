import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Admin from './containers/Admin';
import Login from './containers/Login';
import Logout from './containers/Logout';
import User from './containers/User';
import News from './containers/News';
import Home from './components/Home';
import NotFound from './components/NotFound';

export const routes = (
    <div>
        <Route path='/' component={App}>
            <IndexRoute component={Home} />
            <Route path='/admin' component={Admin} />
            <Route path='/login' component={Login} />
            <Route path='/logout' component={Logout} />
            <Route path='/news' component={News} />
            <Route path='/user/:id' component={User} exact />
            <Route path='*' component={NotFound} />
        </Route>
    </div>
)