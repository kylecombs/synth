import { useState, useEffect, useMemo } from 'react';
import { instrument, setInstrument } from '../synth/synth';

// QWERTY keyboard to note mapping - always plays the same pattern starting from C3
// Center row (A-;) plays white keys starting with A=C
// Upper row (W,E,T,Y,U,O,P) plays black keys
const keyboardMap = {
  // White keys
  'a': 'C3',
  's': 'D3',
  'd': 'E3',
  'f': 'F3',
  'g': 'G3',
  'h': 'A3',
  'j': 'B3',
  'k': 'C4',
  'l': 'D4',
  ';': 'E4',
  
  // Black keys
  'w': 'C#3',
  'e': 'D#3',
  't': 'F#3',
  'y': 'G#3',
  'u': 'A#3',
  'o': 'C#4',
  'p': 'D#4'
};

const useKeyboard = () => {
  const keyboardNoteOns = {};
  const [noteOns, setNoteOns] = useState(keyboardNoteOns);
  const [keysPressed, setKeysPressed] = useState(new Set());
  const [keyboardOctave, setKeyboardOctave] = useState(3); // Base octave for keyboard

  const note = (noteName) => {
    const state = noteName;
    return Object.assign({}, playNote(state), releaseNote(state));
  };

  const playNote = (state) => ({
    playNote: () => {
      setNoteOns((prevState) => ({
        ...prevState,
        [state]: true,
      }));
      instrument.triggerAttack(state);
    },
  });

  const releaseNote = (state) => ({
    releaseNote: () => {
      setNoteOns((prevState) => ({
        ...prevState,
        [state]: false,
      }));
      instrument.triggerRelease(state);
    },
  });

  // Fixed notes for the visible keyboard (F2-C5)
  const notes = useMemo(() => ({
    F2: note('F2'), 'F#2': note('F#2'), G2: note('G2'), 'G#2': note('G#2'), 
    A2: note('A2'), 'A#2': note('A#2'), B2: note('B2'),
    C3: note('C3'), 'C#3': note('C#3'), D3: note('D3'), 'D#3': note('D#3'), 
    E3: note('E3'), F3: note('F3'), 'F#3': note('F#3'), G3: note('G3'), 
    'G#3': note('G#3'), A3: note('A3'), 'A#3': note('A#3'), B3: note('B3'),
    C4: note('C4'), 'C#4': note('C#4'), D4: note('D4'), 'D#4': note('D#4'), 
    E4: note('E4'), F4: note('F4'), 'F#4': note('F#4'), G4: note('G4'), 
    'G#4': note('G#4'), A4: note('A4'), 'A#4': note('A#4'), B4: note('B4'),
    C5: note('C5')
  }), []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Ignore if user is typing in an input field
      if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') return;
      
      const key = event.key.toLowerCase();
      
      // Handle octave control
      if (key === 'z' && !keysPressed.has(key)) {
        setKeyboardOctave(prev => Math.max(0, prev - 1));
        setKeysPressed(prev => new Set(prev).add(key));
        return;
      }
      if (key === 'x' && !keysPressed.has(key)) {
        setKeyboardOctave(prev => Math.min(7, prev + 1));
        setKeysPressed(prev => new Set(prev).add(key));
        return;
      }
      
      const noteName = keyboardMap[key];
      
      if (noteName && !keysPressed.has(key)) {
        setKeysPressed(prev => new Set(prev).add(key));
        
        // Play note - the octave offset is handled by the synth engine
        instrument.triggerAttack(noteName);
      }
    };

    const handleKeyUp = (event) => {
      const key = event.key.toLowerCase();
      
      // Handle octave control key release
      if (key === 'z' || key === 'x') {
        setKeysPressed(prev => {
          const newSet = new Set(prev);
          newSet.delete(key);
          return newSet;
        });
        return;
      }
      
      const noteName = keyboardMap[key];
      
      if (noteName && keysPressed.has(key)) {
        setKeysPressed(prev => {
          const newSet = new Set(prev);
          newSet.delete(key);
          return newSet;
        });
        
        // Release note - the octave offset is handled by the synth engine
        instrument.triggerRelease(noteName);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [keysPressed, notes, keyboardOctave]);

  return { notes, noteOns, setInstrument, keyboardOctave, setKeyboardOctave };
};

export default useKeyboard;
