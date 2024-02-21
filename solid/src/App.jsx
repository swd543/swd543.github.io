import logo from './logo.svg';
import swap from './assets/swap.png'
import kalmann from './assets/kalmann.gif'
import ars from './assets/ars.gif'
import styles from './App.module.css';
import { Universe } from 'cgol-wasm'

// const getDims = () => [window.innerWidth / (CELL_SIZE + 1), window.innerHeight / (CELL_SIZE + 1)]
let universe = Universe.new();

function App() {
  return (
    <div class={styles.App}>
      <div class={styles.header} style={{ "flex-direction": 'row', padding: "0px 10px" }}>
        <div style={{ display: "flex", "flex-direction": "column" }}>
          <h1>
            Hi, I'm Swapneel Datta
          </h1>
          <pre style={{ "white-space": "pre-wrap" }}>And I'm an experienced software engineer from the 21<sup>st</sup> century</pre>
        </div>
        <img src={swap} style={{ width: "30vw", margin: "0px 30px" }} />
      </div>
      <div style={{ display: "flex", "align-items": "center", "justify-content": "center" }}>
        <h3 style={{ "width": "36vw" }}>
          I have a Master of Science from Maastricht university specializing in Artificial Intelligence. I also have a bachelor in Electronics and Telecommunication from VIT Pune.
        </h3>
        <img src={kalmann} style={{ margin: "0px 12px", width: "40vw" }} />
      </div>
      <div style={{ display: "flex", "align-items": "center", "justify-content": "center" }}>
        <img src={ars} style={{ margin: "0px 12px", width: "40vw" }} />
        <h3 style={{ "width": "36vw" }}>
          I have 5+ years of programming experience, in industries ranging from manufacturing, internet-of-things, medical imaging, robotics, payments and financial sectors.
        </h3>
      </div>
      <div style={{ display: "flex", "align-items": "center", "justify-content": "center", "flex-direction": "column" }}>
        <h2>Taming computers and computables since 2015</h2>
        <p>
          Be it modernizing the web, making a high throughput backend server or a database or making reactive frontends for cross platform usage. I'm interested in taming anything and everything that computes, from microcontrollers to HPCs.
        </p>
        <p>
          I love ekeing out the last bit of performance from any hardware! Not a single clock cycle should go wasted. Sceptical? This page is built with Solidjs + Rust + webassembly. There's more where that came from.
        </p>
      </div>
      <footer style={{ display: "flex", "justify-content": "center", "background-color": "Background", gap: "20px" }}>
        <h1>Find me on</h1>
        <h1 style={{ display: "flex", gap: "8px" }}>
          <a href="https://github.com/swd543" class="fa fa-github"></a>
          <a href="https://www.linkedin.com/in/swapneel-datta" class="fa fa-linkedin"></a>
          <a href="https://www.facebook.com/swappy.d.scientist" class="fa fa-facebook"></a>
          <a href="https://www.twitter.com/swapneeldatta8" class="fa fa-twitter"></a>
          <a href="https://www.instagram.com/swapneeldatta/" class="fa fa-instagram"></a>
        </h1>
      </footer>
    </div>
  );
}

export default App;
