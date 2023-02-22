import AppFilter from '../app-filter/app-filter'
import AppInfo from '../app-info/app-info'
// import SearchPanel from '../search-panel/search-panel'
import TaskAddForm from '../task-add-form/task-add-form'
import TaskList from '../task-list/task-list'
import './app.css'

const data = [
    { task: 'odin', date: '20.02.2022', increase: true },
    { task: 'vosem', date: '20.02.2022', increase: false },
    { task: 'sem', date: '20.02.2022', increase: false },
]

function App() {
    return (
        <div className='app'>
            <AppInfo />
            <TaskAddForm />
            <div className='search-panel'>
                {/* <SearchPanel /> */}
                <AppFilter />
            </div>
            <TaskList data={data} />
        </div>
    )
}

export default App