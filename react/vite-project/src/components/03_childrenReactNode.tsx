import type { ReactNode } from "react";




type PanelProps={
    title:string;
    children?: ReactNode;
}
interface Panel1Props{
    title?:string;
    children?: ReactNode;
}
interface Panel2Props extends Panel1Props{
    footer?:ReactNode;
}
export function Panel({title, children}:PanelProps){
    return(
        <section>
            <h1>{title}</h1>
            <div>{children ?? <em>No content provided</em>}</div>
        </section>
    )
}

export const NewPanel = ({title,children}:Panel1Props) => {
    const Title = title ?? "this component has no title";
    const Children = children ?? <em>No content provided</em>;
    return (
        <section>
            <h1>{Title}</h1>
            <div>{Children}</div>
        </section>
    )
}
export const NewPanel2 = ({title,children,footer}:Panel2Props) => {
    const Title = title ?? "this component has no title";
    const Children = children ?? <em>No content provided</em>;
    return (
        <section>
            <h1>{Title}</h1>
            <div>{Children}</div>
            <footer>{footer}</footer>
        </section>
    )
}