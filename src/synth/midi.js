import { instrument } from './synth';
import * as Tone from 'tone';

let noteOn = false;

// // Handle incoming MIDI messages
export const handleMIDIMessage = (event) => {
  const data = event.data;
  const midiNote = data[1];
  if (data[0] === 144 && noteOn === false) {
    noteOn = true;
    instrument.triggerAttack(Tone.Midi(midiNote));
  }
  if (data[0] === 128 && noteOn === true) {
    noteOn = false;
    instrument.triggerRelease();
  }
  return data;
};

export const onMIDIInit = (MIDIAcessObject) => {
  const MIDIInputs = [];
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
