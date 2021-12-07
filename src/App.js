import React, { useState } from 'react';
import useKeyboard from './hooks/useKeyboard';
import Key from './Key';
import PresetButton from './PresetButton';
import presets from './synth/presets';
import './App.css';

function App() {
  const [mouseDown, setMouseDown] = useState(false);
  const [selectedPreset, setSelectedPreset] = useState('1');
  const [isDragging, setIsDragging] = useState(false);
  const [volSliderPosition, setVolumeSliderPosition] = useState(0);
  const [octaveSliderPosition, setOctaveSliderPosition] = useState(10);
  const [pitchbendPosition, setPitchbendPosition] = useState(40);
  const { notes, noteOns } = useKeyboard();

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
    // limit value within range
    let sliderPosition = -Math.min(Math.max(435 - event.clientY, 1), 80) + 10;
    if (isDragging) {
      setVolumeSliderPosition(sliderPosition);
    }
  };

  const between = (value, min, max) => {
    return value >= min && value <= max;
  };

  const handleOctaveSliderDrag = (event) => {
    // limit value within range
    let sliderPosition = -Math.min(Math.max(435 - event.clientY, 1), 70) + 45;
    if (isDragging) {
      // snap values to grid
      if (between(sliderPosition, -25, -17)) {
        setOctaveSliderPosition(-25);
      } else if (between(sliderPosition, -16, 0)) {
        setOctaveSliderPosition(-8);
      } else if (between(sliderPosition, 1, 17)) {
        setOctaveSliderPosition(8);
      } else if (between(sliderPosition, 18, 33)) {
        setOctaveSliderPosition(25);
      } else if (between(sliderPosition, 34, 40)) {
        setOctaveSliderPosition(40);
      } else {
        setOctaveSliderPosition(8);
      }
    }
  };

  const handlePitchBendDrag = (event) => {
    let sliderPosition = -Math.min(Math.max(435 - event.clientY, 1), 70) + 80;
    if (isDragging) {
      setPitchbendPosition(sliderPosition);
    }
  };

  return (
    <div
      id="synth"
      onMouseUp={() => {
        setIsDragging(false);
        setPitchbendPosition(40);
      }}
    >
      <div id="labels-container"></div>
      <div id="logo">
        <img src="https://logodix.com/logo/971634.png" alt="Yamaha Logo" />
      </div>
      <div id="controls">
        <div className="speaker"></div>
        <div
          id="pitchbend"
          onMouseMove={handlePitchBendDrag}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          <div
            onMouseDown={() => {
              setIsDragging(true);
            }}
            style={{ transform: `translateY(${pitchbendPosition}px)` }}
          >
            <div className="knob"></div>
            <div className="highlight"></div>
            <div className="shaft"></div>
          </div>
        </div>
        <div
          className="slider-container"
          onMouseMove={handleVolumeSliderDrag}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          <div className="slider-slot"></div>
          <div
            onMouseDown={() => {
              setIsDragging(true);
            }}
            className="slider"
            style={{ transform: `translateY(${volSliderPosition}px)` }}
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
        <div
          className="slider-container"
          onMouseMove={handleOctaveSliderDrag}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          <div className="slider-slot"></div>
          <div
            onMouseDown={() => {
              setIsDragging(true);
            }}
            className="slider octave"
            style={{ transform: `translateY(${octaveSliderPosition}px)` }}
          >
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
            <p>{presets[parseInt(selectedPreset) - 1].name.toUpperCase()}</p>
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
