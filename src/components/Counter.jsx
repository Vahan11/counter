import React, {Component} from "react";
import "../assets/styles/main.css";
import Button from "./button/Button.jsx";
import Input from "./input/Input.jsx";

export default class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            step: 1
        }

        localStorage.setItem("count", this.state.count)
    }

    handleCount = (type) => {
        const sign = type === "inc" ? 1 : -1;
        this.setState((prevState) => {
            localStorage.setItem("count", prevState.count + (sign) * this.state.step)
            return {
                count: prevState.count + (sign) * this.state.step,
            }
        })     
    }

     setVal = (type, {target: {value}}) => {
        if (value !== "") {
            value = Number(value);
            this.setState({
                [type]: value,
            })
            localStorage.setItem(type, value)
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

    reset = () => {
        this.setState({count: 0})
        localStorage.clear();
    }

    render() {
        const isMaxVal = this.state.count + this.state.step > this.state.maxVal;
        const isMinVal = this.state.count - this.state.step < this.state.minVal;
        const isInitial = this.state.count === 0;
        
        return (
            <div className="counter-wrap">
                <Input type="number" change={(e) => this.setVal("maxVal", e)} labelName="Max value" />
                <Input type="number" change={(e) => this.setVal("minVal", e)} labelName="Min value" />
                <Input type="number" change={this.setStep} labelName="Step" />
                <p className="count">{this.state.count}</p>
                <div className="btn-wrap">
                    <Button isDisabled={isMaxVal} clicked={() => this.handleCount("inc")} btnName="inc +" />
                    <Button isDisabled={isMinVal} clicked={() => this.handleCount("dec")} btnName="dec -" />
                    <Button isDisabled={isInitial} clicked={this.reset} btnName="reset" />
                </div>
            </div>
        )
    }
}