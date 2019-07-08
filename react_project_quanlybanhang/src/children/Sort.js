import React, { Component } from 'react';

class Sort extends Component {
    render() {
        return (
            <div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <button type="button "
                        className="btn btn-primary mt-10">Xắp sếp <i className="fas fa-caret-square-down"></i></button>
                </div>
            </div>
        );
    }
}

export default Sort;