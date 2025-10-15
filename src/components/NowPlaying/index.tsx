import { getNowPlaying } from "@/api/spotify";
import { useEffect, useState } from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompactDisc,
  faExclamationCircle,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";

// shape of the data returned by the API when a song is playing
interface NowPlayingData {
  title?: string;
  artist?: string;
  artistUrl?: string;
  albumUrl?: string;
  albumImageUrl?: string;
  songUrl?: string;
  isPlaying?: boolean;
  timePlayed?: number;
  timeTotal?: number;
}

//Main function to process the data and render the widget
const NowPlaying = () => {
  //Hold information about the currently playing song; API may return an object, a string message, or null
  const [nowPlaying, setNowPlaying] = useState<NowPlayingData | string | null>(
    null
  );

  useEffect(() => {
    const fetchNowPlaying = async () => {
      const data = await getNowPlaying();
      setNowPlaying(data);
    };

    // The spotify API does not support web sockets, so in order to keep updating
    // the currently playing song and time elapsed - we call the API every 30 seconds.
    fetchNowPlaying();
    const interval = setInterval(() => {
      fetchNowPlaying();
    }, 30000); // poll every 30 seconds

    // cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  //Setting default values for the listener's current state
  let playerState = "";
  let albumImageUrl = "";
  let title = "";
  let artist = "";

  if (
    nowPlaying != null &&
    typeof nowPlaying !== "string" &&
    nowPlaying.title
  ) {
    //Used while displaying a soundbar/pause icon on the widget
    playerState = nowPlaying.isPlaying ? "PLAY" : "PAUSE";

    albumImageUrl = nowPlaying.albumImageUrl ?? albumImageUrl;
    title = nowPlaying.title ?? "";
    artist = nowPlaying.artist ?? "";
  } else if (nowPlaying === "Currently Not Playing") {
    playerState = "OFFLINE";
  }

  // no timestamp helper needed anymore

  return (
    //Depending on the value of playerState, the href, album image and icons are updated
    <div className="now-playing-card">
      <div className="now-playing-container">
        {/* MARK: Now PLaying Album Art */}
        {playerState === "PLAY" || playerState === "PAUSE" ? (
          <div className="now-playing-image">
            <a
              href={
                nowPlaying && typeof nowPlaying !== "string"
                  ? nowPlaying.albumUrl
                  : ""
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={albumImageUrl} alt="Album" />
            </a>
          </div>
        ) : (
          <div className="now-playing-image-placeholder">
            <FontAwesomeIcon icon={faCompactDisc} size="2x" spin />
          </div>
        )}
        {/* MARK: Now Playing Details */}
        <div id="now-playing-details">
          {playerState === "OFFLINE" ? (
            <div className="now-playing-offline">
              getting my ears yapped off right now!
            </div>
          ) : (
            <>
              <div
                className={`now-playing-title ${title.length > 20 ? "marquee-content" : ""}`}
              >
                <span className="now-playing-text">
                  {playerState === "PLAY" || playerState === "PAUSE" ? (
                    <>
                      <a
                        href={
                          nowPlaying && typeof nowPlaying !== "string"
                            ? nowPlaying.songUrl
                            : ""
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {title}
                      </a>
                      {title.length > 20 && (
                        <>
                          <a
                            href={
                              nowPlaying && typeof nowPlaying !== "string"
                                ? nowPlaying.songUrl
                                : ""
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {title}
                          </a>
                        </>
                      )}
                    </>
                  ) : (
                    <span>{title}</span>
                  )}
                </span>
              </div>
              {/* Artist displayed based on playerState */}
              <div
                className={`now-playing-artist ${artist.length > 20 ? "marquee-content" : ""}`}
              >
                <span className="now-playing-text">
                  {playerState === "PLAY" || playerState === "PAUSE" ? (
                    <a
                      href={
                        nowPlaying && typeof nowPlaying !== "string"
                          ? nowPlaying.artistUrl
                          : ""
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {artist}
                    </a>
                  ) : (
                    <span>{artist}</span>
                  )}
                </span>
              </div>
              {/* timestamps removed */}
            </>
          )}
          {/* Song Title displayed based on playerState */}
        </div>
      </div>
      {/* Icon displayed based on playerState */}
      <div className="now-playing-state">
        {playerState === "PLAY" || playerState === "PAUSE" ? (
          <div
            /* Sound bar animation */ className={`sound-wave ${playerState === "PLAY" ? "playing" : "paused"}`}
          >
            <span />
            <span />
            <span />
          </div>
        ) : playerState === "OFFLINE" ? (
          <FontAwesomeIcon
            icon={faMoon}
            size="2x"
            color="var(--main-accent-color-green)"
          />
        ) : (
          <FontAwesomeIcon
            icon={faExclamationCircle}
            size="2x"
            color="var(--main-accent-color-green)"
          />
        )}
      </div>
    </div>
  );
};

export default NowPlaying;
