import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Signin.scss"

const Signin = () => {

  const emailRef = useRef()
    const passwordRef = useRef()
    const [error, setError] = useState('')
    const [successMessage, setSuccesssMessage] = useState('')
    const [loading, setLoading] = useState(false)
    let navigate = useNavigate();

    const handleSubmit  = async (e) => {
      e.preventDefault()

     

      try{
          setError('')
          setLoading(true)
          setSuccesssMessage("successfully Signed in")
          navigate("/")

      }catch {
          setError('Failed to sign in')
          setLoading(false)
      }
  }

  return (
    <div className="signin loginPage">
        <div className="container">
        <h2>LOGIN</h2>
        <form className="login_form">

            <div className="email_password_input">
                <input className="login_input" type="email" id="email-login" ref={emailRef} required/>
                <label htmlFor="email">E-mail</label>
            </div>
            <div className="email_password_input">
                <input className="login_input" type="password" id="password-login" ref={passwordRef} required/>
                <label htmlFor="password">Password</label>
            </div>
            <button onClick={handleSubmit} className="login_btn">
                Login
            </button>
            <p className="success-message-l">New to Group 83?<Link className="app__link  link__si" to="/signup"> Sign Up</Link></p>
        </form>
        </div>
        <Link className="link_login" to='/home'>
            <p className="bth">Back to home</p>
        </Link>
    </div>
  )
}

export default Signin