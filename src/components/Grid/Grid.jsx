import GridItem from './GridItem'
import './GridStyle.scss'
function Grid({items}) {
  return (
    <div className='gird-container'>
        {items.map((item,index) =>(
            <GridItem key={index} item={item}/>
        ))}
    </div>
  )
}

export default Grid