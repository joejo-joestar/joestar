import "./index.css";
import { useEffect, useState } from "react";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { getRepos, repoBlacklist } from "@/api/github";
import ProjectsList from "@/components/ProjectsList";

const Projects = () => {
  useScrollToTop();
  const [repos, setRepos] = useState<any[]>([]);
  const [isLoading, setLoading] = useState(true);

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
          owner: r.owner?.login || "",
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
      <section className="projects">
        <title>projects. | joestar</title>
        <h1>
          <img
            src="https://raw.githubusercontent.com/joejo-joestar/joestar/90e30b6a2562dabad67bfa19e118f86b6bd92fff/src/assets/pixprojects.png"
            alt="projects."
          />
          projects.
        </h1>
        <div className="projects-body-content">
          <div>
            <span>
              here are some of the projects i have worked on over the years.
            </span>
            <span>
              <p>
                you can find a lot of my work on{" "}
                <a
                  href="http://github.com/joejo-joestar/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </p>
            </span>
          </div>
          {isLoading ? (
            <div className="loader-container">
              <div className="loader"></div>
            </div>
          ) : (
            <div className="repos-grid">
              <ProjectsList repos={isLoading ? [] : repos} />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Projects;
