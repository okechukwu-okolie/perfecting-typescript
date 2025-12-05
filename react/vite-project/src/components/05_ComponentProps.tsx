import type { ComponentProps,CSSProperties } from "react";



type ButtonBaseProps = ComponentProps<'input'>
type ButtonProps = ButtonBaseProps & {
    variant?: 'primary' | 'secondary';
}

export const Button = ({variant = 'primary',style,...rest}:ButtonProps) => {
    const base: CSSProperties = {
        padding:'10px'
    }

    return <input style={{...base, ...style}} {...rest}/>
}