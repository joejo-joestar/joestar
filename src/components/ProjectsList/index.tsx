import { Link } from "react-router";
import "./index.css";

interface RepoProps {
  id: number;
  owner: string;
  name: string;
  description: string;
  homepage?: string;
  language: string;
  url: string;
}

interface ProjectsProps {
  repos: RepoProps[];
  limit?: number;
  singleCol?: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ repos, limit, singleCol }) => {
  const displayedRepos =
    typeof limit === "number" && limit > 0 ? repos.slice(0, limit) : repos;

  return (
    <div className={`projects-container${singleCol ? " single-col" : ""}`}>
      {displayedRepos.map((repo) => (
        <div key={repo.id} className="repo-card-container">
          <div className="repo-card">
            <a
              className="repo-link"
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {repo.owner}/{repo.name}
            </a>
            <p className="repo-desc">{repo.description}</p>
            <Link to={`/projects/readme/${repo.name}`}>readme!</Link>
            {repo.homepage && (
              <a
                className="repo-homepage"
                href={repo.homepage}
                target="_blank"
                rel="noopener noreferrer"
              >
                homepage
              </a>
            )}
            <span className="language">{repo.language}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
