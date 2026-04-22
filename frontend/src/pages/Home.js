import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Learn Wise</h1>
        <p style={styles.subtitle}>
          Making learning easy!
        </p>
      </header>

      <section style={styles.section}>
        <h2>What is Learn Wise?</h2>
        <p>
          Learn Wise is a GCSE study platform designed to help students revise
          smarter, not harder. it provides structured resources, interactive
          content, and tools to make revision more effective and less stressful.
        </p>
      </section>

      <section style={styles.section}>
        <h2>What you can do</h2>
        <ul style={styles.list}>
          <li>Access GCSE subject content in one place</li>
          <li>Test your knowledge with practice tests</li>
          <li>Track your progress</li>
          <li> Focus on topics you find difficult</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2>Why choose Learn Wise?</h2>
        <p>
          LearnWise focuses on clarity, simplicity, and effectiveness. Whether you're
          revising last minute or planning months ahead, Learn Wise helps you
          stay organised and confident.
        </p>
      </section>

      <div style={styles.cta}>
        <Link to="/login" style={styles.button}>
          Get Started
        </Link>
      </div>
    </div>
  )
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "40px",
    maxWidth: "900px",
    margin: "0 auto",
    lineHeight: "1.6"
  },
  header: {
    textAlign: "center",
    marginBottom: "40px"
  },
  title: {
    fontSize: "3rem",
    marginBottom: "10px"
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#555"
  },
  section: {
    marginBottom: "30px"
  },
  list: {
    paddingLeft: "20px"
  },
  cta: {
    textAlign: "center",
    marginTop: "40px"
  },
  button: {
    textDecoration: "none",
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "12px 24px",
    borderRadius: "8px",
    fontSize: "1rem"
  }
}

export default Home