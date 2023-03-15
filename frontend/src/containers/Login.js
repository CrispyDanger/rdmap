import React from 'react';
import { useState } from 'react';
import {Link, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import {login} from '../actions/auth';
import './Login.css';



function Login({login}) {
  const [formData, setFormData] = useState({
     email: '',
     password: '',
  });

  const {email, password} = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    login(email, password);
  };

  //

  return (
<div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div className="w-full max-w-md space-y-8">
    <div>
      <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
    </div>
    <form className="mt-8 space-y-6" onSubmit={e => onSubmit(e)}>
      <div className="-space-y-px rounded-md shadow-sm">
        <div>
          <label for="email-address" className="sr-only">Email address</label>
          <input id="email-address" name="email" type="email" autocomplete="email" value={email}
              onChange={e => onChange(e)} required className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Email address"/>
        </div>
        <div>
          <label for="password" className="sr-only">Password</label>
          <input id="password" name="password" type="password" value={password}
              onChange={e => onChange(e)}
              minLength='8' required className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Password"/>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm">
          <a className="font-medium text-indigo-600 hover:text-indigo-500">
          <Link to='/reset-password'>Forgot your password?</Link>
          </a>
        </div>
        <div className="text-sm">
          <a className="font-medium text-indigo-600 hover:text-indigo-500">
          <Link to='/sign-up'>Don't have an account? Sign up</Link>
          </a>
        </div>
      </div>

      <div>
        <button type="submit" className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
            </svg>
          </span>
          Sign in
        </button>
      </div>
    </form>
  </div>
</div>
  )
};

// const mapStateToProps = state => ({
//   //is auth
// })

export default connect(null, { login })(Login);
