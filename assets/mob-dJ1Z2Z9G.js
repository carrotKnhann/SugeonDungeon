import{_ as e,a as t,f as n,g as r,h as i,i as a,n as o,r as s,s as c,t as l,u,v as d,y as f}from"./ui-CtIhHYz-.js";import{c as p,d as m,l as h,r as g,s as _,t as v,u as y}from"./mobs-BNetkzML.js";var b=new URLSearchParams(location.search).get(`id`);function x(){return u()===`dark`?`/assets/brand/mark-dark.png`:`/assets/brand/mark-light.png`}document.querySelector(`#app`).innerHTML=`
  ${o(`list`)}
  <main id="sheet" class="relative min-h-[calc(100vh-72px)]">
    <div class="relative flex min-h-[40vh] items-center justify-center text-muted" data-i18n="mob.loading">${r(`mob.loading`)}</div>
  </main>
  ${t()}
`,s();try{let t=await p(),o=_(t,b);if(!o)document.getElementById(`sheet`).innerHTML=`
      <div class="relative mx-auto max-w-lg px-5 py-24 text-center">
        <img data-brand-mark src="${x()}" alt="" class="brand-mark mx-auto mb-6 h-16 w-16" />
        <h1 class="text-2xl font-extrabold" data-i18n="mob.notFound">${r(`mob.notFound`)}</h1>
        <p class="mt-2 text-muted" data-i18n="mob.notFoundHint">${r(`mob.notFoundHint`)}</p>
        <a href="/bestiary.html" class="btn btn-primary mt-8" data-i18n="mob.back">${r(`mob.back`)}</a>
      </div>`,n(document.getElementById(`sheet`));else{let{prev:n,next:s,index:u}=h(t,o.id),p=v[o.threat]||g[o.tier];function _(){document.title=`${i(o)} · SugeonDungeon`;let n=(o.skills||[]).map((e,t)=>{let{title:n}=y(e.name);return`
      <article class="skill-card-rich skill-card" style="--r:${p};animation-delay:${t*.06}s">
        <div class="skill-inner">
          <div class="skill-head">
            <span class="skill-ord" aria-hidden="true">${String(t+1).padStart(2,`0`)}</span>
            <div class="skill-head-main">
              <h3 class="skill-name">${n}</h3>
            </div>
          </div>
          <p class="skill-desc"><span class="text-muted text-xs uppercase tracking-wide">${r(`mob.trigger`)}</span> · ${e.trigger||`—`}</p>
          <p class="skill-desc mt-2">${e.effect||`—`}</p>
        </div>
      </article>`}).join(``),s=(o.minions||[]).map(e=>`
        <div class="info-tile">
          <div class="font-display font-bold">${e.display}</div>
          <div class="mt-1 text-sm text-muted">${e.role||``}</div>
          <div class="mt-2 flex gap-4 text-sm"><span class="num">HP ${e.hp}</span><span class="num">DMG ${e.damage}</span></div>
        </div>`).join(``),f=(()=>{let e=u,n=t.length,r=[];for(let o=-4;o<=4;o++){let s=t[(e+o+n*10)%n],c=o===0,l=i(s);r.push(`<a href="/mob.html?id=${encodeURIComponent(s.id)}" class="pet-strip-item ${c?`is-active`:``}" title="${l}">
            <div class="art-frame">${a(s.image,l,`max-h-[85%] max-w-[85%] object-contain`)}</div>
            <div class="mt-1 truncate text-center text-[10px] font-semibold ${c?`text-amber`:`text-muted`}">${l}</div>
          </a>`)}return r.join(``)})();document.getElementById(`sheet`).innerHTML=`
    <div class="relative mx-auto max-w-6xl px-5 py-6 pet-stage lg:py-8">
      <div class="mb-5 flex flex-wrap items-center gap-3">
        <a href="/bestiary.html" class="btn" data-i18n="mob.back">${r(`mob.back`)}</a>
        <span class="num text-xs text-muted">${u+1} / ${t.length}</span>
      </div>

      <div class="mb-8">
        <p class="mb-2 text-sm text-muted" data-i18n="mob.strip">${r(`mob.strip`)}</p>
        <div class="pet-strip" id="petStrip">${f}</div>
      </div>

      <div class="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <section class="space-y-8">
          <div>
            <div class="flex flex-wrap items-center gap-2">
              <span class="bestiary-badge" style="background:${p}">${e(o.threat)}</span>
              <span class="text-sm text-muted">T${o.tier} · ${o.role||``}</span>
            </div>
            <h1 class="pet-title mt-3">${i(o)}</h1>
            <div class="pet-hero-art mt-8" style="--r:${p}">
              <div class="art-frame">${a(o.image,i(o),`anim-float object-contain`)}</div>
            </div>
            <div class="mt-6 flex flex-wrap gap-3">
              <button type="button" class="btn btn-primary" id="btnShare" data-i18n="mob.share">${r(`mob.share`)}</button>
              <a href="/simulator.html?add=${encodeURIComponent(o.id)}" class="btn" data-i18n="nav.sim">${r(`nav.sim`)}</a>
            </div>
          </div>

          <div>
            <h2 class="font-display text-lg font-bold" data-i18n="mob.armor">${r(`mob.armor`)}</h2>
            <p class="mt-3 text-sm leading-relaxed text-muted">${o.armor||`—`}</p>
            ${o.modifiers?`<h3 class="mt-6 text-xs font-bold uppercase tracking-[0.12em] text-muted" data-i18n="mob.modifiers">${r(`mob.modifiers`)}</h3>
            <p class="mt-2 text-sm text-muted">${o.modifiers}</p>`:``}
          </div>
        </section>

        <aside class="space-y-10">
          <div>
            <h2 class="font-display text-lg font-bold" data-i18n="mob.stats">${r(`mob.stats`)}</h2>
            <div class="mt-4 space-y-4">
              <div>
                <div class="mb-1.5 flex justify-between text-sm"><span class="text-muted" data-i18n="mob.hp">${r(`mob.hp`)}</span><b class="num">${o.hp}</b></div>
                <div class="h-1 overflow-hidden rounded-full" style="background:color-mix(in srgb, var(--color-ink) 8%, transparent)"><i data-bar="${m(o.hp,250)}%" class="block h-full rounded-full" style="width:0;background:${p}"></i></div>
              </div>
              <div>
                <div class="mb-1.5 flex justify-between text-sm"><span class="text-muted" data-i18n="mob.dmg">${r(`mob.dmg`)}</span><b class="num">${o.damage}</b></div>
                <div class="h-1 overflow-hidden rounded-full" style="background:color-mix(in srgb, var(--color-ink) 8%, transparent)"><i data-bar="${m(o.damage,100)}%" class="block h-full rounded-full bg-amber" style="width:0"></i></div>
              </div>
              <div>
                <div class="mb-1.5 flex justify-between text-sm"><span class="text-muted" data-i18n="mob.speed">${r(`mob.speed`)}</span><b class="num">${o.speed??`—`}</b></div>
              </div>
              <div>
                <div class="mb-1.5 flex justify-between text-sm"><span class="text-muted" data-i18n="mob.kb">${r(`mob.kb`)}</span><b class="num">${o.kb??`—`}</b></div>
              </div>
            </div>
          </div>

          <div class="skill-panel">
            <div class="skill-panel-head">
              <h2 class="font-display text-lg font-bold" data-i18n="mob.skills">${r(`mob.skills`)}</h2>
              <span class="skill-panel-count"><span class="num">${(o.skills||[]).length}</span> <span data-i18n="mob.skillCount">${r(`mob.skillCount`)}</span></span>
            </div>
            <div class="skill-grid skill-grid-scroll">${n}</div>
          </div>

          ${o.minions?.length?`<div>
            <h2 class="font-display text-lg font-bold mb-4" data-i18n="mob.minions">${r(`mob.minions`)}</h2>
            <div class="grid gap-3">${s}</div>
          </div>`:``}
        </aside>
      </div>
    </div>`,document.getElementById(`btnShare`)?.addEventListener(`click`,async()=>{try{await navigator.clipboard.writeText(location.href),d.success(),c(r(`mob.shareOk`))}catch{c(location.href)}}),document.getElementById(`petStrip`)?.querySelector(`.is-active`)?.scrollIntoView({inline:`center`,block:`nearest`,behavior:`smooth`}),l(document.getElementById(`sheet`))}_(),window.addEventListener(`sugeon:lang`,_),window.addEventListener(`keydown`,e=>{e.target.matches(`input,textarea`)||(e.key===`ArrowLeft`&&(d.open(),location.href=`/mob.html?id=${encodeURIComponent(n.id)}`),e.key===`ArrowRight`&&(d.open(),location.href=`/mob.html?id=${encodeURIComponent(s.id)}`),e.key===`Escape`&&(location.href=`/bestiary.html`))}),f.from(`#sheet section, #sheet aside > div`,{y:22,opacity:0,duration:.5,stagger:.07,ease:`power3.out`}),d.open()}}catch(e){document.getElementById(`sheet`).innerHTML=`
    <div class="relative mx-auto max-w-lg px-5 py-24 text-center">
      <h1 class="text-2xl font-extrabold" data-i18n="mob.loadError">${r(`mob.loadError`)}</h1>
      <p class="mt-2 text-muted">${e.message||e}</p>
      <a href="/bestiary.html" class="btn btn-primary mt-8" data-i18n="mob.back">${r(`mob.back`)}</a>
    </div>`}