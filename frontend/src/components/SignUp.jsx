import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SignUp = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rPassword, setRPassword] = useState('');

  const registerHandler = async (e) => {
    e.preventDefault();

    if (password !== rPassword) {
      toast.error('password don`t match');
      return;
    }
    try {
      await axios.post('/api/users/register', {
        username,
        email,
        password
      });

      toast.success('dang ki thanh cong');
      navigate('/login');
    } catch (error) {
      toast.error('dang ki that bai, thu lai')
    }
  };


  useEffect(() => {
    if (localStorage.getItem('userInfo')) {
      localStorage.getItem('userInfo');
      navigate('/');
    }
  }, [navigate]);

  return (
    <div className='sign_container'>
      <div className='sign_row'>
        <div className='sign_form'>

          <form onSubmit={registerHandler}>
            <h2 className='sign_title'>DANG KI TAI KHOAN</h2>
            <div className='sign_form1'>
              <label htmlFor="username" className='sign_label'>Username</label>
              <input type="text" onChange={(e) => setUsername(e.target.value)} id="username" className='sign_input' required />
            </div>
            <div className='sign_form1'>
              <label htmlFor="email" className='sign_label'>Email</label>
              <input type="email" onChange={(e) => setEmail(e.target.value)} id="email" className='sign_input' required />
            </div>
            <div className='sign_form1'>
              <label htmlFor="password" className='sign_label'>Password</label>
              <input type="password" onChange={(e) => setPassword(e.target.value)} id="password" className='sign_input' required />
            </div>
            <div className='sign_form1'>
              <label htmlFor="r_password" className='sign_label'>Confirm password</label>
              <input type="password" onChange={(e) => setRPassword(e.target.value)} id="r_password" className='sign_input' required />
            </div>
            <div className='sign_btn'>
              <button className='sign_btn_login'>REGISTER</button>
            </div>

            <div className='signOther'>
              <Link to="/login">DANG NHAP</Link>
            </div>

          </form>

        </div>
      </div>
    </div>
  )
}

export default SignUp
