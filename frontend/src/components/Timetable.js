import { useState } from 'react'

const Timetable = () => {
  const [day, setDay] = useState('')
  const [time, setTime] = useState('')
  const [subject, setSubject] = useState('')
  const [timetable, setTimetable] = useState([])

  const addSession = () => {
    if (!day || !time || !subject) return

    const newSession = {
      day,
      time,
      subject
    }

    setTimetable([...timetable, newSession])

    setDay('')
    setTime('')
    setSubject('')
  }
  
  const deleteSession = (index) => {
    setTimetable(timetable.filter((_, i) => i !== index))
  }

  return (
    <div className="timetable-container">
      <h2>My Revision Timetable</h2>

      
      <div className="timetable-form">
        <input
          type="text"
          placeholder="Day (e.g Monday)"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />

        <input
          type="text"
          placeholder="Time (e.g 4pm - 5pm)"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />

        <input
          type="text"
          placeholder="Subject (e.g Maths)"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        <button onClick={addSession}>Add to Timetable</button>
      </div>

     
      <div className="timetable-list">
        {timetable.length === 0 ? (
          <p>No revision sessions added yet.</p>
        ) : (
          timetable.map((item, index) => (
            <div key={index} className="timetable-item">
              <h4>{item.day}</h4>
              <p>{item.time}</p>
              <p>{item.subject}</p>

             
              <button onClick={() => deleteSession(index)}>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Timetable