import{a as e,c as t,d as n,f as r,g as i,l as a,n as o,p as s,r as c,y as l}from"./ui-DnTEYaV6.js";function u(e){return`<li data-i18n="${e}">${i(e)}</li>`}function d(){document.querySelector(`#app`).innerHTML=`
  ${o(`guide`)}
  <main class="relative mx-auto max-w-6xl px-5 pb-24 pt-6">
    <header class="guide-hero">
      <h1 data-i18n="guide.title">${i(`guide.title`)}</h1>
      <p class="lead" data-i18n="guide.lead">${i(`guide.lead`)}</p>
    </header>
    <div class="guide-layout">
      <aside class="guide-toc hidden lg:block" id="guideToc">
        <p class="guide-toc-title" data-i18n="guide.tocTitle">${i(`guide.tocTitle`)}</p>
        <nav aria-label="TOC">
          <a href="#guide-read" data-i18n="guide.toc.read">${i(`guide.toc.read`)}</a>
          <a href="#guide-tiers" data-i18n="guide.toc.tiers">${i(`guide.toc.tiers`)}</a>
          <a href="#guide-sim" data-i18n="guide.toc.sim">${i(`guide.toc.sim`)}</a>
          <a href="#guide-tips" data-i18n="guide.toc.tips">${i(`guide.toc.tips`)}</a>
        </nav>
      </aside>
      <div id="guideSections">
        <article class="guide-section" id="guide-read">
          <h2 data-i18n="guide.readTitle">${i(`guide.readTitle`)}</h2>
          <p class="lead" data-i18n="guide.readLead">${i(`guide.readLead`)}</p>
          <p class="body" data-i18n="guide.readBody">${i(`guide.readBody`)}</p>
        </article>
        <article class="guide-section" id="guide-tiers">
          <h2 data-i18n="guide.tiersTitle">${i(`guide.tiersTitle`)}</h2>
          <p class="lead" data-i18n-html="1" data-i18n="guide.tiersLead">${i(`guide.tiersLead`)}</p>
          <p class="body" data-i18n="guide.tiersBody">${i(`guide.tiersBody`)}</p>
        </article>
        <article class="guide-section" id="guide-sim">
          <h2 data-i18n="guide.simTitle">${i(`guide.simTitle`)}</h2>
          <p class="lead" data-i18n="guide.simLead">${i(`guide.simLead`)}</p>
        </article>
        <article class="guide-section" id="guide-tips">
          <h2 data-i18n="guide.tipsTitle">${i(`guide.tipsTitle`)}</h2>
          <ul class="guide-tips">
            ${u(`guide.tip1`)}
            ${u(`guide.tip2`)}
            ${u(`guide.tip3`)}
            ${u(`guide.tip4`)}
          </ul>
        </article>
        <div class="guide-cta">
          <a href="/bestiary.html" class="btn btn-primary" data-i18n="guide.toList">${i(`guide.toList`)}</a>
          <a href="https://pet.sugeonarea.com" class="btn" target="_blank" rel="noopener" data-i18n="guide.toPet">${i(`guide.toPet`)}</a>
        </div>
      </div>
    </div>
  </main>
  ${e()}
`,r(document),window.__guideBooted?(t(),a(),s(),n()):(window.__guideBooted=!0,c(),l.from(`.guide-hero`,{y:18,opacity:0,duration:.5,ease:`power3.out`})),p()}var f=null;function p(){f&&f.abort(),f=new AbortController;let{signal:e}=f,t=[...document.querySelectorAll(`#guideToc a`)],n=t.map(e=>document.querySelector(e.getAttribute(`href`))).filter(Boolean),r=()=>{let e=window.scrollY+120,r=n[0];for(let t of n)t.offsetTop<=e&&(r=t);t.forEach(e=>{e.classList.toggle(`is-active`,e.getAttribute(`href`)===`#${r?.id}`)})};window.addEventListener(`scroll`,r,{passive:!0,signal:e}),r()}d(),window.addEventListener(`sugeon:lang`,d);