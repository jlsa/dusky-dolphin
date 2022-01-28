import React from 'react';
// import logo from './logo.svg';
import './App.scss';
// import Shelve from './Components/Shelve';
// import ShelveItem from './Components/ShelveItem';

// import gamesData from './data/games.json';
import requests from './api/requests';
import NetflixRow from './Components/NetflixRow';
import NetflixBanner from './Components/NetflixBanner';

const App = () => {
  return (
    <>
      {/* <div className="wrapper">
        <Shelve name='My Favorite Games' showNumber>
          {gamesData.map(data => 
            <ShelveItem src={data.src} caption={data.title} />
          )}
        </Shelve>
      </div> */}
      <div className="app">
        <NetflixBanner fetchUrl={requests.fetchNetflixOriginals}/>
        <NetflixRow 
          title="NETFLIX ORIGINALS"
          id="NO"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />
        <NetflixRow 
          title="Trending Now"
          id="TN"
          fetchUrl={requests.fetchTrending}
        />
        <NetflixRow 
          title="Top Rated"
          id="TR"
          fetchUrl={requests.fetchTopRated}
        />
        <NetflixRow 
          title="Movies Of This Year"
          id="TYM"
          fetchUrl={requests.fetchMoviesOfThisYear}
          isLargeRow
        />
        <NetflixRow 
          title="Action Movies"
          id="AM"
          fetchUrl={requests.fetchActionMovies}
        />
        <NetflixRow 
          title="Movies Of Last Year"
          id="LYM"
          fetchUrl={requests.fetchMoviesOfLastYear}
          isLargeRow
        />
        <NetflixRow 
          title="Comedie Movies"
          id="CM"
          fetchUrl={requests.fetchComedyMovies}
        />
        <NetflixRow 
          title="Horror Movies"
          id="HM"
          fetchUrl={requests.fetchHorrorMovies}
        />
        <NetflixRow 
          title="Romance Movies"
          id="RM"
          fetchUrl={requests.fetchRomanceMovies}
        />
        <NetflixRow 
          title="Documentaries"
          id="DM"
          fetchUrl={requests.fetchDocumentaries}
        />
      </div>
    </>
  );
}

export default App;

