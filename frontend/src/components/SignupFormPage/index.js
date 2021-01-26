import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [name, setName] = useState('');
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to='/' />

  const onSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(res => {
          if (res.data && res.data.errors) setErrors(res.data.errors);
        })
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  }
 return (
   <div className='bg-red-100 max-w-full bottom-0 absolute top-6 left-0 right-0 flex items-center'>
      <form onSubmit={onSubmit} className='container mx-auto bg-green-400 w-1/4 flex-col text-center'>
        <h1 className='block'>Create a SpaceHunt Account</h1>
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <div className='w-min container mx-auto'>
          <label className='block text-left'>Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          <label className='block text-left'>Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          <label className='block text-left'>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
          />
          <label className='block text-left'> Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

          <label className='block text-left'>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        <button type="submit" className='block m-auto'>Sign Up</button>
      </form>
    </div>
  );

}

export default SignupFormPage;
