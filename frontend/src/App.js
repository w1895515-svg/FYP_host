import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// pages & components
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import Subject from './pages/Subject'
import PracticeTests from './pages/PracticeTests'
import ProgressTracker from './components/ProgressTracker'
import Timetable from './components/Timetable'
import Dashboard from './pages/Dashboard'
import SubjectPage from './pages/SubjectPage'
import TopicPage from './pages/TopicPage'
import TestPage from './pages/TestPage'
import AITutor from './pages/AITutor'
import NotFound from './pages/NotFound'

function App() {
  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {!user ?
        <div className="pages">
          <Routes>

            <Route path="/" element={<Home />} />
            
            <Route path="/subject" element={<Subject />} />

            {/* <Route path="/practice-tests" element={<PracticeTests />} />

            <Route path="/progress-tracker" element={<ProgressTracker />} />

            <Route path="/timetable" element={<Timetable />} /> */}
            
            {/* <Route path="/" element={<Dashboard />} /> */}

           
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />

            
            <Route path="/subject/:name" element={<SubjectPage />} />

            <Route path="/subject/:name/:topic" element={<TopicPage />} />

            {/* <Route path="/test/:id" element={<TestPage />} /> */}

           
      
            <Route
              path="/aitutor"
              element={<AITutor subject="general" topic="general" />}
            />

            <Route path="/*" element={<NotFound />} />

          </Routes>
        </div>
        :
        <div className="pages">
          <Routes>
            
            <Route path="/subject" element={<Subject />} />

            <Route path="/practice-tests" element={<PracticeTests />} />

            <Route path="/progress-tracker" element={<ProgressTracker />} />

            <Route path="/timetable" element={<Timetable />} />
            
            <Route path="/" element={<Dashboard />} />

           
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />

            
            <Route path="/subject/:name" element={<SubjectPage />} />

            <Route path="/subject/:name/:topic" element={<TopicPage />} />

            <Route path="/test/:id" element={<TestPage />} />

           
      
            <Route
              path="/aitutor"
              element={<AITutor subject="general" topic="general" />}
            />

          </Routes>
        </div>
        }
      </BrowserRouter>
    </div>
  )
}

export default App