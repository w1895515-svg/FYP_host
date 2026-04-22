import { Link } from "react-router-dom"

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Your Dashboard</h1>
      <p className="dashboard-subtitle">
        Everything you need to stay on top of your studies
      </p>

      <div className="dashboard-grid">
        <Link to="/subject" className="dashboard-card">
          <h2>Subjects</h2>
          <p>View and manage your subjects</p>
        </Link>

        <Link to="/timetable" className="dashboard-card">
          <h2>Timetable</h2>
          <p>study schedule</p>
        </Link>

         <Link to="/aitutor" className="dashboard-card">
          <h2>chatbot tutor</h2>
          <p>Ask questions</p>
        </Link>

        <Link to="/practice-tests" className="dashboard-card">
          <h2>Practice Tests</h2>
          <p>Test your knowledge</p>
        </Link>

        <Link to="/progress-tracker" className="dashboard-card">
          <h2>Progress Tracker</h2>
          <p>Track your progress</p>
        </Link>
      </div>
    </div>
  )
}

export default Dashboard
