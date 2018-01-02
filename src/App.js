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
                  {
                      this.state.tasks.map(function (task) {
                          console.log(task);
                          return (
                              <li>{task}</li>
                          );
                      })
                  }
              </ul>
            </div>
        )
    }
}


export default App;
