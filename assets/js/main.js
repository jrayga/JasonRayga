/* ============================================================
   Portfolio Data
   Required: title, shortDesc, desc, img, url
   Optional: linkLabel + linkIcon (when the link is not the project's own
             site), role (string), stack (string[]), screenshot ({src, alt})
   ============================================================ */
const PORTFOLIO = [
  {
    title: "RATS — Recruiters Applicant Tracking Software",
    shortDesc:
      "The first Filipino-developed Applicant Tracking Software and Resume Bank — a centralised platform for managing job applications, candidate sourcing, and hiring analytics.",
    desc: "RATS proudly stands as the pioneering Filipino-developed Applicant Tracking Software and Resume Bank. It provides recruiters and companies with a centralised platform to manage job applications, track candidate progress, and source talent from a curated resume bank. Its intuitive interface simplifies the screening and evaluation of resumes, ensuring recruiters can quickly identify top talent and make informed hiring decisions. Beyond its core features, RATS offers advanced analytics and reporting tools, enabling recruiters to gain valuable insights into their recruitment metrics and optimise their hiring strategy based on real-time data.",
    img: "./assets/img/RATSLogo.png",
    url: "https://www.linkedin.com/in/rats-global-5a79a3145/",
    linkLabel: "LinkedIn",
    linkIcon: "fab fa-linkedin-in",
  },
  {
    title: "Q App",
    shortDesc:
      "A mobile app that lets commuters virtually queue for UV Express seats, with real-time GPS tracking, estimated wait times, and boarding notifications.",
    desc: "Queue is a mobile application available for iOS and Android that transforms the way commuters secure seats in UV Express terminals. Using advanced GPS technology and real-time data, passengers can virtually queue for their desired route, receive accurate estimated waiting times, and get notified as their boarding time approaches — eliminating the need to physically wait in line. The app also lets you track the live location of your approaching UV Express vehicle, so you can plan your departure and avoid unnecessary wait times at the terminal.",
    img: "./assets/img/queue_logo.png",
    url: "https://q.inciteasia.co",
  },
  {
    title: "DaGAT — Data Gathering & Analytics Tool",
    shortDesc:
      "A web-based sustainability platform empowering organisations to collect, analyse, and visualise environmental performance data through an intuitive dashboard.",
    desc: "DAGAT is an innovative web-based platform developed by BSD designed to revolutionise sustainability data gathering. It empowers organisations to collect, analyse, and visualise sustainability data with ease, replacing manual and disparate data sources with a centralised and efficient process. The platform offers powerful analysis capabilities that uncover valuable insights and identify key trends in sustainability performance, alongside intuitive visualisation tools that transform complex datasets into compelling charts and reports — making it easier to communicate progress and engage stakeholders effectively.",
    img: "./assets/img/dagat-icon.png",
    url: "https://bsdph.org/",
  },
  {
    title: "SDGs Our Biz Sustainability Web Tool",
    shortDesc:
      "Tracks how Philippine businesses contribute to the UN Sustainable Development Goals, with interactive charts, company profiles, and knowledge-sharing tools.",
    desc: "SDGs Our Biz is a web-based platform offering a comprehensive overview of how Philippine businesses are actively contributing to the Sustainable Development Goals. The tool provides detailed company profiles highlighting specific contributions to each SDG, alongside interactive charts, graphs, and maps for comparing sustainability performance across sectors. It also serves as a knowledge-sharing hub where companies can share best practices, success stories, and lessons learned — fostering a collaborative ecosystem focused on sustainable development across the Philippines.",
    img: "./assets/img/sdgbizphbiz_logo_blue.png",
    url: "https://sdgsbiz.ph/docroot/",
  },
  {
    title: "Project Moses",
    shortDesc:
      "A crisis response toolbox for Filipinos during calamities — connecting first-responders with real-time verified information to combat misinformation.",
    desc: "Project Moses is a Crisis Response Toolbox that aims to be an all-in-one platform for Filipinos in times of calamity and crisis. It is a publicly accessible collaboration toolbox using Information Communication Technology (ICT) to connect crisis response actors and provide real-time, verified information. The platform addresses the lack of relevant and timely data during emergencies, helping to stop the spread of misinformation, assuage public fears, communicate risk clearly, and support effective coordination between government agencies, NGOs, and communities.",
    img: "./assets/img/project-moses.jpg",
    url: "https://www.projectmoses.ph/",
  },
  {
    title: "Kandado",
    shortDesc:
      "A password generator using advanced algorithms to create secure, unique passwords. Customisable length and character sets to protect your online accounts.",
    desc: "Kandado is a powerful password generator app that uses advanced algorithms and a reference database of common passwords to create credentials that are virtually impossible to crack. Simply set the desired password length and customise the character sets you want to include — uppercase, lowercase, numbers, and symbols — and Kandado does the rest. Designed with security and simplicity in mind, the app helps users protect all their online accounts with strong, unique passwords without the need to remember them manually.",
    img: "./assets/img/kandado.png",
    url: "https://drive.google.com/file/d/1g1gpwSCxF_QKYeDuVF3r9f41cRXWhmtI/view?usp=sharing",
    linkLabel: "Google Drive",
    linkIcon: "fab fa-google-drive",
  },
];

/* ============================================================
   Render Portfolio Cards
   (PORTFOLIO is first-party static data, so template interpolation is safe)
   ============================================================ */
function renderPortfolio() {
  const grid = document.getElementById("portfolio-grid");
  if (!grid) return;

  grid.innerHTML = PORTFOLIO.map((p, i) => {
    const label = p.linkLabel || "Visit";
    const icon = p.linkIcon || "fa fa-globe";
    return `
    <article class="portfolio-card reveal" data-index="${i}">
      <div class="portfolio-card-img">
        <img src="${p.img}" alt="" loading="lazy" />
      </div>
      <div class="portfolio-card-body">
        <h3 class="portfolio-card-title">${p.title}</h3>
        <p class="portfolio-card-desc">${p.shortDesc}</p>
        <div class="portfolio-card-actions">
          <button type="button" class="portfolio-card-more" aria-haspopup="dialog" aria-label="Read more about ${p.title}">
            Read more <i class="fas fa-chevron-right" aria-hidden="true"></i>
          </button>
          <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="portfolio-card-link" aria-label="${label}: ${p.title} (opens in a new tab)">
            <i class="${icon}" aria-hidden="true"></i> ${label}
          </a>
        </div>
      </div>
    </article>
  `;
  }).join("");

  // Event delegation. The "Read more" button is the keyboard/screen-reader
  // entry point; clicking anywhere else on the card (mouse convenience)
  // opens the same dialog. Links keep their normal behaviour.
  grid.addEventListener("click", (e) => {
    if (e.target.closest(".portfolio-card-link")) return;
    const card = e.target.closest(".portfolio-card");
    if (!card) return;
    const trigger = card.querySelector(".portfolio-card-more");
    openModal(PORTFOLIO[parseInt(card.dataset.index, 10)], trigger);
  });
}

/* ============================================================
   Portfolio Modal
   ============================================================ */
let modalTrigger = null;
let inertedEls = [];

function createModal() {
  const el = document.createElement("div");
  el.id = "portfolio-modal";
  el.className = "modal-backdrop";
  el.setAttribute("role", "dialog");
  el.setAttribute("aria-modal", "true");
  el.setAttribute("aria-labelledby", "modal-title");
  el.innerHTML = `
    <div class="modal">
      <button type="button" class="modal-close" aria-label="Close project details">
        <i class="fas fa-times" aria-hidden="true"></i>
      </button>
      <div class="modal-img">
        <img id="modal-img" src="" alt="" />
      </div>
      <div class="modal-body">
        <h2 class="modal-title" id="modal-title"></h2>
        <p class="modal-desc" id="modal-desc"></p>
        <p class="modal-meta" id="modal-role" hidden></p>
        <ul class="tag-list" id="modal-stack" aria-label="Technologies used" hidden></ul>
        <figure class="modal-shot" id="modal-shot" hidden>
          <img id="modal-shot-img" src="" alt="" loading="lazy" />
        </figure>
        <a id="modal-link" href="#" target="_blank" rel="noopener noreferrer" class="btn btn-primary"></a>
      </div>
    </div>
  `;
  document.body.appendChild(el);

  el.querySelector(".modal-close").addEventListener("click", closeModal);
  el.addEventListener("click", (e) => {
    if (e.target === el) closeModal();
  });

  // One keydown handler: Escape closes, Tab is trapped inside the dialog.
  document.addEventListener("keydown", (e) => {
    if (!el.classList.contains("open")) return;
    if (e.key === "Escape") {
      closeModal();
      return;
    }
    if (e.key !== "Tab") return;
    const focusable = [
      ...el.querySelectorAll("a[href], button:not([disabled])"),
    ].filter((n) => n.offsetParent !== null);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (!el.contains(document.activeElement)) {
      e.preventDefault();
      first.focus();
    } else if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });

  return el;
}

function openModal(project, trigger) {
  const backdrop = document.getElementById("portfolio-modal") || createModal();
  modalTrigger = trigger || document.activeElement;

  const img = document.getElementById("modal-img");
  img.src = project.img;
  img.alt = "";
  document.getElementById("modal-title").textContent = project.title;
  document.getElementById("modal-desc").textContent = project.desc;

  // Optional fields — only rendered when the project defines them
  const role = document.getElementById("modal-role");
  role.hidden = !project.role;
  role.textContent = "";
  if (project.role) {
    const strong = document.createElement("strong");
    strong.textContent = "My role";
    role.append(strong, project.role);
  }

  const stack = document.getElementById("modal-stack");
  stack.replaceChildren(
    ...(project.stack || []).map((t) => {
      const li = document.createElement("li");
      li.textContent = t;
      return li;
    }),
  );
  stack.hidden = !(project.stack && project.stack.length);

  const shot = document.getElementById("modal-shot");
  shot.hidden = !project.screenshot;
  if (project.screenshot) {
    const shotImg = document.getElementById("modal-shot-img");
    shotImg.src = project.screenshot.src;
    shotImg.alt = project.screenshot.alt || "";
  }

  const link = document.getElementById("modal-link");
  link.href = project.url;
  const linkIcon = document.createElement("i");
  linkIcon.className = project.linkIcon || "fa fa-globe";
  linkIcon.setAttribute("aria-hidden", "true");
  link.replaceChildren(
    linkIcon,
    project.linkLabel ? ` View on ${project.linkLabel}` : " Visit Project",
  );

  // Make everything behind the dialog unreachable (keyboard + screen reader)
  inertedEls = [...document.body.children].filter(
    (n) => n !== backdrop && n.tagName !== "SCRIPT",
  );
  inertedEls.forEach((n) => (n.inert = true));

  backdrop.classList.add("open");
  document.body.style.overflow = "hidden";
  backdrop.querySelector(".modal-close").focus();
}

function closeModal() {
  const backdrop = document.getElementById("portfolio-modal");
  if (!backdrop || !backdrop.classList.contains("open")) return;
  backdrop.classList.remove("open");
  document.body.style.overflow = "";
  inertedEls.forEach((n) => (n.inert = false));
  inertedEls = [];
  if (modalTrigger && document.contains(modalTrigger)) modalTrigger.focus();
  modalTrigger = null;
}

/* ============================================================
   Navbar: scroll shadow + mobile menu
   ============================================================ */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".nav-menu");

  window.addEventListener(
    "scroll",
    () => {
      navbar.classList.toggle("scrolled", window.scrollY > 50);
    },
    { passive: true },
  );

  function closeMenu() {
    menu.classList.remove("open");
    toggle.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
    document.body.style.overflow = "";
  }

  toggle.addEventListener("click", () => {
    const isOpen = !menu.classList.contains("open");
    if (isOpen) {
      menu.classList.add("open");
      toggle.classList.add("open");
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "Close menu");
      document.body.style.overflow = "hidden";
    } else {
      closeMenu();
    }
  });

  // Escape closes the open mobile menu and returns focus to the toggle
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.classList.contains("open")) {
      closeMenu();
      toggle.focus();
    }
  });

  // Don't leave the scroll lock on if the viewport grows past the breakpoint
  window.matchMedia("(min-width: 769px)").addEventListener("change", (e) => {
    if (e.matches) closeMenu();
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
  if (!("IntersectionObserver" in window)) {
    document
      .querySelectorAll(".reveal")
      .forEach((el) => el.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

/* ============================================================
   Skill Bars — animate fill on scroll into view
   ============================================================ */
function initSkillBars() {
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".skill-bar").forEach((el) => {
      el.querySelector(".skill-fill").style.width = el.dataset.level + "%";
    });
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const level = entry.target.dataset.level;
          const fill = entry.target.querySelector(".skill-fill");
          if (fill) fill.style.width = level + "%";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 },
  );

  document.querySelectorAll(".skill-bar").forEach((el) => observer.observe(el));
}

/* ============================================================
   Leaflet Map
   ============================================================ */
function initMap() {
  if (typeof L === "undefined") return;

  // Scroll-wheel zoom is off until the map is clicked/focused, so scrolling
  // the page with a mouse wheel isn't captured when passing over the map.
  const map = L.map("map", {
    scrollWheelZoom: false,
    zoomControl: false,
  });
  map.on("focus", () => map.scrollWheelZoom.enable());
  map.on("blur", () => map.scrollWheelZoom.disable());

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors",
  }).addTo(map);

  const coords = [14.5995, 120.9842]; // Manila, Philippines
  map.setView(coords, 11);

  L.marker(coords, { alt: "Manila, Philippines" })
    .addTo(map)
    .bindPopup("<strong>Manila, Philippines</strong>", {
      closeButton: false,
    })
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
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function syncToggleIcon() {
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;
  const isDark = getActiveTheme() === "dark";
  btn.querySelector("i").className = isDark ? "fas fa-sun" : "fas fa-moon";
  btn.setAttribute(
    "aria-label",
    isDark ? "Switch to light mode" : "Switch to dark mode",
  );
}

function initTheme() {
  syncToggleIcon();

  document.getElementById("theme-toggle")?.addEventListener("click", () => {
    const next = getActiveTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
    syncToggleIcon();
  });

  // Keep icon in sync if the OS preference changes while the page is open
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", syncToggleIcon);
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
