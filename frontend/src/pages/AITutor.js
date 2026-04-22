import { useState } from 'react'

const AITutor = ({ subject = "general", topic = "general" }) => {
  const [message, setMessage] = useState('')
  const [chat, setChat] = useState([
    {
      role: 'ai',
      content: `Hi! Ask me anything about ${topic} `
    }
  ])
  const [loading, setLoading] = useState(false)

  const sendMessage = async () => {
    if (!message.trim()) return

    const newChat = [...chat, { role: 'user', content: message }]
    setChat(newChat)
    setMessage('')
    setLoading(true)

    try {
      const response = await fetch(
        'http://localhost:5050/api/chat',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message, subject, topic })
        }
      )

      const data = await response.json()
      console.log(data)

      setChat([
        ...newChat,
        {
          role: 'ai',
          content: data.reply || "No response from AI"
        }
      ])
    } catch (err) {
      console.error(err)

      setChat([
        ...newChat,
        {
          role: 'ai',
          content: " Error connecting to AI"
        }
      ])
    }

    setLoading(false)
  }

  return (
    <div style={{ border: '2px solid #000', padding: '15px', marginTop: '20px' }}>
      <h2>AI Tutor</h2>

      <div style={{ height: '200px', overflowY: 'auto', border: '1px solid #ccc', padding: '10px' }}>
        {chat.map((msg, i) => (
          <div key={i}>
            <strong>{msg.role === 'user' ? 'You: ' : 'AI: '}</strong>
            {msg.content}
          </div>
        ))}

        {loading && <p>Thinking...</p>}
      </div>

      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask a question..."
      />

      <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default AITutor