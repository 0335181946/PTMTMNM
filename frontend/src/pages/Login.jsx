import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Signin from '../components/Signin'

const Login = () => {
  return (
    <div className='wrapper'>
        <header className='header'>
            <Header/>
        </header>
        <main>
           <Signin/>
        </main>
        <footer className='footer'>
            <Footer/>
        </footer>
    </div>
  )
}

export default Login
