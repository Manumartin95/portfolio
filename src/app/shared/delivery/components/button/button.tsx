import {FC, PropsWithChildren} from "react";
import styles from './button.module.css'

interface ButtonProps {
    class?: string;
    type: 'submit' | 'button' | 'reset';
    onClick: () => void;
    disabled?: boolean;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
    return <button className={styles.button} onClick={() => props.onClick()} type={props.type}>{props.children}</button>
}