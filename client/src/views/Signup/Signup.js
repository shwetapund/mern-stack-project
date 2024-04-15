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
      <div className='signup-container'>
        <div className=' signup-title-cont'>
          <div>
            <img src='https://s3-alpha-sig.figma.com/img/95ba/3481/3ad994db5b5e421121cc1ef38e21523e?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mqVm4244Mr2EemBiFMyRY6zZKmqj4Vel3A4l-7EsiqVkTVqQjUuUhrdraU-Xv714Kr4e-B~u7Y6OPoAqNu1FJUBpHAgEz3zV-HOcDENTTfyxVOhFhOU4iB6erMA52inw1rIGz3Z8VowqEWg3FKwxqYnvAl0gl7o6yvCQMdA4yhY~SYicJo-M8A45bRBleGnfjliAn7h9e79ClqFw-kVzzGVod9UQQM5kp6t-dNtXvxVr~-77cf9xEzh7sVrLUjCcLKbTYDWEwSaJ7931q8yGbnhyOxkpbQ0DrO5BYiH2SyOn892aS51AwztUMxWhHFvHGRTOyv9OLC3BSlbITWbBCg__' className='red-logo-image'/>
          </div>
          <div className=''>
            <p className='signup-text'>Sign Up <span className='login-span'>/Login</span></p>
          </div>
        </div>
        <div className='fields-container'>
          <div>
            <input 
            className='fields-css'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup