import * as Tone from 'tone';
import presets from './presets';

export const synth = (preset) => new Tone.FMSynth(preset).toDestination();

export let instrument = synth(presets[0].settings);

export const setInstrument = (presetNum) => {
  instrument = synth(presets[presetNum].settings);
};
