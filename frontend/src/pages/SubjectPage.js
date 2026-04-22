import { useParams, Link } from 'react-router-dom'

const SubjectPage = () => {
  const { name } = useParams()

  
  const subjects = {
    mathematics: ['algebra', 'geometry', 'statistics'],
    science: ['biology', 'chemistry', 'physics'],
    english: ['reading', 'writing', 'literature'],
    history: ['ww1', 'ww2', 'coldwar']
  }

  const subjectKey = name?.toLowerCase()
  const topics = subjects[subjectKey] || []

  return (
    <div className="subject-page">
      <h1>{subjectKey}</h1>

      <div className="topic-list">
        {topics.map((topic) => (
          <Link key={topic} to={`/subject/${subjectKey}/${topic}`}>
            <button className="topic-button">
              {topic}
            </button>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SubjectPage