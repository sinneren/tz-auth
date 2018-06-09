import React, { Component } from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AuthActions from '../../actions/AuthActions';
import Menu from '../../components/Menu';
import PropTypes from 'prop-types';

class App extends Component {
    static propTypes = {
        state: PropTypes.object
    }
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link to='/' className="navbar-brand">Navbar</Link>
                        <Menu auth={this.props.state.auth}/>
                    </nav>
                </header>
                <main>
                    { this.props.children }
                </main>
            </div>
        )
    }
}
function mapStateToProps(state) {
  return {
    state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AuthActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)