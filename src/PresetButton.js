import React from 'react';
import useKeyboard from './hooks/useKeyboard';

const deactivateClick = { pointerEvents: 'none' };

const PresetButton = (props) => {
  return (
    <div
      className="button"
      presetnum={props.presetNum}
      onClick={props.handleButtonClick}
    >
      <p style={deactivateClick}>{props.presetNum}</p>
      <div
        style={deactivateClick}
        className={`led-red ${
          props.selectedPreset === props.presetNum ? 'on' : ''
        }`}
      ></div>
    </div>
  );
};

export default PresetButton;
