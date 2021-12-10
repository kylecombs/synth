import React from 'react';
import { MIDIInputs } from './synth/midi';
export default function MidiSelect() {
  return (
    <div>
      <select name="midiInput" id="midi-input-select" style={{ width: 150 }}>
        {MIDIInputs.length &&
          MIDIInputs.map((input) => (
            <option value={input.name}>{input.name}</option>
          ))}
      </select>
    </div>
  );
}
