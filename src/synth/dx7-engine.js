import SynthDX7 from './dx7/synth-dx7.js';
import FMVoice from './dx7/voice-dx7.js';
import config from './dx7/config.js';
import presetsDX7 from './dx7/presets-dx7.js';

class DX7Engine {
  constructor() {
    this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    config.sampleRate = this.audioContext.sampleRate;
    console.log('Audio context created, sample rate:', config.sampleRate);
    
    this.synth = new SynthDX7(FMVoice, config.polyphony);
    this.scriptProcessor = null;
    this.gainNode = null;
    this.currentPreset = 0;
    this.octaveOffset = 0;
    this.volume = 0.8; // Increased from 0.4 to 0.8
    
    // Initialize with first preset parameters before setting up audio
    FMVoice.setParams(presetsDX7[0]);
    
    this.setupAudioGraph();
    this.setPreset(0);
    
    // Resume audio context if it's suspended (Chrome autoplay policy)
    if (this.audioContext.state === 'suspended') {
      console.log('Audio context suspended, resuming...');
      this.audioContext.resume();
    }
  }

  setupAudioGraph() {
    // Create gain node for volume control
    this.gainNode = this.audioContext.createGain();
    this.gainNode.gain.value = this.volume;
    this.gainNode.connect(this.audioContext.destination);
    
    // Create script processor for synthesis
    this.scriptProcessor = this.audioContext.createScriptProcessor(config.bufferSize, 0, 2);
    this.scriptProcessor.connect(this.gainNode);
    
    const bufferSize = this.scriptProcessor.bufferSize || config.bufferSize;
    const bufferSizeMs = 1000 * bufferSize / config.sampleRate;
    const msPerSample = 1000 / config.sampleRate;
    
    // Audio processing callback
    let firstProcess = true;
    let debugCounter = 0;
    this.scriptProcessor.onaudioprocess = (e) => {
      const buffer = e.outputBuffer;
      const outputL = buffer.getChannelData(0);
      const outputR = buffer.getChannelData(1);
      
      if (firstProcess) {
        console.log('Audio processing started, buffer size:', buffer.length);
        firstProcess = false;
      }
      
      let sampleTime = performance.now() - bufferSizeMs;
      let hasSound = false;
      
      for (let i = 0, length = buffer.length; i < length; i++) {
        sampleTime += msPerSample;
        this.synth.processQueuedEventsUpToSampleTime(sampleTime);
        const output = this.synth.render();
        outputL[i] = output[0];
        outputR[i] = output[1];
        
        // Check if we're producing any sound
        if (Math.abs(output[0]) > 0.001 || Math.abs(output[1]) > 0.001) {
          hasSound = true;
        }
      }
      
      // Log every 100 frames if we have active voices
      if (this.synth.voices.length > 0 && debugCounter++ % 100 === 0) {
        console.log('Active voices:', this.synth.voices.length, 'Has sound:', hasSound);
      }
    };
  }

  setPreset(presetIndex) {
    if (presetIndex < 0 || presetIndex >= presetsDX7.length) return;
    
    this.currentPreset = presetIndex;
    const preset = presetsDX7[presetIndex];
    
    // Set global parameters first
    FMVoice.setParams(preset);
    FMVoice.setFeedback(preset.feedback || 0);
    
    // Initialize operator frequencies and panning
    for (let i = 0; i < 6; i++) {
      FMVoice.updateFrequency(i);
      if (!preset.operators[i].ampL) preset.operators[i].ampL = 1;
      if (!preset.operators[i].ampR) preset.operators[i].ampR = 1;
      FMVoice.setPan(i, preset.operators[i].pan || 0);
    }
    
    FMVoice.updateLFO();
  }

  noteNumberFromNoteName(noteName) {
    const noteMap = {
      'C': 0, 'C#': 1, 'D': 2, 'D#': 3, 'E': 4, 'F': 5,
      'F#': 6, 'G': 7, 'G#': 8, 'A': 9, 'A#': 10, 'B': 11
    };
    
    if (!noteName || typeof noteName !== 'string') return 60; // Default to middle C
    
    const match = noteName.match(/^([A-G]#?)(\d)$/);
    if (!match) return 60; // Default to middle C
    
    const note = noteMap[match[1]];
    const octave = parseInt(match[2]);
    
    return (octave + 1) * 12 + note + this.octaveOffset * 12;
  }

  triggerAttack(noteName) {
    // Resume audio context on user interaction (Chrome autoplay policy)
    if (this.audioContext.state === 'suspended') {
      this.audioContext.resume();
    }
    
    const noteNumber = this.noteNumberFromNoteName(noteName);
    console.log('triggerAttack:', noteName, 'MIDI note:', noteNumber);
    
    // Create MIDI-like event for note on
    const midiEvent = {
      data: [0x90, noteNumber, 100], // Note on, note number, velocity
      timeStamp: performance.now()
    };
    this.synth.queueMidiEvent(midiEvent);
  }

  triggerRelease(noteName) {
    const noteNumber = this.noteNumberFromNoteName(noteName);
    console.log('triggerRelease:', noteName, 'MIDI note:', noteNumber);
    
    // Create MIDI-like event for note off
    const midiEvent = {
      data: [0x80, noteNumber, 0], // Note off, note number, velocity
      timeStamp: performance.now()
    };
    this.synth.queueMidiEvent(midiEvent);
  }

  setVolume(value) {
    this.volume = Math.max(0, Math.min(1, value));
    if (this.gainNode) {
      this.gainNode.gain.value = this.volume;
    }
  }

  setOctave(octaveNum) {
    this.octaveOffset = octaveNum;
  }

  setPitchBend(value) {
    this.synth.pitchBend(value);
  }

  panic() {
    this.synth.panic();
  }

  getPresetName() {
    return presetsDX7[this.currentPreset].name;
  }

  getPresetCount() {
    return presetsDX7.length;
  }
}

export default DX7Engine;