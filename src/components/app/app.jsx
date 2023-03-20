import { Component } from 'react'
import AppFilter from '../app-filter/app-filter'
import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import TaskAddForm from '../task-add-form/task-add-form'
import TaskList from '../task-list/task-list'

import './app.css'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                { task: 'odin', date: '20.02.2022', done: true, important: true, id: '1' },
                { task: 'vosem', date: '20.02.2022', done: false, important: false, id: 2 },
                { task: 'sem', date: '20.02.2022', done: false, important: false, id: 3 },
            ],
            term: '',
            filter: 'All'
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }


    addTask = (task, date) => {
        const newTask = {
            task,
            date,
            important: false,
            done: false,
            id: this.maxId++
        }
        this.setState(({ data }) => {
            const newArr = [...data, newTask];
            return {
                data: newArr
            }
        });
    }

    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] }
                }
                return item
            })
        }))
    }

    searchItm = (items, term) => { //items - строчка по которой ищем term - массив который фильтруем
        if (term.length === 0) {
            return items
        }
        return items.filter(item => {
            // берем name у каждого элемента массива, выполняем индексоф и ищем то что приходит в term 
            return item.task.indexOf(term) > -1 // ищем совпадения с term
        })
    }


    onUpdateSearch = (term) => {
        this.setState({ term })
    }
    // {/* метод выше отвечает за установление состояния внутри главного компонента апп */}

    filterPost = (items, filter) => {
        switch (filter) {
            case 'done':
                return items.filter(item => item.rise)
            case 'important':
                return items.filter(item => item.important)
            default:
                return items

        }
    }

    render() {
        const { data, term, filter } = this.state
        const tasks = this.state.data.length
        const done = this.state.data.filter(item => item.done).length
        const visibleData = this.filterPost(this.searchItm(data, term), filter) //тут массив отфильтрованный по term из другого компонента 

        return (
            <div className='app'>
                <AppInfo tasks={tasks} done={done} />
                <TaskAddForm onAdd={this.addTask} />

                <div className='search-panel'>
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter filter={filter} />
                </div>

                <TaskList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp} />
            </div>
        )
    }
}

export default App