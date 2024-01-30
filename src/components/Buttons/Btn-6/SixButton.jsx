import './SixButton.scss'
function SixButton({title,link}) {
  return (
    <a href={link} className="btn btn-1">
      <svg>
        <rect x="0" y="0" fill="none" width="100%" height="100%" />
      </svg>
      {title}
    </a>
  );
}

export default SixButton