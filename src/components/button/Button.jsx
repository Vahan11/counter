import React, {Component} from "react";
import sytyle from "./Button.module.css";

class Button extends Component {
    render() {
        return (
            <div className={sytyle.btn}>
                <button disabled={this.props.isDisabled} onClick={this.props.clicked}>{this.props.btnName}</button>
            </div>
        )
    }
}

export default Button;