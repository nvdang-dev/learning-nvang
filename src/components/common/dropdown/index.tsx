interface Props {
    children: JSX.Element[],
    open: boolean
}
const style = (open: boolean) => {
    return {
        display: open ? 'block' : 'none'
    }
}
export const Dropdown = ({ children, open }: Props) => {
    return (
        <div className="dropdown-content" style={style(open)}>
            {children}
        </div>
    )
}