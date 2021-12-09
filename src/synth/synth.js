import * as Tone from 'tone';
import presets from './presets';
import { onMIDIInit, onMIDIFail } from './midi';

// initialize midi
navigator.requestMIDIAccess({}).then(onMIDIInit, onMIDIFail);

const gainNode = new Tone.Gain(0).toDestination();

export const synth = (preset) => new Tone.FMSynth(preset).connect(gainNode);

export let instrument = synth(presets[0].settings);

instrument.detuneOffset = 0;

let octave = 0;

export const setInstrument = (presetNum) => {
  if (presetNum < presets.length) {
    instrument = synth(presets[presetNum].settings);
    instrument.detuneOffset = instrument.detune.value;
    instrument.set({
      detune: instrument.detuneOffset + octave * 1200,
    });
  }
};

export const setOctave = (octaveNum) => {
  octave = octaveNum;
  instrument.set({
    detune: instrument.detuneOffset + octaveNum * 1200,
  });
};

export const setVolume = (volLevel) => {
  const limitedVol = Math.min(Math.max(volLevel, 0), 1);
  gainNode.gain.value = limitedVol;
};
