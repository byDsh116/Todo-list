import { Component } from 'react';
import './task-list-item.css'


class TaskListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            increase: false,
            important: false
        }
    }

    onDone = () => {
        this.setState(({ done }) => ({
            done: !done
        }))
    }

    onImportant = () => {
        this.setState(({important}) => ({
            important: !important
        }))
    }

    render() {
        const {task, date} = this.props
        const {done, important} = this.state

        let classNames = "list-group-item d-flex justify-content-between";
        if (done) {
            classNames += ' done';
        }
        if (important) {
            classNames += ' like';
        }

        return (
            <li className={classNames}>
                <span className="list-group-item-label" onClick={this.onImportant}> {task} </span>
                <input type="date" className="list-group-item-input" placeholder={date}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={this.onDone}
                    >
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                        className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}

export default TaskListItem