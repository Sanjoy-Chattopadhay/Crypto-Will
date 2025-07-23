// import image1 from "image/1.png";
import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // Project screenshots with captions
  const projectImages = [
    {
      src: "/image/6.png",
      caption:
        "Pedersen VSS Implementation – The cryptographic backbone that ensures secure, verifiable secret sharing for digital inheritance.",
      title: "Advanced Cryptographic Engine",
    },
    {
      src: "/image/7.png",
      caption:
        "Secret Reconstruction Algorithm – Advanced cryptographic functions that securely combine beneficiary shares to unlock digital inheritance when threshold conditions are met.",
      title: "Secret Reconstruction Engine",
    },
    {
      src: "/image/5.png",
      caption:
        "Smart Contract Deployment Interface – Secure blockchain integration for executing digital inheritance contracts with multi-signature validation and transparent transaction processing.",
      title: "Blockchain Contract Interface",
    },
    {
      src: "/image/4.png",
      caption:
        "Ethereum Remix IDE – Solidity code interface and deployed contract interaction panel showcasing the Crypto Will smart contract in action.",
      title: "Remix IDE Smart Contract Interface",
    },
    {
      src: "/image/3.jpg",
      caption:
        "Developer Workspace – Visual Studio Code editing Crypto Will configuration while monitoring live cricket, illustrating a modern, flexible development environment.",
      title: "Developer Environment Snapshot",
    },
    {
      src: "/image/2.png",
      caption:
        "Beneficiary Status – Real-time status for each recipient's share.",
      title: "Beneficiary Management",
    },
    {
      src: "/image/1.png",
      caption:
        "Top-tier security dashboard – Only you and your chosen beneficiaries have access.",
      title: "Security Features",
    },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === projectImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? projectImages.length - 1 : prev - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Crypto Will</h1>
            <p className="hero-subtitle">
              Bridging Generations with Digital Trust
            </p>
            <p className="hero-description">
              Safeguard your digital legacy effortlessly and securely through
              blockchain technology
            </p>
          </div>
        </div>
      </section>

      {/* Image Slider Section */}
      <section className="slider-section">
        <div className="container">
          <h2 className="section-title">Project Overview</h2>

          <div className="image-slider">
            <button className="slider-btn prev-btn" onClick={prevImage}>
              &#8249;
            </button>

            <div className="slider-content">
              <div className="image-container">
                <img
                  src={projectImages[currentImageIndex].src}
                  alt={projectImages[currentImageIndex].title}
                  className="project-image"
                />
                <div className="image-overlay">
                  <h3>{projectImages[currentImageIndex].title}</h3>
                </div>
              </div>

              <div className="image-caption">
                <p>{projectImages[currentImageIndex].caption}</p>
              </div>
            </div>

            <button className="slider-btn next-btn" onClick={nextImage}>
              &#8250;
            </button>
          </div>

          {/* Dot Navigation */}
          <div className="slider-dots">
            {projectImages.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentImageIndex ? "active" : ""}`}
                onClick={() => goToImage(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">How It Works</h2>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-number">1</div>
              <h3>Register and Secure</h3>
              <p>
                Create your account with advanced cryptographic security
                protocols
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-number">2</div>
              <h3>Add Digital Assets</h3>
              <p>
                Securely add your cryptocurrencies, NFTs, and digital holdings
                to your will
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-number">3</div>
              <h3>Nominate Beneficiaries</h3>
              <p>
                Choose beneficiaries with cryptographic assurance using Pedersen
                VSS
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose-section">
        <div className="container">
          <h2 className="section-title">Why Crypto Will?</h2>

          <div className="benefits-grid">
            <div className="benefit-item">
              <h4>Zero Knowledge Cryptography</h4>
              <p>Complete privacy protection for your sensitive information</p>
            </div>

            <div className="benefit-item">
              <h4>End-to-End Encryption</h4>
              <p>Military-grade security for all your digital assets</p>
            </div>

            <div className="benefit-item">
              <h4>Full Audit Trail</h4>
              <p>Transparent and legally compliant inheritance process</p>
            </div>

            <div className="benefit-item">
              <h4>Blockchain Security</h4>
              <p>Immutable records stored on decentralized networks</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Protect Your Digital Legacy Today</h2>
            <p>
              Join thousands who trust Crypto Will with their digital
              inheritance
            </p>
            <button className="cta-button">Get Started Now</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>
            &copy; 2025 Crypto Will. Securing digital legacies with blockchain
            technology.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
