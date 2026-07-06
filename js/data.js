const builds = {
  A: {
    codename: "Arcane Dead Eye",
    subtitle: "Arcane Archer Fighter",
    tag: "Fighter / Cleric",
    difficulty: "Easy",
    role: "Crowd Control / Ranged Burst",
    accent: "#4fa3d6",
    accentSoft: "rgba(79,163,214,0.14)",
    accentLine: "rgba(79,163,214,0.4)",
    portrait: "https://bg3.wiki/w/images/8/86/Portrait_Lae'zel.png",
    overview: {
      theme: "The ultimate controller-archer. Fuses meticulous archery with forgotten schools of spellcraft to dictate the outcome of large battles.",
      playstyle: "A high-utility carry that provides massive crowd control through magical arrows. Can fire up to 8 shots in a single turn by late game.",
      pros: [
        "Unmatched ranged crowd control (Banishing/Blinding)",
        "Not gear dependent — powerful with just a bow",
        "Insane action economy (Action Surge + War Priest)",
        "Shadow Arrow + Resonance Stone synergy for massive damage"
      ],
      cons: [
        "Limited Arcane Shot charges early on",
        "Multi-ability dependent (Dexterity and Intelligence)"
      ],
      split: [
        { name: "Arcane Archer Fighter", levels: 11 },
        { name: "War Domain Cleric", levels: 1 }
      ],
      recommended: "Lae'zel — as a Githyanki Fighter, she has the perfect racial traits (Misty Step, Astral Knowledge) for this role.",
      races: [
        { name: "Githyanki", note: "Positioning superiority with Misty Step and skill flexibility with Astral Knowledge." },
        { name: "Drow", note: "Superior Darkvision for long-range accuracy in dark environments." }
      ]
    },
    abilities: [
      { name: "Dexterity", score: 16, bonus: 2, reason: "Drives attack accuracy, damage, and initiative." },
      { name: "Intelligence", score: 16, bonus: 1, reason: "Determines the Spell DC for Arcane Shots like Banishment." },
      { name: "Constitution", score: 14, reason: "Standard HP and concentration support." },
      { name: "Wisdom", score: 10, reason: "Base for perception/saves." },
      { name: "Strength", score: 8, reason: "Not needed (unless using Titanstring path)." },
      { name: "Charisma", score: 8, reason: "Not needed." }
    ],
    leveling: [
      { range: "Fighter — Levels 1–2", html: `<strong>Fighting Style:</strong> Archery (+2 to hit).<br><strong>Action Surge:</strong> The core of your 'Rage Burst' — allows double actions once per short rest.`},
      { range: "Level 3 — Arcane Shots", html: `
        Pick 3 shots.
        <ul>
          <li><strong>Banishing Arrow (God Tier):</strong> Charisma save. Disappears the threat for 2 turns.</li>
          <li><strong>Shadow Arrow (God Tier):</strong> Wisdom save. Blinds target and deals Psychic damage.</li>
          <li><strong>Bursting Arrow (Good):</strong> Force AoE. Great for groups.</li>
        </ul>
        <strong>Avoid:</strong> Beguiling and Enfeebling arrows — their impact is too low.`},
      { range: "Level 4", html: `<strong>Feat: Ability Improvement (+2 Dex)</strong>. Do not take Sharpshooter yet; you need the base accuracy first.`},
      { range: "Level 5", html: `<strong>Extra Attack:</strong> You now fire twice per action. 4 times with Action Surge.`},
      { range: "Level 6", html: `<strong>Feat: Sharpshooter</strong>. Now that your Dex is high, the +10 damage is worth the -5 penalty.`},
      { range: "Levels 7–10", html: `
        <strong>Curving Shot:</strong> If you miss, use a bonus action to reroll the attack against a different target.
        <br><strong>L8 Feat:</strong> +2 Dex (Reach 20).
        <br><strong>L10:</strong> Finalize shot roster (Banishing, Shadow, Bursting, Piercing, Grasping).`},
      { range: "Level 11", html: `<strong>Triple Attack:</strong> Innate 3 attacks per action. 6 with Action Surge.`},
      { range: "Level 12 — Cleric Dip", html: `
        <strong>War Domain:</strong> Adds War Priest charges (Bonus Action attacks).
        <br><strong>Spells:</strong> Sanctuary (survival) and Divine Favor (damage).
        <br><strong>Final Action Economy:</strong> 3 (Extra Attack) + 3 (Action Surge) + 1 (War Priest) + 1 (Haste) = 8 shots.`}
    ],
    gear: [
      {
        title: "The Bow Progression",
        items: [
          { slot: "Early Game", item: "Joltshooter", rarity: "rare", image: "https://bg3.wiki/w/images/d/d9/The_Joltshooter_Icon.png", location: "Waukeen's Rest reward", wiki: "https://bg3.wiki/wiki/The_Joltshooter", note: "Builds Lightning Charges for damage/accuracy." },
          { slot: "Mid Game", item: "Bow of the Banshee", rarity: "rare", image: "https://bg3.wiki/w/images/5/5e/Bow_of_the_Banshee_Icon.png", location: "Sold by Corsair Greymon", wiki: "https://bg3.wiki/wiki/Bow_of_the_Banshee", note: "Frightens groups via Piercing Arrow synergy." },
          { slot: "End Game", item: "Gontr Mael", rarity: "legendary", image: "https://bg3.wiki/w/images/d/de/Gontr_Mael_Icon.png", location: "Steel Watcher Titan", wiki: "https://bg3.wiki/wiki/Gontr_Mael", note: "Legendary +3 bow, grants Celestial Haste." }
        ]
      },
      {
        title: "Supporting Gear",
        items: [
          { slot: "Head", item: "Mask of Soul Perception", rarity: "very-rare", image: "https://bg3.wiki/w/images/e/e1/Mask_of_Soul_Perception_Icon.png", location: "Devil's Fee, Act 3", wiki: "https://bg3.wiki/wiki/Mask_of_Soul_Perception", note: "+2 to attack rolls and initiative." },
          { slot: "Gloves", item: "Legacy of the Masters", rarity: "very-rare", image: "https://bg3.wiki/w/images/2/2a/Legacy_of_the_Masters_Icon.png", location: "Dammon, Forge of the Nine", wiki: "https://bg3.wiki/wiki/Legacy_of_the_Masters", note: "+2 to attack and damage rolls." },
          { slot: "Armor", item: "Helldusk Armour", rarity: "legendary", image: "https://bg3.wiki/w/images/c/cb/Helldusk_Armour_Icon.png", location: "House of Hope", wiki: "https://bg3.wiki/wiki/Helldusk_Armour", note: "Superior protection for your archer." },
          { slot: "Ring", item: "Ring of Mental Inhibition", rarity: "uncommon", image: "https://bg3.wiki/w/images/9/90/Ring_of_Mental_Inhibition_Icon.png", location: "Ruined Battlefield, Act 2", wiki: "https://bg3.wiki/wiki/Ring_of_Mental_Inhibition", note: "Enemies fail saves more often after being hit (Psychic synergy)." },
          { slot: "Melee", item: "Knife of the Undermountain King", rarity: "very-rare", image: "https://bg3.wiki/w/images/9/9b/Knife_of_the_Undermountain_King_Icon.png", location: "A'jak'nir Jeera, Creche", wiki: "https://bg3.wiki/wiki/Knife_of_the_Undermountain_King", note: "Stat stick for crits and rerolling 1s/2s." }
        ]
      }
    ],
    strategy: [
      {
        title: "Banishment Momentum",
        html: "Use Banishing Arrow on the boss or the most dangerous threat immediately. This turns an 'outnumbered' fight into a 'fair' cleanup while the boss is in another dimension."
      },
      {
        title: "Mass Frighten",
        html: "Combine <strong>Piercing Arrow</strong> with the <strong>Bow of the Banshee</strong>. Piercing Arrow applies the bow's on-hit effects to every enemy in its path, allowing you to frighten an entire pack with a single shot."
      },
      {
        title: "The Psychic Nuke",
        html: "Shadow Arrow deals Psychic damage. If a party member is carrying the Resonance Stone, this damage is doubled. Use Action Surge to blind and delete an entire group with psychic-boosted arrows."
      }
    ],
    takeaways: [
      "Banishing Arrow is the ultimate 'Oh Shift' button for Honor Mode.",
      "Intelligence is not just for Wizards; it's what makes your bow's CC stick.",
      "Wait for level 11 to multiclass; the third attack is too good to delay.",
      "Piercing Arrow applies your bow's effects (like Frighten) to every target hit.",
      "Curving Shot (L7) ensures that even a miss can be turned into a hit on a secondary target."
    ]
  },
  B: {
    codename: "Hexwing Phantom",
    subtitle: "Swashbuckler / Hexblade / Swarmkeeper",
    tag: "Rogue / Warlock / Ranger",
    difficulty: "Moderate",
    role: "Reconnaissance / Melee Skirmisher",
    accent: "#c1519f",
    accentSoft: "rgba(193,81,159,0.14)",
    accentLine: "rgba(193,81,159,0.4)",
    portrait: "https://bg3.wiki/w/images/6/6d/Portrait_Wyll.png",
    overview: {
      theme: "A supernatural master duelist who dances between shadows and curses, accompanied by a flurry of eerie moths.",
      playstyle: "A high-mobility melee striker and reconnaissance expert. Uses 'Dirty Tricks' to bully enemies and moth swarms for chained psychic damage.",
      pros: [
        "Extreme mobility (Fancy Footwork + Moth teleports)",
        "Disarms enemies on a bonus action (Flick of the Wrist)",
        "Charisma-based SAD (Single Ability Dependent) build",
        "Strong ranged (Eldritch Blast) and melee synergy"
      ],
      cons: [
        "Complex multiclass split (4/5/3)",
        "Requires specific order (Swashbuckler first) to come online early"
      ],
      split: [
        { name: "Swashbuckler Rogue", levels: 4 },
        { name: "Hexblade Warlock", levels: 5 },
        { name: "Swarmkeeper Ranger", levels: 3 }
      ],
      recommended: "Wyll — the thematic mix of a Charisma duelist and a warlock pact fits him perfectly.",
      races: [
        { name: "Wood Elf / Half-Elf", note: "Maximum movement speed for hit-and-run tactics." }
      ]
    },
    abilities: [
      { name: "Charisma", score: 16, bonus: 2, reason: "Scales your attacks (via Hexblade), spells, and Dirty Trick DC." },
      { name: "Dexterity", score: 16, bonus: 1, reason: "Important for early levels, AC, and initiative." },
      { name: "Constitution", score: 14, reason: "Sustain for frontlining." },
      { name: "Wisdom", score: 12, reason: "Helps with saves and scouting checks." },
      { name: "Strength", score: 8, reason: "Not needed." },
      { name: "Intelligence", score: 8, reason: "Not needed." }
    ],
    leveling: [
      { range: "Swashbuckler Rogue — Levels 1–4", html: `
        <strong>L3 Swashbuckler:</strong> Rakish Sneak Attack (no advantage needed) + Fancy Footwork (no opportunity attacks after hitting).
        <br><strong>L4 Dirty Tricks:</strong>
        <ul>
          <li><strong>Flick of the Wrist (BiS):</strong> Disarms enemy on a bonus action. Weapon-steal bully!</li>
          <li><strong>Sand Toss:</strong> Blind target.</li>
        </ul>
        <strong>Feat:</strong> Charisma +2.`},
      { range: "Hexblade Warlock — Levels 5–9", html: `
        <strong>L5 Hexblade:</strong> Bind Pact Weapon (scales with Cha).
        <br><strong>Spells:</strong> Shield, Armor of Agathys, Booming Blade.
        <br><strong>L8 Feat: Great Weapon Master (GWM)</strong> — Works with Phalar Aluve (Versatile).
        <br><strong>L9:</strong> Extra Attack from Pact of the Blade.`},
      { range: "Swarmkeeper Ranger — Levels 10–12", html: `
        <strong>L10:</strong> Heavy Armor proficiency (Ranger Knight).
        <br><strong>L12 Moths:</strong> Your gathered swarm. Deals psychic damage (Resonance Stone synergy) or teleports you after attacks.
        <br><strong>Sustain:</strong> Goodberries (bonus action) to proc Broodmother's Revenge.`}
    ],
    gear: [
      {
        title: "Act 1–2: The Versatile Duelist",
        items: [
          { slot: "Weapon", item: "Phalar Aluve", rarity: "rare", image: "https://bg3.wiki/w/images/6/67/Phalar_Aluve_Icon.png", location: "Underdark stone", wiki: "https://bg3.wiki/wiki/Phalar_Aluve", note: "Finesse versatile weapon — two-hand it for GWM damage while using Charisma." },
          { slot: "Armlet", item: "Broodmother's Revenge", rarity: "uncommon", image: "https://bg3.wiki/w/images/2/23/Broodmother's_Revenge_Icon.png", location: "Kagha", wiki: "https://bg3.wiki/wiki/Broodmother%27s_Revenge", note: "Adds poison to weapon after eating a Goodberry." },
          { slot: "Ring", item: "Strange Conduit Ring", rarity: "uncommon", image: "https://bg3.wiki/w/images/e/e4/Strange_Conduit_Ring_Icon.png", location: "Inquisitor chamber", wiki: "https://bg3.wiki/wiki/Strange_Conduit_Ring", note: "Extra psychic damage while concentrating (Hex/Elemental Weapon)." }
        ]
      },
      {
        title: "Act 3: Final Form",
        items: [
          { slot: "Weapon", item: "The Dancing Breeze", rarity: "very-rare", image: "https://bg3.wiki/w/images/a/ab/The_Dancing_Breeze_Icon.png", location: "Exxvikyap, Rivington", wiki: "https://bg3.wiki/wiki/The_Dancing_Breeze", note: "Finesse Glaive — massive reach + GWM + Whirlwind AoE." },
          { slot: "Helm", item: "Birthright", rarity: "very-rare", image: "https://bg3.wiki/w/images/1/1b/Birthright_Icon.png", location: "Sorcerous Sundries", wiki: "https://bg3.wiki/wiki/Birthright", note: "+2 Charisma (pushes to 22 with Mirror)." },
          { slot: "Armor", item: "Armour of Persistence", rarity: "very-rare", image: "https://bg3.wiki/w/images/8/8b/Armour_of_Persistence_Icon.png", location: "Dammon, Forge of the Nine", wiki: "https://bg3.wiki/wiki/Armour_of_Persistence", note: "Permanent Resistance and Warding Bond for ultimate tanking." },
          { slot: "Ring", item: "Risky Ring", rarity: "rare", image: "https://bg3.wiki/w/images/d/d4/Risky_Ring_Icon.png", location: "Araj Oblodra, Moonrise", wiki: "https://bg3.wiki/wiki/Risky_Ring", note: "Guarantees crits/sneak attacks and offsets GWM penalty." }
        ]
      }
    ],
    strategy: [
      {
        title: "The Scout & Bully",
        html: "Use Fancy Footwork to hit an enemy and run away safely without provoking opportunity attacks. Disarm them with Flick of the Wrist, pick up their weapon, and watch them struggle to punch you."
      },
      {
        title: "Booming Disarm",
        html: "Combo <strong>Booming Blade</strong> with <strong>Flick of the Wrist</strong>. You hit them with Booming Blade, disarm them on a bonus action, and then run away (Fancy Footwork). When they move to pick up their weapon, they trigger the Booming Blade movement damage."
      },
      {
        title: "Moth Mobility",
        html: "By level 12, your moths allow you to teleport after an action. This, combined with Rogue bonus-action dash and Fancy Footwork, makes you the most mobile character in the party."
      }
    ],
    takeaways: [
      "Flick of the Wrist is one of the strongest bonus actions in the game.",
      "Phalar Aluve + GWM + Hexblade is the secret early-game power spike.",
      "Moth damage is Psychic — it doubles with the Resonance Stone.",
      "Eat a Goodberry every turn to keep your weapon poisoned via Broodmother's Revenge."
    ]
  },
  C: {
    codename: "Godblade",
    subtitle: "Bladesinger Wizard / Paladin",
    tag: "Wizard / Paladin",
    difficulty: "Expert",
    role: "Magic Tank / Melee Burst / Utility",
    accent: "#d9b23c",
    accentSoft: "rgba(217,178,60,0.14)",
    accentLine: "rgba(217,178,60,0.4)",
    portrait: "https://bg3.wiki/w/images/9/9f/Portrait_Wood_Elf_Male.png",
    overview: {
      theme: "The 'chosen one' of the party. Fuses the destructive magic of a Wizard with the divine smites of a Paladin.",
      playstyle: "A tanky frontline wizard who uses magic to achieve 35+ AC. Delivers absolute nuclear damage via Shadow Blade and Divine Smites.",
      pros: [
        "Insane survivability (35+ AC with Mage Armor/Mirror/Shield)",
        "Highest single-turn burst (Nova) via Divine Smites",
        "Full Wizard utility (can scribe any spell)",
        "Shadow Blade + Resonance Stone synergy"
      ],
      cons: [
        "Extremely resource hungry (burns through spell slots)",
        "Vulnerable if Bladesong ends or concentration breaks"
      ],
      split: [
        { name: "Bladesinger Wizard", levels: 10 },
        { name: "Oath of the Crown Paladin", levels: 2 }
      ],
      recommended: "Custom Character — Wood Elf or Half-Orc for movement or crit bonuses.",
      races: [
        { name: "Half-Orc", note: "Incredible for the Godblade as it makes your Smite crits even more devastating." },
        { name: "Wood Elf", note: "Extra movement for the mobile Bladesinger style." }
      ]
    },
    abilities: [
      { name: "Dexterity", score: 17, bonus: 2, reason: "Primary attack stat and major AC contributor. Get to 20 via Ethel's Hair + Feat." },
      { name: "Intelligence", score: 16, bonus: 1, reason: "Spell DC and AC bonus during Bladesong." },
      { name: "Constitution", score: 14, reason: "Standard HP and concentration support." },
      { name: "Wisdom", score: 10, reason: "Saves." },
      { name: "Strength", score: 8, reason: "Not needed for this variant." },
      { name: "Charisma", score: 8, reason: "Not needed for this variant." }
    ],
    leveling: [
      { range: "Bladesinger Wizard — Levels 1–5", html: `
        <strong>L2 Subclass:</strong> Bladesong grants massive AC and Con save bonus.
        <br><strong>L3 Shadow Blade:</strong> Your primary weapon. Deals psychic damage.
        <br><strong>L4 Feat:</strong> +2 Dex.
        <br><strong>L5 Haste:</strong> Your first massive power spike. Extra action = more smites.`},
      { range: "Level 6", html: `<strong>Extra Attack:</strong> Bladesinger's unique version allows you to swap one attack for a cantrip (Booming Blade).`},
      { range: "Levels 7–10", html: `
        <strong>L8 Feat: Savage Attacker</strong> — Reroll all those smite and shadow blade dice!
        <br><strong>L9: Hold Monster</strong> — Setup for the auto-crit Nova.
        <br><strong>L10 Song of Defence:</strong> Spend spell slots to block damage as a reaction.`},
      { range: "Paladin — Levels 11–12", html: `
        <strong>L12 Divine Smite:</strong> The Godblade is born. Every hit can now trigger a smite.
        <br><strong>Oath of the Crown:</strong> Bonus action buff (+Proficiency to attack rolls).
        <br><strong>Nova turn:</strong> Haste + Extra Attack = 3 weapon hits, all smiting.`}
    ],
    gear: [
      {
        title: "The Shadow Blade Path",
        items: [
          { slot: "Weapon", item: "Shadow Blade", rarity: "rare", image: "https://bg3.wiki/w/images/4/47/Shadow_Blade_Icon.png", location: "Cast via Level 2 spell", wiki: "https://bg3.wiki/wiki/Shadow_Blade_(Spell)", note: "Scales with Dex, deals psychic damage. Doubled by Resonance Stone." },
          { slot: "Off Hand", item: "Rhapsody", rarity: "very-rare", image: "https://bg3.wiki/w/images/7/70/Rhapsody_Icon.png", location: "Cazador's Palace", wiki: "https://bg3.wiki/wiki/Rhapsody", note: "Stat stick for +3 to hit/damage/DC." },
          { slot: "Inventory", item: "Resonance Stone", rarity: "rare", image: "https://bg3.wiki/w/images/6/6b/Resonance_Stone_Icon.png", location: "Mind Flayer Colony, Act 2", wiki: "https://bg3.wiki/wiki/Resonance_Stone", note: "MANDATORY. Doubles psychic damage for the whole party." }
        ]
      },
      {
        title: "The Battle Mage Gear",
        items: [
          { slot: "Head", item: "Diadem of Arcane Synergy", rarity: "uncommon", image: "https://bg3.wiki/w/images/9/92/Diadem_of_Arcane_Synergy_Icon.png", location: "Crèche Inquisitor", wiki: "https://bg3.wiki/wiki/Diadem_of_Arcane_Synergy", note: "Adds Int mod to weapon damage." },
          { slot: "Chest", item: "Robe of the Weave", rarity: "very-rare", image: "https://bg3.wiki/w/images/0/0c/Robe_of_the_Weave_Icon.png", location: "Ramazith's Tower", wiki: "https://bg3.wiki/wiki/Robe_of_the_Weave", note: "+2 AC and spell accuracy." },
          { slot: "Amulet", item: "Amulet of Greater Health", rarity: "very-rare", image: "https://bg3.wiki/w/images/2/27/Amulet_of_Greater_Health_Icon.png", location: "House of Hope", wiki: "https://bg3.wiki/wiki/Amulet_of_Greater_Health", note: "Sets Con to 23 for god-tier HP and concentration." },
          { slot: "Ring", item: "Band of the Mystic Scoundrel", rarity: "very-rare", image: "https://bg3.wiki/w/images/1/13/Band_of_the_Mystic_Scoundrel_Icon.png", location: "Akabi, Jungle of Chult", wiki: "https://bg3.wiki/wiki/Band_of_the_Mystic_Scoundrel", note: "Cast Hold Person/Monster as a bonus action after attacking." }
        ]
      }
    ],
    strategy: [
      {
        title: "The Nuclear Nova",
        html: "Cast Hold Monster on the target. Then walk up and hit them 3 times (Extra Attack + Haste). Each hit is a guaranteed critical, and you can trigger a Level 4 Divine Smite on each. This can delete 500+ HP in one turn."
      },
      {
        title: "Bladesong Climax",
        html: "Build up healing charges by attacking with your weapon, or damage charges by casting spells. Use <strong>Bladesong Climax</strong> as a momentum swinger to heal your entire party from near-death to full HP in a single turn."
      },
      {
        title: "Arcane Tanking",
        html: "Between Mage Armor, 20 Dexterity, Bladesong, Mirror Image, and the Shield spell, you can reach 35-40 AC. Most bosses will only hit you on a Natural 20."
      }
    ],
    takeaways: [
      "Divine Smite caps at Level 4 spell slots for damage; don't waste L5/L6 slots on smites unless necessary.",
      "Bladesong Climax can heal your entire party from near-death to full.",
      "Shadow Blade deals Psychic damage — the Resonance Stone is your best friend.",
      "Scribe every scroll you find; you are still a Level 10 Wizard at your core."
    ]
  },
  D: {
    codename: "Death Reaper",
    subtitle: "Necrotic Death Cleric",
    tag: "Cleric / Wizard / Druid",
    difficulty: "Advanced",
    role: "Spellcaster Blaster / Necromancer",
    accent: "#7fae5c",
    accentSoft: "rgba(127,174,92,0.14)",
    accentLine: "rgba(127,174,92,0.4)",
    portrait: "https://bg3.wiki/w/images/7/7e/Portrait_Shadowheart.png",
    overview: {
      theme: "The strongest necrotic damage user, transcending mortality with a mix of Death Domain Cleric, Necromancy Wizard, and Spores Druid.",
      playstyle: "A flexible spellcaster that dominates the battlefield with necrotic AoE and devastating single-target nukes. High sustain through life-reaping mechanics.",
      pros: [
        "Massive necrotic damage output",
        "Bypasses necrotic resistance (L6 feature)",
        "Incredible sustain (heals when killing with necromancy)",
        "High action economy with free spells in Act 3"
      ],
      cons: [
        "Struggles with necrotic-immune enemies (especially Act 2)",
        "Requires strategic management of 'Touch of Death' charges"
      ],
      split: [
        { name: "Death Domain Cleric", levels: 8 },
        { name: "Necromancy Wizard", levels: 2 },
        { name: "Circle of Spores Druid", levels: 2 }
      ],
      note: "Levels 6+ of Death Cleric allow necrotic damage to ignore resistance, making this the only viable 'Pure Necro' build for Act 2's undead-heavy areas.",
      recommended: "Shadowheart — available early, her story naturally fits the thematic 'identity crisis' of flirting with darkness.",
      races: [
        { name: "Wood Half-Elf / Wood Elf", note: "Movement is king for positioning Spirit Guardians." },
        { name: "High Elf / High Half-Elf", note: "Free cantrip (Booming Blade) helps with melee flexibility." }
      ]
    },
    abilities: [
      { name: "Wisdom", score: 16, bonus: 2, reason: "Primary spellcasting stat for Cleric/Druid spells and DC." },
      { name: "Constitution", score: 16, bonus: 1, reason: "Essential for HP and maintaining concentration on Spirit Guardians." },
      { name: "Dexterity", score: 14, reason: "Boosts initiative and AC." },
      { name: "Intelligence", score: 12, reason: "Enables Wizard multiclassing and extra prepared spells." },
      { name: "Strength", score: 8, reason: "Not needed for this caster build." },
      { name: "Charisma", score: 8, reason: "Not needed." }
    ],
    leveling: [
      { range: "Death Cleric — Levels 1–2", html: `
        <strong>Cantrips (Reaper target choice):</strong>
        <ul>
          <li><strong>Toll the Dead</strong> (Wis Save) — Best for low-Wis enemies.</li>
          <li><strong>Bone Chill</strong> (Attack Roll) — Best for low-AC enemies.</li>
          <li><strong>Bursting Sinew</strong> (Dex Save) — AoE potential, needs a corpse.</li>
        </ul>
        <strong>Reaper Subclass Feature:</strong> Cast necrotic cantrips at two targets for the price of one action.
        <br><strong>Nuke Combo:</strong> Inflict Wounds + Touch of Death (Channel Divinity).`},
      { range: "Level 3", html: `
        <strong>Spiritual Weapon:</strong> Adds massive pressure. Choose weapon type based on enemy resistances (Trident/Spear for gaping wounds).
        <br><strong>Sanctuary:</strong> Vital for protection/saving NPCs in Honor Mode.`},
      { range: "Level 4", html: `
        <strong>Feat: War Caster</strong> — Advantage on concentration (Spirit Guardians) and Shocking Grasp reaction.
        <br><strong>Hold Person:</strong> Critical for humanoid control and guaranteed crits.`},
      { range: "Level 5", html: `<strong>Spirit Guardians:</strong> The build's most iconic and deadly AoE concentration spell.`},
      { range: "Level 6", html: `
        <strong>Inescapable Destruction:</strong> Necrotic damage ignores resistance.
        <br><strong>Glyph of Warding:</strong> Excellent situational AoE with various elemental types.
        <br><strong>Note:</strong> This level is the power-spike that makes the build viable for Act 2.`},
      { range: "Levels 7–8", html: `
        <strong>Feat: Dual Wielder</strong> — Prepares you for dual staves in Act 3.
        <br><strong>Divine Strike: Necrotic:</strong> Pairs with hand crossbows for bonus-action necrotic damage.`},
      { range: "Levels 9–10 — Necromancy Wizard", html: `
        <strong>Grim Harvest:</strong> Heals you whenever you kill with a necromancy spell.
        <br><strong>Utility Spells:</strong> Shield, Longstrider, Magic Missile.`},
      { range: "Levels 11–12 — Spores Druid", html: `
        <strong>Halo of Spores:</strong> Free reaction chip damage every turn.
        <br><strong>Symbiotic Entity:</strong> Temp HP + doubles Halo of Spores damage + adds 1d6 to melee.`}
    ],
    gear: [
      {
        title: "Act 1: Early Essentials",
        items: [
          { slot: "Weapon", item: "Melf's First Staff", rarity: "uncommon", image: "https://bg3.wiki/w/images/b/b7/Melf's_First_Staff_Icon.png", location: "Sold by Blurg, Underdark", wiki: "https://bg3.wiki/wiki/Melf%27s_First_Staff", note: "Boosts Spell DC and Attack Rolls." },
          { slot: "Weapon (Alt)", item: "Sorrow", rarity: "rare", image: "https://bg3.wiki/w/images/d/d5/Sorrow_Icon.png", location: "Hidden Vault, Druid Grove", wiki: "https://bg3.wiki/wiki/Sorrow", note: "Grants Sorrowful Lash (bonus action pull) which can proc Touch of Death." },
          { slot: "Gloves", item: "Hellrider's Pride", rarity: "uncommon", image: "https://bg3.wiki/w/images/b/bb/Hellrider's_Pride_Icon.png", location: "Zevlor reward", wiki: "https://bg3.wiki/wiki/Hellrider%27s_Pride", note: "Adds Blade Ward to your heals." },
          { slot: "Ring", item: "The Whispering Promise", rarity: "uncommon", image: "https://bg3.wiki/w/images/8/84/The_Whispering_Promise_Icon.png", location: "Volo / various traders", wiki: "https://bg3.wiki/wiki/The_Whispering_Promise", note: "Adds Bless to your heals." },
          { slot: "Amulet", item: "Amulet of Misty Step", rarity: "uncommon", image: "https://bg3.wiki/w/images/9/99/Amulet_of_Misty_Step_Icon.png", location: "Selunite Outpost, Underdark", wiki: "https://bg3.wiki/wiki/Amulet_of_Misty_Step", note: "Enables Spirit Guardians + Misty Step repositioning." },
          { slot: "Helm", item: "Holy Lance Helm", rarity: "rare", image: "https://bg3.wiki/w/images/c/c5/Holy_Lance_Helm_Icon.png", location: "Rosymorn Monastery", wiki: "https://bg3.wiki/wiki/Holy_Lance_Helm", note: "Deals radiant damage when enemies miss." }
        ]
      },
      {
        title: "Act 2: The Radiant Pivot",
        intro: "In the Shadow-cursed lands, necrotic damage is often resisted or ignored. Use radiant Spirit Guardians and focus on Radiant Orb gear to debuff accuracy.",
        items: [
          { slot: "Weapon", item: "The Blood of Lathander", rarity: "legendary", image: "https://bg3.wiki/w/images/f/f5/The_Blood_of_Lathander_Icon.png", location: "Rosymorn Monastery", wiki: "https://bg3.wiki/wiki/The_Blood_of_Lathander", note: "Blinds undead/fiends and grants Sunbeam." },
          { slot: "Armor", item: "Luminous Armour", rarity: "rare", image: "https://bg3.wiki/w/images/8/83/Luminous_Armour_Icon.png", location: "Selunite Outpost chest", wiki: "https://bg3.wiki/wiki/Luminous_Armour", note: "Applies Radiating Orbs in an AoE when dealing radiant damage." },
          { slot: "Gloves", item: "Luminous Gloves", rarity: "uncommon", image: "https://bg3.wiki/w/images/2/21/Luminous_Gloves_Icon.png", location: "Potter's Chest, Ruined Battlefield", wiki: "https://bg3.wiki/wiki/Luminous_Gloves", note: "Further stacks Radiating Orbs." },
          { slot: "Ring", item: "Callous Glow Ring", rarity: "uncommon", image: "https://bg3.wiki/w/images/c/c1/Callous_Glow_Ring_Icon.png", location: "Gauntlet of Shar", wiki: "https://bg3.wiki/wiki/Callous_Glow_Ring", note: "Adds +2 radiant damage vs illuminated targets." },
          { slot: "Ring", item: "Coruscation Ring", rarity: "uncommon", image: "https://bg3.wiki/w/images/1/19/Coruscation_Ring_Icon.png", location: "Last Light Inn cellar", wiki: "https://bg3.wiki/wiki/Coruscation_Ring", note: "Stacks orbs while you are illuminated (synergy with Lathander)." }
        ]
      },
      {
        title: "Act 3: The Death Reaper Supreme",
        items: [
          { slot: "Main Hand", item: "Staff of Cherished Necromancy", rarity: "very-rare", image: "https://bg3.wiki/w/images/5/5a/Staff_of_Cherished_Necromancy_Icon.png", location: "Looted from Mystic Carrion", wiki: "https://bg3.wiki/wiki/Staff_of_Cherished_Necromancy", note: "BEST IN SLOT. Gives disadvantage on necro saves and free spells on kill." },
          { slot: "Off Hand", item: "Markoheshkir", rarity: "legendary", image: "https://bg3.wiki/w/images/8/87/Markoheshkir_Icon.png", location: "Ramazith's Tower", wiki: "https://bg3.wiki/wiki/Markoheshkir", note: "Kereska's Favour (Necrotic) chains free spells with the primary staff." },
          { slot: "Amulet", item: "Amulet of the Devout", rarity: "very-rare", image: "https://bg3.wiki/w/images/2/25/Amulet_of_the_Devout_Icon.png", location: "Stormshore Tabernacle basement", wiki: "https://bg3.wiki/wiki/Amulet_of_the_Devout", note: "+1 Channel Divinity and +2 Spell DC." },
          { slot: "Helm", item: "Hood of the Weave", rarity: "very-rare", image: "https://bg3.wiki/w/images/5/57/Hood_of_the_Weave_Icon.png", location: "Mystic Carrion", wiki: "https://bg3.wiki/wiki/Hood_of_the_Weave", note: "Major boost to spell accuracy." },
          { slot: "Armor", item: "Armour of Agility", rarity: "very-rare", image: "https://bg3.wiki/w/images/9/96/Armour_of_Agility_Icon.png", location: "Stormshore Armoury", wiki: "https://bg3.wiki/wiki/Armour_of_Agility", note: "High AC + full Dex bonus + saving throw bonus." },
          { slot: "Gloves", item: "Gemini Gloves", rarity: "very-rare", image: "https://bg3.wiki/w/images/4/4e/Gemini_Gloves_Icon.png", location: "Helsik, Devil's Fee", wiki: "https://bg3.wiki/wiki/Gemini_Gloves", note: "Allows necrotic cantrips to hit even MORE targets." }
        ]
      }
    ],
    strategy: [
      {
        title: "The Identity Crisis (Act 2)",
        html: "Don't be afraid to use Radiant damage in Act 2. Thematically, this is Shadowheart (or your character) meddling with morally 'good' light as a survival tactic in the Shadowlands, before fully committing to the power of Death in Act 3."
      },
      {
        title: "Reaper Cantrip Choice",
        html: "Reaper allows you to target two enemies with one action. Always examine your targets: Use <strong>Toll the Dead</strong> for high-AC/low-Wis enemies, and <strong>Bone Chill</strong> for low-AC enemies to prevent them from healing."
      },
      {
        title: "Free Casting Engine",
        html: "In Act 3, use the Staff of Cherished Necromancy to cast high-level spells for free. Kill a weak enemy with a cantrip to get a 'Life Essence', then spend it on a Level 6 Inflict Wounds or Dethrone."
      }
    ],
    takeaways: [
      "Always check enemy saves to choose the right necrotic cantrip (Toll vs Bone Chill vs Bursting).",
      "Inflict Wounds + Touch of Death is your premier single-target burst.",
      "Dual-wielding staves in Act 3 provides the ultimate spellcasting power.",
      "Utilize summons (Raise Dead, Deva via scroll) to draw aggro while you reap."
    ]
  }
};
