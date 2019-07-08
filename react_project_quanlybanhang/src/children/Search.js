import React, { Component } from 'react';

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            keyword: ""
        }
    }
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        })
    }
    onSearch = () => {
        this.props.onSearch(this.state.keyword);
    }
    render() {
        var {keyword} = this.state;
        return (
            <div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="input-group">
                        <input type="text"
                            className="form-control mt-10"
                            placeholder="Nhập từ khóa...."
                            name="keyword"
                            value={keyword}
                            onChange={this.onChange} />
                        <span className="input-group-btn">
                            <button type="button" 
                            className="btn btn-primary mt-10"
                            onClick={this.onSearch}><i className="fas fa-search"></i> Tìm kiếm</button>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;