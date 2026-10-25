// Lógica de la página. Los textos y proyectos viven en data.js.

// =============================================================================
//  Lógica
// =============================================================================
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const root = document.documentElement;

// Idioma: preferencia guardada > idioma del navegador (español si empieza con "es") > inglés
function detectLang() {
  const saved = localStorage.getItem("lang");
  if (saved === "en" || saved === "es") return saved;
  const prefs = navigator.languages?.length ? navigator.languages : [navigator.language || "en"];
  for (const l of prefs) { const c = l.toLowerCase(); if (c.startsWith("es")) return "es"; if (c.startsWith("en")) return "en"; }
  return "en";
}
let lang = detectLang();
const tr = (key) => TEXT[lang][key] ?? key;

function renderProjects() {
  $("#project-grid").innerHTML = PROJECTS.map((p) => `
    <button class="card" data-id="${p.id}">
      <div class="tags">${p.tags.map((t) => `<span class="tag ${t === "DEEP DIVE" ? "dive" : t.includes("PRODUCTION") || t === "LIVE" ? "live" : ""}">${t}</span>`).join("")}</div>
      <h3>${p[lang].title}</h3><p class="role">${p[lang].role}</p>
      <p class="desc">${p[lang].desc}</p>
      <div class="tech">${p.tech.slice(0, 4).map((t) => `<span>${t}</span>`).join("")}${p.tech.length > 4 ? `<span>+${p.tech.length - 4}</span>` : ""}</div>
      <span class="more">${tr("case_read")}</span>
    </button>`).join("");
}

const dlg = $("#case");
let openId = null;
function renderCase() {
  const p = PROJECTS.find((x) => x.id === openId); if (!p) return;
  const c = p[lang], i = lang === "es" ? 1 : 0;
  $("#case-body").innerHTML = `
    <h3>${c.title}</h3><p>${c.role}</p>
    <h4>${tr("case_problem")}</h4><p>${c.problem}</p>
    <h4>${tr("case_built")}</h4><ul>${c.built.map((b) => `<li>${b}</li>`).join("")}</ul>
    <h4>${tr("case_results")}</h4><ul>${c.results.map((r) => `<li>${r}</li>`).join("")}</ul>
    <h4>${tr("case_stack")}</h4><div class="tech chips">${p.tech.map((t) => `<span>${t}</span>`).join("")}</div>
    <div class="actions">${p.links.map((l, n) => `<a class="btn ${n ? "" : "solid"}" href="${l[2]}" target="_blank" rel="noopener">${l[i]} ↗</a>`).join("")}</div>`;
}
function openCase(id) { openId = id; renderCase(); dlg.showModal(); }
document.addEventListener("click", (e) => {
  const card = e.target.closest(".card"); if (card) return openCase(card.dataset.id);
  const a = e.target.closest("[data-open]"); if (a) { e.preventDefault(); openCase(a.dataset.open); }
});
dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); });

// Chat sin backend: respuestas por palabras clave
const log = $("#chat-log"), chat = $("#chat"), input = $("#chat-input");
const say = (text, who) => { const d = document.createElement("div"); d.className = "msg " + who; d.textContent = text; log.appendChild(d); log.scrollTop = log.scrollHeight; };
function answer(q) {
  say(q, "me");
  const t = q.toLowerCase(), hit = FAQ[lang].find((f) => f.k.some((w) => t.includes(w)));
  setTimeout(() => say(hit ? hit.a : tr("chat_unknown"), "bot"), 350);
}
function renderChat() {
  log.innerHTML = ""; say(tr("chat_hello"), "bot");
  $("#chat-suggest").innerHTML = TEXT[lang].chat_suggest.map((s) => `<button type="button">${s}</button>`).join("");
}
$("#chat-suggest").onclick = (e) => { if (e.target.tagName === "BUTTON") answer(e.target.textContent); };
$("#chat-form").onsubmit = (e) => { e.preventDefault(); if (input.value.trim()) answer(input.value.trim()); input.value = ""; };
$("#chat-open").onclick = () => { chat.hidden = !chat.hidden; if (!chat.hidden) input.focus(); };
$("#chat-close").onclick = () => (chat.hidden = true);

function applyLang(l) {
  lang = l; localStorage.setItem("lang", l);
  root.lang = l;
  $$("[data-i18n]").forEach((el) => { const v = TEXT[l][el.dataset.i18n]; if (v !== undefined) el.innerHTML = v; });
  $$("[data-i18n-placeholder]").forEach((el) => { el.placeholder = TEXT[l][el.dataset.i18nPlaceholder]; });
  $$(".seg button").forEach((b) => b.classList.toggle("on", b.dataset.lang === l));
  $$(".resume-link").forEach((a) => { a.href = CV_FILES[l]; a.setAttribute("download", CV_NAMES[l]); });
  document.title = l === "es" ? "Joaquín Muzzi | Portfolio" : "Joaquín Muzzi | Portfolio";
  renderProjects(); renderChat();
  if (dlg.open) renderCase();
}
$$(".seg button").forEach((b) => (b.onclick = () => applyLang(b.dataset.lang)));

// Tema
const themeBtn = $("#theme");
const setTheme = (t) => { root.dataset.theme = t; themeBtn.textContent = t === "dark" ? "☾" : "☀"; localStorage.setItem("theme", t); };
setTheme(localStorage.getItem("theme") || "dark");
themeBtn.onclick = () => setTheme(root.dataset.theme === "dark" ? "light" : "dark");

$("#year").textContent = new Date().getFullYear();
applyLang(lang);
