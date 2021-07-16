import React from "react";
import "../assets/styles/styles.css";
class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        }

        localStorage.setItem("count", this.state.count)
    }

    increment = () => {
        if (this.state.step) {
            this.setState((prevState) => {
                localStorage.setItem("count", prevState.count + this.state.step)
                return {
                  count: prevState.count + this.state.step,
                }
            })
        }
    }

    decrement = () => {
        if (this.state.step) {
            this.setState((prevState) => {
                localStorage.setItem("count", prevState.count - this.state.step)
                return {
                    count: prevState.count - this.state.step,
                }
            })
        }
    }

    reset = () => {
        this.setState({count: 0})
        localStorage.setItem("count", 0)
    }

    setMaxVal = ({target: {value}}) => {
        if (value !== "") {
            value = Number(value);
            this.setState({
                maxVal: value,
            })
            localStorage.setItem("maxVal", value)
        }
    }

    setMinVal = ({target: {value}}) => {
        if (value !== "") {
            value = Number(value);
            this.setState({
                minVal: value,
            })
            localStorage.setItem("minVal", value)
        }
    }

    setStep = ({target: {value}}) => {
        if (value !== "") {
            value = Number(value)
        this.setState({
            step: value,
        })
        localStorage.setItem("step", value)
        }  
    }

    render() {
        const isMaxVal = this.state.count + this.state.step > this.state.maxVal;
        const isMinVal = this.state.count - this.state.step < this.state.minVal;
        const isInitial = this.state.count === 0;
        
        return (
            <div className="counter-wrap">
                <div className="counter-wrap__input-wrap">
                    <label className="label">Max value</label>
                    <input type="number" onChange={this.setMaxVal} />
                </div>
                <div className="counter-wrap__input-wrap">
                    <label className="label">Min value</label>
                    <input type="number" onChange={this.setMinVal} />
                </div>
                <div className="counter-wrap__input-wrap">
                    <label className="label">Step</label>
                    <input type="number" onChange={this.setStep} />
                </div>
                <p className="count">{this.state.count}</p>
                <div className="btn-wrap">
                    <div className="btn">
                        <button disabled={isMaxVal} onClick={this.increment}>inc +</button>
                    </div>
                    <div className="btn">
                        <button disabled={isMinVal} onClick={this.decrement}>dec -</button>
                    </div>
                    <div className="btn">
                        <button disabled={isInitial} onClick={this.reset}>reset</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Counter;