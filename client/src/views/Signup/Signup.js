import React from 'react'
import './Signup.css';
import logoImage from './../../assets/logoimage.png';

function Signup() {
  return (
    <div className='signup-main-contianer'>
      <div className='image-container'>
        
        <img src={logoImage} className='image-icon'/>
        <p className='title'>Feel <span className='safe-word'>Safe</span> Everywhere</p>
        <p className='small-title-word'>#Safe-<span className='color-green'>T</span>-Fast</p>
      </div>
      <div className='signup-container'></div>
    </div>
  )
}

export default Signup