import { useParams } from 'react-router-dom'
import AITutor from './AITutor'

const TopicPage = () => {
  const { name, topic } = useParams()

  const revisionData = {
    mathematics: {
      algebra: {
        summary: "Algebra is about using letters to represent numbers.",
        keyPoints: ["Solve equations", "Expand brackets", "Factorise"],
        method: ["Isolate variable", "Simplify", "Check answer"],
        examples: ["2x + 3 = 7"],
        examQuestions: ["Solve 3x + 5 = 20"],
        tips: ["Show working"],
        mistakes: ["Sign errors"]
      },
      geometry: {
        summary: "Geometry is about shapes and angles.",
        keyPoints: ["Angles in triangle = 180°", "Pythagoras theorem"],
        method: ["Identify shape", "Use formula"],
        examples: ["Find area of triangle"],
        examQuestions: ["Find missing angle"],
        tips: ["Draw diagrams"],
        mistakes: ["Wrong formula"]
      },
      statistics: {
        summary: "Statistics is about data.",
        keyPoints: ["Mean, median, mode", "Range"],
        method: ["Add values", "Divide"],
        examples: ["Find mean of numbers"],
        examQuestions: ["Calculate average"],
        tips: ["Order numbers"],
        mistakes: ["Calculation errors"]
      }
    },

    science: {
      biology: {
        summary: "Biology is the study of living organisms.",
        keyPoints: ["Cells", "Respiration", "Photosynthesis"],
        method: ["Define process", "Explain steps"],
        examples: ["Describe photosynthesis"],
        examQuestions: ["What is a cell?"],
        tips: ["Use keywords"],
        mistakes: ["Missing detail"]
      },
      chemistry: {
        summary: "Chemistry studies substances and reactions.",
        keyPoints: ["Atoms", "Elements", "Reactions"],
        method: ["Write equation", "Balance"],
        examples: ["H2 + O2 → H2O"],
        examQuestions: ["Balance equation"],
        tips: ["Check atoms"],
        mistakes: ["Unbalanced equations"]
      },
      physics: {
        summary: "Physics is forces and energy.",
        keyPoints: ["F = ma", "Speed = distance/time"],
        method: ["Formula first", "Substitute values"],
        examples: ["Calculate force"],
        examQuestions: ["Find speed"],
        tips: ["Include units"],
        mistakes: ["Missing units"]
      }
    }
  }

  const data =
    revisionData[name?.toLowerCase()]?.[topic?.toLowerCase()]

  return (
    <div style={{ padding: '20px' }}>
      
      
      <AITutor subject={name} topic={topic} />

      <hr />

      <h1>{topic}</h1>
      <h3>{name} Revision</h3>

      {!data && (
        <p style={{ color: 'red' }}>
          No content available for this topic.
        </p>
      )}

      {data && (
        <div className="topic-grid">

          <div className="topic-card">
            <h3>Overview</h3>
            <p>{data.summary}</p>
          </div>

          <div className="topic-card">
            <h3>Key Points</h3>
            <ul>
              {data.keyPoints?.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="topic-card">
            <h3>Method</h3>
            <ul>
              {data.method?.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="topic-card">
            <h3>Examples</h3>
            <ul>
              {data.examples?.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="topic-card">
            <h3>Exam Questions</h3>
            <ul>
              {data.examQuestions?.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="topic-card">
            <h3>Tips</h3>
            <ul>
              {data.tips?.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="topic-card">
            <h3>Mistakes</h3>
            <ul>
              {data.mistakes?.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

        </div>
      )}
    </div>
  )
}

export default TopicPage