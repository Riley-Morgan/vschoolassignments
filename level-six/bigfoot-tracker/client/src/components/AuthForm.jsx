
export default function AuthForm(props) {
    const {
        handleChange,
        handleSubmit,
        btnText,
        errMsg,
        inputs: {
            username,
            password
        }
    } = props

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={username}
                name="username"
                onChange={handleChange}
                placeholder="username"
            />
            <input 
                type="text"
                value={password}
                name="password"
                onChange={handleChange}
                placeholder="password"
            />
            <button>{ btnText }</button>
            <p style={{color: "salmon"}}>{errMsg}</p>
        </form>
    )
}