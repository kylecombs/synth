import { useState } from 'react';
import { instrument, setInstrument } from '../synth/synth';

const useKeyboard = () => {
  const keyboardNoteOns = {};
  const [noteOns, setNoteOns] = useState(keyboardNoteOns);

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
      instrument.triggerRelease();
    },
  });

  const notes = {
    C3: note('C3'),
    'C#3': note('C#3'),
    D3: note('D3'),
    'D#3': note('D#3'),
    E3: note('E3'),
    F3: note('F3'),
    'F#3': note('F#3'),
    G3: note('G3'),
    'G#3': note('G#3'),
    A3: note('A3'),
    'A#3': note('A#3'),
    B3: note('B3'),
    C4: note('C4'),
    'C#4': note('C#4'),
    D4: note('D4'),
    'D#4': note('D#4'),
    E4: note('E4'),
    F4: note('F4'),
    'F#4': note('F#4'),
    G4: note('G4'),
    'G#4': note('G#4'),
    A4: note('A4'),
    'A#4': note('A#4'),
    B4: note('B4'),
    C5: note('C5'),
  };

  return { notes, noteOns, setInstrument };
};

export default useKeyboard;
