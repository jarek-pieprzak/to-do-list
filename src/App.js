import React, { Component } from 'react'

class App extends Component {

    state = {
        defaultTaskValue: '',
        tasks: []
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
                title: this.state.defaultTaskValue
            }),
            defaultTaskValue: ''
        });
    };

    handleChange = event => {
        this.setState({
            defaultTaskValue: event.target.value
        })
    };

    handleDeleteClick = event => {
        console.log(event.target.dataset.taskId);
        this.setState({
            tasks: this.state.tasks.filter(
                task => task.id !== parseInt(event.target.dataset.taskId, 10)
            )
        })
    };
    render() {
        console.table(this.state.tasks);
        return (
            <div>
                <h1>Task List</h1>

                <form onSubmit={this.handleSubmit}>
                    <input
                        value={this.state.defaultTaskValue}
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