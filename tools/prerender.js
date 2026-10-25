#!/usr/bin/env node
// Escribe el contenido en inglés directamente en index.html, para que se vea (y se pueda leer)
// aunque no cargue JavaScript. El JS de la página lo reemplaza después según el idioma.
//
// Uso:  node tools/prerender.js     (volver a correrlo cada vez que se cambie data.js)
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const dataSrc = fs.readFileSync(path.join(root, "data.js"), "utf8");
const { TEXT, PROJECTS } = vm.runInNewContext(`${dataSrc}\n;({ TEXT, PROJECTS })`);
const en = TEXT.en;
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const tagClass = (t) => (t === "DEEP DIVE" ? "dive" : t.includes("PRODUCTION") || t === "LIVE" ? "live" : "");

const grid = PROJECTS.map((p) => `
      <button class="card" data-id="${p.id}">
        <div class="tags">${p.tags.map((t) => `<span class="tag ${tagClass(t)}">${t}</span>`).join("")}</div>
        <h3>${esc(p.en.title)}</h3><p class="role">${esc(p.en.role)}</p>
        <p class="desc">${esc(p.en.desc)}</p>
        <div class="tech">${p.tech.slice(0, 4).map((t) => `<span>${esc(t)}</span>`).join("")}${p.tech.length > 4 ? `<span>+${p.tech.length - 4}</span>` : ""}</div>
        <span class="more">${esc(en.case_read)}</span>
      </button>`).join("") + "\n    ";

const cases = `<noscript>
      <div class="cases">${PROJECTS.map((p) => `
        <article>
          <h3>${esc(p.en.title)}</h3><p>${esc(p.en.role)}</p>
          <h4>${esc(en.case_problem)}</h4><p>${esc(p.en.problem)}</p>
          <h4>${esc(en.case_built)}</h4><ul>${p.en.built.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
          <h4>${esc(en.case_results)}</h4><ul>${p.en.results.map((r) => `<li>${esc(r)}</li>`).join("")}</ul>
          <p>${p.links.map((l) => `<a href="${l[2]}">${esc(l[0])}</a>`).join(" · ")}</p>
        </article>`).join("")}
      </div>
    </noscript>`;

const file = path.join(root, "index.html");
let html = fs.readFileSync(file, "utf8");

// 1) textos con data-i18n
html = html.replace(/(<([a-z0-9]+)\b[^>]*\sdata-i18n="([^"]+)"[^>]*>)([\s\S]*?)(<\/\2>)/g, (m, open, tag, key, _inner, close) =>
  en[key] === undefined ? m : `${open}${en[key]}${close}`);

// 2) tarjetas de proyectos y casos de estudio
html = html.replace(/<!--static:grid-->[\s\S]*?<!--\/static:grid-->/, `<!--static:grid-->${grid}<!--/static:grid-->`);
html = html.replace(/<!--static:cases-->[\s\S]*?<!--\/static:cases-->/, `<!--static:cases-->${cases}<!--/static:cases-->`);

fs.writeFileSync(file, html);
console.log("index.html actualizado con el contenido en inglés.");
