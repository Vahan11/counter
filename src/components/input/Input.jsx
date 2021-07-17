import React, {Component} from "react";
import sytyle from "./Input.module.css";

class Button extends Component {
    render() {
        console.log(this.props);
        return (
            <div className={sytyle.counterWrap__inputWrap}>
                <label className={sytyle.label}>{this.props.labelName}</label>
                <input type={this.props.type} onChange={this.props.change} />
            </div>
        )
    }
}

export default Button;