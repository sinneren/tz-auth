import React from 'react'
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Admin from './containers/Admin';
import Login from './containers/Login';
import Home from './components/Home';

export const routes = (
    <div>
        <Route path='/' component={App}>
            <IndexRoute component={Home} />
            <Route path='/admin' component={Admin} />
            <Route path='/login' component={Login} />
        </Route>
    </div>
)