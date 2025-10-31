// import "./index.css";
import { useParams } from "react-router";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeCallouts from "rehype-callouts";
import { getReadme } from "@/api/github";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { useEffect, useState } from "react";

import "./index.css";

function Readmes() {
  useScrollToTop();
  const [readme, setReadme] = useState<string>("Loading...");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { repo } = useParams<{ repo?: string }>();

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
        if (mounted) setReadme(data || "No README found.");
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
      <div>
        <Markdown
          remarkPlugins={[remarkGfm, remarkRehype]}
          rehypePlugins={[rehypeRaw, rehypeCallouts]}
        >
          {readme}
        </Markdown>
      </div>
    </section>
  );
}

export default Readmes;
