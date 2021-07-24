import sytyle from "./Input.module.css";

export default function Input(props) {
    return (
        <div className={sytyle.counterWrap__inputWrap}>
            <label className={sytyle.label}>{props.labelName}</label>
            <input type={props.type} onChange={props.change} />
        </div>
    ) 
}