import React from 'react'
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Admin from './containers/Admin';
import Login from './containers/Login';
import User from './containers/User';
import Home from './components/Home';
import NotFound from './components/NotFound';

export const routes = (
    <div>
        <Route path='/' component={App}>
            <IndexRoute component={Home} />
            <Route path='/admin' component={Admin} />
            <Route path='/login' component={Login} />
            <Route path='/user/:id' component={User} exact />
            <Route path='*' component={NotFound} />
        </Route>
    </div>
)