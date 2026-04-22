const ProgressTracker = () => {

  const mathScore = localStorage.getItem('test-1-score') || 0
  const scienceScore = localStorage.getItem('test-2-score') || 0
  const englishScore = localStorage.getItem('test-3-score') || 0
  const historyScore = localStorage.getItem('test-4-score') || 0

  const maths = (mathScore / 2) * 100
  const science = (scienceScore / 2) * 100
  const english = (englishScore / 1) * 100
  const history = (historyScore / 2) * 100

  return (
    <div>
      <h2>Progress Tracker</h2>

      <div className="progress-tracker">
        <h3>Mathematics</h3>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${maths}%` }} />
        </div>
        <p>{mathScore} / 2 correct</p>
      </div>

      <div className="progress-tracker">
        <h3>Science</h3>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${science}%` }} />
        </div>
        <p>{scienceScore} / 2 correct</p>
      </div>

      <div className="progress-tracker">
        <h3>English</h3>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${english}%` }} />
        </div>
        <p>{englishScore} / 1 correct</p>
      </div>

      <div className="progress-tracker">
        <h3>History</h3>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${history}%` }} />
        </div>
        <p>{historyScore} / 2 correct</p>
      </div>
    </div>
  )
}

export default ProgressTracker