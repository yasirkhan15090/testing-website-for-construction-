/* ============================================
   AL-BINA CONSTRUCTION — SCROLL ANIMATIONS
   IntersectionObserver based reveal system
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ---- Scroll Reveal Observer ----
  const revealElements = document.querySelectorAll(
    '.reveal, .reveal-up, .reveal-down, .reveal-left, .reveal-right, .reveal-scale, .reveal-blur'
  );

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Don't unobserve — allows re-triggering if needed
        // But for performance, we unobserve after animation
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // ---- Service Cards Stagger ----
  const serviceCards = document.querySelectorAll('.service-card');
  const serviceObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Find the index of this card among all service cards
        const cardIndex = Array.from(serviceCards).indexOf(entry.target);
        setTimeout(() => {
          entry.target.classList.add('active');
        }, cardIndex * 120);
        serviceObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  serviceCards.forEach(card => serviceObserver.observe(card));

  // ---- Process Steps Stagger ----
  const processSteps = document.querySelectorAll('.process-step');
  const processObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const stepIndex = Array.from(processSteps).indexOf(entry.target);
        setTimeout(() => {
          entry.target.classList.add('active');
        }, stepIndex * 150);
        processObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '0px 0px -40px 0px'
  });

  processSteps.forEach(step => processObserver.observe(step));

  // ---- Project Cards Stagger ----
  const projectCards = document.querySelectorAll('.project-card');
  const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const cardIndex = Array.from(projectCards).indexOf(entry.target);
        setTimeout(() => {
          entry.target.classList.add('active');
        }, cardIndex * 150);
        projectObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  projectCards.forEach(card => projectObserver.observe(card));

  // ---- Stat Cards Stagger ----
  const statCards = document.querySelectorAll('.stat-card');
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const cardIndex = Array.from(statCards).indexOf(entry.target);
        setTimeout(() => {
          entry.target.classList.add('active');
        }, cardIndex * 200);
        statObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '0px 0px -40px 0px'
  });

  statCards.forEach(card => statObserver.observe(card));

  // ---- Trust Items Stagger ----
  const trustItems = document.querySelectorAll('.trust-item');
  const trustObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const itemIndex = Array.from(trustItems).indexOf(entry.target);
        setTimeout(() => {
          entry.target.classList.add('active');
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, itemIndex * 100);
        trustObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  trustItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    trustObserver.observe(item);
  });

  // ---- Why Choose Items Stagger ----
  const whyItems = document.querySelectorAll('.why-choose-item');
  const whyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const itemIndex = Array.from(whyItems).indexOf(entry.target);
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateX(0)';
        }, itemIndex * 120);
        whyObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  whyItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-30px)';
    item.style.transition = 'all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    whyObserver.observe(item);
  });

  // ---- Safety Features Stagger ----
  const safetyFeatures = document.querySelectorAll('.safety-feature');
  const safetyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const featureIndex = Array.from(safetyFeatures).indexOf(entry.target);
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateX(0)';
        }, featureIndex * 100);
        safetyObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  safetyFeatures.forEach(feature => {
    feature.style.opacity = '0';
    feature.style.transform = 'translateX(-20px)';
    feature.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    safetyObserver.observe(feature);
  });

  // ---- Section Header Reveal ----
  const sectionHeaders = document.querySelectorAll('.section-header');
  const headerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        headerObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '0px 0px -40px 0px'
  });

  sectionHeaders.forEach(header => {
    header.style.opacity = '0';
    header.style.transform = 'translateY(30px)';
    header.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    headerObserver.observe(header);
  });

  // ---- Service Detail Items (for service pages) ----
  const serviceIncludeItems = document.querySelectorAll('.service-include-item');
  const includeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const itemIndex = Array.from(serviceIncludeItems).indexOf(entry.target);
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateX(0)';
        }, itemIndex * 80);
        includeObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  serviceIncludeItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
    item.style.transition = 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    includeObserver.observe(item);
  });

});
