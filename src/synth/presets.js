const marimbaSettings = {
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
    attack: 0.01,
    attackCurve: 'linear',
    decay: 0.1,
    decayCurve: 'exponential',
    release: 0.4,
    releaseCurve: 'exponential',
    sustain: 0,
  },
  modulationIndex: 1,
};

const bellSettings = {
  volume: 0,
  detune: 0,
  portamento: 0,
  harmonicity: 10,
  oscillator: {
    partialCount: 0,
    partials: [],
    phase: 0,
    type: 'sine',
  },
  envelope: {
    attack: 0.001,
    attackCurve: 'linear',
    decay: 5,
    decayCurve: 'exponential',
    release: 5,
    releaseCurve: 'exponential',
    sustain: 0.5,
  },
  modulation: {
    partialCount: 0,
    partials: [],
    phase: 0,
    type: 'square',
  },
  modulationEnvelope: {
    attack: 0.001,
    attackCurve: 'linear',
    decay: 5,
    decayCurve: 'exponential',
    release: 5,
    releaseCurve: 'exponential',
    sustain: 0,
  },
  modulationIndex: 20,
};

const kalimbaSettings = {
  volume: 0,
  harmonicity: 8,
  modulationIndex: 2,
  oscillator: {
    type: 'sine',
  },
  envelope: {
    attack: 0.001,
    decay: 2,
    sustain: 0.1,
    release: 2,
  },
  modulation: {
    type: 'square',
  },
  modulationEnvelope: {
    attack: 0.002,
    decay: 0.2,
    sustain: 0,
    release: 0.2,
  },
};

const presets = [
  {
    name: 'marimba',
    settings: marimbaSettings,
  },
  {
    name: 'bell',
    settings: bellSettings,
  },
  {
    name: 'kalimba',
    settings: kalimbaSettings,
  },
];

export default presets;
