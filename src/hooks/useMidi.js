import useKeyboard from './useKeyboard';

export const useMidi = () => {
  const { playNote } = useKeyboard();
  // // Handle incoming MIDI messages
  const handleMIDIMessage = (event) => {
    const data = event.data;
    playNote('C3');
    return data;
  };

  const onMIDIInit = (MIDIAcessObject) => {
    const MIDIInputs = [];
    // iterate through all the inputs and store them in an array
    for (let input of MIDIAcessObject.inputs.values()) {
      console.log(`Found input: ${input.name}`);
      MIDIInputs.push(input);
      // attach an event listener for incoming MIDI messages
      input.onmidimessage = handleMIDIMessage;
    }
  };

  const onMIDIFail = function () {
    console.log('Could not load MIDI');
  };

  return { onMIDIInit, onMIDIFail, handleMIDIMessage };
};
