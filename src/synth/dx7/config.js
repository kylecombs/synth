const LFO_SAMPLE_PERIOD = 100;
const BUFFER_SIZE = 1024;
const POLYPHONY = 12;

const Config = {
  sampleRate: 44100, // gets updated with audio context rate
  lfoSamplePeriod: LFO_SAMPLE_PERIOD,
  bufferSize: BUFFER_SIZE,
  polyphony: POLYPHONY
};

export default Config;