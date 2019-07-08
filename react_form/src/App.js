import React, { Component } from 'react';
import './App.css'
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtName: "",
            txtPassword: "",
            txtDescription: "",
            sltGender: 0,
            rdLang: "vi",
            chkbSatus: false
        };
        this.onHandleChange = this.onHandleChange.bind(this)
        this.onHandleSubmit = this.onHandleSubmit.bind(this)
    }
    onHandleChange(event) {
        var target = event.target;
        var name = target.name;
        // var value = target.value;   nếu ko có checbox thì mình có thể sử dụng hàm này
        var value = target.type === "checkbox" ? target.checked : target.value;
        this.setState({
            [name]: value
        });

    }
    onHandleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div className="container mt-30">
                <div className="row">
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h3 className="panel-title">Form</h3>
                            </div>
                            <div className="panel-body">
                                <form onSubmit={this.onHandleSubmit}>
                                    <div className="form-group">
                                        <label>UserName</label>
                                        <input type="text"
                                            className="form-control"
                                            name="txtName"
                                            value={this.state.txtName}
                                            onChange={this.onHandleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password"
                                            className="form-control"
                                            name="txtPassword"
                                            value={this.state.txtPassword}
                                            onChange={this.onHandleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label>Mô tả</label>
                                        <textarea
                                            className="form-control"
                                            rows="3"
                                            name="txtDescription"
                                            value={this.state.txtDescription}
                                            onChange={this.onHandleChange}
                                        ></textarea>

                                    </div>
                                    <label>Giới tính: </label>
                                    <select
                                        className="form-control"
                                        name="sltGender"
                                        value={this.state.sltGender}
                                        onChange={this.onHandleChange}
                                    >
                                        <option value={0}>nữ</option>
                                        <option value={1}>nam</option>
                                    </select>
                                    <br />
                                    <label>Ngôn ngữ</label>
                                    <div className="radio">
                                        <label>
                                            <input
                                                type="radio"
                                                name="rdLang"
                                                value="en"
                                                onChange={this.onHandleChange}
                                                checked={this.state.rdLang === "en"}  // hàm kt giá trị mặc định
                                            />
                                            Tiếng Anh
                                        </label><br />
                                        <label>
                                            <input
                                                type="radio"
                                                name="rdLang"
                                                value="vi"
                                                onChange={this.onHandleChange}
                                                checked={this.state.rdLang === "vi"} />
                                            Tiếng Việt
                                        </label>
                                    </div>
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox"
                                            name="chkbSatus"
                                            value={ true }
                                            onChange={this.onHandleChange} 
                                            checked={this.state.chkbSatus === false}
                                            />
                                                Trạng thái
                                        </label>
                                    </div>



                                        <button type="submit" className="btn btn-primary" >Lưu lại</button>&nbsp;
                                <button type="reset" className="btn btn-default">Xóa</button>
                                </form>
                            </div>
                            </div>

                        </div>
                    </div>
                </div>
                );
            }
        }
        
        
export default App;
