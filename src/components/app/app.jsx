import { Component } from 'react'

import AppFilter from '../app-filter/app-filter'
import AppInfo from '../app-info/app-info'
// import SearchPanel from '../search-panel/search-panel'
import TaskAddForm from '../task-add-form/task-add-form'
import TaskList from '../task-list/task-list'
import './app.css'



class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                { task: 'odin', date: '20.02.2022', increase: true, id: 1 },
                { task: 'vosem', date: '20.02.2022', increase: false, id: 2 },
                { task: 'sem', date: '20.02.2022', increase: false, id: 3 },
            ]
        }
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }


    render() {
        return (
            <div className='app'>
                <AppInfo />
                <TaskAddForm />
                <div className='search-panel'>
                    {/* <SearchPanel /> */}
                    <AppFilter />
                </div>
                <TaskList data={this.state.data}
                    onDelete={this.deleteItem}
                />
            </div>
        )
    }
}

export default App