import{_ as e,a as t,f as n,g as r,h as i,i as a,n as o,r as s,v as c,y as l}from"./ui-CtIhHYz-.js";import{a as u,c as d,f,i as p,o as m,p as h,t as g}from"./mobs-BNetkzML.js";var _=new URLSearchParams(location.search).get(`add`);document.querySelector(`#app`).innerHTML=`
  ${o(`sim`)}
  <main class="relative mx-auto max-w-6xl px-5 pb-24 pt-6">
    <header class="bestiary-hero">
      <h1 data-i18n="sim.title">${r(`sim.title`)}</h1>
      <p class="lead" data-i18n="sim.lead">${r(`sim.lead`)}</p>
      <div class="bestiary-toolbar">
        <label class="bestiary-search">
          <span class="text-muted text-sm" aria-hidden="true">⌕</span>
          <input id="q" type="search" data-i18n-placeholder="bestiary.search" placeholder="${r(`bestiary.search`)}" />
        </label>
        <div class="bestiary-view" role="group" id="tierFilter">
          <button type="button" class="bestiary-view-btn is-active" data-tier="">${r(`bestiary.all`)}</button>
          <button type="button" class="bestiary-view-btn" data-tier="1">T1</button>
          <button type="button" class="bestiary-view-btn" data-tier="2">T2</button>
        </div>
        <button type="button" class="btn text-xs" id="btnClear" data-i18n="sim.clear">${r(`sim.clear`)}</button>
      </div>
    </header>

    <div class="sim-layout">
      <section>
        <h2 class="font-display text-lg font-bold mb-3" data-i18n="sim.pick">${r(`sim.pick`)}</h2>
        <div id="pick" class="sim-pick-list"></div>
      </section>
      <aside class="sim-panel">
        <h2 class="font-display text-lg font-bold" data-i18n="sim.panel">${r(`sim.panel`)}</h2>
        <div id="result" class="mt-4"></div>
      </aside>
    </div>
  </main>
  ${t()}
`,s(),l.from(`.bestiary-hero`,{y:18,opacity:0,duration:.5,ease:`power3.out`});var v=await d(),y=[],b=``;if(_){let e=v.find(e=>e.id===_);e&&(y=[e])}function x(){let t=p(v,{q:document.getElementById(`q`).value,tier:b});document.getElementById(`pick`).innerHTML=t.map(t=>{let n=y.some(e=>e.id===t.id),r=g[t.threat]||`var(--color-amber)`;return`<button type="button" class="sim-pick ${n?`is-on`:``}" data-id="${t.id}" style="--r:${r}">
        <div class="sim-pick-art art-frame">${a(t.image,i(t),``)}</div>
        <div class="min-w-0 flex-1 text-left">
          <div class="font-display text-sm font-bold truncate">${i(t)}</div>
          <div class="text-xs text-muted">T${t.tier} · ${e(t.threat)}</div>
        </div>
        <span class="sim-check" aria-hidden="true">${n?`✓`:``}</span>
      </button>`}).join(``);let n=h(y),o=f(n),s=u(y),c=m(y);y.length?document.getElementById(`result`).innerHTML=`
    <div class="text-xs uppercase tracking-wide text-muted" data-i18n="sim.meter">${r(`sim.meter`)}</div>
    <div class="sim-meter mt-2"><i style="width:${n}%"></i></div>
    <div class="mt-2 font-display text-xl font-bold" data-i18n="${o}">${r(o)}</div>
    <div class="mt-2 text-sm text-muted num">${Math.round(n)}% · ${y.length} mobs</div>
    <h3 class="mt-8 text-xs font-bold uppercase tracking-[0.12em] text-muted" data-i18n="sim.alerts">${r(`sim.alerts`)}</h3>
    <div class="mt-3 grid gap-2">
      ${s.length?s.map(e=>`<div class="sim-alert sim-alert-${e.color}">${r(e.key)}</div>`).join(``):`<p class="text-sm text-muted">—</p>`}
    </div>
    <h3 class="mt-8 text-xs font-bold uppercase tracking-[0.12em] text-muted" data-i18n="sim.strategy">${r(`sim.strategy`)}</h3>
    <p class="mt-3 text-sm leading-relaxed text-muted">${r(c)}</p>
  `:document.getElementById(`result`).innerHTML=`<p class="text-sm text-muted" data-i18n="sim.empty">${r(`sim.empty`)}</p>`}document.getElementById(`pick`).addEventListener(`click`,e=>{let t=e.target.closest(`[data-id]`);if(!t)return;let n=v.find(e=>e.id===t.dataset.id);if(!n)return;let r=y.findIndex(e=>e.id===n.id);r>=0?y.splice(r,1):y.push(n),c.click(),x()}),document.getElementById(`tierFilter`).addEventListener(`click`,e=>{let t=e.target.closest(`[data-tier]`);t&&(b=t.dataset.tier||``,document.querySelectorAll(`#tierFilter .bestiary-view-btn`).forEach(e=>{e.classList.toggle(`is-active`,(e.dataset.tier||``)===b)}),x())}),document.getElementById(`q`).addEventListener(`input`,()=>{clearTimeout(window.__q),window.__q=setTimeout(x,100)}),document.getElementById(`btnClear`).addEventListener(`click`,()=>{y=[],x(),c.click()}),window.addEventListener(`sugeon:lang`,()=>{n(document),x()}),x();