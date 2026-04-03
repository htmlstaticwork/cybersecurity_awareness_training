/* ============================================
   CYBER — GLOBAL JAVASCRIPT
   Theme Toggle, RTL, Scroll Reveal, Matrix Rain
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ============================================
  // MATRIX RAIN BACKGROUND
  // ============================================
  (function initMatrix() {
    const canvas = document.createElement('canvas');
    canvas.id = 'matrix-canvas';
    document.body.prepend(canvas);
    const ctx = canvas.getContext('2d');

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?/\\アイウエオカキクケコ';
    const fontSize = 12;
    let cols = Math.floor(canvas.width / fontSize);
    let drops = Array(cols).fill(1);

    function drawMatrix() {
      cols = Math.floor(canvas.width / fontSize);
      if (drops.length !== cols) drops = Array(cols).fill(1);

      ctx.fillStyle = 'rgba(10,14,26,0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#00d4ff';
      ctx.font = fontSize + 'px Share Tech Mono, monospace';

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }
    setInterval(drawMatrix, 50);
  })();

  // ============================================
  // THEME TOGGLE (Dark/Light)
  // ============================================
  const savedTheme = localStorage.getItem('cyberTheme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeButton(savedTheme);

  document.querySelectorAll('.theme-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('cyberTheme', next);
      updateThemeButton(next);
    });
  });

  function updateThemeButton(theme) {
    document.querySelectorAll('.theme-toggle').forEach(btn => {
      btn.textContent = theme === 'dark' ? '☀️' : '🌙';
      btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    });
  }

  // ============================================
  // RTL TOGGLE
  // ============================================
  const savedDir = localStorage.getItem('cyberDir') || 'ltr';
  document.documentElement.setAttribute('dir', savedDir);
  updateRTLButton(savedDir);

  document.querySelectorAll('.rtl-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('dir') || 'ltr';
      const next = current === 'ltr' ? 'rtl' : 'ltr';
      document.documentElement.setAttribute('dir', next);
      localStorage.setItem('cyberDir', next);
      updateRTLButton(next);
    });
  });

  function updateRTLButton(dir) {
    document.querySelectorAll('.rtl-toggle').forEach(btn => {
      btn.textContent = dir === 'ltr' ? 'RTL' : 'LTR';
    });
  }

  // ============================================
  // MOBILE NAV
  // ============================================
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileNav.classList.toggle('open');
    });

    // Close on link click
    mobileNav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('open');
      });
    });
  }

  // ============================================
  // SCROLL REVEAL
  // ============================================
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
  });

  // ============================================
  // ANIMATED COUNTERS
  // ============================================
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-count]').forEach(el => {
    counterObserver.observe(el);
  });

  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-count'));
    const duration = 1800;
    const start = performance.now();
    const suffix = el.getAttribute('data-suffix') || '';

    function update(time) {
      const elapsed = time - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease out cubic
      el.textContent = Math.floor(eased * target).toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  // ============================================
  // TYPING ANIMATION
  // ============================================
  document.querySelectorAll('[data-type]').forEach(el => {
    const phrases = el.getAttribute('data-type').split('|');
    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function type() {
      const current = phrases[phraseIndex];
      if (deleting) {
        el.textContent = current.substring(0, charIndex - 1);
        charIndex--;
      } else {
        el.textContent = current.substring(0, charIndex + 1);
        charIndex++;
      }

      let delay = deleting ? 50 : 80;
      if (!deleting && charIndex === current.length) {
        delay = 2000;
        deleting = true;
      } else if (deleting && charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        delay = 400;
      }
      setTimeout(type, delay);
    }
    type();
  });

  // ============================================
  // ACTIVE NAV HIGHLIGHT
  // ============================================
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });

  // ============================================
  // DATA STREAM PARTICLES
  // ============================================
  function createDataStream(container) {
    if (!container) return;
    for (let i = 0; i < 8; i++) {
      const stream = document.createElement('div');
      stream.style.cssText = `
        position: absolute;
        width: 1px;
        background: linear-gradient(transparent, rgba(0,212,255,0.6), transparent);
        left: ${Math.random() * 100}%;
        height: ${60 + Math.random() * 100}px;
        animation: dataStream ${3 + Math.random() * 4}s linear infinite;
        animation-delay: ${Math.random() * 3}s;
        pointer-events: none;
      `;
      container.appendChild(stream);
    }
  }

  document.querySelectorAll('.data-streams').forEach(createDataStream);

  // ============================================
  // TOAST NOTIFICATIONS
  // ============================================
  window.showToast = function(msg, type = 'success') {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = `toast ${type === 'error' ? 'error' : ''}`;
    toast.textContent = msg;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.3s';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  };

  // ============================================
  // PROGRESS BARS ANIMATION
  // ============================================
  const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target.querySelector('.progress-bar-fill');
        if (fill) {
          const width = fill.getAttribute('data-width') || '0';
          setTimeout(() => { fill.style.width = width + '%'; }, 200);
        }
        progressObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.progress-bar').forEach(bar => {
    const fill = bar.querySelector('.progress-bar-fill');
    if (fill) {
      const width = fill.style.width || fill.getAttribute('data-width') + '%';
      fill.setAttribute('data-width', parseInt(width));
      fill.style.width = '0';
      progressObserver.observe(bar);
    }
  });

  // ============================================
  // SCANLINE EFFECT ON HERO
  // ============================================
  document.querySelectorAll('.hero-section, .page-hero').forEach(hero => {
    const line = document.createElement('div');
    line.className = 'cyber-scanline';
    hero.style.position = hero.style.position || 'relative';
    hero.style.overflow = 'hidden';
    hero.appendChild(line);
  });

  // ============================================
  // HOVER GLOW EFFECT ON CARDS
  // ============================================
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mouse-x', x + '%');
      card.style.setProperty('--mouse-y', y + '%');
    });
  });

  // ============================================
  // FORM SUBMISSIONS (prevent default + toast)
  // ============================================
  document.querySelectorAll('form.cyber-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('[type=submit]');
      const original = btn?.textContent;
      if (btn) btn.textContent = 'Processing...';
      setTimeout(() => {
        if (btn) btn.textContent = original;
        window.showToast?.('Request submitted successfully!');
        form.reset();
      }, 1500);
    });
  });

  // ============================================
  // PARALLAX ON HERO BG
  // ============================================
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    document.querySelectorAll('.hero-section').forEach(hero => {
      hero.style.backgroundPositionY = `calc(center + ${scrolled * 0.3}px)`;
    });
  });

  console.log('%c[CYBER SYSTEMS ONLINE]', 'color: #00d4ff; font-family: monospace; font-size: 14px;');
});
