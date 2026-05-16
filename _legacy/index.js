import {
  site,
  stats,
  story,
  spotlight,
  projects,
  honors,
  skills,
  experience,
  about,
} from "./content.js";

function $(id) {
  return document.getElementById(id);
}

function esc(s) {
  const d = document.createElement("div");
  d.textContent = s;
  return d.innerHTML;
}

const buildStories = projects.map((p) => ({
  name: p.title,
  title: p.tagline,
  body: p.problem,
  color: p.color,
  links: [
    p.liveUrl && { label: "Visit site →", href: p.liveUrl },
    p.appStoreUrl && { label: "App Store →", href: p.appStoreUrl },
    p.repoUrl && { label: "GitHub →", href: p.repoUrl },
  ].filter(Boolean),
}));

function renderSpotlight() {
  const s = spotlight;
  $("spotlight-content").innerHTML = `
    <div class="spotlight__badge">${esc(s.badge)}</div>
    <p class="spotlight__label">${esc(s.label)}</p>
    <h2 class="spotlight__title">${esc(s.title)}</h2>
    <p class="spotlight__subtitle">${esc(s.subtitle)}</p>
    <p class="spotlight__body">${esc(s.body)}</p>
    <ul class="spotlight__list">
      ${s.highlights.map((h) => `<li>${esc(h)}</li>`).join("")}
    </ul>
    <div class="spotlight__tags">
      ${s.tags.map((t) => `<span>${esc(t)}</span>`).join("")}
    </div>
  `;
}

function renderStory() {
  $("story-headline").textContent = story.headline;
  $("story-body").innerHTML = story.paragraphs
    .map((p) => `<p>${esc(p)}</p>`)
    .join("");
}

function renderStats() {
  $("hero-stats").innerHTML = stats
    .map(
      (s, i) => `
    <div class="stat" data-target="${s.value}" data-prefix="${esc(s.prefix || "")}" data-suffix="${esc(s.suffix || "")}" style="--i: ${i}">
      <p class="stat__value"><span class="stat__prefix"></span><span class="stat__num">0</span><span class="stat__suffix">${esc(s.suffix || "")}</span></p>
      <p class="stat__label">${esc(s.label)}</p>
    </div>`
    )
    .join("");
}

function renderProjectTiles() {
  $("project-tiles").innerHTML = projects
    .filter((p) => p.featured)
    .slice(0, 2)
    .map(
      (p, i) => `
    <article class="bento-card project-tile reveal" style="--accent: ${p.color}; --delay: ${i + 1}">
      <p class="bento-card__label">${p.category === "technical" ? "Product" : "Initiative"}</p>
      <div class="project-tile__visual">${esc(p.imageFallback)}</div>
      <h3 class="project-tile__title">${esc(p.title)}</h3>
      <p class="project-tile__desc">${esc(p.tagline)}</p>
      <p class="project-tile__impact">${esc(p.impact)}</p>
      ${projectLink(p)}
    </article>`
    )
    .join("");
}

function projectLink(p) {
  const href = p.liveUrl || p.appStoreUrl || p.repoUrl;
  if (!href) return "";
  const label = p.appStoreUrl ? "App Store →" : p.liveUrl ? "Open site →" : "Code →";
  return `<a class="project-tile__link" href="${href}" target="_blank" rel="noopener">${label}</a>`;
}

function renderHonors() {
  $("honors-list").innerHTML = honors
    .map(
      (h) => `
    <li class="honors-list__item">
      ${h.tag ? `<span class="honors-list__tag">${esc(h.tag)}</span>` : ""}
      <p class="honors-list__title">${esc(h.title)}</p>
      <p class="honors-list__sub">${esc(h.subtitle)}</p>
      <p class="honors-list__detail">${esc(h.detail)}</p>
      <p class="honors-list__meta">${esc(h.date)}</p>
    </li>`
    )
    .join("");
}

function renderSkills() {
  const labels = { languages: "Languages", frontend: "Frontend", backend: "Backend & AI", tools: "Tools" };
  $("skills-groups").innerHTML = Object.entries(skills)
    .map(
      ([key, items]) => `
    <div class="skill-block">
      <p class="skill-block__label">${labels[key]}</p>
      <div class="skill-block__pills">${items.map((s) => `<span>${esc(s)}</span>`).join("")}</div>
    </div>`
    )
    .join("");
}

function renderExperience() {
  $("exp-list").innerHTML = experience
    .map(
      (e) => `
    <li class="${e.featured ? "is-featured" : ""}">
      <p class="exp-list__title">${esc(e.title)}</p>
      <p class="exp-list__org">${esc(e.org)}</p>
      ${e.highlight ? `<p class="exp-list__highlight">${esc(e.highlight)}</p>` : ""}
      <p class="exp-list__meta">${esc(e.meta)}</p>
    </li>`
    )
    .join("");
}

let buildIndex = 0;

function renderBuild(index, animate = false) {
  buildIndex = index;
  const s = buildStories[index];
  const panel = $("build-panel");

  if (animate) panel.classList.add("is-switching");

  const update = () => {
    $("build-heading").textContent = s.title;
    $("build-body").textContent = s.body;
    document.documentElement.style.setProperty("--build-accent", s.color);

    const links = $("build-links");
    links.innerHTML = s.links
      .map((l) => `<a href="${l.href}" target="_blank" rel="noopener">${esc(l.label)}</a>`)
      .join("");
    links.hidden = !s.links.length;

    $("build-steps").innerHTML = buildStories
      .map(
        (item, i) => `
      <button type="button" class="build-step${i === index ? " is-active" : ""}" data-i="${i}" role="tab">
        ${esc(item.name)}
      </button>`
      )
      .join("");

    panel.classList.remove("is-switching");
  };

  if (animate) setTimeout(update, 180);
  else update();
}

function initBuild() {
  renderBuild(0);
  $("build-steps").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-i]");
    if (!btn || Number(btn.dataset.i) === buildIndex) return;
    renderBuild(Number(btn.dataset.i), true);
  });

  setInterval(() => {
    const next = (buildIndex + 1) % buildStories.length;
    renderBuild(next, true);
  }, 8000);
}

function renderSite() {
  $("brand-email").textContent = site.email;
  $("hero-name").textContent = site.name;
  $("hero-role").textContent = site.role;
  $("hero-org").textContent = site.org;
  $("hero-status").textContent = site.status;
  $("hero-intro").textContent = site.intro;
  $("about-bio").textContent = about.bio;
  $("footer-name").textContent = site.name;
  $("year").textContent = new Date().getFullYear();
  $("map-city").innerHTML = `${esc(site.location.city)}<br>${esc(site.location.country)}`;
  $("map-coords").textContent = site.location.coords;

  $("nav-resume").href = site.resumeUrl;
  $("hero-resume").href = site.resumeUrl;
  $("drawer-resume").href = site.resumeUrl;
  $("nav-github").href = site.github;
  $("drawer-github").href = site.github;
  $("drawer-linkedin").href = site.linkedin;

  $("footer-links").innerHTML = `
    <a class="btn-primary" href="mailto:${site.email}">Email me</a>
    <a class="btn-ghost" href="${site.linkedin}" target="_blank" rel="noopener">LinkedIn</a>
    <a class="btn-ghost" href="${site.github}" target="_blank" rel="noopener">GitHub</a>
    <a class="btn-ghost" href="${site.resumeUrl}" download>Resume</a>
  `;

  renderSpotlight();
  renderStory();
  renderStats();
  renderProjectTiles();
  renderHonors();
  renderSkills();
  renderExperience();
  initBuild();
}

function initNav() {
  const drawer = $("nav-drawer");
  const close = () => {
    drawer.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
  };
  $("menu-btn").addEventListener("click", () => {
    drawer.classList.add("is-open");
    drawer.setAttribute("aria-hidden", "false");
  });
  $("nav-backdrop").addEventListener("click", close);
  drawer.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
  document.addEventListener("keydown", (e) => e.key === "Escape" && close());
}

function initReveal() {
  const els = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  els.forEach((el) => io.observe(el));
}

function initCounters() {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const statsEls = document.querySelectorAll(".stat");

  const animate = (el) => {
    const target = Number(el.dataset.target);
    const prefix = el.dataset.prefix || "";
    const suffix = el.dataset.suffix || "";
    const numEl = el.querySelector(".stat__num");
    const prefixEl = el.querySelector(".stat__prefix");
    if (prefixEl) prefixEl.textContent = prefix;

    if (reduced) {
      numEl.textContent = target;
      return;
    }

    const duration = 1200;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      numEl.textContent = Math.round(target * eased);
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(entry.target);
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  statsEls.forEach((el) => io.observe(el));
}

async function typeTagline() {
  const el = $("typed-tagline");
  const cursor = $("type-cursor");
  if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    if (el) el.textContent = site.tagline;
    if (cursor) cursor.style.display = "none";
    return;
  }
  const text = site.tagline;
  for (let i = 0; i < text.length; i++) {
    await new Promise((r) => setTimeout(r, 38));
    el.textContent += text[i];
  }
  if (cursor) cursor.style.display = "none";
}

renderSite();
initNav();
initReveal();
initCounters();
typeTagline();
