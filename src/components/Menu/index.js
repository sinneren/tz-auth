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
            return <li className="nav-item" key={index}><Link to={'/'+item.url} className="nav-link" activeClassName="active">{item.name}</Link></li>
        });
        let login_link = {
            name: this.props.auth.status ? 'Logout' : 'Login',
            url: this.props.auth.status ? 'logout' : 'login'
        }
        return (
            <ul className="navbar-nav mr-auto">
                {generated_menu_list}
                {this.props.auth.status ? <li className="nav-item"><Link to={'/user/' + this.props.auth.id} className="nav-link" activeClassName="active">{this.props.auth.user}</Link></li> : ''}
                <li className="nav-item">
                    <Link to={'/' + login_link.url} className="nav-link" activeClassName="active">{login_link.name}</Link>
                </li>
            </ul>
        )
    }
}
export default Menu;
