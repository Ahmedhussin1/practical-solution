import './Challenges.scss'
function Challenges() {
  return (
    <div className="challenges-section">
      <div className="challenges-title">
        <h1>Challenges</h1>
      </div>
      <div className="challenges-gird">
        <div className="challenges-container">
          <div className="challenges-desc">
            <h3>New Customers </h3>
            <p>
              Onboarding a new customer brings the opportunity to expand
              business relationships and increase revenue, but it also demands
              focused attention on understanding their specific
            </p>
          </div>
        </div>
        <div className="challenges-container">
          <div className="challenges-desc">
            <h3>Logistics</h3>
            <p>
              Effective communication and adaptation to unique customer
              requirements are crucial for establishing a successful and
              efficient logistics partnership.
            </p>
          </div>
        </div>
        <div className="challenges-container">
          <div className="challenges-desc">
            <h3>Competition</h3>
            <p>
              In a competitive landscape, businesses must continuously innovate
              and differentiate themselves to stand out among rivals,
              emphasizing the importance of strategic planning 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Challenges