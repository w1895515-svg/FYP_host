import { useState } from 'react'
import { useSubjectContext } from '../hooks/useSubjectContext'
import { useAuthContext } from '../hooks/useAuthContext'

const SubjectForm = () => {
  const { dispatch } = useSubjectContext()
  const { user } = useAuthContext()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!user) {
      setError('You must be logged in')
      return
    }

    const subject = { title, description }

    const response = await fetch('http://localhost:5050/api/subject', {
      method: 'POST',
      body: JSON.stringify(subject),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`
      }
    })
      console.log(response)
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
     
    }

    if (response.ok) {
      setTitle('')
      setDescription('')
      setError(null)
      dispatch({ type: 'CREATE_SUBJECT', payload: json })
    }
  }

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Subject</h3>

      <input
        type="text"
        placeholder="Subject title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={emptyFields.includes('title') ? 'error' : ''}
      />

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className={emptyFields.includes('description') ? 'error' : ''}
      />

      <button>Add Subject</button>

      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default SubjectForm
