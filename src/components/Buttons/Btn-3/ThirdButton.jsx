import React from 'react'

function ThirdButton({btnTitle}) {
  return (
    <div>
      <button className="button-48" role="button">
        <span className="text">{btnTitle}</span>
      </button>
    </div>
  );
}

export default ThirdButton