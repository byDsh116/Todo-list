import './task-list-item.css'

const TaskListItem = (props) => {

    const { task, date, onDelete, onToggleProp, done, important } = props

    let classNames = "list-group-item d-flex justify-content-between";
    if (done) {
        classNames += ' done';
    }
    if (important) {
        classNames += ' like';
    }

    return (
        <li className={classNames}>
            <span className="list-group-item-label" onClick={onToggleProp} data-toggle='important'> {task} </span>
            <input type="date" className="list-group-item-input" placeholder={date} />
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    data-toggle='done'
                    onClick={onToggleProp}>
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                    className="btn-trash btn-sm "
                    onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default TaskListItem