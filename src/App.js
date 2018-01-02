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

    handleChange = event => {
        this.setState({
            taskInputValue: event.target.value
        })
    };

    handleDeleteClick = event => {
        this.setState({
            tasks: this.state.tasks.filter(
                task => task.id !== parseInt(event.target.dataset.taskId, 10)
            )
        })
    };

    render() {
        return (
            <div>
                <h1>Task List</h1>

                <form onSubmit={this.handleSubmit}>
                    <input
                        value={this.state.taskInputValue}
                        onChange={this.handleChange}
                    />
                    <button>Add task</button>
                </form>

                <ul>
                    {
                        this.state.tasks.map(
                            task => (
                                <li key={task.id}>
                                    {task.title}

                                    <button data-task-id={task.id} onClick={this.handleDeleteClick}>
                                        -
                                    </button>
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