import React from 'react'
import { Link } from 'react-router-dom'
import loginBg from '../../assets/images/login_bg.svg'
import './login.css'

export default function Login() {
  return (
    <div>
      <div className='row'>
        <div className='col-6'>
          <div className='login-container'>
            <div className='login-group'>
              <h4 className='form-title'>Login</h4>

              <p className='form-description'>
                This is a simple admin panel with react and zustand. enjoy it!
              </p>
              <div className='form-group'>
                <div className='input-group'>
                  <label htmlFor='username'>Email</label>
                  <input
                    placeholder='example@example.com'
                    type='text'
                    id='username'
                    name='username'
                  />
                </div>

                <div className='input-group'>
                  <label htmlFor='password'>Password</label>
                  <input
                    placeholder='Place your password here'
                    type='password'
                    id='password'
                    name='password'
                  />
                </div>
                <div className='submit-container'>
                  <Link to='/' className='submit'>
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-6'>
          <div className='login-container'>
            <img src={loginBg} alt='login' />
          </div>
        </div>
      </div>
    </div>
  )
}
