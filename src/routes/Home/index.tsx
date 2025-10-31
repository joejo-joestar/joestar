import { Link, NavLink } from "react-router";
import "./index.css";
import { useScrollToTop } from "@hooks/useScrollToTop";
import ProjectsList from "@/components/ProjectsList";
import { useEffect, useState } from "react";
import { getRepos, repoBlacklist } from "@/api/github";

function Home() {
  useScrollToTop();
  const [repos, setRepos] = useState<any[]>([]);
  const [isloading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const data = await getRepos();
        // filter out blacklisted ids
        const blacklist = new Set(repoBlacklist.map((r) => r.id));
        const filtered = (data || []).filter((r: any) => !blacklist.has(r.id));
        const mapped = filtered.map((r: any) => ({
          id: r.id,
          owner: r.owner.login,
          name: r.name,
          description: r.description || r.full_name || "",
          homepage: r.homepage || undefined,
          language: r.language || "",
          url: r.html_url || r.url,
        }));
        if (mounted) setRepos(mapped);
      } catch (err) {
        console.error("Failed to fetch repos", err);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);
  return (
    <>
      <section className="home">
        <h1>
          <img
            src="https://raw.githubusercontent.com/joejo-joestar/joestar/5c0d47baa1b1bc02dace9f882fd2d6ba92e0e0db/src/assets/pixhi.png"
            alt="o7"
          />
          <span>
            hi, i'm <span className="display-heading">Joe</span>!
          </span>
        </h1>
        <div className="home-body-content">
          <span>
            i'm a <em>computer science</em> student in Birla Institue of
            Technology and Science.
            <p>
              check out what i'm doing <NavLink to="/nownownow">now</NavLink>.
            </p>
            <p>
              head over to the <NavLink to="contact">contact</NavLink> page to
              get in touch with me.
            </p>
          </span>

          <br />
          <div className="bar" />
          <br />

          <span className="projects-body-content">
            <p className="projects-heading">
              here are some of the <Link to="projects">projects</Link> i have,
              and am still working on
            </p>
            {isloading ? (
              <div className="loader-container">
                <div className="loader"></div>
              </div>
            ) : (
              <ProjectsList repos={isloading ? [] : repos} limit={6} />
            )}
          </span>
        </div>
      </section>
    </>
  );
}

export default Home;
