import React, { Component } from 'react';

class App extends Component {

    state = {
        tasks: [
            {
                id: 1,
                title: 'One'
            },
            {
              id: 2,
              title: 'Two'
            },
            {
             id: 3,
             title: 'Three'
            }
        ]
    };

    render() {
        return (
            <div>
              <h1>Task List</h1>
              <ul>
                  {
                      this.state.tasks.map(function (task) {
                              return (
                                  <li key={task.id}>
                                      {task.title}
                                  </li>
                              )
                          }
                      )
                  }
              </ul>
            </div>
        )
    }
}


export default App;
