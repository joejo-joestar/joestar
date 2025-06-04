import "./index.css";

function Home() {
  return (
    <section className="home">
      <h1 className="font-body">
        Hi, I'm <span className="font-display display-heading"> Joe</span>!
      </h1>
      <div className="font-body body-content">
        <p>
          I'm a Computer Science student in Birla Institue of Technology and
          Science.
        </p>
        <p>View my resume for some of my projects and experiences.</p>
        <p>Check out what I'm doing now.</p>
      </div>
    </section>
  );
}

export default Home;
