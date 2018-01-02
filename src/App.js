import React, { Component } from 'react'

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

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            tasks: this.state.tasks.concat({
                id: this.state.tasks.map(
                    task => task.id
                ).reduce(
                    (biggest, next) => Math.max(biggest, next),
                    0
                ) + 1,
                title: this.inputField.value
            })
        })
    };

    render() {
        return (
            <div>
                <h1>Task List</h1>

                <form onSubmit={this.handleSubmit}>
                    <input ref={element => this.inputField = element }/>
                    <button>Add task</button>
                </form>

                <ul>
                    {
                        this.state.tasks.map(
                            task => (
                                <li key={task.id}>
                                    {task.title}
                                </li>
                            )
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default App