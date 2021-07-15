import React, {useRef} from 'react'
import { UserService } from '../../services/UserService'

const Header = () => {
    const username = useRef(null)
    const email = useRef(null)
    const password = useRef(null)

    const handleSubmit = () => {
        const newUser = {
            username: username.current.value,
            email: email.current.value,
            password: password.current.value
        }
        UserService.createUser(newUser)
        console.log(newUser)
    }

    return (
        <nav className="header-container">
            <div>Hello: Guest</div>
            <div>
                <label htmlFor="">username</label>
                <input ref={username} type="text" />
                <label htmlFor="">email</label>
                <input ref={email} type="email" />
                <label htmlFor="">password</label>
                <input ref={password} type="pasword" />
                <button onClick={handleSubmit}>Create Account</button>
            </div>
        </nav>
    )
}

export default Header
