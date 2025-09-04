import { getNowPlaying } from "@/api/spotify";
import { useEffect, useState } from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePause,
  faCompactDisc,
  faExclamationCircle,
  faPowerOff,
  faRecordVinyl,
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
    // the currently playing song and time elapsed - we call the API every second.
    fetchNowPlaying();
    const interval = setInterval(() => {
      fetchNowPlaying();
    }, 1000);

    // cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  //Setting default values for the listener's current state and the duration of the song played
  let playerState = "";
  let secondsPlayed = 0,
    minutesPlayed = 0,
    secondsTotal = 0,
    minutesTotal = 0;
  let albumImageUrl = "./images/albumCover.png";
  let title = "";
  let artist = "";

  if (
    nowPlaying != null &&
    typeof nowPlaying !== "string" &&
    nowPlaying.title
  ) {
    //Used while displaying a soundbar/pause icon on the widget
    playerState = nowPlaying.isPlaying ? "PLAY" : "PAUSE";

    //Converting the playback duration from milliseconds to minutes and seconds
    secondsPlayed = Math.floor((nowPlaying.timePlayed ?? 0) / 1000);
    minutesPlayed = Math.floor(secondsPlayed / 60);
    secondsPlayed = secondsPlayed % 60;

    //Converting the song duration from milliseconds to minutes and seconds
    secondsTotal = Math.floor((nowPlaying.timeTotal ?? 0) / 1000);
    minutesTotal = Math.floor(secondsTotal / 60);
    secondsTotal = secondsTotal % 60;

    albumImageUrl = nowPlaying.albumImageUrl ?? albumImageUrl;
    title = nowPlaying.title ?? "";
    artist = nowPlaying.artist ?? "";
  } else if (nowPlaying === "Currently Not Playing") {
    playerState = "OFFLINE";
  } else {
  }

  //Used to set 0 as padding when it is a single digit number
  const pad = (n: number) => {
    return n < 10 ? "0" + n : String(n);
  };

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
            <div>getting my ears yapped off right now!</div>
          ) : (
            <>
              <div
                className={`now-playing-title ${title.length > 20 ? "marquee-content" : " "}`}
              >
                {playerState === "PLAY" || playerState === "PAUSE" ? (
                  <a
                    href={
                      nowPlaying && typeof nowPlaying !== "string"
                        ? nowPlaying.songUrl
                        : ""
                    }
                  >
                    {title}
                  </a>
                ) : (
                  title
                )}
              </div>
              {/* Artist displayed based on playerState */}
              <div className="now-playing-artist">
                {playerState === "PLAY" || playerState === "PAUSE" ? (
                  <a
                    href={
                      nowPlaying && typeof nowPlaying !== "string"
                        ? nowPlaying.artistUrl
                        : ""
                    }
                  >
                    {artist}
                  </a>
                ) : (
                  artist
                )}
              </div>
              {/* Song Timer displayed based on playerState */}
              <div className="now-playing-time">
                {pad(minutesPlayed)}:{pad(secondsPlayed)} / {pad(minutesTotal)}:
                {pad(secondsTotal)}
              </div>
            </>
          )}
          {/* Song Title displayed based on playerState */}
        </div>
      </div>
      {/* Icon displayed based on playerState */}
      <div className="now-playing-state">
        {playerState === "PLAY" ? (
          <div /* Sound bar animation */ className="sound-wave playing">
            <span />
            <span />
            <span />
          </div>
        ) : playerState === "PAUSE" ? (
          <div /* Sound bar animation */ className="sound-wave paused">
            <span />
            <span />
            <span />
          </div>
        ) : playerState === "OFFLINE" ? (
          <FontAwesomeIcon
            icon={faPowerOff}
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
