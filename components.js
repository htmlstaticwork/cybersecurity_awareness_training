// ============================================
// CYBER — SHARED COMPONENTS
// Header + Footer templates
// ============================================

(function injectComponents() {
  // ============ HEADER ============
  const headerHTML = `
  <header class="header" id="main-header">
    <nav class="navbar">
      <div class="navbar-left">
        <a href="index.html" class="brand-wrap">
          <div class="brand-logo" aria-label="Cyber Home">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
          </div>
          <span class="brand-name">CYBER</span>
        </a>
      </div>

      <div class="navbar-center" id="nav-links">
        <a href="index.html" class="nav-link">Home</a>
        <a href="home2.html" class="nav-link">Home 2</a>
        <a href="training.html" class="nav-link">Train</a>
        <a href="threats.html" class="nav-link">Threat</a>
        <a href="about.html" class="nav-link">About</a>
        <a href="contact.html" class="nav-link">Contact</a>
        <a href="dashboard.html" class="nav-link">Dashboard</a>
      </div>

      <div class="navbar-right">
        <button class="toggle-btn rtl-toggle" aria-label="Toggle RTL">RTL</button>
        <button class="toggle-btn theme-toggle" aria-label="Toggle theme">☀️</button>
        <a href="login.html" class="btn btn-outline">Login</a>
        <button class="hamburger" aria-label="Toggle menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  </header>

  <nav class="mobile-nav" id="mobile-nav">
    <a href="index.html" class="nav-link">Home</a>
    <a href="home2.html" class="nav-link">Home 2</a>
    <a href="training.html" class="nav-link">Train</a>
    <a href="threats.html" class="nav-link">Threat</a>
    <a href="about.html" class="nav-link">About</a>
    <a href="contact.html" class="nav-link">Contact</a>
    <a href="dashboard.html" class="nav-link">Dashboard</a>
    <a href="login.html" class="btn btn-outline" style="width:100%;margin-top:20px;margin-bottom:10px;">Login</a>
    <div class="mobile-nav-toggles" style="display:flex;gap:12px;margin-top:10px;padding-top:20px;border-top:1px solid var(--secondary-10);">
      <button class="toggle-btn rtl-toggle" aria-label="Toggle RTL" style="flex:1;">RTL</button>
      <button class="toggle-btn theme-toggle" aria-label="Toggle theme" style="flex:1;">☀️</button>
    </div>
  </nav>
  `;

  // ============ FOOTER ============
  const footerHTML = `
  <footer class="footer">
    <div class="footer-main">
      <div class="footer-grid">
        <div class="footer-col" style="display:flex;flex-direction:column;align-items:center;text-align:center;">
          <a href="index.html" class="brand-wrap" style="margin-bottom:16px;">
            <div class="brand-logo pulse-glow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width:22px;height:22px;">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
            <span class="brand-name">CYBER</span>
          </a>
          <p style="max-width:300px;">Empowering organizations to build human firewalls. Transform your employees from the weakest link to your strongest cybersecurity asset.</p>
          <div class="social-icons">
            <a href="#" class="social-icon facebook" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            <a href="#" class="social-icon instagram" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href="#" class="social-icon twitter" aria-label="X / Twitter">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" class="social-icon linkedin" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>

        <div class="footer-col">
          <h4>Platform</h4>
          <div class="footer-links">
            <a href="training.html">Security Training</a>
            <a href="threats.html">Threat Intelligence</a>
            <a href="dashboard.html">HR Dashboard</a>
            <a href="home2.html">Phishing Simulations</a>
            <a href="home2.html">Compliance Reports</a>
          </div>
        </div>

        <div class="footer-col">
          <h4>Company</h4>
          <div class="footer-links">
            <a href="about.html">About Us</a>
            <a href="about.html">Leadership</a>
            <a href="contact.html">Careers</a>
            <a href="contact.html">Press Kit</a>
            <a href="contact.html">Partners</a>
          </div>
        </div>

        <div class="footer-col">
          <h4>Legal</h4>
          <div class="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">GDPR Compliance</a>
            <a href="#">ISO 27001</a>
            <a href="#">SOC 2 Type II</a>
          </div>
          <div style="margin-top:24px;">
            <span class="section-tag" style="margin-bottom:8px;display:block;">Status</span>
            <p style="font-size:0.8rem;display:flex;align-items:center;gap:8px;">
              <span style="width:8px;height:8px;background:#00ff88;border-radius:50%;display:inline-block;box-shadow:0 0 8px #00ff88;animation:pulseGlow 2s infinite;"></span>
              All systems operational
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom container">
      <p>© 2026 CyberShield Corp. All rights reserved. <span style="color:var(--secondary);">|</span> </p>
      
    </div>
  </footer>
  `;

  // Inject header
  const headerTarget = document.getElementById('header-inject');
  if (headerTarget) headerTarget.outerHTML = headerHTML;

  // Inject footer
  const footerTarget = document.getElementById('footer-inject');
  if (footerTarget) footerTarget.outerHTML = footerHTML;
})();
