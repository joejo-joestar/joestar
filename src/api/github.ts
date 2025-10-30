import axios from "axios";

// Use the hosted middleware to proxy GitHub requests and handle auth/blacklist/cache server-side
const MIDDLEWARE_ROOT = "https://api.joestar.is-a.dev";

export const getRepos = async (noCache = false) => {
  const url = `${MIDDLEWARE_ROOT}/github/repos${noCache ? "?no_cache=1" : ""}`;
  try {
    const { data } = await axios.get(url, {
      headers: {
        Accept: "application/json",
      },
      timeout: 5000,
    });

    // middleware returns { meta, repos }
    if (data && Array.isArray(data.repos)) return data.repos;
    // fallback: some responses might return the array directly
    if (Array.isArray(data)) return data;
    return [];
  } catch (err) {
    // swallow and return empty list on network or parse errors
    // caller/UI should handle empty array gracefully
    // eslint-disable-next-line no-console
    console.error(
      "getRepos middleware error:",
      err && (err as any).message ? (err as any).message : err
    );
    return [];
  }
};

export const repoBlacklist = [
  { id: 870897038 },
  { id: 732342842 },
  { id: 1047632816 },
  { id: 689259000 },
  { id: 1063993915 },
];
