import { NavLink } from "react-router";
import "./index.css";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { learningList, readingList } from "./lists";
import NowPlaying from "@/components/NowPlaying";
import { useEffect, useState } from "react";
import { getRepos, repoBlacklist } from "@/api/repos";
import ProjectsList from "@/components/ProjectsList";

const Now = () => {
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
          name: r.full_name,
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
    <section className="now">
      <h1>
        <img
          src="https://raw.githubusercontent.com/joejo-joestar/joestar/8ad250ff86a6254c58bb2072f0dc163b48b1d5b5/src/assets/pixnow.png"
          alt="now."
        />
        now.
      </h1>
      <div className="now-body-content">
        <span>
          i'm currently working at{" "}
          <a
            href="https://alshirawiequipment.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Al Shirawi Equipment
          </a>{" "}
          as a production engineering intern.
        </span>
        <span>check below to see what i'm up to right now!</span>
        <span>
          feel free to <NavLink to="/contact">reach out</NavLink> if you want to
          collaborate!
        </span>

        {/* Now layout: two columns, each column holds two stacked sections */}
        <div className="now-container">
          <div className="now-column">
            {/* Now Playing */}
            <div className="listening-now">
              <h2>
                <em>listening.</em>
              </h2>
              <div>
                <NowPlaying />
              </div>
            </div>

            {/* Now Working */}
            <div>
              <h2>
                <em>working.</em>
              </h2>
              {isLoading ? (
                <div className="loader-container">
                  <div className="loader"></div>
                </div>
              ) : (
                <ProjectsList
                  repos={isLoading ? [] : repos}
                  limit={3}
                  singleCol
                />
              )}
            </div>
          </div>

          <div className="now-column">
            {/* Now Learning */}
            <div>
              <h2>
                <em>learning.</em>
              </h2>
              <ul>
                {learningList.map((item, index) => (
                  <li key={index} className="item">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.title.toLocaleLowerCase()}
                    </a>
                    : {item.description.toLocaleLowerCase()}
                  </li>
                ))}
              </ul>
            </div>

            {/* Now Reading */}
            <div>
              <h2>
                <em>reading.</em>
              </h2>
              <ul>
                {readingList.map((book, index) => (
                  <li key={index} className="item">
                    <a
                      href={book.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {book.title}
                    </a>{" "}
                    by {book.author}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Now;
