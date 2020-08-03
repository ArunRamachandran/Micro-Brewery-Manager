import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from './store/store';
import { Provider } from 'react-redux';
import { Dashboard } from './containers/Dashboard';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Dashboard/>
            </Provider>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));