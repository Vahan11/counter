import style from "./Button.module.css";

export default function Button(props) {
    return (
        <div className={style.btn}>
            <button disabled={props.isDisabled} onClick={props.clicked}>{props.btnName}</button>
        </div>
    )
}