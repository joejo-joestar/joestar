import "./index.css";

interface RepoProps {
  id: number;
  name: string;
  description: string;
  homepage?: string;
  language: string;
  url: string;
}

interface ProjectsProps {
  repos: RepoProps[];
  limit?: number;
}

export const Projects: React.FC<ProjectsProps> = ({ repos, limit }) => {
  const displayedRepos =
    typeof limit === "number" && limit > 0 ? repos.slice(0, limit) : repos;

  return (
    <div className="projects-container">
      {displayedRepos.map((repo) => (
        <div key={repo.id} className="repo-card-container">
          <div className="repo-card">
            <a
              className="repo-link"
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {repo.name}
            </a>
            <p className="repo-desc">{repo.description}</p>
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
