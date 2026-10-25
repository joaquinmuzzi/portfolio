// =============================================================================
//  Contenido editable. Cada texto tiene versión en inglés (en) y español (es).
// =============================================================================
const CV_FILES = { en: "assets/cv-en.pdf", es: "assets/cv-es.pdf" };
const CV_NAMES = { en: "Joaquin-Muzzi-Resume-EN.pdf", es: "Joaquin-Muzzi-CV-ES.pdf" };

const TEXT = {
  en: {
    nav_projects: "Projects", nav_skills: "Skills", nav_about: "About", nav_resume: "Resume",
    open: "Open to junior roles · Remote or hybrid",
    h1: "Backend developer · APIs, bots and audio tools",
    lead: `10 months building production APIs with Python and FastAPI, plus my own projects in production and on GitHub. I co-created <a href="#projects" data-open="lexikon">Lexikon</a>, a German→English dictionary, with a friend, I lead a team of 4 on a school reports system, and I ship <a href="#projects" data-open="tonos">Tonos</a>, a local audio analyzer, with 25+ pull requests, tests and CI.`,
    btn_projects: "View projects", btn_resume: "Resume (PDF)", btn_email: "Email me",
    stack_title: "Tech stack", stack_sub: "Core technologies I work with",
    how_kicker: "HOW I WORK",
    how_text: "I write tests for what can break, run them in CI, and document the bug that taught me the lesson.",
    how_link: "See the regression test story →",
    c_lang: "LANGUAGES", c_data: "DATA", c_infra: "INFRASTRUCTURE",
    proj_title: "Featured projects", proj_sub: "Case studies with engineering deep dives",
    about_title: "About",
    about_1: "I'm a backend developer from Buenos Aires finishing a computing technician degree in December 2026. I like systems that are boring in production: cached, rate-limited, tested and documented.",
    about_2: "Outside code I play the piano, which is why one of my projects detects chords, and I'm learning German, which is why I work on a German dictionary and a tool that counts my listening time.",
    facts_title: "Career highlights",
    f1k: "Experience", f1v: "10 months backend (Planhopper)",
    f2k: "Focus", f2v: "APIs, bots, audio, developer tooling",
    f3k: "Open source", f3v: "Co-creator of Lexikon (89 commits, 50 PRs)",
    f4k: "Education", f4v: "Computing Technician, Dec 2026",
    f5k: "Languages", f5v: "Spanish (native), English (advanced), German (learning)",
    f6k: "Location", f6v: "Buenos Aires · remote friendly",
    contact_title: "Get in touch", contact_sub: "Email is the best way to reach me.",
    case_problem: "Problem", case_built: "What I built", case_results: "Results", case_stack: "Stack", case_read: "Read the case study →",
    chat_title: "Ask the portfolio", chat_sub: "Quick answers for recruiters", chat_ph: "Ask about experience, stack, availability…", chat_send: "Send",
    chat_hello: "Hi! Ask me about Joaquín's experience, stack or availability.",
    chat_unknown: "I don't have that one yet. Email me at joaquindmuzzi@gmail.com and I'll answer.",
    chat_suggest: ["Are you available?", "What's your stack?", "Best project?", "How do I contact you?"],
  },
  es: {
    nav_projects: "Proyectos", nav_skills: "Habilidades", nav_about: "Sobre mí", nav_resume: "CV",
    open: "Abierto a roles junior · Remoto o híbrido",
    h1: "Desarrollador backend · APIs, bots y herramientas de audio",
    lead: `10 meses construyendo APIs de producción con Python y FastAPI, más proyectos propios en producción y en GitHub. Co-creé <a href="#projects" data-open="lexikon">Lexikon</a>, un diccionario alemán→inglés, con un amigo, lidero un equipo de 4 en un sistema de informes escolares y publico <a href="#projects" data-open="tonos">Tonos</a>, un analizador de audio local, con más de 25 pull requests, tests y CI.`,
    btn_projects: "Ver proyectos", btn_resume: "CV (PDF)", btn_email: "Escribime",
    stack_title: "Stack tecnológico", stack_sub: "Las tecnologías con las que trabajo",
    how_kicker: "CÓMO TRABAJO",
    how_text: "Escribo tests para lo que puede romperse, los corro en CI y documento el bug que me enseñó la lección.",
    how_link: "Mirá la historia del test de regresión →",
    c_lang: "LENGUAJES", c_data: "DATOS", c_infra: "INFRAESTRUCTURA",
    proj_title: "Proyectos destacados", proj_sub: "Casos de estudio con detalles de ingeniería",
    about_title: "Sobre mí",
    about_1: "Soy desarrollador backend de Buenos Aires y termino la carrera de técnico en computación en diciembre de 2026. Me gustan los sistemas aburridos en producción: con caché, rate limiting, tests y documentación.",
    about_2: "Fuera del código toco el piano, por eso uno de mis proyectos detecta acordes, y estoy aprendiendo alemán, por eso trabajo en un diccionario alemán y en una herramienta que cuenta mi tiempo de escucha.",
    facts_title: "Resumen profesional",
    f1k: "Experiencia", f1v: "10 meses de backend (Planhopper)",
    f2k: "Foco", f2v: "APIs, bots, audio, herramientas para devs",
    f3k: "Open source", f3v: "Co-creador de Lexikon (89 commits, 50 PRs)",
    f4k: "Educación", f4v: "Técnico en Computación, dic 2026",
    f5k: "Idiomas", f5v: "Español (nativo), inglés (avanzado), alemán (aprendiendo)",
    f6k: "Ubicación", f6v: "Buenos Aires · remoto sin problema",
    contact_title: "Contacto", contact_sub: "El mail es la mejor forma de escribirme.",
    case_problem: "Problema", case_built: "Qué construí", case_results: "Resultados", case_stack: "Stack", case_read: "Leer el caso de estudio →",
    chat_title: "Preguntale al portfolio", chat_sub: "Respuestas rápidas para reclutadores", chat_ph: "Preguntá por experiencia, stack, disponibilidad…", chat_send: "Enviar",
    chat_hello: "¡Hola! Preguntame por la experiencia, el stack o la disponibilidad de Joaquín.",
    chat_unknown: "Esa todavía no la tengo. Escribime a joaquindmuzzi@gmail.com y te respondo.",
    chat_suggest: ["¿Estás disponible?", "¿Cuál es tu stack?", "¿Mejor proyecto?", "¿Cómo te contacto?"],
  },
};

const PROJECTS = [
  {
    id: "tonos", tags: ["DEEP DIVE", "LIVE"], tech: ["Python", "FastAPI", "PyTorch", "librosa", "ffmpeg", "GitHub Actions"],
    links: [["Live demo", "Demo en vivo", "https://joaquinmuzzi.github.io/Tonos/"], ["GitHub", "GitHub", "https://github.com/joaquinmuzzi/Tonos"]],
    en: {
      title: "Tonos", role: "Creator and maintainer · 2026",
      desc: "Local audio analyzer: tempo, meter, key and chords of a song, bar by bar, with a player that highlights the current chord.",
      problem: "Musicians who want the chords of a song either guess by ear or upload their files to a web service. I wanted something accurate, private and checkable by ear.",
      built: ["Audio pipeline that combines beat, key and chord models, with my own logic to fix irregular beats and detect 5/4 and 7/4 meters.", "FastAPI backend with result cache and a CLI; web interface in English and Spanish.", "Player with an optional click on every beat so you can verify the analysis."],
      results: ["25+ pull requests, tests with pytest, CI on GitHub Actions.", "Releases 0.1.0 and 0.2.0 with changelog and docs on reliability and licenses."],
    },
    es: {
      title: "Tonos", role: "Creador y mantenedor · 2026",
      desc: "Analizador de audio local: tempo, compás, tonalidad y acordes de una canción, compás por compás, con un reproductor que marca el acorde actual.",
      problem: "Los músicos que quieren los acordes de una canción los sacan de oído o suben sus archivos a un servicio web. Quería algo preciso, privado y verificable de oído.",
      built: ["Pipeline de audio que combina modelos de beats, tonalidad y acordes, con lógica propia para corregir beats irregulares y detectar compases de 5/4 y 7/4.", "Backend FastAPI con caché de resultados y CLI; interfaz web en inglés y español.", "Reproductor con click opcional en cada beat para verificar el análisis."],
      results: ["Más de 25 pull requests, tests con pytest, CI en GitHub Actions.", "Versiones 0.1.0 y 0.2.0 con changelog y documentación de fiabilidad y licencias."],
    },
  },
  {
    id: "lexikon", tags: ["DEEP DIVE", "LIVE", "OPEN SOURCE"], tech: ["TypeScript", "React", "Hono", "SQLite", "Python", "Docker", "Railway"],
    links: [["Live site", "Sitio en vivo", "https://lexikon.moe"], ["GitHub", "GitHub", "https://github.com/julianel5/Lexikon"], ["My pull requests", "Mis pull requests", "https://github.com/julianel5/Lexikon/pulls?q=is%3Apr+author%3Ajoaquinmuzzi"]],
    en: {
      title: "Lexikon", role: "Co-creator · open source · 2026",
      desc: "Fast, ad-free German→English dictionary for learners, with reverse search, sentence breakdown, native audio and full grammar tables.",
      problem: "I was studying German by immersion and needed a tool like Jiten, but for German: look words up while reading or watching, without ads, accounts or slow pages. I knew Jiten through @julianel5, a friend in real life, and we became partners to build it together.",
      built: ["Reverse search (English→German), autocomplete and sentence segmentation, with word frequency ranking from a Leipzig corpus word list.", "Native-speaker audio with a safe text-to-speech fallback and loudness normalization; shareable URLs; light and dark themes.", "Engineering around it: CI with type checks, lint and build on every PR, tests, Dockerfiles, security headers and the move to the custom domain."],
      results: ["89 commits and 50 pull requests; the rest of the work is my partner's (@julianel5).", "Live at lexikon.moe, MIT licensed, releases 0.1.0 and 0.2.0."],
    },
    es: {
      title: "Lexikon", role: "Co-creador · código abierto · 2026",
      desc: "Diccionario alemán→inglés rápido y sin publicidad para estudiantes, con búsqueda inversa, desglose de oraciones, audio nativo y tablas de gramática completas.",
      problem: "Yo estudiaba alemán por inmersión y necesitaba una herramienta como Jiten, pero para alemán: buscar palabras mientras leo o miro algo, sin anuncios, cuentas ni páginas lentas. Conocí Jiten por @julianel5, un amigo en la vida real, y nos hicimos socios para construirla juntos.",
      built: ["Búsqueda inversa (inglés→alemán), autocompletado y segmentación de oraciones, con ranking por frecuencia a partir de una lista de palabras de un corpus de Leipzig.", "Audio de hablantes nativos con respaldo de texto a voz y normalización de volumen; URLs compartibles; temas claro y oscuro.", "La ingeniería alrededor: CI con chequeo de tipos, lint y build en cada PR, tests, Dockerfiles, headers de seguridad y el paso al dominio propio."],
      results: ["89 commits y 50 pull requests; el resto del trabajo es de mi socio (@julianel5).", "En vivo en lexikon.moe, licencia MIT, versiones 0.1.0 y 0.2.0."],
    },
  },
  {
    id: "gschecker", tags: ["DEEP DIVE", "IN PRODUCTION"], tech: ["Python", "PostgreSQL", "Groq API", "Railway", "GitHub Actions"],
    links: [["GitHub", "GitHub", "https://github.com/joaquinmuzzi/GsChecker"]],
    en: {
      title: "GsChecker", role: "Solo developer · 2025–now",
      desc: "Discord bot that checks World of Warcraft characters on Warmane: raid progress, gear quality and DPS per boss.",
      problem: "Players need a quick read on a character, but the data lives in scattered pages that are slow and rate limited.",
      built: ["Scrapes the armory and uwu-logs, computes GearScore locally with the addon formula.", "Memory + PostgreSQL cache with TTLs, stale-cache fallback, token-bucket rate limiting and a circuit breaker.", "AI coach (/ia) that compares gear against best-in-slot per realm; nightly cron job."],
      results: ["200+ commits, CI and pytest.", "A regression test that documents a real production bug (wrong score) and why the fix must not be reverted."],
    },
    es: {
      title: "GsChecker", role: "Desarrollador solo · 2025–hoy",
      desc: "Bot de Discord que consulta personajes de World of Warcraft en Warmane: progreso de raid, calidad de equipo y DPS por boss.",
      problem: "Los jugadores necesitan un resumen rápido de un personaje, pero los datos están en páginas dispersas, lentas y con límites de uso.",
      built: ["Scrapea el armory y uwu-logs, y calcula el GearScore localmente con la fórmula del addon.", "Caché en memoria + PostgreSQL con TTL, respaldo con caché vencida, rate limiting por token bucket y circuit breaker.", "Coach con IA (/ia) que compara el equipo contra el mejor posible por reino; tarea nocturna programada."],
      results: ["Más de 200 commits, CI y pytest.", "Un test de regresión que documenta un bug real de producción (puntaje incorrecto) y por qué el arreglo no debe revertirse."],
    },
  },
  {
    id: "sie", tags: ["DEEP DIVE", "IN PRODUCTION"], tech: ["React", "Node.js", "Express", "MySQL", "JWT", "Netlify", "Railway"],
    links: [["Live app", "App en vivo", "https://sistemadegestiondeinformes.netlify.app"], ["GitHub", "GitHub", "https://github.com/joaquinmuzzi/SIE"]],
    en: {
      title: "SIE · School Reports System", role: "Team lead (4 people) · 2026",
      desc: "Full-stack platform to create, review and close conduct reports with 7 roles, student statements and PDF export.",
      problem: "A school tracked conduct reports on paper and chats, with no history and no way for families to see what applied to them.",
      built: ["Role-based access (teachers, regents, support team, students, families) with JWT.", "Report lifecycle: open → in review → closed, with three interventions per report and the student's statement.", "I owned the database, infrastructure, deployment and the first MVP."],
      results: ["Running in production at E.T. N°35.", "Mobile-friendly interface and downloadable PDFs for closed reports."],
    },
    es: {
      title: "SIE · Sistema de Informes Escolares", role: "Líder de equipo (4 personas) · 2026",
      desc: "Plataforma full-stack para crear, revisar y cerrar informes de conducta con 7 roles, descargo del alumno y exportación a PDF.",
      problem: "Una escuela llevaba los informes de conducta en papel y chats, sin historial y sin que las familias pudieran ver lo que les correspondía.",
      built: ["Acceso por roles (docentes, regencia, equipo de acompañamiento, alumnos, familias) con JWT.", "Ciclo de vida del informe: abierto → en revisión → cerrado, con tres intervenciones por informe y el descargo del alumno.", "Me encargué de la base de datos, la infraestructura, el despliegue y el primer MVP."],
      results: ["En producción en la E.T. N°35.", "Interfaz adaptada al celular y PDFs descargables de los informes cerrados."],
    },
  },
  {
    id: "deuchan", tags: ["OPEN SOURCE"], tech: ["JavaScript", "Chrome extension", "GitHub Actions"],
    links: [["GitHub", "GitHub", "https://github.com/joaquinmuzzi/deuchan"]],
    en: {
      title: "Deuchan", role: "Creator · open source · 2026",
      desc: "Browser extension that counts the time you spend watching German on YouTube, against a daily goal.",
      problem: "Learning by immersion only works if you know how much input you actually get.",
      built: ["Counts real playback seconds once, even with several tabs playing.", "Detects the video language and lets you correct it with one click.", "Dashboard with heatmap, weekday chart and streak. Everything stays in your browser."],
      results: ["17 merged pull requests so far.", "Under development, not published yet."],
    },
    es: {
      title: "Deuchan", role: "Creador · código abierto · 2026",
      desc: "Extensión de navegador que cuenta el tiempo que mirás alemán en YouTube, contra una meta diaria.",
      problem: "Aprender por inmersión solo funciona si sabés cuánto input recibís de verdad.",
      built: ["Cuenta los segundos reales de reproducción una sola vez, aunque haya varias pestañas.", "Detecta el idioma del video y permite corregirlo con un clic.", "Panel con mapa de calor, gráfico por día de la semana y racha. Todo queda en tu navegador."],
      results: ["17 pull requests integrados hasta ahora.", "En desarrollo, todavía no publicada."],
    },
  },
  {
    id: "arena", tags: ["TEAM PROJECT"], tech: ["Java", "libGDX", "UDP"],
    links: [["GitHub", "GitHub", "https://github.com/joaquinmuzzi/Techno-Mortem-Arena"]],
    en: {
      title: "Techno Mortem Arena", role: "Team of 5 · 2026",
      desc: "2D fencing duel game with LAN multiplayer over UDP, our final school project.",
      problem: "A final project for a networking course that had to be fun to defend in front of a class.",
      built: ["Multiplayer over UDP, one instance per player.", "Mouse-aimed sword and thrust on click, with a delay mechanic."],
      results: ["Built with a team of 5, tracking deliverables in ClickUp."],
    },
    es: {
      title: "Techno Mortem Arena", role: "Equipo de 5 · 2026",
      desc: "Videojuego 2D de duelos de esgrima con multijugador en red local por UDP, nuestro proyecto final de la escuela.",
      problem: "Un proyecto final de una materia de redes que tenía que ser divertido de defender frente a la clase.",
      built: ["Multijugador por UDP, una instancia por jugador.", "Espada apuntada con el mouse y estocada con clic, con una mecánica de delay."],
      results: ["Hecho en equipo de 5, con las entregas organizadas en ClickUp."],
    },
  },
];

const FAQ = {
  en: [
    { k: ["available", "availability", "hire", "start", "job", "role", "open"], a: "Open to junior backend roles, remote or hybrid. I graduate in December 2026." },
    { k: ["experience", "work", "planhopper", "year"], a: "10 months as a part-time remote backend developer at Planhopper: FastAPI REST APIs, DynamoDB, and 10+ E2E tests that cut production bugs by 30%." },
    { k: ["stack", "tech", "language", "python", "fastapi", "skill"], a: "Python and FastAPI mainly, plus TypeScript and Node.js. PostgreSQL, SQLite and DynamoDB. AWS, Docker, Railway, GitHub Actions. Tests with Pytest and Playwright." },
    { k: ["lexikon", "open source", "contribut", "dictionary"], a: "I co-created Lexikon with a friend: a German→English dictionary live at lexikon.moe. I've made 89 commits and 50 pull requests, from reverse search to CI and deployment." },
    { k: ["project", "built", "portfolio", "tonos", "gschecker", "sie", "best"], a: "Best four: Lexikon (open-source dictionary), Tonos (local audio analyzer), GsChecker (Discord bot in production) and SIE (school platform, team of 4). See Featured projects." },
    { k: ["education", "study", "school", "degree", "course"], a: "Computing technician at E.T. N°35 (graduating Dec 2026) and a Deep Learning course at UTN FRBA (2026)." },
    { k: ["english", "spanish", "german"], a: "Spanish native, English advanced (Duolingo English Test: 130), and I'm learning German." },
    { k: ["contact", "email", "reach", "linkedin", "cv", "resume"], a: "joaquindmuzzi@gmail.com or linkedin.com/in/joaquinmuzzi. You can also download my resume from the top bar." },
    { k: ["where", "location", "timezone", "remote"], a: "Buenos Aires, Argentina (UTC-3). Remote or hybrid." },
  ],
  es: [
    { k: ["disponible", "disponibilidad", "contrat", "empez", "trabajo", "puesto", "rol", "abierto"], a: "Abierto a roles backend junior, remotos o híbridos. Me recibo en diciembre de 2026." },
    { k: ["experiencia", "trabaj", "planhopper", "año"], a: "10 meses como desarrollador backend part-time remoto en Planhopper: APIs REST con FastAPI, DynamoDB y más de 10 pruebas E2E que redujeron 30% los bugs en producción." },
    { k: ["stack", "tecnolog", "lenguaje", "python", "fastapi", "habilidad"], a: "Principalmente Python y FastAPI, además de TypeScript y Node.js. PostgreSQL, SQLite y DynamoDB. AWS, Docker, Railway, GitHub Actions. Tests con Pytest y Playwright." },
    { k: ["lexikon", "open source", "código abierto", "contribu", "diccionario"], a: "Co-creé Lexikon con un amigo: un diccionario alemán→inglés en vivo en lexikon.moe. Hice 89 commits y 50 pull requests, desde la búsqueda inversa hasta el CI y el despliegue." },
    { k: ["proyecto", "constru", "portfolio", "tonos", "gschecker", "sie", "mejor"], a: "Los cuatro mejores: Lexikon (diccionario open source), Tonos (analizador de audio local), GsChecker (bot de Discord en producción) y SIE (plataforma escolar, equipo de 4). Mirá Proyectos destacados." },
    { k: ["educación", "estudi", "escuela", "título", "curso"], a: "Técnico en computación en la E.T. N°35 (me recibo en dic 2026) y un curso de Deep Learning en la UTN FRBA (2026)." },
    { k: ["inglés", "ingles", "español", "alemán", "aleman", "idioma"], a: "Español nativo, inglés avanzado (Duolingo English Test: 130) y estoy aprendiendo alemán." },
    { k: ["contact", "mail", "correo", "linkedin", "cv", "currículum", "curriculum"], a: "joaquindmuzzi@gmail.com o linkedin.com/in/joaquinmuzzi. También podés descargar mi CV desde la barra de arriba." },
    { k: ["dónde", "donde", "ubicación", "zona", "remoto"], a: "Buenos Aires, Argentina (UTC-3). Remoto o híbrido." },
  ],
};

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
