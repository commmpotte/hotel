import logo from '../media/logo.png'
import React, { useState } from 'react'
import { useAuth } from '../components/UserAuthContext'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const { UserLogin } = useAuth()
  const [err, setError] = useState('')
  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  const navigate = useNavigate()

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
    const { email, password } = user
    if (email == '' || password == '') {
      setInterval(() => {
        setError('')
      }, 5000)
      return setError('Fill All the Field')
    }
    try {
      await UserLogin(email, password)
      navigate('/home')
    } catch (error) {
      if (error.code == 'auth/user-not-found') {
        setInterval(() => {
          setError('')
        }, 5000)
        return setError('User Not Found')
      } else if (error.code == 'auth/wrong-password') {
        setInterval(() => {
          setError('')
        }, 5000)
        return setError('Wrong Password')
      } else {
        setInterval(() => {
          setError('')
        }, 5000)
        return setError(`${error.message}`)
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
              value={user.email} name='email' onChange={UserHandler} 
            />
            <label>Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control mb-2"
              id="floatingPassword"
              placeholder="Password"
              value={user.password} name='password' onChange={UserHandler} 
            />
            <label>Password</label>
          </div>

          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>
          <p className="forget mt-2">Don't have an account?   <Link to={"/signup"} className="link">{"sign up"}</Link></p>
          <p className="mt-2 mb-3 text-muted">©2022</p>
        </form>
      </main>
    </div>
  )
}

export default Login
