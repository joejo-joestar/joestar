export function fixReadmePaths(raw: string, owner: string, repo: string) {
  if (!raw || !owner || !repo) return raw;

  // helper: detect absolute URLs or hashes or mailto/tel
  const isAbsolute = (u: string) => /^(?:[a-z]+:|\/\/)/i.test(u);
  const isHash = (u: string) => /^#/i.test(u);

  // Normalize leading ./ and remove surrounding whitespace
  const normalize = (p: string) => p.replace(/^\.\/+/g, "").trim();

  // Replace markdown images: ![alt](path)
  const imgReplaced = raw.replace(
    /(!\[[^\]]*\])\(([^)]+)\)/g,
    (full, alt, url) => {
      const trimmed = url.trim();
      // leave absolute URLs, data: URIs, or anchor links alone
      if (
        isAbsolute(trimmed) ||
        trimmed.startsWith("data:") ||
        isHash(trimmed)
      ) {
        return full;
      }
      // remove optional title after space: path "title"
      const parts = trimmed.split(/\s+"/);
      const path = normalize(parts[0]);
      const replaced = `https://github.com/${owner}/${repo}/raw/main/${path}`;
      // preserve optional title if present
      if (parts.length > 1) {
        return `${alt}(${replaced} \"${parts.slice(1).join('"')}`;
      }
      return `${alt}(${replaced})`;
    }
  );

  // Replace markdown links: [text](path)
  const linkReplaced = imgReplaced.replace(
    /(?<!\!)\[([^\]]+)\]\(([^)]+)\)/g,
    (full, text, url) => {
      const trimmed = url.trim();
      if (
        isAbsolute(trimmed) ||
        isHash(trimmed) ||
        trimmed.startsWith("mailto:")
      )
        return full;
      const parts = trimmed.split(/\s+"/);
      const path = normalize(parts[0]);
      const replaced = `https://github.com/${owner}/${repo}/blob/main/${path}`;
      if (parts.length > 1) {
        return `[${text}](${replaced} \"${parts.slice(1).join('"')}`;
      }
      return `[${text}](${replaced})`;
    }
  );

  // Replace quoted src/href first (handles <img src="..."> and <a href='...'>)
  let html = linkReplaced.replace(
    /(src|href)=["']([^"']+)["']/gi,
    (full, attr, url) => {
      const trimmed = url.trim();
      if (
        isAbsolute(trimmed) ||
        trimmed.startsWith("data:") ||
        isHash(trimmed) ||
        trimmed.startsWith("mailto:")
      )
        return full;
      const path = normalize(trimmed);
      const base =
        attr.toLowerCase() === "src"
          ? `https://github.com/${owner}/${repo}/raw/main/${path}`
          : `https://github.com/${owner}/${repo}/blob/main/${path}`;
      return `${attr}="${base}"`;
    }
  );

  // Replace unquoted src/href: src=/path.png or src=../img.png
  html = html.replace(/(src|href)=([^\s>"']+)/gi, (full, attr, url) => {
    const trimmed = String(url).trim();
    if (trimmed.startsWith('"') || trimmed.startsWith("'")) return full;
    if (
      isAbsolute(trimmed) ||
      trimmed.startsWith("data:") ||
      isHash(trimmed) ||
      trimmed.startsWith("mailto:")
    )
      return full;
    const path = normalize(trimmed);
    const base =
      attr.toLowerCase() === "src"
        ? `https://github.com/${owner}/${repo}/raw/main/${path}`
        : `https://github.com/${owner}/${repo}/blob/main/${path}`;
    return `${attr}="${base}"`;
  });

  // Handle srcset attribute: multiple comma-separated URLs with optional descriptors
  html = html.replace(
    /srcset=["']([^"']+)["']/gi,
    (_full: string, val: string) => {
      const parts = val
        .split(",")
        .map((p: string) => p.trim())
        .map((entry: string) => {
          const segs = entry.split(/\s+/);
          const url = segs[0];
          if (isAbsolute(url) || url.startsWith("data:") || isHash(url))
            return entry;
          const path = normalize(url);
          const replaced = `https://github.com/${owner}/${repo}/raw/main/${path}`;
          return [replaced, ...segs.slice(1)].join(" ");
        });
      return `srcset="${parts.join(", ")}"`;
    }
  );

  return html;
}
