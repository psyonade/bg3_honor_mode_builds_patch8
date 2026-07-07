const builds = [
    {
        id: "arcane-deadeye",
        name: "Arcane Dead Eye",
        role: "Ranged CC / Burst Striker",
        lore: "A silent, mysterious marksman who has been determining the outcomes of large-scale battles completely on its own. Fusing meticulous archery with forgotten spellcraft, channeling raw arcane energy through arrows. Each shot isn't just an arrow; it's a spell, a curse, a death sentence.",
        description: "The ultimate battlefield controller. An ultra crowd-control carry who can dictate the outcomes of large-scale battles with a single arrow. Utilizes the Arcane Archer subclass to its absolute limit.",
        multiclass: "11 Arcane Archer Fighter / 1 War Domain Cleric",
        best_races: [
            { name: "Githyanki", utility: "Positional supremacy with Misty Step, Astral Knowledge for skill versatility, Enhanced Leap." },
            { name: "Drow", utility: "Superior Darkvision for long-range accuracy, CC denial, and useful innate spells." },
            { name: "Wood Half-Elf", utility: "Extra movement speed and Fey Ancestry (CC resistance)." }
        ],
        abilities: [
            { score: "Dexterity", value: "17 (+1)", reason: "Your primary stat for attack rolls, damage, Initiative, and Armor Class. Should be capped at 20 ASAP." },
            { score: "Intelligence", value: "16", reason: "Determines the Spell DC for your Arcane Shots. Essential for ensuring your CC (like Banish) lands." },
            { score: "Constitution", value: "14", reason: "Provides a healthy HP pool and helps with Concentration checks if you use spells like Divine Favor." },
            { score: "Str/Wis/Cha", value: "10", reason: "Dump stats. Wisdom at 10 helps slightly with common saving throws." }
        ],
        leveling: [
            { level: "1", title: "Fighter 1", description: "Archery Fighting Style (+2 Attack Rolls). Initial proficiency in Heavy Armor and all weapons. 16 Dex / 16 Int." },
            { level: "2", title: "Fighter 2", description: "Action Surge. The core of your burst potential. Use once per short rest for a double action." },
            { level: "3", title: "Arcane Archer 3", description: "<b>Arcane Shots:</b> Pick Banishing Arrow, Shadow Arrow, and Bursting Arrow. Gain Guidance cantrip (S-tier utility)." },
            { level: "4", title: "Fighter 4", description: "Feat: Ability Improvement (Dex +2). Get to 18 (or 20 if using Hag's Hair)." },
            { level: "5", title: "Fighter 5", description: "Extra Attack. Your first major power spike. Now making two shots per action." },
            { level: "6", title: "Fighter 6", description: "Feat: Sharpshooter. Mandatory for +10 flat damage per shot. The accuracy penalty is offset by Archery style and gear." },
            { level: "7", title: "Arcane Archer 7", description: "<b>Curving Shot:</b> Redirect missed arrows using a bonus action. <b>Magic Arrow:</b> Your arrows count as magical." },
            { level: "8", title: "Fighter 8", description: "Feat: Ability Improvement (Dex +2). Cap Dexterity at 20." },
            { level: "9", title: "Fighter 9", description: "Indomitable. Reroll a failed saving throw once per long rest." },
            { level: "10", title: "Arcane Archer 10", description: "<b>More Arcane Shots:</b> Piercing Arrow and Grasping Arrow. Finalize your CC utility roster." },
            { level: "11", title: "Fighter 11", description: "Improved Extra Attack (3 attacks per action). At this level, Action Surge grants 6 attacks." },
            { level: "12", title: "War Cleric 1 (Dip)", description: "<b>War Priest:</b> Use bonus action for extra attacks (War Priest charges). <b>Spells:</b> Sanctuary, Shield of Faith, Divine Favor, Bless." }
        ],
        arcane_shots: {
            god: [
                { name: "Banishing Arrow", effect: "Charisma save. Removes threat for 2 turns. Massive momentum swing against bosses." },
                { name: "Shadow Arrow", effect: "Wisdom save. Blinds target and deals Psychic damage. Synergizes with Resonance Stone." }
            ],
            good: [
                { name: "Bursting Arrow", effect: "AoE Force damage in a circular radius. Great for grouped enemies and force-vulnerable objects." },
                { name: "Piercing Arrow", effect: "AoE Line attack. Applies bow magical effects (like Frighten) to all targets hit." },
                { name: "Grasping Arrow", effect: "Poison damage + Slashing damage if the target moves. Punishes forced movement or fleeing AI." },
                { name: "Seeking Arrow", effect: "Guaranteed hit + Fairy Fire. God tier in Act 1 when accuracy is low." }
            ],
            avoid: [
                { name: "Beguiling Arrow", effect: "Charmed is too weak and easily broken by AoE/collateral damage." },
                { name: "Enfeebling Arrow", effect: "Passive and unreliable. Enemies check every turn to end the condition." }
            ]
        },
        equipment: {
            act1: [
                { slot: "Weapon", name: "Jolt Shooter", rarity: "rare", location: "Waukeen's Rest", note: "Lightning charges for accuracy and damage." },
                { slot: "Weapon (Alt)", name: "Bow of the Banshee", rarity: "rare", location: "Act 1 Merchant", note: "Apply Frightened to entire groups via Piercing Arrow." },
                { slot: "Armor", name: "Adamantine Splint Armour", rarity: "very-rare", location: "Grymforge", note: "Best-in-slot sustain for early game." },
                { slot: "Hands", name: "Gloves of Archery", rarity: "uncommon", location: "Goblin Camp", note: "+2 Damage with bows." },
                { slot: "Boots", name: "Boots of Genial Striding", rarity: "uncommon", location: "Blighted Village", note: "Ignore difficult terrain." }
            ],
            act2: [
                { slot: "Head", name: "Helm of Arcane Acuity", rarity: "uncommon", location: "Mason's Guild", note: "Stacks spell DC with every shot. Makes CC landing 100%." },
                { slot: "Cloak", name: "Cloak of Elemental Absorption", rarity: "uncommon", location: "Last Light Inn", note: "Defensive sustain and bonus elemental damage." },
                { slot: "Amulet", name: "Amulet of the Harpers", rarity: "rare", location: "Last Light Inn", note: "Shield spell for defense and Wisdom save advantage." },
                { slot: "Ring", name: "Killer's Sweetheart", rarity: "rare", location: "Gauntlet of Shar", note: "Guaranteed critical hit once per rest." },
                { slot: "Ring", name: "Ring of Mental Inhibition", rarity: "uncommon", location: "Ruined Battlefield", note: "Applies Mental Fatigue to enemies who fail saves." }
            ],
            act3: [
                { slot: "Weapon", name: "Gontr Mael", rarity: "legendary", location: "Steel Watch Foundry", note: "Legendary Bow. Provides Haste and Celestial Light." },
                { slot: "Armor", name: "Helldusk Armour", rarity: "legendary", location: "House of Hope", note: "Ultimate sustain and damage resistance." },
                { slot: "Hands", name: "Legacy of the Masters", rarity: "very-rare", location: "Dammon (Forge)", note: "+2 to Attack and Damage rolls." },
                { slot: "Head", name: "Mask of Soul Perception", rarity: "very-rare", location: "Devil's Fee", note: "+2 to Attack, Initiative, and Perception." },
                { slot: "Melee", name: "Ambusher", rarity: "rare", location: "Rivington", note: "+1d6 damage vs targets that haven't acted yet." },
                { slot: "Melee", name: "Knife of the Undermountain King", rarity: "very-rare", location: "Creche Y'llek", note: "Stat stick for easier crits and damage rerolls." }
            ]
        },
        strategy: "Use <b>Banishing Arrow</b> to remove the biggest threat from the board for 2 turns. Combo <b>Shadow Arrow</b> with the party's <b>Resonance Stone</b> to double its psychic damage. Use <b>Piercing Arrow</b> with <b>Bow of the Banshee</b> to mass-frighten enemies in a line. With Action Surge and War Priest charges, you can reach 7-8 attacks in one turn.",
        takeaways: [
            "Arcane Shots use Intelligence for DC, but Dexterity for damage.",
            "Can reach 7-8 attacks in a single turn with Action Surge and Haste.",
            "Complete battlefield dominance through banish, blind, and frighten."
        ],
        alt_gear: [
            { title: "Titanstring Variant", description: "Use <b>Titanstring Bow</b> + <b>Club of Hill Giant Strength</b> (or Elixirs) to scale damage off Strength." }
        ]
    },
    {
        id: "hexwing-phantom",
        name: "Hexwing Phantom",
        role: "Scout / Melee Striker",
        lore: "A bully on the battlefield, described by opponents as 'disgusting' due to his extensive use of dirty tricks. Making packs with the devil never works out truly favorably, but he befriended a swarm of eerie moths with mysterious psychic powers that now help him in battle.",
        description: "An elusive supernatural master duelist who dances between shadows, curses, and flurries of eerie moths. Master of tricks whose fighting style resembles a performance.",
        multiclass: "4 Swashbuckler Rogue / 5 Hexblade Warlock / 3 Swarmkeeper Ranger",
        best_races: [
            { name: "Wyll (Origin)", utility: "The thematic face of the build. Charisma scaling fits perfectly." },
            { name: "Wood Elf / Half-Elf", utility: "Extra mobility is king for a build that thrives on hit-and-run." }
        ],
        abilities: [
            { score: "Charisma", value: "16", reason: "Primary stat after level 5. Scales weapon damage, Dirty Tricks DC, and Eldritch Blast." },
            { score: "Dexterity", value: "16", reason: "Initial weapon scaling stat. Provides Initiative and AC. Park it here for the whole game." },
            { score: "Constitution", value: "14", reason: "Vital for HP and maintaining concentration on spells like Hunger of Hadar." },
            { score: "Wisdom", value: "12", reason: "Helps with common saving throws and skill checks for scouting." }
        ],
        leveling: [
            { level: "1-2", title: "Rogue 1-2", description: "Cunning Action (Dash/Disengage). Expertise in Stealth and Perception for scouting." },
            { level: "3", title: "Swashbuckler 3", description: "<b>Rakish Sneak Attack:</b> No advantage needed if alone. <b>Fancy Footwork:</b> No opportunity attacks after hitting." },
            { level: "4", title: "Swashbuckler 4", description: "<b>Dirty Tricks:</b> Flick of the Wrist (Disarm), Sand Toss (Blind). Feat: Ability Improvement (Cha +2)." },
            { level: "5", title: "Hexblade 1", description: "<b>Bind Hex Weapon:</b> Scale weapon with Charisma. Gain <b>Shield</b> and <b>Booming Blade</b>." },
            { level: "6", title: "Hexblade 2", description: "<b>Invocations:</b> Agonizing Blast, Repelling Blast for ranged dominance." },
            { level: "7", title: "Hexblade 3", description: "Pact of the Blade. Gain Misty Step for mobility." },
            { level: "8", title: "Hexblade 4", description: "Feat: <b>Great Weapon Master (GWM)</b>. Phalar Aluve is versatile and benefits when two-handed." },
            { level: "9", title: "Hexblade 5", description: "<b>Deepened Pact:</b> Extra Attack. Unlock Level 3 spells like <b>Counterspell</b>." },
            { level: "10", title: "Ranger 1", description: "<b>Ranger Knight:</b> Heavy Armor Proficiency. <b>Wasteland Wanderer: Fire</b> resistance." },
            { level: "11", title: "Ranger 2", description: "Fighting Style: Defense (+1 AC). Gain Goodberries for free healing/amulet procs." },
            { level: "12", title: "Swarmkeeper 3", description: "<b>Gathered Swarm (Moths):</b> Adds psychic damage (doubled by Resonance Stone), blinds, or provides free teleports." }
        ],
        equipment: {
            act1: [
                { slot: "Weapon", name: "Phalar Aluve", rarity: "rare", location: "Underdark", note: "Finesse/Versatile. Use two-handed with GWM. Shriek/Sing support." },
                { slot: "Amulet", name: "Broodmother's Revenge", rarity: "uncommon", location: "Druid Grove", note: "+1d6 Poison damage when healed (synergizes with Goodberries)." },
                { slot: "Hands", name: "Gloves of Dexterity", rarity: "very-rare", location: "Creche Y'llek", note: "Sets Dex to 18 for high AC and Initiative." }
            ],
            act2: [
                { slot: "Ring", name: "Risky Ring", rarity: "rare", location: "Moonrise Towers", note: "Advantage on all attacks to offset GWM penalty." },
                { slot: "Ring", name: "Ring of Arcane Synergy", rarity: "uncommon", location: "Creche Y'llek", note: "Adds Charisma mod to weapon damage after cantrips." },
                { slot: "Boots", name: "Boots of Stormy Clamour", rarity: "uncommon", location: "Underdark", note: "Apply Reverberation on CC application." }
            ],
            act3: [
                { slot: "Weapon", name: "Dancing Breeze", rarity: "very-rare", location: "Rivington", note: "Legendary Glaive (Finesse). Massive reach and Whirlwind Attack." },
                { slot: "Head", name: "Birthright", rarity: "very-rare", location: "Sorcerous Sundries", note: "+2 Charisma (up to 22 with Mirror of Loss)." },
                { slot: "Armor", name: "Armor of Persistence", rarity: "very-rare", location: "Dammon (Forge)", note: "Permanent Blade Ward and Resistance." },
                { slot: "Cloak", name: "Cloak of Displacement", rarity: "rare", location: "Danthelon's Dancing Axe", note: "Enemies have disadvantage on attacks against you." },
                { slot: "Hands", name: "Helldusk Gloves", rarity: "very-rare", location: "House of Hope", note: "+1d6 Fire damage and Bleed." },
                { slot: "Bow", name: "The Dead Shot", rarity: "very-rare", location: "Fraygo's Flophouse", note: "Lowers crit threshold." }
            ]
        },
        strategy: "Solo scout with <b>Fancy Footwork</b>. Use <b>Booming Blade</b>, then disarm with <b>Flick of the Wrist</b> (bonus action), pick up their weapon, and dip out safely. In Act 3, use <b>Moth Swarm</b> teleports to reposition. Synergizes with the party <b>Resonance Stone</b> via Psychic moth damage.",
        takeaways: [
            "Truly Single Ability Dependent (SAD) on Charisma after Level 5.",
            "Can disarm enemies using a bonus action with higher success than Command.",
            "Exceptional mobility: Reach weapon + Fancy Footwork + Moth Teleports."
        ]
    },
    {
        id: "godblade",
        name: "Godblade",
        role: "Magic Tank / Melee Burst / Utility",
        lore: "For approximately every 8,274 Bladesingers, one Godblade arises. A divine warrior with direct ties to the gods. The Godblade is the 0.001%, combining the elegant swordplay of a virtuoso with the destructive magic of a high mage and the holy wrath of a Paladin.",
        description: "The evolution of the Bladesinger. Boasting over 40 AC and capable of 500+ damage in a turn. Not just tanky in the traditional sense, but through pure magical supremacy.",
        multiclass: "10 Bladesinger Wizard / 2 Paladin (Oath of the Crown)",
        best_races: [
            { name: "Wood Elf / Half-Elf", utility: "Extra movement is vital for the Bladesinger's mobile playstyle." },
            { name: "Half-Orc", utility: "Savage Attacker + Smite crits reach nuclear levels with Half-Orc passives." },
            { name: "Dwarf", utility: "Enlarge spell for more damage and sustain." },
            { name: "Githyanki", utility: "Astral Knowledge for skill checks and free utility spells." }
        ],
        abilities: [
            { score: "Dexterity", value: "17 (+1)", reason: "Scales melee attacks, AC, and Initiative. Use Hag's Hair to reach 20 early." },
            { score: "Intelligence", value: "16", reason: "Scales spell damage, AC (during Bladesong), and Con saves. Essential for the battlemage identity." },
            { score: "Constitution", value: "14", reason: "Vital for HP and concentration. Capped at 23 later with Amulet of Greater Health." },
            { score: "Wisdom", value: "10", reason: "Kept at 10 to help with common saving throws." }
        ],
        leveling_paladin: [
            { level: "1", title: "Wizard 1", description: "Shield, Mage Armor, Magic Missile, Longstrider. Cantrips: Booming Blade." },
            { level: "2", title: "Bladesinger 2", description: "<b>Bladesong:</b> Adds Int to AC and Con saves. <b>Bladesong Climax:</b> Massive heal or AoE nuke." },
            { level: "3", title: "Wizard 3", description: "<b>Shadow Blade:</b> Primary psychic weapon. Upcast with L3/L5 slots for damage scaling." },
            { level: "4", title: "Wizard 4", description: "Feat: Ability Improvement (Dex +2). Use Hag's Hair to reach 20 Dex." },
            { level: "5", title: "Wizard 5", description: "<b>Haste:</b> Essential for extra actions. <b>Fireball</b> for AoE burst." },
            { level: "6", title: "Wizard 6", description: "<b>Extra Attack:</b> Bladesinger version allows replacing one attack with a Cantrip (Booming Blade)." },
            { level: "8", title: "Wizard 8", description: "Feat: <b>Savage Attacker</b>. Mandatory for rerolling Shadow Blade and Smite damage." },
            { level: "10", title: "Bladesinger 10", description: "<b>Song of Defense:</b> Use spell slots to reduce incoming damage by 5x slot level." },
            { level: "11-12", title: "Paladin 1-2", description: "<b>Divine Smites:</b> Add massive necrotic/radiant damage to hits. <b>Crown:</b> Goading Roar." }
        ],
        leveling_fighter: [
            { level: "1-6", title: "Wizard 1-6", description: "Standard Bladesinger progression (Extra Attack at 6)." },
            { level: "7-10", title: "Wizard 7-10", description: "Song of Defense and Level 5 spells (Hold Monster)." },
            { level: "11", title: "Fighter 1", description: "Fighting Style: Defense (+1 AC). Second Wind." },
            { level: "12", title: "Fighter 2", description: "<b>Action Surge:</b> Take another full action. Allows for 6 melee attacks in one turn with Haste." }
        ],
        leveling_monoclass: [
            { level: "1-10", title: "Wizard 1-10", description: "Full Bladesinger progression." },
            { level: "11", title: "Wizard 11", description: "Level 6 Spells: Chain Lightning, Disintegrate." },
            { level: "12", title: "Wizard 12", description: "3rd Feat: War Caster or Alert. Maximum spell slots and preparation." }
        ],
        variants: {
            multiclass: [
                { id: "paladin", name: "Paladin Path (10/2)", description: "Peak Nova damage with Divine Smites. Maintains L6 spell slot for utility/upcasting." },
                { id: "fighter", name: "Fighter Path (10/2)", description: "Action Surge for 6 attacks in one turn (with Haste). More consistent physical burst." },
                { id: "monoclass", name: "Pure Wizard 12", description: "Maximum spells and a 3rd feat (War Caster/Alert). Highest utility." }
            ],
            gear: [
                { id: "shadowblade", name: "Shadow Blade Path", description: "Uses Shadow Blade spell + Resonance Stone for double Psychic damage." },
                { id: "traditional", name: "Traditional Duelist", description: "Uses Duelist's Prerogative and Bhaalist Armour for double Piercing damage." }
            ]
        },
        equipment_shadowblade: {
            act1: [
                { slot: "Weapon", name: "Shadow Blade", rarity: "common", location: "Level 2 Spell", note: "Upcast with L3/L5 slots. Psychic damage." },
                { slot: "Off-Hand", name: "Speedy Reply", rarity: "rare", location: "Risen Road", note: "Momentum on hit for mobility." },
                { slot: "Off-Hand (Alt)", name: "Hunter's Dagger", rarity: "uncommon", location: "Goblin Camp", note: "Applies Rupture (damage on movement)." },
                { slot: "Head", name: "Diadem of Arcane Synergy", rarity: "uncommon", location: "Creche Y'llek", note: "Adds Intelligence to weapon damage." },
                { slot: "Armor", name: "Bloodguzzler's Garb", rarity: "uncommon", location: "Underdark", note: "Wrath (+1 damage) when taking damage." },
                { slot: "Hands", name: "Bracers of Defense", rarity: "rare", location: "Blighted Village", note: "+2 AC while unarmored." },
                { slot: "Ring", name: "Caustic Band", rarity: "uncommon", location: "Underdark", note: "+2 Acid damage per attack." },
                { slot: "Ring", name: "Crusher's Ring", rarity: "rare", location: "Goblin Camp", note: "+3m Movement speed." },
                { slot: "Amulet", name: "Periapt of Wound Closure", rarity: "rare", location: "Mountain Pass", note: "Maximized healing from Bladesong Climax." }
            ],
            act2: [
                { slot: "Off-Hand", name: "Knife of the Undermountain King", rarity: "very-rare", location: "Creche Y'llek", note: "Crit threshold and damage rerolls." },
                { slot: "Cloak", name: "Cloak of Protection", rarity: "uncommon", location: "Last Light Inn", note: "+1 AC and Saving Throws." },
                { slot: "Hands", name: "Gloves of the Battlemage's Power", rarity: "uncommon", location: "Tollhouse", note: "Weapon hits stack Arcane Acuity." },
                { slot: "Ring", name: "Strange Conduit Ring", rarity: "uncommon", location: "Creche", note: "+1d4 Psychic damage while concentrating." },
                { slot: "Inventory", name: "Resonance Stone", rarity: "rare", location: "Mind Flayer Colony", note: "Doubles Psychic damage. Essential." }
            ],
            act3: [
                { slot: "Off-Hand", name: "Rhapsody", rarity: "very-rare", location: "Cazador", note: "+3 Attack, Damage, and Spell DC." },
                { slot: "Armor", name: "Robe of the Weave", rarity: "very-rare", location: "Ramazith's Tower", note: "+2 AC and Spell DC. Best in Slot." },
                { slot: "Amulet", name: "Amulet of Greater Health", rarity: "very-rare", location: "House of Hope", note: "Sets Constitution to 23." },
                { slot: "Ring", name: "Band of the Mystic Scoundrel", rarity: "rare", location: "Akabi", note: "Cast Illusion/Enchantment as bonus action." },
                { slot: "Boots", name: "Helldusk Boots", rarity: "very-rare", location: "Gortash", note: "Ignore difficult terrain and teleport." },
                { slot: "Bow", name: "Hell Rider Longbow", rarity: "rare", location: "Rivington", note: "+3 Initiative." }
            ]
        },
        equipment_traditional: {
            act1: [
                { slot: "Weapon", name: "Knife of the Undermountain King", rarity: "very-rare", location: "Creche", note: "Primary weapon for traditional duelist." },
                { slot: "Head", name: "Diadem of Arcane Synergy", rarity: "uncommon", location: "Creche", note: "Intelligence to damage." },
                { slot: "Armor", name: "Bloodguzzler's Garb", rarity: "uncommon", location: "Underdark", note: "Early wrath stacks." }
            ],
            act2: [
                { slot: "Weapon", name: "Infernal Rapier", rarity: "very-rare", location: "Wyll's Quest", note: "Scales with spellcasting ability." },
                { slot: "Armor", name: "Potent Robe", rarity: "very-rare", location: "Last Light Inn", note: "Boosts cantrips (Booming Blade)." }
            ],
            act3: [
                { slot: "Weapon", name: "Duellist's Prerogative", rarity: "legendary", location: "Lora's Quest", note: "Legendary Rapier. Bonus reactions and extra hits." },
                { slot: "Armor", name: "Bhaalist Armour", rarity: "very-rare", location: "Murder Tribunal", note: "Aura of Murder: Doubles Piercing damage." },
                { slot: "Off-Hand", name: "Rhapsody", rarity: "very-rare", location: "Cazador", note: "Stat stick for accuracy/damage." }
            ]
        },
        strategy: "Maintain <b>Haste</b> and <b>Bladesong</b>. Use <b>Shadow Blade</b> + <b>Resonance Stone</b> to erase bosses. Use <b>Band of the Mystic Scoundrel</b> to cast <b>Hold Monster</b> as a bonus action after attacking. <b>Divine Smites</b> should be saved for Crits or high-priority burst.",
        takeaways: [
            "Can reach 40+ AC with Mirror Image, Shield, and Bladesong.",
            "Capable of 500+ damage in a single turn on Honor Mode bosses.",
            "Can scribe <b>any</b> wizard scroll: Artistry of War and Deva Summon are high priority."
        ]
    },
    {
        id: "death-reaper",
        name: "Death Reaper",
        role: "Necrotic Spellcaster / Blaster",
        lore: "They said necrotic damage was a meme. They haven't heard of the Death Reaper. Her powers transcend what mortals comprehend. Reaping life essences across the realms, she is currently wanted by every major faction with a 4.9 million gold bounty.",
        description: "The ultimate necromancer. Transitions from a mid-line controller to a high-level spell blaster capable of casting Level 6 spells for free back-to-back.",
        multiclass: "8 Death Cleric / 2 Necromancy Wizard / 2 Spores Druid",
        best_races: [
            { name: "Shadowheart (Origin)", utility: "Thematically perfect. Her story revolves around flirting with darkness." },
            { name: "Wood Elf / Half-Elf", utility: "Movement speed is king for positioning Spirit Guardians." },
            { name: "High Elf", utility: "Free Booming Blade cantrip for melee synergy." }
        ],
        abilities: [
            { score: "Wisdom", value: "16", reason: "Primary stat for Cleric/Druid spells. Determines your Spell DC and healing power." },
            { score: "Constitution", value: "16", reason: "High HP is vital since you'll be in melee range for Spirit Guardians. Helps with Concentration." },
            { score: "Dexterity", value: "14", reason: "Provides Initiative and caps Medium Armor AC bonus." },
            { score: "Intelligence", value: "12", reason: "Allows you to prepare more Wizard spells (Shield, Magic Missile) and scribe scrolls." }
        ],
        leveling: [
            { level: "1", title: "Death Cleric 1", description: "<b>Reaper:</b> Cast necromancy cantrips (Toll the Dead, Bone Chill) on two targets. <b>Bursting Sinew:</b> Dex save based AoE." },
            { level: "2", title: "Death Cleric 2", description: "<b>Touch of Death:</b> Channel Divinity for massive flat necrotic damage on hits. Combo with Inflict Wounds." },
            { level: "4", title: "Death Cleric 4", description: "Feat: <b>War Caster</b>. Advantage on Concentration saves for Spirit Guardians." },
            { level: "5", title: "Death Cleric 5", description: "<b>Spirit Guardians</b> (Necrotic). Core AoE pressure. Upcast for massive damage." },
            { level: "6", title: "Death Cleric 6", description: "<b>Inescapable Destruction:</b> Necrotic damage ignores Resistance. Essential for Act 2." },
            { level: "8", title: "Death Cleric 8", description: "Feat: <b>Dual Wielder</b>. <b>Divine Strike:</b> Use hand crossbows on bonus action to apply necrotic damage." },
            { level: "10", title: "Necromancy Wizard 2", description: "<b>Grim Harvest:</b> Heal upon killing. Scribe utility like <b>Shield</b> and <b>Longstrider</b>." },
            { level: "12", title: "Spores Druid 2", description: "<b>Halo of Spores:</b> Free necrotic chip damage. <b>Symbiotic Entity</b> for extra HP and damage." }
        ],
        equipment: {
            act1: [
                { slot: "Weapon", name: "Melf's First Staff", rarity: "uncommon", location: "Blighted Village", note: "+1 Spell Attack/DC." },
                { slot: "Hands", name: "Hellrider's Pride", rarity: "uncommon", location: "Zevlor", note: "Applies Blade Ward on heal." },
                { slot: "Ring", name: "The Whispering Promise", rarity: "uncommon", location: "Volo", note: "Applies Bless on heal." },
                { slot: "Ring", name: "Ring of Protection", rarity: "rare", location: "Grove", note: "+1 AC and Saving Throws." },
                { slot: "Boots", name: "Boots of Striding", rarity: "uncommon", location: "Goblin Camp", note: "Immunity to prone while concentrating." },
                { slot: "Armor", name: "Scale Mail +2", rarity: "rare", location: "Goblin Camp", note: "High AC and Initiative." },
                { slot: "Amulet", name: "Amulet of Misty Step", rarity: "rare", location: "Goblin Camp", note: "Reposition Spirit Guardians easily." },
                { slot: "Head", name: "Holy Lance Helm", rarity: "rare", location: "Rosymorn", note: "Punish enemies who miss with Radiant damage." }
            ],
            act2: [
                { slot: "Weapon", name: "Blood of Lathander", rarity: "legendary", location: "Creche", note: "The beacon for the 'Radiant Pivot' strategy." },
                { slot: "Armor", name: "Luminous Armour", rarity: "rare", location: "Underdark", note: "Mass radiating orbs via Radiant Spirit Guardians." },
                { slot: "Hands", name: "Luminous Gloves", rarity: "uncommon", location: "Potter's Chest", note: "Apply Radiant Orbs on radiant damage." },
                { slot: "Ring", name: "Callous Glow Ring", rarity: "uncommon", location: "Gauntlet of Shar", note: "+2 damage to illuminated targets." },
                { slot: "Ring", name: "Coruscation Ring", rarity: "uncommon", location: "Last Light Inn", note: "Radiant orbs on spell damage." },
                { slot: "Cloak", name: "Flesh Melter Cloak", rarity: "rare", location: "House of Healing", note: "Acid damage to melee attackers." }
            ],
            act3: [
                { slot: "Weapon", name: "Staff of Cherished Necromancy", rarity: "very-rare", location: "Mystic Carrion", note: "Cast Necromancy spells for free on kill. L6 Inflict Wounds spam." },
                { slot: "Off-Hand", name: "Markoheshkir", rarity: "legendary", location: "Ramazith's Tower", note: "Kereska's Favour (Necrotic). Free L6 spells." },
                { slot: "Amulet", name: "Amulet of the Devout", rarity: "very-rare", location: "Stormshore Tabernacle", note: "Extra Channel Divinity and +2 Spell DC." },
                { slot: "Cloak", name: "Cloak of the Weave", rarity: "very-rare", location: "Ramazith's Tower", note: "+1 Spell DC and Attack." },
                { slot: "Head", name: "Hood of the Weave", rarity: "very-rare", location: "Philgrave's Mansion", note: "+2 Spell DC and Attack." },
                { slot: "Armor", name: "Armor of Agility", rarity: "very-rare", location: "Stormshore Armoury", note: "Full Dex modifier to AC." },
                { slot: "Hands", name: "Gloves of Dexterity", rarity: "very-rare", location: "Creche", note: "Sets Dex to 18." },
                { slot: "Hands (Alt)", name: "Gemini Gloves", rarity: "rare", location: "Devil's Fee", note: "Reaper-cast cantrips hit 4 targets once per rest." }
            ]
        },
        strategy: "Use <b>Inflict Wounds</b> + <b>Touch of Death</b> for single-target nukes. <b>Radiant Pivot:</b> In Act 2, swap to Radiant Spirit Guardians and Luminous gear. In Act 3, use <b>Staff of Cherished Necromancy</b> to cast L6 spells for free. <b>Halo of Spores</b> provides free chip damage.",
        takeaways: [
            "Bypasses necrotic resistance automatically at Level 6.",
            "Can cast Level 6 spells for free indefinitely in Act 3 after kills.",
            "High sustain through Spores HP and Necromancy Wizard healing."
        ]
    }
];
