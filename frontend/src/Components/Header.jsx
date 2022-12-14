import {FaSignInAlt,FaSignOutAlt,FaUser} from 'react-icons/fa'
import { Link,useNavigate } from 'react-router-dom'
import{useSelector,useDispatch} from 'react-redux'
import {logout,reset} from '../features/auth/AuthSlice'
function Header() {
const navigate=useNavigate()
const dispatch=useDispatch()
const {user}=useSelector((state)=>state.auth)

const logoutHandler=()=>{
    dispatch(logout())
    dispatch(reset())
    navigate('/')
}
  return (
    <div className='header'>
<div className="logo">
    <Link to="/">Set Goals</Link>
</div>
<ul>
        {user ? (
          <li>
            <button className='btn' onClick={logoutHandler}>
              <FaSignOutAlt /> Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to='/login'>
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <FaUser /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  )
}

export default Header