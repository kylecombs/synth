import marimba from './settings/marimba.json';

const marimbaSettings = {
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

const celloSettings = {
  harmonicity: 3.01,
  modulationIndex: 14,
  oscillator: {
    type: 'triangle',
  },
  envelope: {
    attack: 0.2,
    decay: 0.3,
    sustain: 0.2,
    release: 1.2,
  },
  modulation: {
    type: 'square',
  },
  modulationEnvelope: {
    attack: 0.01,
    decay: 0.5,
    sustain: 0.2,
    release: 0.1,
  },
};

const sawzSettings = {
  harmonicity: 0.5,
  modulationIndex: 1.2,
  oscillator: {
    type: 'fmsawtooth',
    modulationType: 'sine',
    modulationIndex: 20,
    harmonicity: 3,
  },
  envelope: {
    attack: 0.05,
    decay: 0.3,
    sustain: 0.1,
    release: 1.2,
  },
  modulation: {
    volume: 0,
    type: 'triangle',
  },
  modulationEnvelope: {
    attack: 0.35,
    decay: 0.1,
    sustain: 1,
    release: 0.01,
  },
};

const slapBassSettings = {
  volume: 0,
  detune: -2400,
  portamento: 0,
  harmonicity: 20,
  oscillator: {
    partialCount: 5,
    partials: [
      0.19753086419753096, 0.152587890625, 0.19753086419753096, 0.152587890625,
      0.000244140625,
    ],
    phase: 10,
    type: 'custom',
  },
  envelope: {
    attack: 0.01,
    attackCurve: 'linear',
    decay: 0.2,
    decayCurve: 'exponential',
    release: 2,
    releaseCurve: 'exponential',
    sustain: 0.1,
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
    decay: 2,
    decayCurve: 'exponential',
    release: 5,
    releaseCurve: 'exponential',
    sustain: 0.5,
  },
  modulationIndex: 20,
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
  {
    name: 'cello',
    settings: celloSettings,
  },
  {
    name: 'sawz',
    settings: sawzSettings,
  },
  {
    name: 'slapBass',
    settings: slapBassSettings,
  },
];

export default presets;
