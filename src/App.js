import React from 'react';
import './App.css';
import Row from './Row'
import Banner from './Banner'
import Nav from './Nav'
import requests from './request'
import axios from './axios'

function App() {
  return (
    <div className="App">
      {/* Navbar Section */}
      <Nav />
      {/* Banner section */}
        <Banner fetchUrl={requests.fetchNetflixOriginals} />
      {/* Row section */}
      <Row title='Netflix Originals' fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
     <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
     <Row title='Action movies' fetchUrl={requests.fetchActionMovies} />
      {/* <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
     <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
     <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
     <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} /> */}
    </div>
  );
}

export default App;
