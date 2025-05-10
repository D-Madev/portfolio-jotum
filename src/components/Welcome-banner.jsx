import './welcome-banner.css';

function WelcomeBanner({ 
  backgroundType = 'image', 
  backgroundSrc, 
  showText = false, 
  text = '', 
  logo, 
  children,
  style = {}
}) {

  const bannerClass = `welcome-banner ${backgroundType === 'image' ? 'has-border' : ''}`;

  return (
    <section 
      className={bannerClass}
      style={{ 
        backgroundImage: backgroundType === 'image' ? `url(${backgroundSrc})` : 'none' 
        , ...style
      }}
    >
      {backgroundType === 'video' && (
        <video autoPlay muted loop playsInline className="banner-video">
          <source src={backgroundSrc} type="video/mp4" />
        </video>
      )}

      <div className="banner-overlay">
        {logo && <img src={logo} alt="Logo" className="banner-logo" />}
        {showText && <p className="banner-text">{text}</p>}
        {children}
      </div>
    </section>
  );
}

export default WelcomeBanner;
