import React, { Component } from 'react';


class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            price: 0,
            img: "",
            status: false,

            nameError: '',
            imageError: '',
            priceError: null
        }
    }
    componentWillMount() {
        if (this.props.task) {
            this.setState({
                id: this.props.task.id,
                name: this.props.task.name,
                price: this.props.task.price,
                img: this.props.task.img,
                status: this.props.task.status
            })
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.task) {
            this.setState({
                id: nextProps.task.id,
                name: nextProps.task.name,
                price: nextProps.task.price,
                img: nextProps.task.img,
                status: nextProps.task.status
            })
        } else if (nextProps && nextProps.task === null) {         // hàm sửa -> thêm
            this.setState({
                id: "",
                name: "",
                price: 0,
                img: "",
                status: false
            })
        }
    }
    onCloseForm = () => {
        this.props.onCloseForm();
    }
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if (name === "status") {
            value = target.value === 'true' ? true : false
        }
        this.setState({
            [name]: value
        })

    }
    validate = () => {
        var name_Error = '';
        var image_Error = '';
        var price_Error = null;

        if (!this.state.name) {
            name_Error = 'tên sản phẩm không được rỗng'
        }
        else if (this.state.name.length <= 6) {
            name_Error = 'Tên phải ít nhất 6 ký tự'
        }
        if (!this.state.price) {
            price_Error = 'Giá bán không được rỗng'
        }
        else if (this.state.price.length <= 6) {
            price_Error = 'Giá bán phải ít nhất 6 chữ số'
        }
        if (!this.state.image) {
            image_Error = 'Hình ảnh sản phẩm không được rỗng'
        }
        else if (!this.state.image.includes('https')) {
            image_Error = 'Hình ảnh phải có định dạng URL'
        }
        if (name_Error || price_Error || image_Error) {
            this.setState({
                nameError: name_Error,
                priceError: price_Error,
                imageError: image_Error
            })
            return false
        }
        return true;
    }
    onSubmit = (event) => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            this.props.onSubmit(this.state);
            // hủy bỏ và trở về form
            this.onClear();
            this.onCloseForm();
        }
    }
    onClear = () => {
        this.setState({
            name: "",
            price: 0,
            img: "",
            status: false
        })

    }

    render() {
        var { id } = this.state;
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">{id !== "" ? "Cập nhật công việc" : "Thêm công việc"}<span className="fas fa-times-circle float"
                        onClick={this.onCloseForm}></span>

                    </h3>

                </div>

                <div className="panel-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Tên: </label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={this.state.name}
                                onChange={this.onChange} />
                            <p>{this.state.nameError}</p>
                        </div>
                        <div className="form-group">
                            <label>Giá: </label>
                            <input
                                type="text"
                                className="form-control"
                                name="price"
                                value={this.state.price}
                                onChange={this.onChange} />
                            <p>{this.state.priceError}</p>
                        </div>
                        <div className="form-group">
                            <label>Ảnh: </label>
                            <input
                                type="text"
                                className="form-control"
                                name="img"
                                value={this.state.img}
                                onChange={this.onChange} />
                            <p>{this.state.imageError}</p>
                        </div>
                        <label >Trạng thái </label>
                        <select className="form-control"
                            name="status"
                            value={this.state.status}
                            onChange={this.onChange}>
                            <option value={true}>Còn hàng</option>
                            <option value={false}>Hết hàng</option>
                        </select><br />
                        <button type="submit" className="btn btn-primary"><i className="fas fa-plus"></i>
                            Lưu lại
                        </button>&nbsp;
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={this.onClear}><i className="fas fa-times"></i>
                            Hủy bỏ
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default TaskForm;


