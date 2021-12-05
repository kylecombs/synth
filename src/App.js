import React, { useState, useRef, useEffect } from 'react';
import useKeyboard from './hooks/useKeyboard';
import './App.css';

function App() {
  const [mouseDown, setMouseDown] = useState(false);
  const { notes, noteOns } = useKeyboard();

  useEffect(() => {
    console.log(noteOns);
  }, [notes, noteOns]);

  const handleMouseDown = (event) => {
    const noteName = event.target.getAttribute('note');
    notes[noteName].playNote();
    setMouseDown(true);
  };

  const handleMouseUp = (event) => {
    const noteName = event.target.getAttribute('note');
    notes[noteName].releaseNote();
    setMouseDown(false);
  };

  const handleMouseEnter = (event) => {
    if (mouseDown) {
      handleMouseDown(event);
    }
  };

  return (
    <div id="synth">
      <div id="labels-container"></div>
      <div id="logo">
        <img src="https://logodix.com/logo/971634.png" alt="Yamaha Logo" />
      </div>
      <div id="controls">
        <div className="speaker"></div>
        <div id="pitchbend">
          <div className="knob"></div>
          <div className="highlight"></div>
          <div className="shaft"></div>
        </div>
        <div className="slider-container">
          <div className="slider-slot"></div>
          <div className="slider">
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
        <div className="slider-container">
          <div className="slider-slot"></div>
          <div className="slider octave">
            <hr />
          </div>
          <div id="octave-marks">
            <div className="octave-mark">
              <hr />
              +2
            </div>
            <div className="octave-mark">
              <hr />
              +1
            </div>
            <div className="octave-mark">
              <hr />
              &nbsp;0
            </div>
            <div className="octave-mark">
              <hr />
              -1
            </div>
            <div className="octave-mark">
              <hr />
              -2
            </div>
          </div>
        </div>
        <div className="screen-display">
          <p>internal voice</p>
          <div id="patch-display">
            <p>bnk 1</p>
            <p>piano 1</p>
          </div>
        </div>
        <div id="buttons-container">
          <div className="button bank">
            <p>Bank</p>
            <div className="led-red"></div>
          </div>
          <div className="button">
            <p>1</p>
            <div className="led-red"></div>
          </div>
          <div className="button">
            <p>2</p>
            <div className="led-red"></div>
          </div>
          <div className="button">
            <p>3</p>
            <div className="led-red"></div>
          </div>
          <div className="button">
            <p>4</p>
            <div className="led-red"></div>
          </div>
          <div className="button">
            <p>5</p>
            <div className="led-red on"></div>
          </div>
          <div className="button shift">
            <p>Shift</p>
            <div className="led-red"></div>
          </div>
          <div className="button">
            <p>6</p>
            <div className="led-red"></div>{' '}
          </div>
          <div className="button">
            <p>7</p>
            <div className="led-red"></div>
          </div>
          <div className="button">
            <p>8</p>
            <div className="led-red"></div>
          </div>
          <div className="button">
            <p>9</p>
            <div className="led-red"></div>
          </div>
          <div className="button">
            <p>10</p>
            <div className="led-red"></div>
          </div>
        </div>
        <div className="speaker right"></div>
      </div>
      <ul id="keyboard">
        <li
          note="C"
          className={`white ${noteOns.C && 'pressed'}`}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseUp}
          onMouseUp={handleMouseUp}
          onMouseEnter={handleMouseEnter}
        ></li>
        <li
          note="C#"
          className={`black ${noteOns['C#'] && 'pressed'}`}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseUp}
          onMouseUp={handleMouseUp}
          onMouseEnter={handleMouseEnter}
        ></li>
        <li
          note="D"
          className={`white offset ${noteOns.D && 'pressed'}`}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseUp}
          onMouseUp={handleMouseUp}
          onMouseEnter={handleMouseEnter}
        ></li>
        <li note="D#" className="black"></li>
        <li note="E" className="white offset"></li>
        <li note="F" className="white"></li>
        <li note="F#" className="black"></li>
        <li note="G" className="white offset"></li>
        <li note="G#" className="black"></li>
        <li note="A" className="white offset"></li>
        <li note="A#" className="black"></li>
        <li note="B" className="white offset"></li>
        <li note="C2" className="white"></li>
        <li note="C#2" className="black"></li>
        <li note="D2" className="white offset"></li>
        <li note="D#2" className="black"></li>
        <li note="E2" className="white offset"></li>
        <li note="F2" className="white"></li>
        <li note="F#2" className="black"></li>
        <li note="G2" className="white offset"></li>
        <li note="G#2" className="black"></li>
        <li note="A2" className="white offset"></li>
        <li note="A#2" className="black"></li>
        <li note="B2" className="white offset"></li>
        <li note="C3" className="white"></li>
      </ul>
    </div>
  );
}

export default App;
