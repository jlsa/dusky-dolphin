import React from "react";

const Tmdb = () => {
  const src = 'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg'
  return (
    <img src={src} alt='TMDB' />
  );
}

export default Tmdb;