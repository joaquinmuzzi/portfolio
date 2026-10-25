"""Genera cv-es.html y cv-en.html. El PDF se exporta con Edge/Chrome headless (ver export_pdf.ps1)."""
from html import escape as e

CV = {
 "es": {
  "lang": "es", "title": "CV - Joaquín Muzzi",
  "headings": ["Perfil laboral", "Habilidades", "Experiencia", "Proyectos", "Educación", "Cursos y certificaciones", "Intereses"],
  "profile": "Desarrollador backend junior con 10 meses de experiencia profesional construyendo APIs REST con Python y FastAPI, modelando datos NoSQL en AWS DynamoDB y automatizando pruebas E2E con Playwright y Pytest. Técnico en Computación (egreso diciembre 2026) con formación en Deep Learning (UTN) y proyectos propios de audio y machine learning. Busco roles backend junior, remotos o híbridos.",
  "skills": [
   ("Lenguajes", "Python, JavaScript, Java, Lua"),
   ("Backend", "FastAPI, Node.js, Express, APIs REST, autenticación JWT"),
   ("Cloud y despliegue", "AWS (DynamoDB, S3, IAM), Docker, Railway, Netlify"),
   ("Bases de datos", "MySQL, PostgreSQL, DynamoDB, MongoDB, SQL, NoSQL"),
   ("ML y audio", "PyTorch, TensorFlow, Keras, librosa, ffmpeg"),
   ("Testing y calidad", "Pytest, Playwright, testing E2E, GitHub Actions (CI), ruff"),
   ("Herramientas", "Git, GitHub, GitHub Copilot, Cursor, Claude, Opencode, ClickUp, Slack"),
   ("Metodologías", "Agile, Scrum"),
   ("Idiomas", "Español nativo; Inglés avanzado (Duolingo English Test: 130); Alemán (en aprendizaje)"),
  ],
  "jobs": [{
   "role": "Desarrollador Backend (part-time, remoto)", "org": "Planhopper", "where": "Buenos Aires, Argentina", "when": "Diciembre 2025 – Septiembre 2026",
   "bullets": [
    "Desarrollo y mantenimiento de APIs REST con Python y FastAPI.",
    "Integración y modelado de datos NoSQL con AWS DynamoDB.",
    "Diseño e implementación, asistidos con IA (Opencode y Claude), de una suite de más de 10 pruebas E2E automatizadas con Playwright y Pytest, que redujo un 30% los bugs reportados en producción.",
    "Trabajo colaborativo en un equipo remoto Agile con Git, Slack y ClickUp."]}],
  "projects": [
   ("Tonos – Análisis musical local con IA", "octubre 2026 – actualidad", "github.com/joaquinmuzzi/Tonos", "Python, FastAPI, PyTorch, librosa, ffmpeg, JavaScript, GitHub Actions", [
    "Aplicación que analiza una canción y devuelve tempo, compás, tonalidad y acordes compás por compás, con reproductor que marca el acorde en vivo; corre 100% en la computadora del usuario.",
    "Pipeline de audio que integra modelos de beats, tonalidad y acordes, con lógica propia para corregir beats irregulares y detectar compases de 5/4 y 7/4.",
    "Backend FastAPI con caché de resultados y CLI; interfaz web en inglés y español.",
    "Más de 25 pull requests, tests con pytest, CI en GitHub Actions, versiones 0.1.0 y 0.2.0 con changelog y documentación de fiabilidad y licencias."]),
   ("Lexikon – Diccionario alemán→inglés (código abierto, co-creador)", "octubre 2026 – actualidad", "lexikon.moe | github.com/julianel5/Lexikon", "TypeScript, React, Hono, SQLite, Python, Docker, Railway, GitHub Actions", [
    "Diccionario alemán→inglés rápido y sin publicidad para estudiantes, con búsqueda inversa, desglose de oraciones, audio nativo y tablas de gramática; co-creado con un socio y en producción en lexikon.moe.",
    "Búsqueda inversa, autocompletado, segmentación de oraciones y ranking por frecuencia de palabras; audio de hablantes nativos con respaldo de texto a voz.",
    "CI con chequeo de tipos, lint y build en cada PR, tests, Dockerfiles, headers de seguridad y despliegue en Railway.",
    "89 commits y 50 pull requests; versiones 0.1.0 y 0.2.0."]),
   ("GsChecker – Bot de Discord", "octubre 2025 – actualidad", "github.com/joaquinmuzzi/GsChecker", "Python, PostgreSQL, Groq API, GitHub Actions, Railway", [
    "Bot en producción que consulta personajes de Warmane y entrega progreso de raid, calidad de equipo y DPS por boss; más de 200 commits.",
    "Caché en memoria y PostgreSQL, rate limiting con circuit breaker y análisis con IA (/ia).",
    "Tests automatizados con pytest y CI en GitHub Actions."]),
   ("Sistema de Informes Escolares (SIE) – Proyecto institucional, E.T. N° 35", "marzo 2026 – actualidad", "", "React, Node.js, Express, MySQL, JWT, Netlify, Railway", [
    "Plataforma web full-stack en producción para gestionar informes de conducta, con 7 roles, ciclo de revisión y cierre, descargo del alumno y exportación a PDF.",
    "Líder de un equipo de 4: base de datos, infraestructura, despliegue y MVP inicial."]),
   ("Techno Mortem Arena", "agosto – septiembre 2026", "", "Java, libGDX", ["Videojuego 2D de duelos en red (UDP), proyecto final en equipo de 5."]),
  ],
  "edu": [("Escuela Técnica Nº 35 - Ing. E. Latzina", "Técnico en Computación", "Marzo 2021 – Diciembre 2026 (egreso previsto)")],
  "courses": [
   ("Centro de e-Learning UTN FRBA", "Curso de Deep Learning: Redes neuronales desde cero (mayo – julio 2026; certificado emitido en junio 2026)"),
   ("Centro de Formación Profesional Nº 41", "Instalación, Mantenimiento, Soporte y Servicio Técnico de Sistemas Informáticos (marzo – julio 2026; certificado en trámite)"),
   ("Talento Tech", "Introduction to Programming Using Python (febrero 2024)")],
  "interests": "Pianista y colaborador de código abierto en modding de videojuegos. Interés en trabajar en comunidad con personas nativas alemanas.",
 },
 "en": {
  "lang": "en", "title": "Resume - Joaquín Muzzi",
  "headings": ["Profile", "Skills", "Experience", "Projects", "Education", "Courses and certifications", "Interests"],
  "profile": "Junior backend developer with 10 months of professional experience building REST APIs with Python and FastAPI, modeling NoSQL data on AWS DynamoDB and automating E2E tests with Playwright and Pytest. Computing Technician (graduating December 2026) with Deep Learning training (UTN) and personal audio and machine learning projects. Looking for junior backend roles, remote or hybrid.",
  "skills": [
   ("Languages", "Python, JavaScript, Java, Lua"),
   ("Backend", "FastAPI, Node.js, Express, REST APIs, JWT authentication"),
   ("Cloud and deployment", "AWS (DynamoDB, S3, IAM), Docker, Railway, Netlify"),
   ("Databases", "MySQL, PostgreSQL, DynamoDB, MongoDB, SQL, NoSQL"),
   ("ML and audio", "PyTorch, TensorFlow, Keras, librosa, ffmpeg"),
   ("Testing and quality", "Pytest, Playwright, E2E testing, GitHub Actions (CI), ruff"),
   ("Tools", "Git, GitHub, GitHub Copilot, Cursor, Claude, Opencode, ClickUp, Slack"),
   ("Methodologies", "Agile, Scrum"),
   ("Spoken languages", "Spanish (native); English (advanced, Duolingo English Test: 130); German (learning)"),
  ],
  "jobs": [{
   "role": "Backend Developer (part-time, remote)", "org": "Planhopper", "where": "Buenos Aires, Argentina", "when": "December 2025 – September 2026",
   "bullets": [
    "Developed and maintained REST APIs with Python and FastAPI.",
    "Integrated and modeled NoSQL data with AWS DynamoDB.",
    "Designed and implemented, AI-assisted (Opencode and Claude), a suite of 10+ automated E2E tests with Playwright and Pytest, which cut production bug reports by 30%.",
    "Worked in a remote Agile team using Git, Slack and ClickUp."]}],
  "projects": [
   ("Tonos – Local music analysis with AI", "October 2026 – present", "github.com/joaquinmuzzi/Tonos", "Python, FastAPI, PyTorch, librosa, ffmpeg, JavaScript, GitHub Actions", [
    "App that analyzes a song and returns tempo, meter, key and chords bar by bar, with a player that highlights the current chord; runs 100% on the user's computer.",
    "Audio pipeline that combines beat, key and chord models, with custom logic to fix irregular beats and detect 5/4 and 7/4 meters.",
    "FastAPI backend with result caching and a CLI; web interface in English and Spanish.",
    "25+ pull requests, pytest tests, CI on GitHub Actions, releases 0.1.0 and 0.2.0 with changelog and docs on reliability and licenses."]),
   ("Lexikon – German→English dictionary (open source, co-creator)", "October 2026 – present", "lexikon.moe | github.com/julianel5/Lexikon", "TypeScript, React, Hono, SQLite, Python, Docker, Railway, GitHub Actions", [
    "Fast, ad-free German→English dictionary for learners, with reverse search, sentence breakdown, native audio and grammar tables; co-created with a partner and live at lexikon.moe.",
    "Reverse search, autocomplete, sentence segmentation and word-frequency ranking; native-speaker audio with a text-to-speech fallback.",
    "CI with type checks, lint and build on every PR, tests, Dockerfiles, security headers and deployment on Railway.",
    "89 commits and 50 pull requests; releases 0.1.0 and 0.2.0."]),
   ("GsChecker – Discord bot", "October 2025 – present", "github.com/joaquinmuzzi/GsChecker", "Python, PostgreSQL, Groq API, GitHub Actions, Railway", [
    "Production bot that looks up Warmane characters and reports raid progress, gear quality and DPS per boss; 200+ commits.",
    "Memory and PostgreSQL cache, rate limiting with a circuit breaker and AI analysis (/ia).",
    "Automated tests with pytest and CI on GitHub Actions."]),
   ("School Reports System (SIE) – Institutional project, E.T. N° 35", "March 2026 – present", "", "React, Node.js, Express, MySQL, JWT, Netlify, Railway", [
    "Full-stack web platform in production to manage conduct reports, with 7 roles, a review and closing cycle, student statements and PDF export.",
    "Led a team of 4: database, infrastructure, deployment and initial MVP."]),
   ("Techno Mortem Arena", "August – September 2026", "", "Java, libGDX", ["2D networked (UDP) fencing duel game, final project in a team of 5."]),
  ],
  "edu": [("Escuela Técnica Nº 35 - Ing. E. Latzina", "Computing Technician", "March 2021 – December 2026 (expected)")],
  "courses": [
   ("UTN FRBA e-Learning Center", "Deep Learning course: Neural networks from scratch (May – July 2026; certificate issued June 2026)"),
   ("Vocational Training Center Nº 41", "Installation, maintenance, support and technical service of computer systems (March – July 2026; certificate pending)"),
   ("Talento Tech", "Introduction to Programming Using Python (February 2024)")],
  "interests": "Pianist and open source contributor in video game modding. Interested in working with a community of native German speakers.",
 },
}

CSS = """
@page { size: A4; margin: 14mm 16mm; }
* { box-sizing: border-box; }
body { font-family: "Segoe UI", Arial, sans-serif; font-size: 9.6pt; line-height: 1.38; color: #1b1b1f; margin: 0; }
h1 { font-size: 22pt; margin: 0 0 2px; letter-spacing: -.01em; }
.contact { font-size: 9pt; color: #55555c; margin-bottom: 10px; }
h2 { font-size: 9.5pt; text-transform: uppercase; letter-spacing: .12em; color: #2f5bd8; border-bottom: 1px solid #d5d8e2; padding-bottom: 2px; margin: 13px 0 6px; }
p { margin: 0 0 4px; }
.row { display: flex; justify-content: space-between; gap: 12px; }
.row b { font-weight: 600; } .muted { color: #5c5c64; }
ul { margin: 3px 0 6px; padding-left: 16px; } li { margin-bottom: 1.5px; }
.item { margin-bottom: 7px; break-inside: avoid; }
.skills p b { display: inline-block; min-width: 118px; }
.tech { color: #5c5c64; font-size: 9pt; margin: 0; }
"""


def block(c):
    h = c["headings"]
    out = [
        '<h1>Joaquín Muzzi</h1><div class="contact">joaquindmuzzi@gmail.com &nbsp;|&nbsp; github.com/joaquinmuzzi &nbsp;|&nbsp; linkedin.com/in/joaquinmuzzi &nbsp;|&nbsp; Buenos Aires, Argentina</div>',
        f'<h2>{h[0]}</h2><p>{e(c["profile"])}</p>',
        f'<h2>{h[1]}</h2><div class="skills">' + "".join(f"<p><b>{e(k)}:</b> {e(v)}</p>" for k, v in c["skills"]) + "</div>",
        f"<h2>{h[2]}</h2>",
    ]
    for j in c["jobs"]:
        out.append(
            f'<div class="item"><div class="row"><b>{e(j["role"])} – {e(j["org"])}</b><span class="muted">{e(j["when"])}</span></div>'
            f'<p class="muted">{e(j["where"])}</p><ul>' + "".join(f"<li>{e(b)}</li>" for b in j["bullets"]) + "</ul></div>"
        )
    out.append(f"<h2>{h[3]}</h2>")
    for name, when, link, tech, bullets in c["projects"]:
        out.append(
            f'<div class="item"><div class="row"><b>{e(name)}</b><span class="muted">{e(when)}</span></div>'
            + (f'<p class="muted">{e(link)}</p>' if link else "")
            + f'<p class="tech">{e(tech)}</p><ul>' + "".join(f"<li>{e(b)}</li>" for b in bullets) + "</ul></div>"
        )
    out.append(f"<h2>{h[4]}</h2>" + "".join(
        f'<div class="item"><div class="row"><b>{e(a)} – {e(b)}</b><span class="muted">{e(d)}</span></div></div>' for a, b, d in c["edu"]))
    out.append(f"<h2>{h[5]}</h2>" + "".join(f"<p><b>{e(a)}</b> – {e(b)}</p>" for a, b in c["courses"]))
    out.append(f'<h2>{h[6]}</h2><p>{e(c["interests"])}</p>')
    return "\n".join(out)


for code, c in CV.items():
    html = (f'<!doctype html><html lang="{c["lang"]}"><head><meta charset="utf-8"><title>{e(c["title"])}</title>'
            f"<style>{CSS}</style></head><body>{block(c)}</body></html>")
    open(f"cv-{code}.html", "w", encoding="utf-8").write(html)
print("ok")
