import * as Tone from 'tone';

export const synth = (preset) => new Tone.FMSynth(preset).toDestination();
