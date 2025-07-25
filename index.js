const wrapper = document.querySelector(".cv-wrapper");

// === HERO ===
const hero = document.createElement("section");
hero.className = "hero";
hero.id = "about";
hero.innerHTML = `
  <div class="hero-img">
    <img src="cv.jpg" alt="Profile Picture">
  </div>
  <div class="hero-content">
    <h2>Hello, I'm</h2>
    <h1 class="typewriter">Matthew Smith</h1>
    <p>Software Developer | Student | Creator</p>
    <div class="cta-buttons">
      <button class="theme-toggle">🌓 Toggle Theme</button>
      <button class="download-btn">📄 Download PDF</button>
      <a class="github-btn" href="https://github.com/mattys1908" target="_blank" >💻 View GitHub</a>
    </div>
  </div>
`;
wrapper.appendChild(hero);

// === SECTION CREATOR ===
function createSection(id, label, htmlContent) {
  const section = document.createElement("section");
  section.className = "section";
  section.id = id;
  section.innerHTML = `
    <h2>${label}</h2>
    <div class="content">${htmlContent}</div>
  `;
  return section;
}

// === ABOUT ===
wrapper.appendChild(createSection("about-profile", "About Me", `
  <p>I am a passionate and versatile developer with a strong interest in both front-end and back-end development. I enjoy building and improving applications, and I am particularly enthusiastic about contributing to real-world software solutions and exploring opportunities in game development. Throughout my university journey, I have worked on various academic and personal projects, many of which are available on my GitHub portfolio. I am eager to apply my technical skills, creativity, and commitment to continuous learning in a collaborative and growth-focused development environment.</p>
`));

// === EXPERIENCE ===
wrapper.appendChild(createSection("experience", "Work Experience", `
  <h3>Tech Support at Le Pommier Wine Estate</h3>
  <p><em>2021 – Present</em></p>
  <p>Assisted with the installation and setup of hardware including computer screens, printers, and peripherals across various departments.
Provided technical support during the rollout of new office equipment and troubleshooting connectivity issues.
Supported the HR and management teams by generating AI-powered employee performance reviews aligned with detailed job descriptions.
Gained hands-on experience in IT support, system setup, and the integration of AI tools within a hospitality business environment.</p>
`));

// === SKILLS ===
wrapper.appendChild(createSection("skills", "Key Skills", `
  <ul class="skills-list">
    <li>JavaScript</li><li>Python</li><li>Node.js</li><li>C#</li>
    <li>SQL</li><li>CSS</li><li>Git</li><li>Unity</li><li>C++</li>
  </ul>
`));

// === PROJECTS ===
wrapper.appendChild(createSection("projects", "Projects", `
  <div class="projects-grid">
    <!-- Student Login Project -->
    <div class="project-card">
      <img src="Project1.1.png" alt="Student Login Preview" class="project-image"/>
      <h3>Student Login</h3>
      <p>Student Login/Registration webpage to access a student dashboard.</p>
      <a href="https://github.com/mattys1908/PRG381_Milestone1" target="_blank" aria-label="GitHub">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub Logo" class="github-icon"/>
      </a>
    </div>

    <!-- Community Portal Web App -->
    <div class="project-card">
      <img src="Project2.png" alt="Community Portal Screenshot" class="project-image"/>
      <h3>Community Portal</h3>
      <p>A full-stack web app using Node.js and EJS for local event sharing and updates.</p>
      <a href="https://github.com/mattys1908/WPR381" target="_blank" aria-label="GitHub">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub Logo" class="github-icon"/>
      </a>
    </div>

    <!-- WWW vs The Internet Web App -->
    <div class="project-card">
      <img src="Project3.jpg" alt="WWW vs Internet Preview" class="project-image"/>
      <h3>WWW vs The Internet</h3>
      <p>Introductory web app explaining key differences between the Internet and the Web.</p>
      <a href="https://github.com/mattys1908/Web-Application-WPR181" target="_blank" aria-label="GitHub">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub Logo" class="github-icon"/>
      </a>
    </div>
  </div>
`));



// === EDUCATION ===
wrapper.appendChild(createSection("education", "Education", `
  <h3>Belgium Campus ITversity</h3>
  <p><strong>Bachelor of Computing - Software Engineering</strong></p>
  <p>Expected Graduation 2026</p>

  <h3>CTU Training Solutions</h3>
  <p><strong>Software Development Fundamentals</strong></p>
  <p>Completed 1 year at the Stellenbosch campus (2022)</p>
`));

// === CONTACT ===
wrapper.appendChild(createSection("contact", "Contact", `
  <p>Email: <a href="mailto:mattys1908@gmail.com">mattys1908@gmail.com</a></p>
  <p>Phone: 079 693 3776</p>
  <p>linkedin: <a href="https://www.linkedin.com/in/matthew-smith-1bb42b26b/"> Matthew Smith </p>
`));

// === THEME TOGGLE ===
const themeToggle = hero.querySelector('.theme-toggle');
themeToggle.onclick = () => {
  document.body.classList.toggle('dark');
  const dark = document.body.classList.contains('dark');
  themeToggle.textContent = dark ? '🌞 Light Mode' : '🌙 Dark Mode';
};

// === PDF Button ===
hero.querySelector('.download-btn').onclick = () => window.print();

// === SCROLL ANIMATIONS ===
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible'); // Only add, don't remove
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.section, .skills-list li, .project-card').forEach(el => observer.observe(el));


// === TYPEWRITER ANIMATION ===
const typewriter = document.querySelector('.typewriter');
let text = typewriter.textContent;
typewriter.textContent = '';
let i = 0;
function typeChar() {
  if (i < text.length) {
    typewriter.textContent += text.charAt(i);
    i++;
    setTimeout(typeChar, 100);
  }
}
typeChar();

// === SCROLL TO TOP BUTTON ===
const scrollBtn = document.createElement("button");
scrollBtn.textContent = "⬆ Top";
scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "30px";
scrollBtn.style.right = "30px";
scrollBtn.style.padding = "10px 14px";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "50px";
scrollBtn.style.background = "#3b82f6";
scrollBtn.style.color = "#fff";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.boxShadow = "0 2px 6px rgba(0,0,0,0.2)";
scrollBtn.style.display = "none";
scrollBtn.style.zIndex = "1000";
document.body.appendChild(scrollBtn);

scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

const skillItems = document.querySelectorAll('.skills-list li');
skillItems.forEach((item, index) => {
  item.style.animationDelay = `${index * 100}ms`;
});
