// import marimba from './settings/marimba.json';

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

const crystalSettings = {
  volume: 0,
  detune: 0,
  portamento: 0,
  harmonicity: 20,
  oscillator: {
    partialCount: 10,
    partials: [
      0.000003014081812580116, 0.0018838010728359222, 0.08608519285917282,
      0.030140817165374756, 0.25173911452293396, 0.8434636622299384,
      0.0007716049440205097, 0.00004822530900128186, 0.0018838010728359222,
      0.000003014081812580116,
    ],
    phase: 0,
    type: 'custom',
  },
  envelope: {
    attack: 5,
    attackCurve: 'linear',
    decay: 0.9,
    decayCurve: 'exponential',
    release: 5,
    releaseCurve: 'exponential',
    sustain: 1,
  },
  modulation: {
    partialCount: 0,
    partials: [],
    phase: 0,
    type: 'sine',
  },
  modulationEnvelope: {
    attack: 0.5,
    attackCurve: 'linear',
    decay: 2,
    decayCurve: 'exponential',
    release: 2,
    releaseCurve: 'exponential',
    sustain: 0.1,
  },
  modulationIndex: 20,
};

const funkySettings = {
  volume: 0,
  detune: -2400,
  portamento: 0,
  harmonicity: 1,
  oscillator: {
    partialCount: 0,
    partials: [],
    phase: 0,
    type: 'sine',
  },
  envelope: {
    attack: 0.02,
    attackCurve: 'linear',
    decay: 0.3,
    decayCurve: 'exponential',
    release: 0,
    releaseCurve: 'exponential',
    sustain: 0,
  },
  modulation: {
    partialCount: 0,
    partials: [],
    phase: 0,
    type: 'square',
  },
  modulationEnvelope: {
    attack: 0.05,
    attackCurve: 'linear',
    decay: 0.01,
    decayCurve: 'exponential',
    release: 0.5,
    releaseCurve: 'exponential',
    sustain: 1,
  },
  modulationIndex: 47,
};

const rizerSettings = {
  volume: 0,
  detune: -6000,
  portamento: 0,
  harmonicity: 10,
  oscillator: {
    partialCount: 0,
    partials: [],
    phase: 0,
    type: 'sine',
  },
  envelope: {
    attack: 5,
    attackCurve: 'exponential',
    decay: 3,
    decayCurve: 'exponential',
    release: 10,
    releaseCurve: 'exponential',
    sustain: 1,
  },
  modulation: {
    partialCount: 0,
    partials: [],
    phase: 0,
    type: 'triangle',
  },
  modulationEnvelope: {
    attack: 7,
    attackCurve: 'linear',
    decay: 0.01,
    decayCurve: 'exponential',
    release: 10,
    releaseCurve: 'exponential',
    sustain: 1,
  },
  modulationIndex: 1000,
};

const alienPercSettings = {
  volume: 0,
  detune: 0,
  portamento: 0,
  harmonicity: 5,
  oscillator: {
    partialCount: 0,
    partials: [],
    phase: 0,
    type: 'sine',
  },
  envelope: {
    attack: 0.01,
    attackCurve: 'linear',
    decay: 0.02,
    decayCurve: 'exponential',
    release: 0,
    releaseCurve: 'exponential',
    sustain: 0,
  },
  modulation: {
    partialCount: 0,
    partials: [],
    phase: 0,
    type: 'square',
  },
  modulationEnvelope: {
    attack: 1.01,
    attackCurve: 'linear',
    decay: 1.0099999999999998,
    decayCurve: 'exponential',
    release: 1.5,
    releaseCurve: 'exponential',
    sustain: 0,
  },
  modulationIndex: 1000,
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
  {
    name: 'crystal',
    settings: crystalSettings,
  },
  {
    name: 'funky',
    settings: funkySettings,
  },
  {
    name: 'rizer',
    settings: rizerSettings,
  },
  {
    name: 'alnPerc',
    settings: alienPercSettings,
  },
];

export default presets;
