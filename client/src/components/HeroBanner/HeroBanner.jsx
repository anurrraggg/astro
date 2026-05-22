import "./HeroBanner.css";

function HeroBanner() {
  return (
    <section className="hero-banner" aria-label="Hero section">
      <div className="hero-heading-wrap">
        <div className="hero-title-cluster">
          <div className="hero-heading-left">
            <span className="hero-dots">.............</span>
          </div>

          <h1 className="hero-heading">Unlock What Lies Ahead</h1>

          <div className="hero-heading-right">
            <div className="hero-est">
              <span className="hero-est-label">EST 2026</span>
              <span className="hero-barcode">||||||||||||||||||||</span>
              <span className="hero-globe">◎</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-cta">
        <button className="connect-btn" type="button">
          <span className="star">✦</span>
          <span className="text">BEGIN JOURNEY</span>
        </button>

        <button className="connect-btn" type="button">
          <span className="star">✦</span>
          <span className="text">LEARN MORE</span>
        </button>
      </div>
    </section>
  );
}

export default HeroBanner;
