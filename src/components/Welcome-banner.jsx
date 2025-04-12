import './welcome-banner.css';

function WelcomeBanner({ backgroundType = 'image', backgroundSrc, showText = false, text = '', logo, children }) {
  return (
    <section 
      className="welcome-banner"
      style={{ 
        backgroundImage: backgroundType === 'image' ? `url(${backgroundSrc})` : 'none' 
      }}
    >
      {backgroundType === 'video' && (
        <video autoPlay muted loop playsInline className="banner-video">
          <source src={backgroundSrc} type="video/mp4" />
        </video>
      )}

      <div className="banner-overlay">
        {logo && <img src={logo} alt="Logo" className="banner-logo" />}
        {showText && <h1 className="banner-text">{text}</h1>}
        {children}
      </div>
    </section>
  );
}

export default WelcomeBanner;
