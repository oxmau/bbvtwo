import './App.css';

function App() {
  return (
    <div className="landing-page">
      
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="brand">
          <span className="brand-icon">▶</span>
          <span className="brand-name">BroncoBoard</span>
        </div>
        <div className="nav-buttons">
          <button className="btn-outline">Login</button>
          <button className="btn-solid">Sign Up</button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="hero-section">
        <h1 className="hero-title">
          Find Your <span className="italic-text">Community</span> Today
        </h1>
        <p className="hero-subtitle">
          Connect with employers and gain experience at <strong>Cal Poly Pomona</strong>
        </p>

        {/* Search Bar */}
        <div className="search-container">
          <div className="search-input-wrapper">
            <span className="search-icon" style={{ backgroundColor: 'transparent', border: 'none' }}>💼</span>
            <input type="text" placeholder="Search Jobs..." className="search-input" />
          </div>
          <button className="search-button">🔍</button>
        </div>
      </main>
      
    </div>
  );
}

export default App;