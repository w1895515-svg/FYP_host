import { useNavigate } from 'react-router-dom'

const PracticeTests = () => {
  const navigate = useNavigate()

  const tests = [
    { id: 1, title: 'Math Practice Test 1' },
    { id: 2, title: 'Science Practice Test 1' },
    { id: 3, title: 'English Practice Test 1' },
    { id: 4, title: 'History Practice Test 1'},
    { id: 5, title: 'Computer Science Practice Test 1'},
  ]

  const handleStart = (test) => {
    navigate(`/test/${test.id}`)
  }

  return (
    <div className="practice-tests-page">
      <h2>Practice Tests</h2>

      <div className="test-list">
        {tests.map(test => (
          <div key={test.id} className="test-card">
            <h4>{test.title}</h4>
            <button onClick={() => handleStart(test)}>Start</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PracticeTests