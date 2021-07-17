import React, {Component} from "react";
import "../assets/styles/main.css";
import Button from "./button/Button.jsx";
import Input from "./input/Input.jsx";
class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            step: 1
        }

        localStorage.setItem("count", this.state.count)
    }

    increment = () => {
        this.setState((prevState) => {
            localStorage.setItem("count", prevState.count + this.state.step)
            return {
                count: prevState.count + this.state.step,
            }
        })
    }

    decrement = () => {
        this.setState((prevState) => {
            localStorage.setItem("count", prevState.count - this.state.step)
            return {
                count: prevState.count - this.state.step,
            }
        })
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
                <Input type="number" change={this.setMaxVal} labelName="Max value" />
                <Input type="number" change={this.setMinVal} labelName="Min value" />
                <Input type="number" change={this.setStep} labelName="Step" />
                <p className="count">{this.state.count}</p>
                <div className="btn-wrap">
                    <Button isDisabled={isMaxVal} clicked={this.increment} btnName="inc +" />
                    <Button isDisabled={isMinVal} clicked={this.decrement} btnName="dec -" />
                    <Button isDisabled={isInitial} clicked={this.reset} btnName="reset" />
                </div>
            </div>
        )
    }
}

export default Counter;