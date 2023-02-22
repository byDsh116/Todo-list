import './task-add-form.css';

const TaskAddForm = () => {
    return (
        <div className="app-add-form">
            <h3>Add new task</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="What need to do?" />
                <input type="date"
                    className="form-control new-post-label"
                    placeholder="date" />

                <button type="submit"
                    className="btn btn-outline-light">Add</button>
            </form>
        </div>
    )
}

export default TaskAddForm;