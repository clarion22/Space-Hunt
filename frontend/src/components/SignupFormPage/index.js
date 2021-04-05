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
      return dispatch(sessionActions.signup({ name, email, username, password }))
        .catch(res => {
          if (res.data && res.data.errors) setErrors(res.data.errors);
        })
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  }
 return (
   <div className='z- bg-white max-w-full bottom-0 relative h-screen flex justify-center'>
      <form onSubmit={onSubmit} className='signupform container mx-auto bg-blue-300 flex-col text-center rounded-lg py-5 absolute my-40'>
        <h1 className='font-bold block p-6 text-2xl text'>Create a SpaceHunt Account</h1>
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <div className='w-min container mx-auto'>
          <label className='form_labeltext'>Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className='form_input'
            />
          <label className='form_labeltext'>Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='form_input'
            />
          <label className='form_labeltext'>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className='form_input'
          />
          <label className='form_labeltext'> Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className='form_input'
            />

          <label className='form_labeltext'>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className='form_input'
            />
          </div>
        <button type="submit" className='btn btn-yellow mt-4 mb-8 w-3/5'>Sign Up</button>
      </form>
    </div>
  );

}

export default SignupFormPage;
