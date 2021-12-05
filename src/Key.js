import React from 'react';

const Key = (props) => {
  const isSharp = props.noteName.includes('#');
  const isOffset = (noteName) =>
    !noteName.includes('C') && !noteName.includes('F');
  return (
    <li
      note={props.noteName}
      className={`${isSharp ? 'black' : 'white'} ${
        isOffset(props.noteName) ? 'offset' : ''
      } ${props.noteOns[props.noteName] ? 'pressed' : ''}`}
      onMouseDown={props.handlers.handleMouseDown}
      onMouseLeave={props.handlers.handleMouseUp}
      onMouseUp={props.handlers.handleMouseUp}
      onMouseEnter={props.handlers.handleMouseEnter}
    ></li>
  );
};

export default Key;
