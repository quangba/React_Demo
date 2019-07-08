import React, { Component } from 'react';

class TaskItem extends Component {
    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id)
    }
    onDelete = () => {
        this.props.onDelete(this.props.task.id)
    }
    onUpdate = () => {
        this.props.onUpdate(this.props.task.id)
    }
    render() {
        var { task, index } = this.props;  //ES6
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{task.name}</td>
                <td>
                    <img className="my-img" src={task.img} alt="" />
                </td>
                <td >${task.price}</td>


                <td className="text-center">
                    <span className={task.status === true ? "label label-success" : "label label-danger"}
                        onClick={this.onUpdateStatus}
                    >{task.status === true ? "Còn hàng" : "Hết hàng"}</span>
                </td>
                <td>

                    <button type="button"
                        className="btn btn-warning"
                        onClick={this.onUpdate}><i className="far fa-edit"></i> Sửa</button>&nbsp;

                <button type="button"
                        className="btn btn-danger"
                        onClick={this.onDelete}><i className="far fa-trash-alt"></i> Xóa</button>

                </td>
            </tr>
        );
    }
}

export default TaskItem;



