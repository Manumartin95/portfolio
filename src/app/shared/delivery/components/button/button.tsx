import {FC, PropsWithChildren} from "react";

interface ButtonProps {
    class: string;
    type: 'submit' | 'button' | 'reset';
    onClick: () => void;
    disabled: boolean;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
    return <button className={''} onClick={props.onClick} type={props.type}>{props.children}</button>
}