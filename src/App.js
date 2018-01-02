import React, { Component } from 'react'

class App extends Component {

    state = {
        taskInputValue: '',
        tasks: []
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('SUBMIT');
        this.setState({
            tasks: this.state.tasks.concat({
                id: this.state.tasks.map(
                    task => task.id
                ).reduce(
                    (biggest, next) => Math.max(biggest, next),
                    0
                ) + 1,
                content: this.state.taskInputValue
            }),
            taskInputValue: ''
        });
    };

    handleChange = event => {
        this.setState({
            taskInputValue: event.target.value
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
                                    {task.content}

                                    <button
                                        data-task-id={task.id}
                                        onClick={this.handleDeleteClick}
                                    >
                                        delete
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