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
  };

  return { notes, noteOns };
};

export default useKeyboard;
