import React from 'react'
import './Tactics.scss'
import SEO from '../../SEO/Seo';

function Tactics() {
  return (
    <div className='tactics-container'>
      <div className='tactics-header'>
        <h1>{SEO.tactics.title}</h1>
      </div>
      <div className='tactics-used'>
        <ul>
            {SEO.tactics.tactics.map((tactic,index)=>(
                <li key={index}>{tactic}</li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Tactics