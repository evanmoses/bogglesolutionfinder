import React from 'react'

function Buttons(props) {
  return (
    <>
      <button />
      <button />
      <button onClick={props.handleGetRandomClick}>Generate Random</button>
    </>
  );
}

export default Buttons;
