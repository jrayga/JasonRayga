/* ============================================================
   Portfolio Data
   ============================================================ */
const PORTFOLIO = [
  {
    title: "RATS — Recruiters Applicant Tracking Software",
    shortDesc: "The first Filipino-developed Applicant Tracking Software and Resume Bank — a centralised platform for managing job applications, candidate sourcing, and hiring analytics.",
    img: "./assets/img/RATSLogo.png",
    url: "https://www.linkedin.com/in/rats-global-5a79a3145/",
  },
  {
    title: "Q App",
    shortDesc: "A mobile app that lets commuters virtually queue for UV Express seats, with real-time GPS tracking, estimated wait times, and boarding notifications.",
    img: "./assets/img/queue_logo.png",
    url: "https://q.inciteasia.co",
  },
  {
    title: "DaGAT — Data Gathering & Analytics Tool",
    shortDesc: "A web-based sustainability platform empowering organisations to collect, analyse, and visualise environmental performance data through an intuitive dashboard.",
    img: "./assets/img/dagat-icon.png",
    url: "https://bsdph.org/",
  },
  {
    title: "SDGs Our Biz Sustainability Web Tool",
    shortDesc: "Tracks how Philippine businesses contribute to the UN Sustainable Development Goals, with interactive charts, company profiles, and knowledge-sharing tools.",
    img: "./assets/img/sdgbizphbiz_logo_blue.png",
    url: "https://sdgsbiz.ph/docroot/",
  },
  {
    title: "Project Moses",
    shortDesc: "A crisis response toolbox for Filipinos during calamities — connecting first-responders with real-time verified information to combat misinformation.",
    img: "./assets/img/project-moses.jpg",
    url: "https://www.projectmoses.ph/",
  },
  {
    title: "Kandado",
    shortDesc: "A password generator using advanced algorithms to create secure, unique passwords. Customisable length and character sets to protect your online accounts.",
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

  grid.innerHTML = PORTFOLIO.map((p) => `
    <div class="portfolio-card reveal">
      <div class="portfolio-card-img">
        <img src="${p.img}" alt="${p.title}" loading="lazy" />
      </div>
      <div class="portfolio-card-body">
        <h3 class="portfolio-card-title">${p.title}</h3>
        <p class="portfolio-card-desc">${p.shortDesc}</p>
        <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="portfolio-card-link">
          <i class="fa fa-globe" aria-hidden="true"></i> Visit
        </a>
      </div>
    </div>
  `).join("");
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
    scrollWheelZoom: false,
    zoomControl: true,
  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors",
  }).addTo(map);

  const coords = [14.5995, 120.9842]; // Manila, Philippines
  map.setView(coords, 11);

  L.marker(coords)
    .addTo(map)
    .bindPopup("<strong>Manila, Philippines</strong>")
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
   Init
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  setYear();
  renderPortfolio();
  initReveal();
  initNavbar();
  initSkillBars();
  initMap();
});
