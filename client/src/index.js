import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

class App extends Component {
    render() {
        return (
            <div>
                Brewery App - In Build
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));