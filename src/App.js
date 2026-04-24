import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <header className="hero">
        <h1>Haley's Website 🚀</h1>
        <p>Built from scratch and deployed by me.</p>
      </header>

      <section className="section">
        <h2>Why?</h2>
        <p>
          The pupose of this project is for learning how websites work from
          start to finish.
        </p>
      </section>

      <section className="section">
        <h2>What I’m Doing</h2>
        <ul>
          <li>Designing the front end</li>
          <li>Deploying the live website</li>
        </ul>
      </section>

      <section className="section">
        <h2>Contact</h2>
        <p>Email: haley.collins05@gmail.com</p>
        <p>Phone: (940) 368-4041</p>
      </section>
    </div>
  );
}
