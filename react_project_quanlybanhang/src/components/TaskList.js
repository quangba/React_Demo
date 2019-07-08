import React, { Component } from 'react';
import TaskItem from '../children/TaskItem';

class TaskList extends Component {
    render() {
        var { tasks } = this.props;
        var elements = tasks.map((task, index) => {
            return <TaskItem
                key={task.id}
                index={index}
                task={task}
                onUpdateStatus={this.props.onUpdateStatus}
                onDelete={this.props.onDelete}
                onUpdate={this.props.onUpdate}
            />
        });
        return (

            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th className="text-center">STT</th>
                        <th className="text-center">Tên Sách</th>
                        <th className="text-center">Ảnh</th>
                        <th className="text-center">Giá</th>
                        <th className="text-center">Trạng thái</th>
                        <th className="text-center">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>
                            <input type="text"
                                className="form-control"
                                name="filterName" />
                        </td>
                        <td></td>   
                        <td></td>                
                        <td>
                            <select className="form-control" >
                                <option value={-1}>Tất cả</option>
                                <option value={0}>Kích hoạt</option>
                                <option value={1}>Ẩn</option>
                            </select>
                        </td>
                        <td></td>
                    </tr>
                    {elements}
                </tbody>
            </table>

        );
    }
}

export default TaskList;