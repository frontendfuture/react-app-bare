import React, { Component } from 'react'
import { render } from 'react-dom'

class RootApp extends Component {
    render() {
        return (
            <div>
                Helo
            </div>
        );
    }
}

// kick the app
render(<RootApp/>, document.getElementById('app-name'));