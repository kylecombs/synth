import DX7Engine from './dx7-engine';
import { onMIDIInit, onMIDIFail } from './midi';

// initialize midi
navigator.requestMIDIAccess({}).then(onMIDIInit, onMIDIFail);

// Create DX7 engine instance
export const instrument = new DX7Engine();

export const setInstrument = (presetNum) => {
  instrument.setPreset(presetNum);
};

export const setOctave = (octaveNum) => {
  instrument.setOctave(octaveNum);
};

export const setVolume = (volLevel) => {
  instrument.setVolume(volLevel);
};

export const setPitchBend = (pitchBend) => {
  instrument.setPitchBend(pitchBend);
};
