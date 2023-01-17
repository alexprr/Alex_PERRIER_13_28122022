// css
import '../styles/login.css'

import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import * as loginActions from '../features/loginSlice'
import { userLogin } from '../api/api'

const LoginForm = () => {
    const { isLoading, error } = useSelector((state) => state.login)
    const dispatch = useDispatch()
    let navigate = useNavigate()
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    })

    // sets credentials values on input change
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setCredentials({
            ...credentials,
            [name]: value
        })
    }

    // navigates to profile route when user is logged in
    const handleSubmit = async (e) => {
        e.preventDefault()

        dispatch(loginActions.pending())
        try {
            await userLogin('login', credentials)
            dispatch(loginActions.success());
            navigate("/profile")  
        } catch (error) {
            dispatch(loginActions.error(error.response.data.message));
        }
    }

    return (
        <section className="sign-in-content">
            {isLoading ? <div className='loading'>Loading...</div>
            : <>
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="email" id="username" onChange={handleChange} name='email'/>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={handleChange} name='password'/>
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>

                    <button type='submit' className="sign-in-button">Sign In</button>
                    {/* error message if connexion failed */}
                    {error ? <p className='error-message'>{error}</p> : ""}
                </form>
              </>
            }
        </section>
    )
}

export default LoginForm