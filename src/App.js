import React, { useState, useEffect } from 'react';
import useKeyboard from './hooks/useKeyboard';
import Key from './Key';
import PresetButton from './PresetButton';
// import MidiSelect from './MidiSelect';
import { instrument } from './synth/synth';
import { setVolume, setOctave, setPitchBend } from './synth/synth';
import './App.css';

function App() {
  const [mouseDown, setMouseDown] = useState(false);
  const [selectedPreset, setSelectedPreset] = useState('1');
  const [isDragging, setIsDragging] = useState(false);
  const [volSliderPosition, setVolumeSliderPosition] = useState(-50); // Updated to match 0.8 volume
  const [octaveSliderPosition, setOctaveSliderPosition] = useState(8);
  const [pitchbendPosition, setPitchbendPosition] = useState(40);
  const { notes, noteOns, setInstrument, keyboardOctave, setKeyboardOctave } = useKeyboard();

  // Sync keyboard octave with UI and synth engine
  useEffect(() => {
    // Map keyboard octave (0-7) to UI positions and synth octave offset
    const octaveMap = {
      1: { position: 40, offset: -2 },
      2: { position: 25, offset: -1 },
      3: { position: 8, offset: 0 },
      4: { position: -8, offset: 1 },
      5: { position: -25, offset: 2 }
    };
    
    // Clamp keyboard octave to valid range for our 32-key keyboard (F2-C5)
    const clampedOctave = Math.max(1, Math.min(5, keyboardOctave));
    
    const mapping = octaveMap[clampedOctave] || octaveMap[3];
    setOctaveSliderPosition(mapping.position);
    setOctave(mapping.offset);
  }, [keyboardOctave]);

  const handleMouseDown = (event) => {
    const noteName = event.target.getAttribute('note');
    notes[noteName].playNote();
    setMouseDown(true);
  };

  const handleMouseUp = (event) => {
    const noteName = event.target.getAttribute('note');
    if (noteName && notes[noteName]) {
      notes[noteName].releaseNote();
    }
    setMouseDown(false);
  };
  
  const handleMouseLeave = (event) => {
    if (mouseDown) {
      const noteName = event.target.getAttribute('note');
      if (noteName && notes[noteName]) {
        notes[noteName].releaseNote();
      }
    }
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
    handleMouseLeave,
  };

  const handleButtonClick = (event) => {
    const presetNum = event.target.getAttribute('presetnum');
    setInstrument(presetNum - 1);
    setSelectedPreset(presetNum);
  };

  const handleVolumeSliderDrag = (event) => {
    event.preventDefault();
    // limit value within range
    console.log(event.clientY);
    const sliderPosition = -Math.min(Math.max(435 - event.clientY, 1), 95) + 30;
    if (isDragging) {
      setVolumeSliderPosition(sliderPosition);
      const normalizedValue = (-sliderPosition + 3) / 71;
      setVolume(normalizedValue);
    }
  };

  const between = (value, min, max) => {
    return value >= min && value <= max;
  };

  const handleOctaveSliderDrag = (event) => {
    event.preventDefault();
    // limit value within range
    let sliderPosition = -Math.min(Math.max(435 - event.clientY, 1), 120) + 90;
    if (isDragging) {
      // snap values to grid and update keyboard octave
      if (between(sliderPosition, -25, -17)) {
        setOctaveSliderPosition(-25);
        setOctave(2);
        setKeyboardOctave(5);
      } else if (between(sliderPosition, -16, 0)) {
        setOctaveSliderPosition(-8);
        setOctave(1);
        setKeyboardOctave(4);
      } else if (between(sliderPosition, 1, 17)) {
        setOctaveSliderPosition(8);
        setOctave(0);
        setKeyboardOctave(3);
      } else if (between(sliderPosition, 18, 33)) {
        setOctaveSliderPosition(25);
        setOctave(-1);
        setKeyboardOctave(2);
      } else if (between(sliderPosition, 34, 40)) {
        setOctaveSliderPosition(40);
        setOctave(-2);
        setKeyboardOctave(1);
      } else {
        setOctaveSliderPosition(8);
        setKeyboardOctave(3);
      }
    }
  };

  const handlePitchBendDrag = (event) => {
    event.preventDefault();
    let sliderPosition = -Math.min(Math.max(440 - event.clientY, 1), 110) + 115;
    // change range based on formula below
    // NewValue = (((Value - OldMin) * (NewMax - NewMin)) / (OldMax - OldMin)) + NewMin
    let pitchbendValue = ((sliderPosition - 68) * 2) / (10 - 68) - 1;
    if (isDragging) {
      setPitchbendPosition(sliderPosition);
      setPitchBend(pitchbendValue);
    }
  };

  return (
    <div>
      {/* <MidiSelect /> */}
      {/* <div style={{ textAlign: 'center', padding: '10px', background: '#222', color: '#fff', fontSize: '12px' }}>
        <p>🎹 <strong>Play with QWERTY keys:</strong> A-; (white keys) | W,E,T,Y,U,O,P (black keys) | Z/X (octave down/up)</p>
      </div> */}
      <div
        id="synth"
        onMouseUp={() => {
          setIsDragging(false);
          setPitchbendPosition(40);
          setPitchBend(0);
        }}
        draggable="false"
      >
        <div id="labels-container">
          <p>PB</p>
          <p>VOL</p>
          <p>OCT</p>
        </div>
        <div id="logo">
          <img src="https://logodix.com/logo/971634.png" alt="Yamaha Logo" />
        </div>
        <div id="controls" draggable="false">
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
          <div className="screen-display" draggable="false">
            <p>internal voice</p>
            <div id="patch-display">
              <p>bnk 1</p>
              <p>
                {selectedPreset <= instrument.getPresetCount()
                  ? instrument.getPresetName().toUpperCase()
                  : 'EMPTY'}
              </p>
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
          {/* Fixed 32-key keyboard from F2 to C5 */}
          {['F2', 'F#2', 'G2', 'G#2', 'A2', 'A#2', 'B2',
            'C3', 'C#3', 'D3', 'D#3', 'E3', 'F3', 'F#3', 'G3', 'G#3', 'A3', 'A#3', 'B3',
            'C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A4', 'A#4', 'B4',
            'C5'
          ].map((noteName, index) => (
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
    </div>
  );
}

export default App;
