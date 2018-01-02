import React, { Component } from 'react';

class App extends Component {

    state = {
        tasks: [
            'One',
            'Two',
            'Three'
        ]
    };

    render() {
        return (
            <div>
              <h1>Task List</h1>
              <ul>
                <li>{this.state.tasks[0]}</li>
                <li>{this.state.tasks[1]}</li>
                <li>{this.state.tasks[2]}</li>
              </ul>
            </div>
        )
    }
}


export default App;
