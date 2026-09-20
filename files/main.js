/* ==========================================================================
   Wren Ashcombe — shared site behavior
   Two small jobs:
     1. Toggle the mobile nav panel open/closed.
     2. Mark the current page's nav link as active.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const isOpen = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close the mobile menu after a link is chosen
    links.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        links.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 2. Highlight the current page in the nav
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach((link) => {
    const linkPath = link.getAttribute('href');
    if (linkPath === currentPath) {
      link.classList.add('is-active');
    }
  });
});
