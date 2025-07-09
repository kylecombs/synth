import { instrument } from './synth';

export const MIDIInputs = [];

// Handle incoming MIDI messages
export const handleMIDIMessage = (event) => {
  const data = event.data;
  const midiNote = data[1];
  const velocity = data[2];
  
  // Convert MIDI note to note name
  const notesArray = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  const noteName = notesArray[midiNote % 12];
  const noteOctave = Math.floor(midiNote / 12) - 1;
  const noteNameWithOctave = noteName + String(noteOctave);
  
  if (data[0] === 144 && velocity > 0) {
    // Note on
    instrument.triggerAttack(noteNameWithOctave);
  }
  if (data[0] === 128 || (data[0] === 144 && velocity === 0)) {
    // Note off
    instrument.triggerRelease(noteNameWithOctave);
  }
  
  // Handle pitch bend
  if (data[0] >= 224 && data[0] <= 239) {
    const pitchBendValue = ((data[2] << 7) + data[1] - 8192) / 8192;
    instrument.setPitchBend(pitchBendValue);
  }
  
  // Handle mod wheel
  if (data[0] === 176 && data[1] === 1) {
    // Modulation wheel - could be used for DX7 parameters
  }
  
  // Handle volume control
  if (data[0] === 176 && data[1] === 7) {
    const volLevel = data[2] / 127;
    instrument.setVolume(volLevel);
  }
  
  return data;
};

export const onMIDIInit = (MIDIAcessObject) => {
  // const MIDIInputs = [];
  // iterate through all the inputs and store them in an array
  for (let input of MIDIAcessObject.inputs.values()) {
    console.log(`Found input: ${input.name}`);
    MIDIInputs.push(input);
    // attach an event listener for incoming MIDI messages
    input.onmidimessage = handleMIDIMessage;
  }
};

export const onMIDIFail = function () {
  console.log('Could not load MIDI');
};

// initialize midi
navigator.requestMIDIAccess({}).then(onMIDIInit, onMIDIFail);
