import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <img src="res/me.jpeg" width={"50%"}></img>
      </div>
      <h1>
        Hi, I'm Swapneel Datta
      </h1>
      <h3>
      and I am an experienced Software developer from the 21st century.
      </h3>
      <p>
      I have a Master of Science from Maastricht university specializing in Artificial Intelligence. I also have a bachelor in Electronics and Telecommunication from VIT Pune.
      </p>
      <div>
        <img src='res/ars.gif' width={"33%"}></img>
        <img src='res/kalmann.gif' width={"33%"}></img>
      </div>
      <div>
        <h3>
          Taming computers and computables since 2015
        </h3>
        <p>
          Be it modernizing the web, making a high throughput backend server or a database or making reactive frontends for cross platform usage.
          I'm interested in taming anything and everything that computes, from microcontrollers to HPCs.
        </p>
      </div>
    </div>
  );
}

export default App;
