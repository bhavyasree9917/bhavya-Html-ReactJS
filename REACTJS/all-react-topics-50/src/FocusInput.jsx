import React, { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Click button to focus me" />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}
export default FocusInput



