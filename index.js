import React from 'react';
import './App.css';
import './index.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">My Music App</h1>
      </header>
      <div className="music-container">
        <div className="music-item">
          <img src="https://en.wikipedia.org/wiki/File:Imagine-Dragons-Believer-art.jpg" alt="Album Cover" />
          <div className="music-details">
            <h2 className="music-title">Believer</h2>
            <p className="music-artist">Imagine Dragons</p>
            <audio controls>
              <source src="audio.mp3" type="audio/mpeg" />
              Audio element.
            </audio>
          </div>
        </div>
        <div className="music-item">
          <img src="https://en.wikipedia.org/wiki/File:Never_Say_Never_Single.jpg" alt="Album Cover" />
          <div className="music-details">
            <h2 className="music-title">Never Say Never</h2>
            <p className="music-artist">Justin Bieber</p>
            <audio controls>
              <source src="audio.mp3" type="audio/mpeg" />
              Audio element.
            </audio>
          </div>
        </div>
        <div className="music-item"> 
            <img src="https://en.wikipedia.org/wiki/File:Imagine_Dragons_Bones_cover.jpg" alt="Album Cover" /> 
            <div className="music-details"> 
              <h2 className="music-title">Bones</h2> 
              <p className="music-artist">Imagine Dragons</p> 
              <audio controls> 
                <source src="audio.mp3" type="audio/mpeg" /> 
                Audio element. 
              </audio> 
            </div> 
        </div> 
      </div>
    </div>
  );
}
