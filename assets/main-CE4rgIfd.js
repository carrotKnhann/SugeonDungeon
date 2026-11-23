import{_ as e,a as t,g as n,h as r,i,n as a,r as o,u as s,y as c}from"./ui-CtIhHYz-.js";import{c as l,r as u,t as d}from"./mobs-BNetkzML.js";document.querySelector(`#app`).innerHTML=`
  ${a(`home`)}
  <main class="relative mx-auto max-w-6xl px-5 home-stage">
    <section class="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-16">
      <div>
        <div class="brand-hero mb-8">
          <div class="brand-hero-glow" aria-hidden="true"></div>
          <img data-brand-word src="/assets/brand/wordmark-hero.png" alt="Sugeon Area"
            class="brand-word brand-hero-img relative z-10 w-full max-w-[min(94vw,520px)] ${s()===`dark`?`brand-word-on-dark`:``}" />
        </div>
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
      </div>
      <div>
        <div class="home-featured-head mb-4">
          <div class="min-w-0">
            <p class="font-display text-lg font-bold tracking-tight" data-i18n="home.featuredLabel">${n(`home.featuredLabel`)}</p>
            <p class="mt-1 text-sm text-muted" data-i18n="home.featuredHint">${n(`home.featuredHint`)}</p>
          </div>
        </div>
        <div id="featured" class="home-bento"></div>
      </div>
    </section>
  </main>
  ${t()}
`,o();var f=await l();document.getElementById(`statCount`).textContent=String(f.length),document.getElementById(`statT1`).textContent=String(f.filter(e=>e.tier===1).length),document.getElementById(`statT2`).textContent=String(f.filter(e=>e.tier===2).length);var p=[...f].sort((e,t)=>(t.score100||0)-(e.score100||0)).slice(0,5);function m(){document.getElementById(`featured`).innerHTML=p.map((t,n)=>{let a=r(t),o=d[t.threat]||u[t.tier];return`<a href="/mob.html?id=${encodeURIComponent(t.id)}" class="feat-card feat-${n} mob-card" style="--r:${o}">
        <div class="art-frame">${i(t.image,a,n===0?`anim-float`:``)}</div>
        <div class="feat-card-meta">
          <span class="feat-badge">${e(t.threat)} · T${t.tier}</span>
          <h3>${a}</h3>
        </div>
      </a>`}).join(``)}m(),window.addEventListener(`sugeon:lang`,m),c.from(`main section > div`,{y:28,opacity:0,duration:.7,stagger:.12,ease:`power3.out`});