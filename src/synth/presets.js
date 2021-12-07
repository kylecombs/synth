const marimba = {
  volume: 0,
  detune: 0,
  portamento: 0,
  harmonicity: 20,
  oscillator: {
    partialCount: 0,
    partials: [],
    phase: 0,
    type: 'sine',
  },
  envelope: {
    attack: 0.001,
    attackCurve: 'linear',
    decay: 0.2,
    decayCurve: 'exponential',
    release: 0.5,
    releaseCurve: 'exponential',
    sustain: 0,
  },
  modulation: {
    partialCount: 0,
    partials: [],
    phase: 0,
    type: 'sine',
  },
  modulationEnvelope: {
    attack: 0.2,
    attackCurve: 'linear',
    decay: 0.3,
    decayCurve: 'exponential',
    release: 0.5,
    releaseCurve: 'exponential',
    sustain: 1,
  },
  modulationIndex: 10,
};

const presets = [
  {
    name: 'marimba',
    settings: marimba,
  },
];

export default presets;
