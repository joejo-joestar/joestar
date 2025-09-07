import axios from "axios";

const githubToken = import.meta.env.VITE_GITHUB_ACCESS_TOKEN;

const GITHUB_ROOT = "https://api.github.com";
const USERNAME = "joejo-joestar";

export const getRepos = async () => {
  const { data } = await axios.get(
    `${GITHUB_ROOT}/users/${USERNAME}/repos?sort=pushed&type=all`,
    {
      headers: {
        Authorization: `token ${githubToken}`,
        Accept: "application / vnd.github + json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );
  return data;
};

export const repoBlacklist = [
  { id: 870897038 },
  { id: 732342842 },
  { id: 1047632816 },
  { id: 689259000 },
];
