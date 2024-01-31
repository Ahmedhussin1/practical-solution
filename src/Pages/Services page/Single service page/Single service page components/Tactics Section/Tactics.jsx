import './Tactics.scss'

function Tactics({data}) {
  return (
    <div className='tactics-container'>
      <div className='tactics-header'>
        <h1>{data.tactics.title}</h1>
      </div>
      <div className='tactics-used'>
        <ul>
            {data.tactics.tactics.map((tactic,index)=>(
                <li key={index}>{tactic}</li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Tactics