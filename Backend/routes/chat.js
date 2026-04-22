const express = require('express')
const router = express.Router()
const { generateText } = require('ai')
const { groq } = require('@ai-sdk/groq')

if (!process.env.GROQ_API_KEY) {
  console.error("Missing GROQ_API_KEY in .env")
}

router.post('/', async (req, res) => {
  const { message, subject, topic } = req.body
  // console.log(req.body)

  try {
    const result = await generateText({
      model: groq('llama-3.1-8b-instant'),
      messages: [
        {
          role: "system",
          content: `You are a GCSE tutor. Subject: ${subject}. Topic: ${topic}. Explain clearly and simply.`,
        },
        {
          role: "user",
          content: message,
        },
      ],
    })

    res.json({
      reply: result.text || "No response"
    })

  } catch (error) {
    console.error("Error:", error)
    res.status(500).json({
      error: error.message
    })
  }

})

module.exports = router