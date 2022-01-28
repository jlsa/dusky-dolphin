import React, {useEffect, useState} from "react";
import axios from "../api/axios";
import './NetflixBanner.scss';

type NetflixBannerProps = {
  fetchUrl: string
}

const NetflixBanner = ({fetchUrl}: NetflixBannerProps) => {
  const [movie, setMovie] = useState<any>([]);

  const truncate = (str: string, n: number) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      const filteredMovies = request.data.results;
        // .filter((m:any) => m.backdrop_path !== null);

      setMovie(filteredMovies[
        Math.floor(Math.random() * filteredMovies.length - 1)
      ]);

      return request;
    }

    fetchData();
  }, [fetchUrl]);

  return (
    <header 
      className="banner"
      style={{
        backgroundImage: `url(
          "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
          )`,
          backgroundPosition: "top center",
          backgroundSize: "cover",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner__buttons">
          <button className="banner__button play">Play</button>
          <button className="banner__button info">! <div className="space"></div> More Information</button>
        </div>
        <h1 className="banner__description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  )
}

export default NetflixBanner;