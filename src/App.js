import React, { useState } from 'react';
import useKeyboard from './hooks/useKeyboard';
import Key from './Key';
import PresetButton from './PresetButton';
import presets from './hooks/presets';
import './App.css';

function App() {
  const [mouseDown, setMouseDown] = useState(false);
  const [selectedPreset, setSelectedPreset] = useState('1');
  const [isDragging, setIsDragging] = useState(false);
  const [dragDiff, setDragDiff] = useState(0);
  const [volSliderPosition, setVolumeSliderPosition] = useState(-50);
  const { notes, noteOns } = useKeyboard();

  // useEffect(() => {
  //   console.log(selectedPreset);
  // }, [selectedPreset]);

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

  const keyHandlers = {
    handleMouseDown,
    handleMouseUp,
    handleMouseEnter,
  };

  const handleButtonClick = (event) => {
    const presetNum = event.target.getAttribute('presetnum');
    setSelectedPreset(presetNum);
  };

  const handleVolumeSliderDrag = (event) => {
    // make drag ghost image invisible
    const img = new Image();
    img.src =
      'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=';
    event.dataTransfer.setDragImage(img, 0, 0);
    // limit value within range
    let sliderPosition = -Math.min(Math.max(435 - event.clientY, 1), 60);
    if (isDragging) setVolumeSliderPosition(sliderPosition);
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
        <div
          className="slider-container"
          onMouseUp={() => {
            setIsDragging(false);
            console.log('goodbye');
          }}
        >
          <div className="slider-slot"></div>
          <div
            draggable="true"
            className="slider"
            style={{ transform: `translateY(${volSliderPosition}px)` }}
            onMouseDown={() => {
              setIsDragging(true);
            }}
            onDragStart={handleVolumeSliderDrag}
            onDrag={handleVolumeSliderDrag}
          >
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
            <p>{presets[parseInt(selectedPreset) - 1].toUpperCase()}</p>
          </div>
        </div>
        <div id="buttons-container">
          <div className="button bank">
            <p>Bank</p>
            <div className="led-red"></div>
          </div>
          {Array(5)
            .fill(0)
            .map((el, idx) => idx + 1)
            .map((number) => (
              <PresetButton
                key={number}
                presetNum={String(number)}
                handleButtonClick={handleButtonClick}
                selectedPreset={selectedPreset}
              />
            ))}
          <div className="button shift">
            <p>Shift</p>
            <div className="led-red"></div>
          </div>
          {Array(5)
            .fill(0)
            .map((el, idx) => idx + 6)
            .map((number) => (
              <PresetButton
                key={number}
                presetNum={String(number)}
                handleButtonClick={handleButtonClick}
                selectedPreset={selectedPreset}
              />
            ))}
        </div>
        <div className="speaker right"></div>
      </div>
      <ul id="keyboard">
        {Object.keys(notes).map((noteName, index) => (
          <Key
            key={noteName}
            noteName={noteName}
            handlers={keyHandlers}
            noteOns={noteOns}
            index={index}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
