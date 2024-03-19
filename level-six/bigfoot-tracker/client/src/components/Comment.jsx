
export default function Comment(props) {
    const { text, _id } = props
    return (
        <div className="comment">
            <span>{text}</span>
        </div>
    )
}