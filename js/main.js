// Mobile nav toggle
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
hamburger?.addEventListener('click', () => nav.classList.toggle('open'));

// Dark mode toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle?.addEventListener('click', () => {
  document.documentElement.classList.toggle('light');
  themeToggle.textContent = document.documentElement.classList.contains('light') ? '☀️' : '🌙';
});

// Projects filter
document.querySelectorAll('.chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    const filter = chip.dataset.filter;
    document.querySelectorAll('.project').forEach(card => {
      if (filter === 'all' || card.dataset.tags.includes(filter)) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Set current year
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form -> mailto
function openMail(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const subject = encodeURIComponent('Portfolio enquiry from ' + name);
  const body = encodeURIComponent(message + '\n\nFrom: ' + name + ' (' + email + ')');
  window.location.href = 'mailto:kachamrohith1819@gmail.com?subject=' + subject + '&body=' + body;
  return false;
}

// Animate sections on scroll (repeats every time)
const sections = document.querySelectorAll("section, footer");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "none"; // reset
      void entry.target.offsetWidth; // trigger reflow
      entry.target.style.animation = ""; // restore CSS animation
    }
  });
}, { threshold: 0.2 });

sections.forEach(sec => observer.observe(sec));
