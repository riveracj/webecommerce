document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initScrollEffects();
  initFaqAccordion();
  initFadeIn();
  initTemplateFilters();
  initSearch();
});

function initNavigation() {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');

  if (toggle) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      links.classList.toggle('open');
    });
  }

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      links.classList.remove('open');
    });
  });

  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath) {
      link.classList.add('active');
    }
  });
}

function initScrollEffects() {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        nav.classList.toggle('scrolled', window.scrollY > 50);
        ticking = false;
      });
      ticking = true;
    }
  });
}

function initFaqAccordion() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        document.querySelectorAll('.faq-item.active').forEach(i => {
          i.classList.remove('active');
        });
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });
}

function initFadeIn() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

function initTemplateFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const templateCards = document.querySelectorAll('.template-card');

  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter || 'all';

      templateCards.forEach(card => {
        const category = card.dataset.category || 'all';
        if (filter === 'all' || category === filter) {
          card.style.display = '';
          card.style.opacity = '0';
          requestAnimationFrame(() => { card.style.opacity = '1'; });
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  const sortSelect = document.querySelector('.sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      const visible = Array.from(templateCards).filter(c => c.style.display !== 'none');
      const container = templateCards[0]?.parentElement;
      if (!container) return;

      visible.sort((a, b) => {
        const aPrice = parseInt(a.dataset.price) || 0;
        const bPrice = parseInt(b.dataset.price) || 0;
        const aName = a.querySelector('h3')?.textContent || '';
        const bName = b.querySelector('h3')?.textContent || '';

        switch (sortSelect.value) {
          case 'price-low': return aPrice - bPrice;
          case 'price-high': return bPrice - aPrice;
          case 'name': return aName.localeCompare(bName);
          case 'newest': return 0;
          default: return 0;
        }
      });

      visible.forEach(card => container.appendChild(card));
    });
  }
}

function initSearch() {
  const searchForms = document.querySelectorAll('.hero-search, .header-search');
  searchForms.forEach(form => {
    const input = form.querySelector('input');
    const button = form.querySelector('button');
    if (input && button) {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const query = input.value.trim().toLowerCase();
        if (!query) return;

        const cards = document.querySelectorAll('.template-card');
        let found = false;

        cards.forEach(card => {
          const title = card.querySelector('h3')?.textContent?.toLowerCase() || '';
          const category = card.querySelector('.card-category')?.textContent?.toLowerCase() || '';
          const match = title.includes(query) || category.includes(query);

          if (window.location.pathname.includes('templates') || window.location.pathname.includes('index') || window.location.pathname === '/' || window.location.pathname === '') {
            card.style.display = match ? '' : 'none';
            if (match) found = true;
          }
        });

        if (!found && (window.location.pathname.includes('templates') || cards.length > 0)) {
          const grid = document.querySelector('.templates-grid');
          if (grid) {
            const existing = grid.querySelector('.no-results');
            if (existing) existing.remove();
            const msg = document.createElement('p');
            msg.className = 'no-results';
            msg.textContent = `No templates found for "${query}". Try a different search.`;
            msg.style.cssText = 'grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--gray-500); font-size: 16px;';
            grid.appendChild(msg);
          }
        }
      });

      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') button.click();
      });
    }
  });
}
