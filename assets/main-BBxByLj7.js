import{_ as e,a as t,g as n,h as r,i,n as a,r as o,u as s,y as c}from"./ui-DnTEYaV6.js";import{c as l,r as u,t as d}from"./mobs-D_R3keVO.js";document.querySelector(`#app`).innerHTML=`
  ${a(`home`)}
  <main class="relative mx-auto max-w-6xl px-5 home-stage">
    <section>
      <img data-brand-word src="/assets/brand/wordmark.png" alt="Sugeon Area"
        class="brand-word home-brand-mark ${s()===`dark`?`brand-word-on-dark`:``}" />
      <p class="home-kicker mt-5">Sugeon Area · MythicMobs · Paper 1.21.1</p>
      <h1 class="home-title" data-i18n="home.title">${n(`home.title`)}</h1>
      <p class="home-lead mt-5" data-i18n="home.lead">${n(`home.lead`)}</p>
      <div class="mt-8 flex flex-wrap gap-3">
        <a href="/bestiary.html" class="btn btn-primary px-7 py-3" data-i18n="home.ctaList">${n(`home.ctaList`)}</a>
        <a href="/simulator.html" class="btn px-7 py-3" data-i18n="home.ctaSim">${n(`home.ctaSim`)}</a>
      </div>
      <dl class="home-stats">
        <div class="home-stat">
          <dt data-i18n="home.statMobs">${n(`home.statMobs`)}</dt>
          <dd class="num" id="statCount">—</dd>
        </div>
        <div class="home-stat">
          <dt data-i18n="home.statT1">${n(`home.statT1`)}</dt>
          <dd class="num" id="statT1">—</dd>
        </div>
        <div class="home-stat">
          <dt data-i18n="home.statT2">${n(`home.statT2`)}</dt>
          <dd class="num" id="statT2">—</dd>
        </div>
      </dl>
    </section>

    <section class="mt-14">
      <div class="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p class="font-display text-2xl tracking-tight" data-i18n="home.featuredLabel">${n(`home.featuredLabel`)}</p>
          <p class="mt-1 text-sm text-muted" data-i18n="home.featuredHint">${n(`home.featuredHint`)}</p>
        </div>
        <a href="/bestiary.html" class="btn text-xs" data-i18n="home.ctaList">${n(`home.ctaList`)}</a>
      </div>
      <div id="featured" class="home-ledger"></div>
    </section>
  </main>
  ${t()}
`,o();var f=await l();document.getElementById(`statCount`).textContent=String(f.length),document.getElementById(`statT1`).textContent=String(f.filter(e=>e.tier===1).length),document.getElementById(`statT2`).textContent=String(f.filter(e=>e.tier===2).length);var p=[...f].sort((e,t)=>(t.score100||0)-(e.score100||0)).slice(0,6);function m(){document.getElementById(`featured`).innerHTML=p.map(t=>{let n=r(t),a=d[t.threat]||u[t.tier];return`<a href="/mob.html?id=${encodeURIComponent(t.id)}" class="ledger-row mob-card" style="--r:${a}">
        <div class="ledger-row-art art-frame">${i(t.image,n,``)}</div>
        <div class="min-w-0">
          <h3 class="truncate">${n}</h3>
          <div class="ledger-meta">${e(t.threat)} · T${t.tier}</div>
        </div>
        <div class="ledger-score num">${t.score100??`—`}</div>
      </a>`}).join(``)}m(),window.addEventListener(`sugeon:lang`,m),c.from(`main section`,{y:22,opacity:0,duration:.65,stagger:.1,ease:`power3.out`});