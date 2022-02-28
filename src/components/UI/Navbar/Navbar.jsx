import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context/context'
import MyButton from '../button/MyButton'

export const Navbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);

  const logOut = () => {
    setIsAuth(false)
    localStorage.removeItem('auth')
  }

  return (
    <div className='navbar'>
      <MyButton onClick = {logOut}>
        Выйти
      </MyButton>
      <div className='navbar__links'>
        <MyButton>
          <Link to='/about' style={{textDecoration:'none', color: 'teal'}}>О сайте</Link>
        </MyButton>
        <MyButton>
          <Link to='/posts' style={{textDecoration:'none', color: 'teal'}}>Посты</Link>
        </MyButton>
      </div>
    </div>
  )
}
