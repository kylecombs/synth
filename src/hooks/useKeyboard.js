import React, { useState } from 'react';
// import notes from './interface/notes';

const useKeyboard = () => {
  const keyboardNoteOns = {
    C: false,
    'C#': false,
    D: false,
  };

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
    },
  });

  const releaseNote = (state) => ({
    releaseNote: () => {
      setNoteOns((prevState) => ({
        ...prevState,
        [state]: false,
      }));
    },
  });

  const notes = {
    C: note('C'),
    'C#': note('C#'),
    D: note('D'),
    'D#': note('D#'),
    E: note('E'),
    F: note('F'),
    'F#': note('F#'),
    G: note('G'),
    'G#': note('G#'),
    A: note('A'),
    'A#': note('A#'),
    B: note('B'),
    C2: note('C2'),
    'C#2': note('C#2'),
    D2: note('D2'),
    'D#2': note('D#2'),
    E2: note('E2'),
    F2: note('F2'),
    'F#2': note('F#2'),
    G2: note('G2'),
    'G#2': note('G#2'),
    A2: note('A2'),
    'A#2': note('A#2'),
    B2: note('B2'),
    C3: note('C3'),
  };

  return { notes, noteOns };
};

export default useKeyboard;
