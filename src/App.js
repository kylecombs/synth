import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div id="synth">
      <div id="labels-container"></div>
      <div id="logo">
        <img src="https://logodix.com/logo/971634.png" alt="Yamaha Logo" />
      </div>
      <div id="controls">
        <div class="speaker"></div>
        <div id="pitchbend">
          <div class="knob"></div>
          <div class="highlight"></div>
          <div class="shaft"></div>
        </div>
        <div class="slider-container">
          <div class="slider-slot"></div>
          <div class="slider">
            <hr />
          </div>
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
        </div>
        <div class="slider-container">
          <div class="slider-slot"></div>
          <div class="slider octave">
            <hr />
          </div>
          <div id="octave-marks">
            <div class="octave-mark">
              <hr />
              +2
            </div>
            <div class="octave-mark">
              <hr />
              +1
            </div>
            <div class="octave-mark">
              <hr />
              &nbsp;0
            </div>
            <div class="octave-mark">
              <hr />
              -1
            </div>
            <div class="octave-mark">
              <hr />
              -2
            </div>
          </div>
        </div>
        <div class="screen-display">
          <p>internal voice</p>
          <div id="patch-display">
            <p>bnk 1</p>
            <p>piano 1</p>
          </div>
        </div>
        <div id="buttons-container">
          <div class="button bank">
            <p>Bank</p>
            <div class="led-red"></div>
          </div>
          <div class="button">
            <p>1</p>
            <div class="led-red"></div>
          </div>
          <div class="button">
            <p>2</p>
            <div class="led-red"></div>
          </div>
          <div class="button">
            <p>3</p>
            <div class="led-red"></div>
          </div>
          <div class="button">
            <p>4</p>
            <div class="led-red"></div>
          </div>
          <div class="button">
            <p>5</p>
            <div class="led-red on"></div>
          </div>
          <div class="button shift">
            <p>Shift</p>
            <div class="led-red"></div>
          </div>
          <div class="button">
            <p>6</p>
            <div class="led-red"></div>{' '}
          </div>
          <div class="button">
            <p>7</p>
            <div class="led-red"></div>
          </div>
          <div class="button">
            <p>8</p>
            <div class="led-red"></div>
          </div>
          <div class="button">
            <p>9</p>
            <div class="led-red"></div>
          </div>
          <div class="button">
            <p>10</p>
            <div class="led-red"></div>
          </div>
        </div>
        <div class="speaker right"></div>
      </div>
      <ul id="keyboard">
        <li note="C" class="white"></li>
        <li note="C#" class="black"></li>
        <li note="D" class="white offset"></li>
        <li note="D#" class="black"></li>
        <li note="E" class="white offset"></li>
        <li note="F" class="white"></li>
        <li note="F#" class="black"></li>
        <li note="G" class="white offset"></li>
        <li note="G#" class="black"></li>
        <li note="A" class="white offset"></li>
        <li note="A#" class="black"></li>
        <li note="B" class="white offset"></li>
        <li note="C2" class="white"></li>
        <li note="C#2" class="black"></li>
        <li note="D2" class="white offset"></li>
        <li note="D#2" class="black"></li>
        <li note="E2" class="white offset"></li>
        <li note="F2" class="white"></li>
        <li note="F#2" class="black"></li>
        <li note="G2" class="white offset"></li>
        <li note="G#2" class="black"></li>
        <li note="A2" class="white offset"></li>
        <li note="A#2" class="black"></li>
        <li note="B2" class="white offset"></li>
        <li note="C3" class="white"></li>
      </ul>
    </div>
  );
}

export default App;
