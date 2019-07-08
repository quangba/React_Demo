import React, { Component } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
import Result from './components/Result';
import Reset from './components/Reset';

class App extends Component {
    // Truyền giá trị mặc định cho màu và cở chữ
    constructor(props) {
        super(props);
        this.state = {
            color: "red",
            fontSize: 12
        };
        this.onSetColor = this.onSetColor.bind(this)
        this.onChangeSize = this.onChangeSize.bind(this)
        this.onReset = this.onReset.bind(this)
    }
    onSetColor(params) {
        this.setState({
            color: params
        });
    }
    onChangeSize(value) {
        if (this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36) {
            this.setState({
                fontSize: this.state.fontSize + value
            })
        }
    }
    onReset(value) {
        if (value) {
            this.setState({
                color: "red",
                fontSize: 12
            })
        }
    }
    render() {
        return (

            <div>
                <div className="container mt-50">
                    <div className="row">
                        <ColorPicker color={this.state.color} onReceiveColor={this.onSetColor} />
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <SizeSetting
                                fontSize={this.state.fontSize}
                                onChangeSize={this.onChangeSize} />
                            <Reset onReset={this.onReset} />
                        </div>
                        <Result color={this.state.color} fontSize={this.state.fontSize} />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
