/* ============================= STATE ============================= */
let currentBuild = 'A';
let currentSection = 'overview';
const sections = [
  {id:'overview', label:'Overview'},
  {id:'abilities', label:'Abilities'},
  {id:'leveling', label:'Leveling'},
  {id:'gear', label:'Gear'},
  {id:'strategy', label:'Strategy'},
  {id:'notes', label:'Takeaways'},
];

/* ============================= RENDER: build select ============================= */
function renderBuildSelect(){
  const el = document.getElementById('buildSelect');
  el.innerHTML = Object.keys(builds).map(id=>{
    const b = builds[id];
    const active = id===currentBuild ? 'active' : '';
    return `<button class="build-btn ${active}" data-build="${id}"
      style="--btn-accent:${b.accent}; --btn-accent-soft:${b.accentSoft}; --btn-accent-line:${b.accentLine};">
      <span class="build-tag">Build ${id} · ${b.tag}</span>
      <span class="build-name">"${b.codename}"</span>
      <span class="build-sub">${b.subtitle}</span>
    </button>`;
  }).join('');
  el.querySelectorAll('.build-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      currentBuild = btn.dataset.build;
      currentSection = 'overview';
      fullRender();
    });
  });
}

/* ============================= RENDER: banner ============================= */
function renderBanner(){
  const b = builds[currentBuild];
  document.documentElement.style.setProperty('--accent', b.accent);
  document.documentElement.style.setProperty('--accent-soft', b.accentSoft);
  document.documentElement.style.setProperty('--accent-line', b.accentLine);

  const splitPills = b.overview.split.map(s=>`<span class="pill"><b>${s.levels}</b> ${s.name}</span>`).join('');
  document.getElementById('banner').innerHTML = `
    <div class="banner-top">
      <div>
        <span class="eyebrow" style="text-align:left; margin-bottom:4px;">Build ${currentBuild}</span>
        <h2><span class="codename">${b.codename}</span></h2>
        <span class="banner-theme">${b.subtitle}</span>
      </div>
      <div style="text-align:right">
        <div class="pill" style="margin-bottom:8px; border-color:var(--gold);">Role: <b>${b.role}</b></div>
        <div class="pill">Difficulty: <b>${b.difficulty}</b></div>
      </div>
    </div>
    <p class="tag">${b.overview.theme}</p>
    <div class="pill-row">${splitPills}<span class="pill">Recommended: <b>${b.overview.recommended.split(' — ')[0]}</b></span></div>
  `;
}

/* ============================= RENDER: tabs ============================= */
function renderTabs(){
  document.getElementById('tabs').innerHTML = sections.map(s=>
    `<button class="tab-btn ${s.id===currentSection?'active':''}" data-section="${s.id}">${s.label}</button>`
  ).join('');
}

function setupTabs(){
  const tabsContainer = document.getElementById('tabs');
  tabsContainer.addEventListener('click', (e)=>{
    const btn = e.target.closest('.tab-btn');
    if(!btn) return;
    currentSection = btn.dataset.section;
    renderTabs();
    renderContent();
  });
}

/* ============================= RENDER: content dispatch ============================= */
function renderContent(){
  const b = builds[currentBuild];
  const c = document.getElementById('content');
  let html = '';
  if(currentSection==='overview') html = renderOverview(b);
  else if(currentSection==='abilities') html = renderAbilities(b);
  else if(currentSection==='leveling') html = renderLeveling(b);
  else if(currentSection==='gear') html = renderGear(b);
  else if(currentSection==='strategy') html = renderStrategy(b);
  else if(currentSection==='notes') html = renderNotes(b);
  c.innerHTML = `<div class="section-fade">${html}</div>`;
  attachInteractivity();
}

function shadeList(n){
  const base = [1, 0.7, 0.45, 0.28];
  return base.slice(0,n);
}

function renderOverview(b){
  const total = b.overview.split.reduce((a,s)=>a+s.levels,0);
  const shades = shadeList(b.overview.split.length);
  const bar = b.overview.split.map((s,i)=>
    `<div class="split-seg" style="width:${(s.levels/total*100).toFixed(1)}%; background:${b.accent}; opacity:${shades[i]};" title="${s.name} — ${s.levels} levels"></div>`
  ).join('');
  const legend = b.overview.split.map((s,i)=>
    `<div><span class="dot" style="background:${b.accent}; opacity:${shades[i]};"></span>${s.name} — ${s.levels} lvl${s.levels>1?'s':''}</div>`
  ).join('');

  return `
    <h3 class="block-title">Playstyle</h3>
    <p class="lede">${b.overview.playstyle}</p>

    <div class="pc-grid">
        <div class="pc-box pros">
            <h4>Strengths</h4>
            <ul>${b.overview.pros.map(p=>`<li>${p}</li>`).join('')}</ul>
        </div>
        <div class="pc-box cons">
            <h4>Weaknesses</h4>
            <ul>${b.overview.cons.map(c=>`<li>${c}</li>`).join('')}</ul>
        </div>
    </div>

    <h3 class="block-title">Recommended Companion</h3>
    <div class="companion-card">
        <img src="${b.portrait}" alt="${b.overview.recommended.split(' — ')[0]}" class="companion-portrait">
        <div class="companion-info">
            <h4>${b.overview.recommended.split(' — ')[0]}</h4>
            <p>${b.overview.recommended.split(' — ')[1] || b.overview.recommended}</p>
        </div>
    </div>

    <h3 class="block-title">Final Class Split — Level 12</h3>
    <div class="split-bar">${bar}</div>
    <div class="split-legend">${legend}</div>

    <h3 class="block-title">Racial Options</h3>
    <div class="info-grid">
      ${b.overview.races.map(r=>`
        <div class="info-card">
            <div class="k">${r.name}</div>
            <div class="v">${r.note}</div>
        </div>
      `).join('')}
    </div>
  `;
}

function renderAbilities(b){
  return `
    <h3 class="block-title">Starting Ability Scores</h3>
    <div class="ability-grid">
      ${b.abilities.map(a=>{
        const bonusStr = a.bonus ? `<span class="ability-bonus">(+${a.bonus})</span>` : '';
        return `
        <div class="ability-card">
          <div class="ability-name">${a.name}</div>
          <div class="ability-score">${a.score}${bonusStr}</div>
          <div class="ability-reason">${a.reason}</div>
        </div>
      `}).join('')}
    </div>
    <div class="note-box">
        <h4>Ability Score Assignment</h4>
        <p>At Level 1, assign your base points as shown above. The +1 and +2 icons denote where to place your racial/starting bonuses.</p>
    </div>
  `;
}

function renderLeveling(b){
  return `
    <h3 class="block-title">Level-by-Level Progression</h3>
    <div class="timeline">
      ${b.leveling.map((l,i)=>`
        <div class="lvl-node ${i===0?'open':''}">
          <button class="lvl-head">
            <span class="range">${l.range}</span>
            <span class="chev">▶</span>
          </button>
          <div class="lvl-body">
            <div class="lvl-body-inner">${l.html}</div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function renderGear(b){
  return `
    <h3 class="block-title">Equipment Guide</h3>
    ${b.gear.map(group => `
        <div class="gear-act-block">
            <h4 style="font-family:'Cinzel',serif; color:var(--gold); margin-bottom:16px; border-bottom: 1px solid var(--border-soft); padding-bottom:8px;">${group.title}</h4>
            ${group.intro ? `<p class="lede">${group.intro}</p>` : ''}
            <div class="gear-grid">
                ${group.items.map(item => `
                    <div class="gear-card rarity-${item.rarity || 'common'}">
                        <div class="gear-header">
                            <div class="gear-img-wrap">
                                <img src="${item.image}" alt="${item.item}" class="gear-img">
                            </div>
                            <div class="gear-title-row">
                                <span class="gear-slot">${item.slot}</span>
                                <div class="gear-name">${item.item}</div>
                            </div>
                        </div>
                        <span class="gear-location">📍 ${item.location}</span>
                        <div class="gear-desc">${item.note}</div>
                        <a href="${item.wiki}" target="_blank" class="gear-wiki-btn">
                            View on Wiki ↗
                        </a>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('')}
  `;
}

function renderStrategy(b){
  return `
    <h3 class="block-title">Combat Strategy</h3>
    ${b.strategy.map(s => `
        <div class="note-box">
            <h4>${s.title}</h4>
            <p>${s.html}</p>
        </div>
    `).join('')}
  `;
}

function renderNotes(b){
  return `
    <h3 class="block-title">Key Takeaways</h3>
    <div class="takeaway-list">
      ${b.takeaways.map(t=>`
        <div class="note-box" style="margin: 10px 0;">
            <p>${t}</p>
        </div>
      `).join('')}
    </div>
  `;
}

/* ============================= INTERACTIVITY ============================= */
function attachInteractivity(){
  document.querySelectorAll('.lvl-head').forEach(btn=>{
    btn.addEventListener('click', ()=>{
        const node = btn.closest('.lvl-node');
        const isOpen = node.classList.contains('open');

        // Close others
        document.querySelectorAll('.lvl-node').forEach(n => n.classList.remove('open'));

        if (!isOpen) {
            node.classList.add('open');
        }
    });
  });
}

function fullRender(){
  renderBuildSelect();
  renderBanner();
  renderTabs();
  renderContent();
}

document.addEventListener('DOMContentLoaded', ()=>{
  setupTabs();
  fullRender();
});
