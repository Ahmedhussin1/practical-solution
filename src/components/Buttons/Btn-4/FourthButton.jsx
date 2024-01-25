import React from 'react'
import './FourthButton.scss'
function FourthButton({link,title}) {
  return (
    <a href={link} className="btn41-43 btn-41">
      {title}
    </a>
  );
}

export default FourthButton