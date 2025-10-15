import axios from "axios";

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

// https://accounts.spotify.com/en/authorize?response_type=code&client_id=<App_Client_ID>&scope=user-read-currently-playing&redirect_uri=http%3A%2F%2F<LOCALHOST_IP>%3A<PORT_NUMBER>%2F&state=mystate

//Function to generate an access token using the refresh token everytime the website is opened or refreshed
export const getAccessToken = async (
  clientId: string,
  clientSecret: string,
  refreshToken: string
) => {
  //Creates a base64 code of client_id:client_secret as required by the API
  //Browser-safe: use btoa when available, otherwise fall back to Buffer
  const basic =
    typeof window !== "undefined" && typeof window.btoa === "function"
      ? window.btoa(`${clientId}:${clientSecret}`)
      : typeof Buffer !== "undefined"
        ? Buffer.from(`${clientId}:${clientSecret}`).toString("base64")
        : btoa(`${clientId}:${clientSecret}`);

  //The response will contain the access token
  const params = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: refreshToken,
  });

  const res = await axios.post(TOKEN_ENDPOINT, params.toString(), {
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  return res.data;
};

//Uses the access token to fetch the currently playing song
export const getNowPlaying = async () => {
  // Use the server-side middleware to fetch and simplify now-playing info
  const MIDDLEWARE_ROOT = "https://joestar-middleware.vercel.app";
  const url = `${MIDDLEWARE_ROOT}/spotify/now-playing`;

  try {
    const { data } = await axios.get(url, {
      headers: { Accept: "application/json" },
      timeout: 5000,
      validateStatus: () => true,
    });

    // middleware returns { meta: { authenticated }, nowPlaying: {...} }
    if (data && Object.prototype.hasOwnProperty.call(data, "nowPlaying")) {
      return data.nowPlaying;
    }

    // fallback: if middleware returned the object directly
    if (data && typeof data === "object") return data as any;

    return null;
  } catch (error: any) {
    // eslint-disable-next-line no-console
    console.error(
      "getNowPlaying middleware error:",
      error && error.message ? error.message : error
    );
    return null;
  }
};
