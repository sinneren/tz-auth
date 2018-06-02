import React, { Component } from 'react';
import { Link } from 'react-router';
import { ROUTE_LIST } from '../../route-list';

class Menu extends Component {
    render() {
        let generated_menu_list = ROUTE_LIST.map(function (item, index) {
            return <li className="nav-item" key={index}><Link to={'/'+item.url} className="nav-link" activeClassName='active'>{item.name}</Link></li>
        });
        return (
            <ul className="navbar-nav mr-auto">
                {generated_menu_list}
            </ul>
        )
    }
}
export default Menu;
