interface Props {
    badgeContent: String
}
export const Badge = ({ badgeContent }: Props) => {
    return (
        <span className="badge badge-color">{badgeContent}</span>
    )
}