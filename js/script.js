document.addEventListener('DOMContentLoaded', () => {
    // Current state
    let currentBuild = builds[0]; // Default to first build
    let currentAct = 'act1';
    let selectedVariants = {
        multiclass: 'paladin',
        gear: 'shadowblade'
    };

    // Initialize UI
    renderBuild(currentBuild);

    // Event Delegation for Navigation
    document.querySelector('.nav-grid').addEventListener('click', (e) => {
        const card = e.target.closest('.nav-card');
        if (!card) return;

        const buildId = card.dataset.build;
        const build = builds.find(b => b.id === buildId);

        if (build) {
            currentBuild = build;
            currentAct = 'act1'; // Reset act on build change
            updateActiveNav(card);
            renderBuild(build);
        }
    });

    // Tab Navigation
    document.querySelector('.tab-nav').addEventListener('click', (e) => {
        if (e.target.classList.contains('tab-btn')) {
            updateActiveTab(e.target);
            renderTabContent(e.target.dataset.tab);
        }
    });

    function renderBuild(build) {
        // Build Header
        document.getElementById('build-name').textContent = build.name;
        document.getElementById('build-role-text').textContent = build.role;
        document.getElementById('build-desc').textContent = build.description;
        document.getElementById('build-multiclass').textContent = build.multiclass;

        // Races summary for header
        const racesText = build.best_races.map(r => r.name).join(', ');
        document.getElementById('build-race').textContent = 'Recommended: ' + (racesText || 'Any');

        // Render Overview Tab by default
        renderTabContent('overview');
        updateActiveTab(document.querySelector('[data-tab="overview"]'));
    }

    function renderTabContent(tab) {
        const content = document.getElementById('tab-content');
        content.className = 'tab-pane active';
        content.innerHTML = ''; // Clear previous

        switch(tab) {
            case 'overview':
                renderOverview(currentBuild);
                break;
            case 'abilities':
                renderAbilities(currentBuild);
                break;
            case 'leveling':
                renderLeveling(currentBuild);
                break;
            case 'gear':
                renderEquipment(currentBuild);
                break;
            case 'strategy':
                renderStrategy(currentBuild);
                break;
            case 'takeaways':
                renderTakeaways(currentBuild);
                break;
        }
    }

    function renderOverview(build) {
        const content = document.getElementById('tab-content');
        content.innerHTML = `
            <div class="lore-section">
                <h3 class="block-title">The Legend</h3>
                <p class="lede">${build.lore}</p>
            </div>
            <div class="overview-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; margin-top: 32px;">
                <div class="overview-card" style="background: var(--surface-2); border: 1px solid var(--border-soft); border-radius: 16px; padding: 24px;">
                    <h3 style="font-family: 'Cinzel', serif; color: var(--gold); margin-top: 0;">Core Identity</h3>
                    <p style="color: var(--text-dim); line-height: 1.6;">${build.description}</p>
                </div>
                <div class="overview-card" style="background: var(--surface-2); border: 1px solid var(--border-soft); border-radius: 16px; padding: 24px;">
                    <h3 style="font-family: 'Cinzel', serif; color: var(--gold); margin-top: 0;">Party Role</h3>
                    <p style="color: var(--text-dim); line-height: 1.6;">${build.role}</p>
                </div>
            </div>
        `;
    }

    function renderAbilities(build) {
        const content = document.getElementById('tab-content');

        let html = `
            <h3 class="block-title">Target Ability Scores</h3>
            <div class="ability-grid">
        `;

        build.abilities.forEach(ability => {
            html += `
                <div class="ability-card">
                    <div class="ability-name">${ability.score}</div>
                    <div class="ability-score">${ability.value}</div>
                    <p class="ability-reason">${ability.reason}</p>
                </div>
            `;
        });

        html += `</div>
            <h3 class="block-title">Best Races & Racial Utility</h3>
            <div class="race-grid">
        `;

        build.best_races.forEach(race => {
            html += `
                <div class="race-card">
                    <span class="race-name">${race.name}</span>
                    <p class="race-utility">${race.utility}</p>
                </div>
            `;
        });

        html += `</div>`;
        content.innerHTML = html;
    }

    function renderLeveling(build) {
        const content = document.getElementById('tab-content');
        let html = '';

        if (build.variants) {
            html += renderVariantSelector(build);
        }

        let levelingData = build.leveling;
        if (build.id === 'godblade') {
            levelingData = build[`leveling_${selectedVariants.multiclass}`] || build.leveling;
        }

        html += '<div class="leveling-timeline">';
        levelingData.forEach(step => {
            html += `
                <div class="level-node">
                    <div class="level-header">
                        <span class="level-num">${step.level}</span>
                        <span class="level-title">${step.title}</span>
                        <span class="level-toggle">▶</span>
                    </div>
                    <div class="level-details">
                        <p>${step.description}</p>
                    </div>
                </div>
            `;
        });
        html += '</div>';

        content.innerHTML = html;

        // Add expansion listeners
        content.querySelectorAll('.level-header').forEach(header => {
            header.addEventListener('click', () => {
                header.parentElement.classList.toggle('expanded');
            });
        });

        attachVariantListeners();
    }

    function renderEquipment(build) {
        const content = document.getElementById('tab-content');
        let html = '';

        if (build.variants) {
            html += renderVariantSelector(build);
        }

        html += `
            <div class="sub-tabs">
                <button class="sub-tab-btn ${currentAct === 'act1' ? 'active' : ''}" data-act="act1">Act I</button>
                <button class="sub-tab-btn ${currentAct === 'act2' ? 'active' : ''}" data-act="act2">Act II</button>
                <button class="sub-tab-btn ${currentAct === 'act3' ? 'active' : ''}" data-act="act3">Act III</button>
            </div>
            <div class="gear-grid">
        `;

        let equipmentData = build.equipment;
        if (build.id === 'godblade') {
            equipmentData = build[`equipment_${selectedVariants.gear}`] || build.equipment;
        }

        const items = equipmentData[currentAct];
        if (items) {
            items.forEach(item => {
                const rarityClass = `rarity-${item.rarity}`;
                const wikiUrl = `https://bg3.wiki/wiki/${item.name.replace(/ /g, '_')}`;
                html += `
                    <div class="gear-card ${rarityClass}">
                        <div class="item-icon-wrapper">
                            <img src="assets/gear/${item.name.toLowerCase().replace(/ /g, '-')}.png"
                                 onerror="this.src='assets/gear/placeholder.png'"
                                 alt="${item.name}">
                        </div>
                        <div class="item-info">
                            <span class="item-slot">${item.slot}</span>
                            <h4 class="item-name">${item.name}</h4>
                            <p class="item-location"><span class="loc-pin">📍</span> ${item.location}</p>
                            ${item.note ? `<p class="item-note">${item.note}</p>` : ''}
                            <a href="${wikiUrl}" target="_blank" class="wiki-link">View on Wiki ↗</a>
                        </div>
                    </div>
                `;
            });
        }

        html += '</div>';

        if (build.alt_gear) {
            html += `
                <div class="alternatives-section">
                    <h3><span class="accent-diamond"></span> Alternative Gear Options</h3>
                    <div class="alt-grid">
            `;
            build.alt_gear.forEach(alt => {
                html += `
                    <div class="alt-card">
                        <h4>${alt.title}</h4>
                        <p>${alt.description}</p>
                    </div>
                `;
            });
            html += '</div></div>';
        }

        content.innerHTML = html;

        // Sub-tab listeners
        content.querySelector('.sub-tabs').addEventListener('click', (e) => {
            if (e.target.classList.contains('sub-tab-btn')) {
                currentAct = e.target.dataset.act;
                renderEquipment(build);
            }
        });

        attachVariantListeners();
    }

    function renderStrategy(build) {
        const content = document.getElementById('tab-content');
        let html = `
            <div class="strategy-panel">
                <h3 class="block-title">Combat Strategy</h3>
                <p class="lede">${build.strategy}</p>
            </div>
        `;

        if (build.arcane_shots) {
            html += renderTierList(build.arcane_shots, "Arcane Shot Tier List");
        }

        if (build.dirty_tricks) {
            html += renderTierList(build.dirty_tricks, "Dirty Tricks & Swarm Tier List");
        }

        content.innerHTML = html;
    }

    function renderTierList(data, title) {
        return `
            <h3 class="block-title">${title}</h3>
            <div class="tier-list">
                <div class="tier-row tier-god">
                    <div class="tier-label">S</div>
                    <div class="tier-content">
                        ${data.god.map(item => `
                            <div class="shot-card">
                                <h5>${item.name}</h5>
                                <p>${item.effect}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="tier-row tier-good">
                    <div class="tier-label">A</div>
                    <div class="tier-content">
                        ${data.good.map(item => `
                            <div class="shot-card">
                                <h5>${item.name}</h5>
                                <p>${item.effect}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
                ${data.avoid ? `
                <div class="tier-row tier-avoid">
                    <div class="tier-label">F</div>
                    <div class="tier-content">
                        ${data.avoid.map(item => `
                            <div class="shot-card">
                                <h5>${item.name}</h5>
                                <p>${item.effect}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>` : ''}
            </div>
        `;
    }

    function renderTakeaways(build) {
        const content = document.getElementById('tab-content');
        let html = '<h3 class="block-title">Key Build Takeaways</h3><ul class="takeaways-list">';
        build.takeaways.forEach(item => {
            html += `<li>${item}</li>`;
        });
        html += '</ul>';
        html += '<div class="party-synergy-note"><h4>The Heroes of History Synergy</h4><p>This build was designed as part of a broken Honor Mode party. There is <b>exactly zero gear overlap</b> with the other members, and every build utilizes the party\'s shared <b>Resonance Stone</b> for massive psychic damage bursts.</p></div>';
        content.innerHTML = html;
    }

    function renderVariantSelector(build) {
        let html = '<div class="variant-selector">';

        if (build.variants.multiclass) {
            html += `
                <div class="variant-group">
                    <span class="variant-label">Multiclass Path</span>
                    <div class="variant-btns">
                        ${build.variants.multiclass.map(v => `
                            <button class="variant-btn ${selectedVariants.multiclass === v.id ? 'active' : ''}" data-variant-type="multiclass" data-variant-id="${v.id}">${v.name}</button>
                        `).join('')}
                    </div>
                    <div class="variant-info">${build.variants.multiclass.find(v => v.id === selectedVariants.multiclass).description}</div>
                </div>
            `;
        }

        if (build.variants.gear) {
            html += `
                <div class="variant-group">
                    <span class="variant-label">Weapon Strategy</span>
                    <div class="variant-btns">
                        ${build.variants.gear.map(v => `
                            <button class="variant-btn ${selectedVariants.gear === v.id ? 'active' : ''}" data-variant-type="gear" data-variant-id="${v.id}">${v.name}</button>
                        `).join('')}
                    </div>
                    <div class="variant-info">${build.variants.gear.find(v => v.id === selectedVariants.gear).description}</div>
                </div>
            `;
        }

        html += '</div>';
        return html;
    }

    function attachVariantListeners() {
        const btns = document.querySelectorAll('.variant-btn');
        btns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const type = e.target.dataset.variantType;
                const id = e.target.dataset.variantId;
                selectedVariants[type] = id;

                // Re-render current tab
                const activeTab = document.querySelector('.tab-btn.active').dataset.tab;
                renderTabContent(activeTab);
            });
        });
    }

    function updateActiveNav(activeCard) {
        document.querySelectorAll('.nav-card').forEach(c => c.classList.remove('active'));
        activeCard.classList.add('active');
    }

    function updateActiveTab(activeTab) {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        activeTab.classList.add('active');
    }
});
