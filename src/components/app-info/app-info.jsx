import './app-info.css'

const AppInfo = ({ important, done }) => {
    return (
        <div className="app-info">
            <h1>To do list</h1>
            <h5>Have a good day ! :)</h5>
            <p>Важное - {important}</p>
            <p>Сделано - {done}</p>

        </div>
    )
}

export default AppInfo