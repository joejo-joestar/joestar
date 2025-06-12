import "./index.css";

function Home() {
  return (
    <>
      <section className="home">
        <h1 className="font-heading">
          Hi, I'm <span className="font-display display-heading"> Joe</span>!
        </h1>
        <div className="font-body body-content">
          <span>
            I'm a Computer Science student in Birla Institue of Technology and
            Science.
          </span>
          <span>View my resume for some of my projects and experiences.</span>
          <span>Check out what I'm doing now.</span>
        </div>
      </section>
    </>
  );
}

export default Home;
