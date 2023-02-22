import './app-filter.css'

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button
                className="btn btn-light"
                type="button"
            >  All tasks
            </button>

            <button
                className="btn btn-outline-light"
                type="button"
            > Need to do 
            </button>

            <button
                className="btn btn-outline-light"
                type="button"
            > Done
            </button>
        </div>
    )
}

export default AppFilter