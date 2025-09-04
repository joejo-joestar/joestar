import axios from "axios";

const NOW_PLAYING_ENDPOINT =
  "https://api.spotify.com/v1/me/player/currently-playing";
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
const refreshToken = import.meta.env.VITE_SPOTIFY_REFRESH_TOKEN;

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
  try {
    //Generating an access token
    const { access_token } = await getAccessToken(
      clientId,
      clientSecret,
      refreshToken
    );
    // Fetch the currently playing track using axios
    const response = await axios.get(NOW_PLAYING_ENDPOINT, {
      headers: { Authorization: `Bearer ${access_token}` },
      validateStatus: () => true, // we'll handle status codes manually
    });

    // Handle status codes
    if (response.status > 400) {
      throw new Error("Unable to Fetch Song");
    } else if (response.status === 204) {
      throw new Error("Currently Not Playing");
    }

    // Extracting the required data from the response into separate variables
    const song = response.data;
    const albumImageUrl = song.item.album.images[0].url;
    const artist = song.item.artists
      .map((artist: { name: string }) => artist.name)
      .join(", ");
    const isPlaying = song.is_playing;
    const songUrl = song.item.external_urls.spotify;
    const title = song.item.name;
    const timePlayed = song.progress_ms;
    const timeTotal = song.item.duration_ms;
    const artistUrl = song.item.album.artists[0].external_urls.spotify;
    const albumUrl = song.item.album.external_urls.spotify;

    //Returning the song details
    return {
      albumImageUrl,
      artist,
      isPlaying,
      songUrl,
      albumUrl,
      title,
      timePlayed,
      timeTotal,
      artistUrl,
    };
  } catch (error: any) {
    console.error("Error fetching currently playing song: ", error);
    return error.message.toString();
  }
};
