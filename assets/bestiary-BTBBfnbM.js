import{_ as e,a as t,f as n,g as r,h as i,i as a,m as o,n as s,o as c,r as l,s as u,v as d,y as f}from"./ui-CtIhHYz-.js";import{c as p,i as m,n as h,r as g,t as _}from"./mobs-BNetkzML.js";document.querySelector(`#app`).innerHTML=`
  ${s(`list`)}
  <main class="relative mx-auto max-w-6xl px-5 pb-24 pt-4">
    <header class="bestiary-hero">
      <h1 data-i18n="bestiary.title">${r(`bestiary.title`)}</h1>
      <p class="lead" data-i18n="bestiary.lead">${r(`bestiary.lead`)}</p>
      <div class="bestiary-toolbar">
        <label class="bestiary-search">
          <span class="text-muted text-sm" aria-hidden="true">⌕</span>
          <input id="q" type="search" data-i18n-placeholder="bestiary.search" placeholder="${r(`bestiary.search`)}" />
        </label>
        <div class="bestiary-view" role="group">
          <button type="button" class="bestiary-view-btn is-active" id="btnGrid" data-i18n="bestiary.grid">${r(`bestiary.grid`)}</button>
          <button type="button" class="bestiary-view-btn" id="btnList" data-i18n="bestiary.list">${r(`bestiary.list`)}</button>
        </div>
      </div>
    </header>

    <div class="bestiary-filters" id="filters">
      <div class="bestiary-filter-row" id="tierRow">
        <span class="bestiary-filter-label" data-i18n="bestiary.tier">${r(`bestiary.tier`)}</span>
        <button type="button" class="pill shrink-0" data-tier="" aria-pressed="true" data-i18n="bestiary.all">${r(`bestiary.all`)}</button>
        <button type="button" class="pill shrink-0" data-tier="1" aria-pressed="false"><span data-tier-label>${r(`bestiary.tier1`)}</span></button>
        <button type="button" class="pill shrink-0" data-tier="2" aria-pressed="false"><span data-tier-label>${r(`bestiary.tier2`)}</span></button>
      </div>
      <div class="bestiary-filter-row" id="threatRow">
        <span class="bestiary-filter-label" data-i18n="bestiary.threat">${r(`bestiary.threat`)}</span>
        <button type="button" class="pill shrink-0" data-threat="" aria-pressed="true" data-i18n="bestiary.all">${r(`bestiary.all`)}</button>
      </div>
    </div>

    <div class="bestiary-meta">
      <div>
        <span data-i18n="bestiary.showing">${r(`bestiary.showing`)}</span>
        <strong class="num text-ink" id="count">0</strong>
        <span>/</span>
        <span class="num" id="total">0</span>
      </div>
      <div data-i18n="bestiary.sort">${r(`bestiary.sort`)}</div>
    </div>

    <div id="grid" class="bestiary-grid"></div>
  </main>
  ${t()}
`,l(),f.from(`.bestiary-hero`,{y:18,opacity:0,duration:.55,ease:`power3.out`});var v=await p();document.getElementById(`total`).textContent=String(v.length);var y=``,b=``,x=`grid`,S=h.filter(e=>v.some(t=>t.threat===e)),C=document.getElementById(`threatRow`);S.forEach(t=>{let n=document.createElement(`button`);n.type=`button`,n.className=`pill shrink-0`,n.dataset.threat=t,n.innerHTML=`<span class="pip" style="background:${_[t]}"></span><span data-threat-label>${e(t)}</span>`,C.appendChild(n)});function w(){document.querySelectorAll(`[data-tier-label]`).forEach(e=>{let t=e.closest(`[data-tier]`)?.dataset.tier;t===`1`&&(e.textContent=r(`bestiary.tier1`)),t===`2`&&(e.textContent=r(`bestiary.tier2`))}),document.querySelectorAll(`[data-threat-label]`).forEach(t=>{let n=t.closest(`[data-threat]`)?.dataset.threat;n&&(t.textContent=e(n))})}function T(){document.querySelectorAll(`[data-tier]`).forEach(e=>{e.setAttribute(`aria-pressed`,String((e.dataset.tier||``)===y))}),document.querySelectorAll(`[data-threat]`).forEach(e=>{e.setAttribute(`aria-pressed`,String((e.dataset.threat||``)===b))}),document.getElementById(`btnGrid`).classList.toggle(`is-active`,x===`grid`),document.getElementById(`btnList`).classList.toggle(`is-active`,x===`list`)}function E(e){return[...e].sort((e,t)=>{let n=(t.score100||0)-(e.score100||0);if(n)return n;let r=o()===`en`?`en`:`vi`;return i(e).localeCompare(i(t),r)})}function D(){let t=E(m(v,{q:document.getElementById(`q`).value,tier:y,threat:b}));document.getElementById(`count`).textContent=String(t.length);let n=document.getElementById(`grid`);n.className=x===`list`?`bestiary-list`:`bestiary-grid`,t.length?(n.innerHTML=t.map(t=>{let n=`/mob.html?id=${encodeURIComponent(t.id)}`,r=i(t),o=_[t.threat]||g[t.tier];return x===`list`?`<a href="${n}" class="mob-card bestiary-row" style="--r:${o}">
          <div class="bestiary-row-art art-frame">${a(t.image,r,``)}</div>
          <div class="min-w-0 flex-1">
            <div class="flex flex-wrap items-center gap-2">
              <h2 class="bestiary-name truncate">${r}</h2>
              <span class="bestiary-badge" style="background:var(--r)">${e(t.threat)}</span>
            </div>
            <div class="bestiary-tags mt-1">
              <span>T${t.tier}</span>
              <span>·</span>
              <span class="truncate">${t.role||``}</span>
            </div>
          </div>
        </a>`:`<a href="${n}" class="mob-card bestiary-card" style="--r:${o}">
        <div class="bestiary-card-inner">
          <div class="bestiary-card-art-wrap">
            <span class="bestiary-badge bestiary-badge-float" style="background:var(--r)">${e(t.threat)}</span>
            <div class="bestiary-card-art art-frame">${a(t.image,r,`anim-float`)}</div>
          </div>
          <div class="bestiary-card-foot">
            <h2 class="bestiary-name truncate">${r}</h2>
            <div class="bestiary-tags">
              <span>T${t.tier}</span>
              <span>·</span>
              <span class="truncate">${t.role||``}</span>
            </div>
          </div>
        </div>
      </a>`}).join(``),c()):n.innerHTML=`<div class="bestiary-empty" data-i18n="bestiary.empty">${r(`bestiary.empty`)}</div>`}document.getElementById(`tierRow`).addEventListener(`click`,e=>{let t=e.target.closest(`[data-tier]`);t&&(y=t.dataset.tier||``,T(),D())}),document.getElementById(`threatRow`).addEventListener(`click`,t=>{let n=t.target.closest(`[data-threat]`);n&&(b=n.dataset.threat||``,T(),D(),u(b?e(b):r(`bestiary.all`)))}),document.getElementById(`q`).addEventListener(`input`,()=>{clearTimeout(window.__q),window.__q=setTimeout(D,120)}),document.getElementById(`btnGrid`).addEventListener(`click`,()=>{x=`grid`,T(),D(),d.click()}),document.getElementById(`btnList`).addEventListener(`click`,()=>{x=`list`,T(),D(),d.click()}),window.addEventListener(`sugeon:lang`,()=>{n(document),w(),D()}),T(),D();