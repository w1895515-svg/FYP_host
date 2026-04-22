import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }

  return (
    <header>
      {user ? 
      <div className="container">
        <Link to="/">
          <h1>LearnWise</h1>
        </Link>

         <Link to="/subject">
          Subject
        </Link>

         <Link to="/practice-tests">
          PracticeTests
        </Link>

        <Link to="/progress-tracker">
          ProgressTracker
        </Link>

        <Link to="/AiTutor">
          AiTutor
        </Link>

        <Link to="/timetable">
          Timetable
        </Link>

        <div>
          <span>{user.email}</span>
          <button onClick={handleClick}>Logout</button>
        </div>
      </div>
      :
      <div className="container">
        <Link to="/">
          <h1>LearnWise</h1>
        </Link>

         <Link to="/subject">
          Subject
        </Link>

        <Link to="/AiTutor">
          AiTutor
        </Link>

        <div>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
      }
    </header>
  )
}

export default Navbar
