import { useSubjectContext } from '../hooks/useSubjectContext'
import { useAuthContext } from '../hooks/useAuthContext'

const SubjectDetails = ({ subject }) => {
  const { dispatch } = useSubjectContext()
  const { user } = useAuthContext()

  const handleClick = async () => {
    if (!user) return

    const response = await fetch('https://fyp-host-backend.onrender.com/api/subjects/' + subject._id, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })

    const json = await response.json()

    if (response.ok) {
      dispatch({ type: 'DELETE_SUBJECT', payload: json })
    }
  }

  return (
    <div className="subject-details">
      <h4>{subject.title}</h4>
      <p>{subject.description}</p>
      <span onClick={handleClick}>delete</span>
    </div>
  )
}

export default SubjectDetails
