import { AuthErrorCodes } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from './UserAuthContext'
import logo from '../media/logo.png'

const SignUp = () => {
  const navigate = useNavigate()
  const { SignUp } = useAuth()
  const [err, setError] = useState('')
  const [user, setUser] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })
  const UserHandler = (e) => {
    const { name, value } = e.target
    setUser((pre) => {
      return {
        ...pre,
        [name]: value,
      }
    })
  }

  const SubmitHandler = async (e) => {
    e.preventDefault()
    const { email, password, confirmPassword, FullName } = user
    if (
      password == '' ||
      confirmPassword == '' ||
      email == '' ||
      FullName == ''
    ) {
      setInterval(() => {
        setError('')
      }, 5000)
      return setError('Please fill all fields ')
    } else if (password !== confirmPassword) {
      setInterval(() => {
        setError('')
      }, 5000)
      return setError('Password does not match')
    } else if (!password.length >= 6 || !confirmPassword.length >= 6) {
      setInterval(() => {
        setError('')
      }, 5000)
      return setError('Password must be greater then 6 symbols')
    } else {
      try {
        await SignUp(email, password)
        alert('So now you can male your own dream hotel')
        navigate('/')
      } catch (err) {
        if (err.code === 'Auth/email-already-in-use') {
          setInterval(() => {
            setError('')
          }, 5000)
          setError('Try another email')
        } else if (err.code === AuthErrorCodes.WEAK_PASSWORD) {
          setInterval(() => {
            setError('')
          }, 5000)
          setError('Password must be 6 symbols')
        } else {
          setError(err.message)
        }
      }
    }
  }

  return (
    <div className="text-center">
      {err && <p className="error">{err}</p>}
      <main className="form-signin w-25 m-auto">
        <form onSubmit={SubmitHandler} className="form">
          <img src={logo} height="40" width="160" className="mb-3 mt-4" />
          <h1 className="h3 mb-3 font-monospace fw-bolder">Please sign in</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control mb-2"
              id="floatingInput"
              placeholder="name@example.com"
              value={user.email}
              name="email"
              onChange={UserHandler}
            />
            <label>Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control mb-2"
              id="floatingPassword"
              placeholder="Password"
              value={user.password}
              name="password"
              onChange={UserHandler}
            />
            <label>Password</label>
          </div>

          <div className="form-floating">
            <input
              type="password"
              className="form-control mb-2"
              id="floatingPassword"
              placeholder="Confirm password"
              value={user.confirmPassword}
              name="confirmPassword"
              onChange={UserHandler}
            />
            <label>Confirm password</label>
          </div>

         
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign up
          </button>
          <p className="forget">
            Already Have an account?{' '}
            <Link to={'/'} className="link">
              login
            </Link>
          </p>
          <p className="mt-2 mb-3 text-muted">©2022</p>
        </form>
      </main>
    </div>
  )
}

export default SignUp
