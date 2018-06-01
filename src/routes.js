import React from 'react'
import { Route, IndexRoute } from 'react-router';
import { connectedRouterRedirect } from 'redux-auth-wrapper/history3/redirect';

import App from './containers/App';
import Admin from './containers/Admin';
import Login from './containers/Login';
import Home from './components/Home';

const userIsAuthenticated = connectedRouterRedirect({
    redirectPath: '/login',
    authenticatedSelector: state => state.status !== false
})
console.log(this)

export const routes = (
    <div>
        <Route path='/' component={App}>
            <IndexRoute component={Home} />
            <Route path='/admin' component={userIsAuthenticated(Admin)} />
            <Route path='/login' component={Login} />
        </Route>
    </div>
)