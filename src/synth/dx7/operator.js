import config from './config.js';

// http://www.chipple.net/dx7/fig09-4.gif
const OCTAVE_1024 = 1.0006771307; //Math.exp(Math.log(2)/1024);
const PERIOD = Math.PI * 2;

class Operator {
	constructor(params, baseFrequency, envelope, lfo) {
		this.phase = 0;
		this.val = 0;
		this.params = params;
		this.envelope = envelope;
		// TODO: Pitch envelope
		// this.pitchEnvelope = pitchEnvelope;
		this.lfo = lfo;
		this.updateFrequency(baseFrequency);
	}

	updateFrequency(baseFrequency) {
		const frequency = this.params.oscMode ?
			this.params.freqFixed :
			baseFrequency * this.params.freqRatio * Math.pow(OCTAVE_1024, this.params.detune);
		this.phaseStep = PERIOD * frequency / config.sampleRate; // radians per sample
	}

	render(mod) {
		this.val = Math.sin(this.phase + mod) * this.envelope.render() * this.lfo.renderAmp();
		this.phase += this.phaseStep * this.lfo.render();
		if (this.phase >= PERIOD) {
			this.phase -= PERIOD;
		}
		return this.val;
	}

	noteOff() {
		this.envelope.noteOff();
	}

	isFinished() {
		return this.envelope.isFinished();
	}
}

export default Operator;