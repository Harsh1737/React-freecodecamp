import {useState, useContext} from 'react'
import UserContext from '../context/UserContext'
const Login = () => {

    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')

    const {setUser} = useContext(UserContext)
    const handleSubmit = (e) => {
        console.log('submit')
        e.preventDefault()
        setUser({username, password})
    }
    return (
        <>
            <h2>Login</h2>
            <input type="text" placeholder='username'
            value={username} onChange={(e) => setusername(e.target.value)}/>
            {" "}
            <input type="text" placeholder='password'
            value={password} onChange={(e) => setpassword(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default Login