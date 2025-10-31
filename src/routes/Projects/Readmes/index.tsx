// import "./index.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

import Markdown from "react-markdown";

// remark plugins
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import remarkMath from "remark-math";
import remarkParse from "remark-parse";

// rehype plugins
import rehypeRaw from "rehype-raw";
import rehypeCallouts from "rehype-callouts";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";

import { getReadme } from "@/api/github";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { fixReadmePaths } from "@/utils/readmePaths";

import "./index.css";

function Readmes() {
  useScrollToTop();
  const [readme, setReadme] = useState<string>("Loading...");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { owner, repo } = useParams<{ owner?: string; repo?: string }>();

  useEffect(() => {
    let mounted = true;
    (async () => {
      if (!repo) {
        if (mounted) {
          setReadme("No README found.");
          setIsLoading(false);
        }
        return;
      }

      try {
        const data = await getReadme(repo);
        const fixed = fixReadmePaths(data || "", owner || "", repo);
        if (mounted) setReadme(fixed || "No README found.");
      } catch (err) {
        console.error("Failed to fetch README", err);
      } finally {
        if (mounted) setIsLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [repo]);

  return (
    <section className="readme">
      <title>projects/readme. | joestar</title>
      <div className="readme-body-content">
        {isLoading ? (
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        ) : (
          <Markdown
            remarkPlugins={[remarkGfm, remarkRehype, remarkMath, remarkParse]}
            rehypePlugins={[
              rehypeRaw,
              rehypeCallouts,
              rehypeFormat,
              rehypeStringify,
              rehypeHighlight,
            ]}
          >
            {readme}
          </Markdown>
        )}
      </div>
    </section>
  );
}

export default Readmes;
