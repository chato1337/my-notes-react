import React, {useRef} from 'react'
import { UserService } from '../../services/UserService'

const Header = () => {
    const username = useRef(null)
    const email = useRef(null)
    const password = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        const newUser = {
            username: username.current.value,
            email: email.current.value,
            password: password.current.value
        }
        if(UserService.validationSingup(newUser)) {
            alert('ingrese todos los campos')
        }else {
            console.log('creando usuario')
            // UserService.createUser(newUser)
        }
    }

    return (
        <nav className="header-container">
            <div>Hello: Guest</div>
            <form>
                <label htmlFor="">username</label>
                <input ref={username} type="text" required />
                <label htmlFor="">email</label>
                <input ref={email} type="email" />
                <label htmlFor="">password</label>
                <input ref={password} type="pasword" required />
                <button type='submit' onClick={handleSubmit}>Create Account</button>
            </form>
        </nav>
    )
}

export default Header
