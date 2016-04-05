import React, { Component } from 'react'
import { render } from 'react-dom'

export class RootApp extends Component {
    render() {
        return (
            <div>
                Helo world great
            </div>
        );
    }
}

// kick the app
render(<RootApp/>, document.getElementById('app-name'));