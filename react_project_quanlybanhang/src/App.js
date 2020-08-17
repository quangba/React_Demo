import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],   //id: unique, name, status
            isDisplayForm: false,
            taskEdit: null,
            keyword: "",
            a: ""
        }

    }
    componentWillMount() {
        //hàm gọi dữ liệu đổ ra màn hình

        if (localStorage && localStorage.getItem('tasks')) {
            var tasks = JSON.parse(localStorage.getItem('tasks'));

            this.setState({
                tasks: tasks
            })
        }
    }
    // hàm s4() và hàm generateID sử dụng để random id 
    s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    generateID() {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4 + '-' + this.s4() + this.s4() + this.s4() + this.s4() + this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4 + '-' + this.s4() + this.s4() + this.s4() + this.s4();
    }
    onToggleForm = () => {                          //bắt sự kiện mở form
        if (this.state.isDisplayForm && this.state.taskEdit !== null) {
            this.setState({
                isDisplayForm: true,
                taskEdit: null
            });
        } else {
            this.setState({
                isDisplayForm: !this.state.isDisplayForm,
                taskEdit: null
            });
        }
    }
    onCloseForm = () => {                                //bắt sự kiện để đong form
        this.setState({
            isDisplayForm: false,

        });
    }
    onShowForm = () => {
        this.setState({
            isDisplayForm: true
        });
    }
    onSubmit = (data) => {
        var { tasks } = this.state
        if (data.id === "") {
            data.id = this.generateID();
            tasks.push(data);
        } else {
            var index = this.findIndex(data.id)
            tasks[index] = data;
        }

        this.setState({
            tasks: tasks,
            taskEdit: null
        });
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }
    onUpdateStatus = (id) => {
        var { tasks } = this.state
        var index = this.findIndex(id)
        if (index !== -1) {
            tasks[index].status = !tasks[index].status;
            this.setState({
                tasks: tasks
            });
            localStorage.setItem('tasks', JSON.stringify(tasks))
        }
    }
    findIndex = (id) => {
        var { tasks } = this.state;
        var result = -1
        tasks.forEach((task, index) => {
            if (task.id === id) {
                result = index;
            }
        });
        return result;

    }
    onDelete = (id) => {
        var { tasks } = this.state
        var index = this.findIndex(id)
        if (index !== -1) {
            tasks.splice(index, 1);
            this.setState({
                tasks: tasks
            });
            localStorage.setItem('tasks', JSON.stringify(tasks))
        }
        this.onCloseForm();
    }
    onUpdate = (id) => {
        var { tasks } = this.state
        var index = this.findIndex(id)
        var taskEdit = tasks[index];
        this.setState({
            taskEdit: taskEdit
        })
        this.onShowForm();
    }
    onSearch = (keyword) => {
        this.setState({
            keyword: keyword
        })
    }
    render() {
        var { tasks, isDisplayForm, taskEdit } = this.state;          // var tasks = this.state.tasks;

        var elmTaskForm = isDisplayForm === true ?
            <TaskForm
                onSubmit={this.onSubmit}
                onCloseForm={this.onCloseForm}
                task={taskEdit} /> : "";
        return (
            <div className="container">


                <div className="row mt-30">
                    <div className={isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : " "}>
                        {elmTaskForm}
                    </div>
                    <div className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                        <button type="button"
                            className="btn btn-primary"
                            onClick={this.onToggleForm}><i className="fas fa-plus"></i> Thêm công việc</button>&nbsp;
                        {/* Search - sort */}
                        <div className="row mt-15">
                            <Control onSearch = {this.onSearch} />
                        </div>
                        <div className="mt-20">
                            <TaskList tasks={tasks}
                                onUpdateStatus={this.onUpdateStatus}
                                onDelete={this.onDelete}
                                onUpdate={this.onUpdate} />
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default App;


