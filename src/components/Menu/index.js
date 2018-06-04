import React, { Component } from 'react';
import { Link } from 'react-router';
import { ROUTE_LIST } from '../../route-list';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.login_link = {
            auth: {
                name: 'Logout',
                url: 'logout'
            },
            not_auth: {
                name: 'Login',
                url: 'logout'
            }
        }
    }
    render() {
        let generated_menu_list = ROUTE_LIST.map(function (item, index) {
            return <li className="nav-item" key={index}><Link to={'/'+item.url} className="nav-link" activeClassName='active'>{item.name}</Link></li>
        });
        return (
            <ul className="navbar-nav mr-auto">
                {generated_menu_list}
                <li className="nav-item">
                    <Link to={'/' + this.props.auth.status ? this.login_link.auth.url : this.login_link.not_auth.url} className="nav-link" activeClassName='active'>{this.props.auth.status ? this.login_link.auth.name : this.login_link.not_auth.name}</Link>
                </li>
            </ul>
        )
    }
}
export default Menu;
