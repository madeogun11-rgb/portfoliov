const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.querySelector('.theme-icon');

menuToggle?.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.site-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

themeToggle?.addEventListener('click', () => {
  const isLight = document.body.classList.toggle('light-theme');
  themeToggle.setAttribute('aria-label', isLight ? 'Switch to dark theme' : 'Switch to light theme');
  themeIcon.textContent = isLight ? '◑' : '◐';
});

const revealItems = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealItems.forEach((item) => revealObserver.observe(item));

const portfolioProjects = [
  {
    category: 'web',
    type: 'University attendance portal',
    name: 'EAUE Attendance Portal',
    description: 'A practical faculty and student attendance portal for the Economics Department at Emmanuel Alayande University of Education, built for streamlined login, role-based access and class tracking.',
    url: 'https://njhn.vercel.app/',
    visual: 'njhn-visual',
    label: 'Access / Track / Learn',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    category: 'web',
    type: 'School attendance system',
    name: 'School Attendance',
    description: 'A clean attendance management website for schools, helping staff track student presence, daily records and classroom monitoring with a straightforward user experience.',
    url: 'https://school-attandance.vercel.app/',
    visual: 'school-visual',
    label: 'Track / Monitor / Learn',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80'
  },
  {
    category: 'web',
    type: 'Fashion brand portfolio',
    name: 'Adetayo Stitches',
    description: 'A refined fashion and atelier portfolio for Adeoye Aishat Adetayo, showcasing elegant African-inspired tailoring and made-to-fit styling.',
    url: 'https://aisha-portfolio-one.vercel.app/',
    visual: 'aisha-visual',
    label: 'Confidence in every stitch',
    image: 'https://aisha-portfolio-one.vercel.app/assets/black-scarf-look.jpeg'
  },
  {
    category: 'web',
    type: 'Interactive experience',
    name: 'A Special Birthday Surprise',
    description: 'A beautifully designed interactive birthday website filled with heartfelt messages, memorable moments, beautiful visuals and delightful surprises.',
    url: 'https://happy-birthdayyy-rho.vercel.app/',
    visual: 'birthday-visual',
    label: 'Celebrate / Remember / Surprise',
    image: 'images/Birthday Celebration Decor for Girlfriend at Home _ Romantic Surprise Ideas.jpg'
  },
  {
    category: 'web',
    type: 'Lifestyle e-commerce',
    name: 'Aureline',
    description: 'A minimalist lifestyle website showcasing thoughtfully designed objects that bring warmth, simplicity and calm into everyday living.',
    url: 'https://e-commerce-henna-eight-59.vercel.app/',
    visual: 'aureline-visual',
    label: 'Objects for a slower home',
    image: 'images/The Art of Soft Clean Luxury Living.jpg'
  },
  {
    category: 'ui',
    type: 'Productivity app',
    name: 'Todo App by Abra',
    description: 'A sleek productivity app for adding, tracking, completing and managing everyday tasks through a focused, simple interface.',
    url: 'https://todo-app-tan-nine.vercel.app/',
    visual: 'todo-visual',
    label: 'Plan / Focus / Finish',
    image: 'images/To-Do List App _ UI_UX _ App Design - anchal yadav.jpg'
  },
  {
    category: 'web',
    type: 'Food & hospitality',
    name: 'Rommy Catering Service',
    description: 'A vibrant catering website designed to showcase delicious meals, catering packages and exceptional food services for memorable events.',
    url: 'https://rommy-catering-services.lovable.app/',
    visual: 'rommy-visual',
    label: 'Good food / Good moments',
    image: 'images/download.jpg'
  },
  {
    category: 'ui',
    type: 'Community platform',
    name: 'Common Thread',
    description: 'A modern digital space connecting people, ideas and shared experiences through a clean and welcoming user experience.',
    url: 'https://common-thread-phi.vercel.app/',
    visual: 'thread-visual',
    label: 'Connect / Create / Share',
    image: 'images/String,twine,thread in black & white.jpg'
  },
  {
    category: 'web',
    type: 'Culture & lifestyle',
    name: 'Sweet Union',
    description: 'A warm and elegant website bringing people, moments and experiences together with a modern visual style and smooth experience.',
    url: 'https://sweetunion.africa/',
    visual: 'sweet-visual',
    label: 'Together is better',
    image: 'images/download (1).jpg'
  }
];

const projectGrid = document.querySelector('.project-grid');
if (projectGrid) {
  projectGrid.innerHTML = portfolioProjects.map((project, index) => `
    <article class="project-card${index === 0 ? ' project-large' : ''}" data-category="${project.category}">
      <a class="project-visual ${project.visual}" href="${project.url}" target="_blank" rel="noopener noreferrer" aria-label="Open ${project.name} live website">
        <img class="project-image" src="${project.image}" alt="${project.name} project preview" loading="eager"><span class="project-visual-label">${project.label}</span><span class="project-visual-arrow">↗</span>
      </a>
      <div class="project-info"><div><span class="project-type">${project.type}</span><h3>${project.name}</h3></div><span class="project-year">2026</span></div>
      <p>${project.description}</p>
      <div class="project-tools"><span>HTML</span><span>CSS</span><span>JavaScript</span></div>
      <a class="project-live-link" href="${project.url}" target="_blank" rel="noopener noreferrer">Visit live site <span>↗</span></a>
    </article>
  `).join('');
}

const filterButtons = document.querySelectorAll('.filter-button');
const projectCards = document.querySelectorAll('.project-card');
filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((filter) => filter.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    projectCards.forEach((card) => card.classList.toggle('hidden', filter !== 'all' && card.dataset.category !== filter));
  });
});

const words = ['React', 'better UI', 'useful things', 'good vibes'];
const typingText = document.querySelector('#typing-text');
let wordIndex = 0;
let characterIndex = 0;
let deleting = false;
function typeWord() {
  if (!typingText) return;
  const word = words[wordIndex];
  typingText.textContent = deleting ? word.slice(0, characterIndex--) : word.slice(0, characterIndex++);
  let delay = deleting ? 55 : 95;
  if (!deleting && characterIndex > word.length) { deleting = true; delay = 1200; }
  if (deleting && characterIndex < 0) { deleting = false; wordIndex = (wordIndex + 1) % words.length; characterIndex = 0; delay = 250; }
  window.setTimeout(typeWord, delay);
}
typeWord();

const contactForm = document.querySelector('#contact-form');
contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const status = contactForm.querySelector('.form-status');
  status.textContent = 'Thanks. Your enquiry is ready to send.';
  contactForm.reset();
});

const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.site-nav a');
const activeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
  });
}, { rootMargin: '-35% 0px -55% 0px' });
sections.forEach((section) => activeObserver.observe(section));
