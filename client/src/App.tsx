import React from 'react';
// import logo from './logo.svg';
import './App.scss';
// import Shelve from './Components/Shelve';
// import ShelveItem from './Components/ShelveItem';

// import gamesData from './data/games.json';
import requests from './api/requests';
import Row from './Components/Row';
import Banner from './Components/Banner';

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
        <Banner fetchUrl={requests.fetchNetflixOriginals}/>
        <Row 
          title="NETFLIX ORIGINALS"
          id="NO"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />
        <Row 
          title="Trending Now"
          id="TN"
          fetchUrl={requests.fetchTrending}
        />
        <Row 
          title="Top Rated"
          id="TR"
          fetchUrl={requests.fetchTopRated}
        />
        <Row 
          title="Movies Of This Year"
          id="TYM"
          fetchUrl={requests.fetchMoviesOfThisYear}
          isLargeRow
        />
        <Row 
          title="Action Movies"
          id="AM"
          fetchUrl={requests.fetchActionMovies}
        />
        <Row 
          title="Movies Of Last Year"
          id="LYM"
          fetchUrl={requests.fetchMoviesOfLastYear}
          isLargeRow
        />
        <Row 
          title="Comedie Movies"
          id="CM"
          fetchUrl={requests.fetchComedyMovies}
        />
        <Row 
          title="Horror Movies"
          id="HM"
          fetchUrl={requests.fetchHorrorMovies}
        />
        <Row 
          title="Romance Movies"
          id="RM"
          fetchUrl={requests.fetchRomanceMovies}
        />
        <Row 
          title="Documentaries"
          id="DM"
          fetchUrl={requests.fetchDocumentaries}
        />
      </div>
    </>
  );
}

export default App;

