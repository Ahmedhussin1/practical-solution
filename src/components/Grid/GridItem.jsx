import './GridStyle.scss'
function GridItem({item}) {
    const {image, header, description, learnMoreLink} = item
  return (
    <div className="grid-item">
    <img src={image}/>
    <h2>{header}</h2>
    <p>{description}</p>
    <button><a href={learnMoreLink}>Learn More</a></button>
    </div>
  )
}

export default GridItem