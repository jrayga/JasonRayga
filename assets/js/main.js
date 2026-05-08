/* ============================================================
   Portfolio Data
   ============================================================ */
const PORTFOLIO = [
  {
    title: "RATS — Recruiters Applicant Tracking Software",
    shortDesc: "The first Filipino-developed Applicant Tracking Software and Resume Bank — a centralised platform for managing job applications, candidate sourcing, and hiring analytics.",
    desc: "RATS proudly stands as the pioneering Filipino-developed Applicant Tracking Software and Resume Bank. It provides recruiters and companies with a centralised platform to manage job applications, track candidate progress, and source talent from a curated resume bank. Its intuitive interface simplifies the screening and evaluation of resumes, ensuring recruiters can quickly identify top talent and make informed hiring decisions. Beyond its core features, RATS offers advanced analytics and reporting tools, enabling recruiters to gain valuable insights into their recruitment metrics and optimise their hiring strategy based on real-time data.",
    img: "./assets/img/RATSLogo.png",
    url: "https://www.linkedin.com/in/rats-global-5a79a3145/",
  },
  {
    title: "Q App",
    shortDesc: "A mobile app that lets commuters virtually queue for UV Express seats, with real-time GPS tracking, estimated wait times, and boarding notifications.",
    desc: "Queue is a mobile application available for iOS and Android that transforms the way commuters secure seats in UV Express terminals. Using advanced GPS technology and real-time data, passengers can virtually queue for their desired route, receive accurate estimated waiting times, and get notified as their boarding time approaches — eliminating the need to physically wait in line. The app also lets you track the live location of your approaching UV Express vehicle, so you can plan your departure and avoid unnecessary wait times at the terminal.",
    img: "./assets/img/queue_logo.png",
    url: "https://q.inciteasia.co",
  },
  {
    title: "DaGAT — Data Gathering & Analytics Tool",
    shortDesc: "A web-based sustainability platform empowering organisations to collect, analyse, and visualise environmental performance data through an intuitive dashboard.",
    desc: "DAGAT is an innovative web-based platform developed by BSD designed to revolutionise sustainability data gathering. It empowers organisations to collect, analyse, and visualise sustainability data with ease, replacing manual and disparate data sources with a centralised and efficient process. The platform offers powerful analysis capabilities that uncover valuable insights and identify key trends in sustainability performance, alongside intuitive visualisation tools that transform complex datasets into compelling charts and reports — making it easier to communicate progress and engage stakeholders effectively.",
    img: "./assets/img/dagat-icon.png",
    url: "https://bsdph.org/",
  },
  {
    title: "SDGs Our Biz Sustainability Web Tool",
    shortDesc: "Tracks how Philippine businesses contribute to the UN Sustainable Development Goals, with interactive charts, company profiles, and knowledge-sharing tools.",
    desc: "SDGs Our Biz is a web-based platform offering a comprehensive overview of how Philippine businesses are actively contributing to the Sustainable Development Goals. The tool provides detailed company profiles highlighting specific contributions to each SDG, alongside interactive charts, graphs, and maps for comparing sustainability performance across sectors. It also serves as a knowledge-sharing hub where companies can share best practices, success stories, and lessons learned — fostering a collaborative ecosystem focused on sustainable development across the Philippines.",
    img: "./assets/img/sdgbizphbiz_logo_blue.png",
    url: "https://sdgsbiz.ph/docroot/",
  },
  {
    title: "Project Moses",
    shortDesc: "A crisis response toolbox for Filipinos during calamities — connecting first-responders with real-time verified information to combat misinformation.",
    desc: "Project Moses is a Crisis Response Toolbox that aims to be an all-in-one platform for Filipinos in times of calamity and crisis. It is a publicly accessible collaboration toolbox using Information Communication Technology (ICT) to connect crisis response actors and provide real-time, verified information. The platform addresses the lack of relevant and timely data during emergencies, helping to stop the spread of misinformation, assuage public fears, communicate risk clearly, and support effective coordination between government agencies, NGOs, and communities.",
    img: "./assets/img/project-moses.jpg",
    url: "https://www.projectmoses.ph/",
  },
  {
    title: "Kandado",
    shortDesc: "A password generator using advanced algorithms to create secure, unique passwords. Customisable length and character sets to protect your online accounts.",
    desc: "Kandado is a powerful password generator app that uses advanced algorithms and a reference database of common passwords to create credentials that are virtually impossible to crack. Simply set the desired password length and customise the character sets you want to include — uppercase, lowercase, numbers, and symbols — and Kandado does the rest. Designed with security and simplicity in mind, the app helps users protect all their online accounts with strong, unique passwords without the need to remember them manually.",
    img: "./assets/img/kandado.jpg",
    url: "https://drive.google.com/file/d/1g1gpwSCxF_QKYeDuVF3r9f41cRXWhmtI/view?usp=sharing",
  },
];

/* ============================================================
   Render Portfolio Cards
   ============================================================ */
function renderPortfolio() {
  const grid = document.getElementById("portfolio-grid");
  if (!grid) return;

  grid.innerHTML = PORTFOLIO.map((p, i) => `
    <div class="portfolio-card reveal" data-index="${i}" role="button" tabindex="0" aria-label="Read more about ${p.title}">
      <div class="portfolio-card-img">
        <img src="${p.img}" alt="${p.title}" loading="lazy" />
      </div>
      <div class="portfolio-card-body">
        <h3 class="portfolio-card-title">${p.title}</h3>
        <p class="portfolio-card-desc">${p.shortDesc}</p>
        <div class="portfolio-card-actions">
          <span class="portfolio-card-more">Read more <i class="fas fa-chevron-right" aria-hidden="true"></i></span>
          <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="portfolio-card-link">
            <i class="fa fa-globe" aria-hidden="true"></i> Visit
          </a>
        </div>
      </div>
    </div>
  `).join("");

  // Event delegation — open modal on card click, but not when clicking Visit
  grid.addEventListener("click", (e) => {
    if (e.target.closest(".portfolio-card-link")) return;
    const card = e.target.closest(".portfolio-card");
    if (!card) return;
    openModal(PORTFOLIO[parseInt(card.dataset.index)]);
  });

  grid.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const card = e.target.closest(".portfolio-card");
    if (!card) return;
    e.preventDefault();
    openModal(PORTFOLIO[parseInt(card.dataset.index)]);
  });
}

/* ============================================================
   Portfolio Modal
   ============================================================ */
function createModal() {
  const el = document.createElement("div");
  el.id = "portfolio-modal";
  el.className = "modal-backdrop";
  el.setAttribute("role", "dialog");
  el.setAttribute("aria-modal", "true");
  el.setAttribute("aria-hidden", "true");
  el.innerHTML = `
    <div class="modal" role="document">
      <button class="modal-close" aria-label="Close">
        <i class="fas fa-times" aria-hidden="true"></i>
      </button>
      <div class="modal-img">
        <img id="modal-img" src="" alt="" />
      </div>
      <div class="modal-body">
        <h2 class="modal-title" id="modal-title"></h2>
        <p class="modal-desc" id="modal-desc"></p>
        <a id="modal-link" href="#" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
          <i class="fa fa-globe" aria-hidden="true"></i> Visit Project
        </a>
      </div>
    </div>
  `;
  document.body.appendChild(el);

  el.querySelector(".modal-close").addEventListener("click", closeModal);
  el.addEventListener("click", (e) => { if (e.target === el) closeModal(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

  return el;
}

function openModal(project) {
  const backdrop = document.getElementById("portfolio-modal") || createModal();
  document.getElementById("modal-img").src = project.img;
  document.getElementById("modal-img").alt = project.title;
  document.getElementById("modal-title").textContent = project.title;
  document.getElementById("modal-desc").textContent = project.desc;
  document.getElementById("modal-link").href = project.url;
  backdrop.setAttribute("aria-hidden", "false");
  backdrop.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const backdrop = document.getElementById("portfolio-modal");
  if (!backdrop) return;
  backdrop.classList.remove("open");
  backdrop.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

/* ============================================================
   Navbar: scroll shadow + mobile menu
   ============================================================ */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const toggle = document.querySelector(".nav-toggle");
  const menu   = document.querySelector(".nav-menu");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  }, { passive: true });

  function closeMenu() {
    menu.classList.remove("open");
    toggle.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  toggle.addEventListener("click", () => {
    const isOpen = !menu.classList.contains("open");
    if (isOpen) {
      menu.classList.add("open");
      toggle.classList.add("open");
      toggle.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
    } else {
      closeMenu();
    }
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Close when tapping the backdrop (outside the links / resume button)
  menu.addEventListener("click", (e) => {
    if (e.target === menu) closeMenu();
  });
}

/* ============================================================
   Intersection Observer — reveal on scroll
   ============================================================ */
function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

/* ============================================================
   Skill Bars — animate fill on scroll into view
   ============================================================ */
function initSkillBars() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const level = entry.target.dataset.level;
          const fill  = entry.target.querySelector(".skill-fill");
          if (fill) fill.style.width = level + "%";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  document.querySelectorAll(".skill-bar").forEach((el) => observer.observe(el));
}

/* ============================================================
   Leaflet Map
   ============================================================ */
function initMap() {
  if (typeof L === "undefined") return;

  const map = L.map("map", {
    scrollWheelZoom: true,
    zoomControl: false,
  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors",
  }).addTo(map);

  const coords = [14.5995, 120.9842]; // Manila, Philippines
  map.setView(coords, 11);

  L.marker(coords)
    .addTo(map)
    .bindPopup("<strong>Manila, Philippines</strong>", { closeButton: false })
    .openPopup();
}

/* ============================================================
   Footer year
   ============================================================ */
function setYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

/* ============================================================
   Theme toggle
   ============================================================ */
function getActiveTheme() {
  const explicit = document.documentElement.getAttribute("data-theme");
  if (explicit === "light" || explicit === "dark") return explicit;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function syncToggleIcon() {
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;
  const isDark = getActiveTheme() === "dark";
  btn.querySelector("i").className = isDark ? "fas fa-sun" : "fas fa-moon";
  btn.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
}

function initTheme() {
  syncToggleIcon();

  document.getElementById("theme-toggle")?.addEventListener("click", () => {
    const next = getActiveTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    syncToggleIcon();
  });

  // Keep icon in sync if the OS preference changes while the page is open
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", syncToggleIcon);
}

/* ============================================================
   Init
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  setYear();
  renderPortfolio();
  initReveal();
  initNavbar();
  initSkillBars();
  initMap();
  initTheme();
});
