import TaskListItem from '../task-list-item/task-list-item'

import './task-list.css'

const TaskList = ({ data, onDelete, onToggleProp }) => {

    const elements = data.map(item => {
        const { id, ...itemProps } = item
        return (
            <TaskListItem
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))} />
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default TaskList