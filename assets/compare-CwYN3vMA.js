import{_ as e,a as t,f as n,g as r,h as i,n as a,r as o,y as s}from"./ui-DnTEYaV6.js";import{c,t as l}from"./mobs-D_R3keVO.js";document.querySelector(`#app`).innerHTML=`
  ${a(`compare`)}
  <main class="relative mx-auto max-w-6xl px-5 pb-24 pt-6">
    <header class="bestiary-hero">
      <h1 data-i18n="compare.title">${r(`compare.title`)}</h1>
      <p class="lead" data-i18n="compare.lead">${r(`compare.lead`)}</p>
    </header>
    <div class="compare-wrap">
      <table class="compare-table" id="table">
        <thead>
          <tr>
            <th data-sort="display" data-i18n="compare.colName">${r(`compare.colName`)}</th>
            <th data-sort="tier" data-i18n="compare.colTier">${r(`compare.colTier`)}</th>
            <th data-sort="hp" data-i18n="compare.colHp">${r(`compare.colHp`)}</th>
            <th data-sort="damage" data-i18n="compare.colDmg">${r(`compare.colDmg`)}</th>
            <th data-sort="score100" data-i18n="compare.colScore">${r(`compare.colScore`)}</th>
            <th data-sort="threat" data-i18n="compare.colThreat">${r(`compare.colThreat`)}</th>
          </tr>
        </thead>
        <tbody id="tbody"></tbody>
      </table>
    </div>
  </main>
  ${t()}
`,o(),s.from(`.bestiary-hero`,{y:18,opacity:0,duration:.5,ease:`power3.out`});var u=await c(),d=`score100`,f=!1;function p(){let t=[...u].sort((e,t)=>{let n=d===`display`?i(e):e[d],r=d===`display`?i(t):t[d];return typeof n==`string`&&(n=n.toLowerCase()),typeof r==`string`&&(r=r.toLowerCase()),n<r?f?-1:1:n>r?f?1:-1:0});document.getElementById(`tbody`).innerHTML=t.map(t=>{let n=l[t.threat]||`var(--color-amber)`;return`<tr class="compare-row" data-href="/mob.html?id=${encodeURIComponent(t.id)}">
        <td class="font-display font-semibold">${i(t)}</td>
        <td class="num">T${t.tier}</td>
        <td class="num">${t.hp}</td>
        <td class="num">${t.damage}</td>
        <td class="num">${t.score100??`—`}</td>
        <td><span class="bestiary-badge" style="background:${n}">${e(t.threat)}</span></td>
      </tr>`}).join(``)}document.getElementById(`table`).addEventListener(`click`,e=>{let t=e.target.closest(`th[data-sort]`);if(t){let e=t.dataset.sort;d===e?f=!f:(d=e,f=e===`display`||e===`threat`),p();return}let n=e.target.closest(`tr[data-href]`);n&&(location.href=n.dataset.href)}),window.addEventListener(`sugeon:lang`,()=>{n(document),p()}),p();