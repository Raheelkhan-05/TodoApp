import { useState } from 'react';
import '../Login.css';
export default function Login() {
  const[pass,setPass] = useState('');
  const[email,setEmail] = useState('');
  const[slct,setSlct] = useState('');
  const[at,setAt] = useState(false);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email : ',email);
    console.log('Password : ',pass);
    console.log('Selected Option : ',slct);
    console.log('Accepted Terms : ',at);
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <h1 className='lf'>Login Page</h1>
      <input type='email' className='inp' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)}/><br/>
      <input type='password' className='inp'  placeholder='Enter Password' value={pass} onChange={(e) => setPass(e.target.value)}/>
      <input className='inpchk' type='checkbox' checked={at} onChange={(e) => setAt(e.target.checked)}/>
      I Accept Terms and Conditions.<br/>
        <button type='submit'>Login</button>
    </form>
    </>
  );
}

