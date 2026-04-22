import { useParams } from 'react-router-dom'
import { useState } from 'react'

const TestPage = () => {
  const { id } = useParams()

  const allTests = {
    1: [ 
      { question: "What is 2 + 2?", options: ["3", "4", "5"], answer: "4" },
      { question: "What is 10 × 3?", options: ["30", "20", "40"], answer: "30" },
      { question: "What is 15 ÷ 3?", options: ["5", "6", "4"], answer: "5" },
      { question: "What is 7 + 6?", options: ["12", "13", "14"], answer: "13" },
      { question: "What is 9 × 2?", options: ["18", "16", "20"], answer: "18" },
      { question: "What is 20 - 8?", options: ["12", "11", "13"], answer: "12" },
      { question: "What is 5²?", options: ["10", "25", "15"], answer: "25" },
      { question: "What is √16?", options: ["2", "4", "8"], answer: "4" },
      { question: "What is 100 ÷ 10?", options: ["10", "5", "20"], answer: "10" },
      { question: "What is 11 + 9?", options: ["20", "19", "21"], answer: "20" },
      { question: "What is 14 - 7?", options: ["7", "6", "8"], answer: "7" },
      { question: "What is 6 × 6?", options: ["36", "30", "42"], answer: "36" },
      { question: "What is 12 ÷ 4?", options: ["3", "2", "4"], answer: "3" },
      { question: "What is 8 + 8?", options: ["16", "14", "18"], answer: "16" },
      { question: "What is 3 × 5?", options: ["15", "10", "20"], answer: "15" },
      { question: "What is 18 ÷ 2?", options: ["9", "8", "10"], answer: "9" },
      { question: "What is 50 - 25?", options: ["25", "20", "30"], answer: "25" },
      { question: "What is 4²?", options: ["16", "12", "14"], answer: "16" },
      { question: "What is 7 × 3?", options: ["21", "24", "18"], answer: "21" },
      { question: "What is 60 ÷ 6?", options: ["10", "12", "8"], answer: "10" }
    ],

    2: [ 
      { question: "What is H2O?", options: ["Water", "Oxygen", "Hydrogen"], answer: "Water" },
      { question: "What gas do humans breathe in?", options: ["Oxygen", "CO2", "Nitrogen"], answer: "Oxygen" },
      { question: "What planet is closest to the Sun?", options: ["Mercury", "Venus", "Earth"], answer: "Mercury" },
      { question: "What is photosynthesis used for?", options: ["Food production", "Breathing", "Movement"], answer: "Food production" },
      { question: "What is the centre of an atom called?", options: ["Nucleus", "Electron", "Shell"], answer: "Nucleus" },
      { question: "What force keeps us on the ground?", options: ["Gravity", "Magnetism", "Friction"], answer: "Gravity" },
      { question: "What state is ice?", options: ["Solid", "Liquid", "Gas"], answer: "Solid" },
      { question: "What is the boiling point of water?", options: ["100°C", "50°C", "0°C"], answer: "100°C" },
      { question: "Which organ pumps blood?", options: ["Heart", "Lungs", "Brain"], answer: "Heart" },
      { question: "What do plants absorb from air?", options: ["CO2", "Oxygen", "Hydrogen"], answer: "CO2" },
      { question: "What is electricity measured in?", options: ["Volts", "Metres", "Grams"], answer: "Volts" },
      { question: "What is a habitat?", options: ["Home of an organism", "Food", "Water"], answer: "Home of an organism" },
      { question: "What do humans exhale?", options: ["CO2", "Oxygen", "Nitrogen"], answer: "CO2" },
      { question: "Which planet has rings?", options: ["Saturn", "Mars", "Earth"], answer: "Saturn" },
      { question: "What is sound measured in?", options: ["Decibels", "Metres", "Grams"], answer: "Decibels" },
      { question: "What is digestion?", options: ["Breaking down food", "Breathing", "Seeing"], answer: "Breaking down food" },
      { question: "What is a cell?", options: ["Basic unit of life", "Bone", "Gas"], answer: "Basic unit of life" },
      { question: "What do plants need to grow?", options: ["Water", "Plastic", "Metal"], answer: "Water" },
      { question: "What is the Sun?", options: ["Star", "Planet", "Moon"], answer: "Star" },
      { question: "What is a chemical reaction?", options: ["Change of substances", "Movement", "Colour"], answer: "Change of substances" }
    ],

    3: [ 
      { question: "What is a noun?", options: ["Person/place/thing", "Action", "Feeling"], answer: "Person/place/thing" },
      { question: "What is a verb?", options: ["Action word", "Thing", "Place"], answer: "Action word" },
      { question: "What is an adjective?", options: ["Describes noun", "Action", "Name"], answer: "Describes noun" },
      { question: "What is a synonym?", options: ["Same meaning", "Opposite", "Sound"], answer: "Same meaning" },
      { question: "What is punctuation used for?", options: ["Structure writing", "Draw pictures", "Numbers"], answer: "Structure writing" },
      { question: "What is a paragraph?", options: ["Group of sentences", "Word", "Letter"], answer: "Group of sentences" },
      { question: "What is a metaphor?", options: ["Comparison", "Number", "Sound"], answer: "Comparison" },
      { question: "What is a simile?", options: ["Uses like/as", "Story", "Verb"], answer: "Uses like/as" },
      { question: "What is spelling?", options: ["Correct letters", "Grammar", "Speaking"], answer: "Correct letters" },
      { question: "What is grammar?", options: ["Language rules", "Drawing", "Math"], answer: "Language rules" },
      { question: "What is tone in writing?", options: ["Feeling", "Length", "Size"], answer: "Feeling" },
      { question: "What is fiction?", options: ["Made up", "Real", "Math"], answer: "Made up" },
      { question: "What is non-fiction?", options: ["Real facts", "Fake story", "Poem"], answer: "Real facts" },
      { question: "What is a synonym for big?", options: ["Large", "Small", "Tiny"], answer: "Large" },
      { question: "What is a comma used for?", options: ["Pause", "End sentence", "Start"], answer: "Pause" },
      { question: "What is a full stop?", options: ["Ends sentence", "Pause", "Question"], answer: "Ends sentence" },
      { question: "What is poetry?", options: ["Creative writing", "Math", "Science"], answer: "Creative writing" },
      { question: "What is a character?", options: ["Person in story", "Place", "Object"], answer: "Person in story" },
      { question: "What is setting?", options: ["Where story happens", "Action", "Verb"], answer: "Where story happens" },
      { question: "What is narrative?", options: ["Story", "Math", "Science"], answer: "Story" }
    ]
  }

  const questions = allTests[id] || []

  const [currentQ, setCurrentQ] = useState(0)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const handleAnswer = (option) => {
    if (option === questions[currentQ].answer) {
      setScore(score + 1)
    }

    const next = currentQ + 1

    if (next < questions.length) {
      setCurrentQ(next)
    } else {
      setFinished(true)
      localStorage.setItem(`test-${id}-score`, score + 1)
    }
  }

  if (!questions.length) {
    return <h2>No test found</h2>
  }

  return (
    <div className="test-page">

      {!finished ? (
        <div className="test-card">
          <h3>Question {currentQ + 1} / {questions.length}</h3>
          <p>{questions[currentQ].question}</p>

          <div>
            {questions[currentQ].options.map((option, i) => (
              <button key={i} onClick={() => handleAnswer(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h2>Test Finished </h2>
          <p>Your score: {score} / {questions.length}</p>
        </div>
      )}
    </div>
  )
}

export default TestPage