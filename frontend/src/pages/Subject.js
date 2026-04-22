import { Link } from 'react-router-dom'

const Subject = () => {
  const subjects = [
    {
      name: 'Mathematics',
      topics: ['Algebra', 'Geometry', 'Statistics']
    },
    {
      name: 'Science',
      topics: ['Biology', 'Chemistry', 'Physics']
    },
    {
      name: 'English',
      topics: ['Reading', 'Writing', 'Literature']
    },
    {
      name: 'History',
      topics: ['WW1', 'WW2', 'Cold War']
    }
  ]

  const format = (str) =>
    str.toLowerCase().replace(/\s/g, '')

  return (
    <div className="subjects-page">
      <h2>Subjects</h2>

      {subjects.map((subject, i) => (
        <div key={i} className="subject-card">
          <h3>{subject.name}</h3>

          {subject.topics.map((topic, j) => (
            <Link
              key={j}
              to={`/subject/${format(subject.name)}/${format(topic)}`}
            >
              <button className="topic-button">
                {topic}
              </button>
            </Link>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Subject