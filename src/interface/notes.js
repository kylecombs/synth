const note = (noteName) => {
  const state = noteName;

  return Object.assign({}, playNote(state), releaseNote(state));
};

const playNote = (state) => ({
  playNote: () => {
    setNoteOn[state] = true;
  },
});

const releaseNote = (state) => ({
  releaseNote: () => {
    setNoteOn[state] = false;
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

export default notes;
