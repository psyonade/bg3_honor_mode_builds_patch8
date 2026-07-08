const builds = [
    {
        id: "arcane-deadeye",
        name: "Arcane Dead Eye",
        role: "Ranged CC / Burst Striker",
        portrait: "https://bg3.wiki/w/images/c/c2/Class_Fighter_Arcane_Archer_Badge_Icon.png",
        lore: "A silent, mysterious marksman who has been determining the outcomes of large-scale battles completely on its own. Fusing meticulous archery with forgotten spellcraft, channeling raw arcane energy through arrows. Each shot isn't just an arrow; it's a spell, a curse, a death sentence.",
        description: "The ultimate battlefield controller. An ultra crowd-control carry who can dictate the outcomes of large-scale battles with a single arrow. Utilizes the Arcane Archer subclass to its absolute limit.",
        multiclass: "11 Arcane Archer Fighter / 1 War Domain Cleric",
        best_races: [
            { name: "Githyanki", utility: "Positional supremacy with Misty Step, Astral Knowledge for skill versatility, Enhanced Leap." },
            { name: "Drow", utility: "Superior Darkvision for long-range accuracy, CC denial, and useful innate spells." },
            { name: "Wood Half-Elf", utility: "Extra movement speed and Fey Ancestry (CC resistance)." }
        ],
        abilities: [
            { score: "Dexterity", value: "16", reason: "Your primary stat for attack rolls, damage, Initiative, and Armor Class. The video recommends a balanced 16/16 split with Intelligence." },
            { score: "Intelligence", value: "16", reason: "Determines the Spell DC for your Arcane Shots. Critical for ensuring your God-Tier CC (like Banish) lands reliably." },
            { score: "Constitution", value: "14", reason: "Provides a healthy HP pool and helps with Concentration checks if you use spells like Shield of Faith." },
            { score: "Wis/Cha/Str", value: "10/8/8", reason: "Dump stats. Higher Wisdom (10) helps with common saving throws against being CC'd yourself." }
        ],
        leveling: [
            { level: "1", title: "Fighter 1", description: "Archery Fighting Style (+2 Attack Rolls). Initial proficiency in Heavy Armor and all weapons. Starting stats: 16 Dex / 16 Int / 14 Con." },
            { level: "2", title: "Fighter 2", description: "Action Surge. The core of your burst potential. Use once per short rest for a double action. At level 11, this means 6 attacks in one turn." },
            { level: "3", title: "Arcane Archer 3", description: "<b>Arcane Shots:</b> Pick Banishing Arrow, Shadow Arrow, and Bursting Arrow. The video highlights that you can choose 3 at this stage." },
            { level: "4", title: "Fighter 4", description: "Feat: Ability Improvement (Dex +2). Get to 18 (or 20 if using Hag's Hair)." },
            { level: "5", title: "Fighter 5", description: "Extra Attack. Your first major power spike. Now making two shots per action." },
            { level: "6", title: "Fighter 6", description: "Feat: Sharpshooter. Mandatory for +10 flat damage per shot. The accuracy penalty is offset by Archery style and gear." },
            { level: "7", title: "Arcane Archer 7", description: "<b>Curving Shot:</b> Redirect missed arrows using a bonus action. <b>Magic Arrow:</b> Your arrows count as magical." },
            { level: "8", title: "Fighter 8", description: "Feat: Ability Improvement (Dex +2). Cap Dexterity at 20." },
            { level: "9", title: "Fighter 9", description: "Indomitable. Reroll a failed saving throw once per long rest." },
            { level: "10", title: "Arcane Archer 10", description: "<b>More Arcane Shots:</b> Piercing Arrow and Grasping Arrow. Finalize your CC utility roster." },
            { level: "11", title: "Fighter 11", description: "Improved Extra Attack (3 attacks per action). At this level, Action Surge grants 6 attacks." },
            { level: "12", title: "War Cleric 1 (Dip)", description: "<b>War Priest:</b> Use bonus action for extra attacks (War Priest charges). <b>Spells:</b> Sanctuary, Shield of Faith, Divine Favor, Bless. Finalizes the build as an 'Ultra Carry'." }
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
                { slot: "Weapon", name: "Jolt Shooter", rarity: "rare", location: "Waukeen's Rest", image: "https://bg3.wiki/w/images/3/36/Longbow_PlusOne_Icon.png", note: "Lightning charges for accuracy and damage. Pick as quest reward." },
                { slot: "Weapon (Alt)", name: "Bow of the Banshee", rarity: "rare", location: "Corsair Greymon (Grymforge)", image: "https://bg3.wiki/w/images/d/dd/Shortbow_PlusOne_Icon.png", note: "Apply Frightened to entire groups via Piercing Arrow. S-Tier in Act 1." },
                { slot: "Armor", name: "Adamantine Splint Armour", rarity: "very-rare", location: "Grymforge (Forge)", image: "https://bg3.wiki/w/images/b/bf/Adamantine_Splint_Mail_Icon.png", note: "Best-in-slot sustain for early game. Reduces incoming damage." },
                { slot: "Hands", name: "Gloves of Archery", rarity: "uncommon", location: "Goblin Camp", image: "https://bg3.wiki/w/images/5/50/Gloves_of_Archery_icon.png", note: "+2 Damage with bows." },
                { slot: "Boots", name: "Boots of Genial Striding", rarity: "uncommon", location: "Blighted Village", image: "https://bg3.wiki/w/images/5/5c/Boots_of_Genial_Striding_Icon.png", note: "Ignore difficult terrain." }
            ],
            act2: [
                { slot: "Head", name: "Helm of Arcane Acuity", rarity: "uncommon", location: "Mason's Guild (Act 2)", image: "https://bg3.wiki/w/images/0/01/Helmet_Mag_Arcane_Acuity_Faded.png", note: "Stacks spell DC with every shot. The core of your CC dominance." },
                { slot: "Cloak", name: "Cloak of Elemental Absorption", rarity: "uncommon", location: "Last Light Inn (Talli)", image: "https://bg3.wiki/w/images/f/f2/Cloak_of_Elemental_Absorption_Faded.png", note: "Defensive sustain and bonus elemental damage." },
                { slot: "Amulet", name: "Amulet of the Harpers", rarity: "rare", location: "Quartermaster Talli", image: "https://bg3.wiki/w/images/b/bf/Amulet_Necklace_F_Silver_A_1_Faded.png", note: "Shield spell for defense and Wisdom save advantage." },
                { slot: "Ring", name: "Killer's Sweetheart", rarity: "rare", location: "Gauntlet of Shar", image: "https://bg3.wiki/w/images/6/69/Ring_I_Gold_A_1_Faded.png", note: "Guaranteed critical hit once per rest." },
                { slot: "Ring", name: "Ring of Mental Inhibition", rarity: "uncommon", location: "Ruined Battlefield", image: "https://bg3.wiki/w/images/e/e1/Ring_B_1_Faded.png", note: "Applies Mental Fatigue to enemies who fail saves." }
            ],
            act3: [
                { slot: "Weapon", name: "Gontr Mael", rarity: "legendary", location: "Steel Watch Foundry", image: "https://bg3.wiki/w/images/d/de/Gontr_Mael_Icon.png", note: "Legendary Bow. Provides Haste and Celestial Light." },
                { slot: "Armor", name: "Helldusk Armour", rarity: "legendary", location: "House of Hope (Raphael)", image: "https://bg3.wiki/w/images/c/cb/Helldusk_Armour_Icon.png", note: "Ultimate sustain and damage resistance. Wear regardless of proficiency." },
                { slot: "Hands", name: "Legacy of the Masters", rarity: "very-rare", location: "Dammon (Lower City)", image: "https://bg3.wiki/w/images/c/ce/Gloves_Of_The_Masters_Unfaded_Icon.png", note: "+2 to Attack and Damage rolls." },
                { slot: "Head", name: "Mask of Soul Perception", rarity: "very-rare", location: "Devil's Fee (Helsik)", image: "https://bg3.wiki/w/images/a/a6/Helmet_Mag_Soul_Perception_Faded.png", note: "+2 to Attack, Initiative, and Perception. Alternative to Acuity helm." },
                { slot: "Melee", name: "Ambusher", rarity: "rare", location: "Rivington General", image: "https://bg3.wiki/w/images/1/18/Dagger_D_1_Unfaded_Icon.png", note: "+1d6 damage vs targets that haven't acted yet. Amazing stat stick." },
                { slot: "Melee", name: "Knife of the Undermountain King", rarity: "very-rare", location: "Creche Y'llek", image: "https://bg3.wiki/w/images/2/21/Knife_of_the_Undermountain_King_Faded.webp", note: "Stat stick for easier crits and damage rerolls." }
            ]
        },
        strategy: "The Arcane Deadeye is a master of CC and burst. Use <b>Banishing Arrow</b> to remove the biggest threat from the board for 2 turns (no save in some patches, or high DC here). Combo <b>Shadow Arrow</b> with the party's <b>Resonance Stone</b> to double its psychic damage. Use <b>Piercing Arrow</b> with <b>Bow of the Banshee</b> to mass-frighten enemies in a line. With Action Surge and War Priest charges, you can reach 6-7 attacks in one turn (8 with Haste).",
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
        portrait: "https://bg3.wiki/w/images/c/cd/Class_Rogue_Swashbuckler_Badge_Icon.png",
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
                { slot: "Weapon", name: "Phalar Aluve", rarity: "rare", location: "Underdark", image: "https://bg3.wiki/w/images/6/6c/Longsword_PlusOne_Unfaded_Icon.png", note: "Finesse/Versatile. Use two-handed with GWM. Shriek/Sing support." },
                { slot: "Amulet", name: "Broodmother's Revenge", rarity: "uncommon", location: "Druid Grove", image: "https://bg3.wiki/w/images/c/c1/Amulet_Necklace_B_Gold_A_1_Faded.png", note: "+1d6 Poison damage when healed (synergizes with Goodberries)." },
                { slot: "Hands", name: "Gloves of Dexterity", rarity: "very-rare", location: "Creche Y'llek", image: "https://bg3.wiki/w/images/e/e9/Gloves_Leather_Dexterity_1_Unfaded_Icon.png", note: "Sets Dex to 18 for high AC and Initiative." }
            ],
            act2: [
                { slot: "Ring", name: "Risky Ring", rarity: "rare", location: "Moonrise Towers", image: "https://bg3.wiki/w/images/6/69/Ring_I_Gold_A_1_Faded.png", note: "Advantage on all attacks to offset GWM penalty." },
                { slot: "Ring", name: "Ring of Arcane Synergy", rarity: "uncommon", location: "Creche Y'llek", image: "https://bg3.wiki/w/images/6/69/Ring_I_Gold_A_1_Faded.png", note: "Adds Charisma mod to weapon damage after cantrips." },
                { slot: "Boots", name: "Boots of Stormy Clamour", rarity: "uncommon", location: "Underdark", image: "https://bg3.wiki/w/images/c/cd/Boots_Mag_Stormy_Clamour_Unfaded_Icon.png", note: "Apply Reverberation on CC application." }
            ],
            act3: [
                { slot: "Weapon", name: "Dancing Breeze", rarity: "very-rare", location: "Rivington", image: "https://bg3.wiki/w/images/c/c9/Dancing_Breeze_Unfaded_Icon.png", note: "Legendary Glaive (Finesse). Massive reach and Whirlwind Attack." },
                { slot: "Head", name: "Birthright", rarity: "very-rare", location: "Sorcerous Sundries", image: "https://bg3.wiki/w/images/2/2a/Hat_Birthright_Faded.png", note: "+2 Charisma (up to 22 with Mirror of Loss)." },
                { slot: "Armor", name: "Armor of Persistence", rarity: "very-rare", location: "Dammon (Forge)", image: "https://bg3.wiki/w/images/7/71/Armor_Persistence_Unfaded_Icon.png", note: "Permanent Blade Ward and Resistance." },
                { slot: "Cloak", name: "Cloak of Displacement", rarity: "rare", location: "Danthelon's Dancing Axe", image: "https://bg3.wiki/w/images/f/fe/Cloak_of_Displacement_Faded.png", note: "Enemies have disadvantage on attacks against you." },
                { slot: "Hands", name: "Helldusk Gloves", rarity: "very-rare", location: "House of Hope", image: "https://bg3.wiki/w/images/3/3c/Helldusk_Gloves_Icon.png", note: "+1d6 Fire damage and Bleed." },
                { slot: "Bow", name: "The Dead Shot", rarity: "very-rare", location: "Fraygo's Flophouse", image: "https://bg3.wiki/w/images/5/59/Longbow_The_Dead_Shot_Unfaded_Icon.png", note: "Lowers crit threshold." }
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
        portrait: "https://bg3.wiki/w/images/2/26/Class_Wizard_Bladesinging_Badge_Icon.png",
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
                { slot: "Weapon", name: "Shadow Blade", rarity: "common", location: "Level 2 Spell", image: "https://bg3.wiki/w/images/4/47/Shadow_Blade_Icon.png", note: "Upcast with L3/L5 slots. Psychic damage." },
                { slot: "Off-Hand", name: "Speedy Reply", rarity: "rare", location: "Risen Road", image: "https://bg3.wiki/w/images/4/4f/Scimitar_PlusOne_Icon.png", note: "Momentum on hit for mobility." },
                { slot: "Off-Hand (Alt)", name: "Hunter's Dagger", rarity: "uncommon", location: "Goblin Camp", image: "https://bg3.wiki/w/images/a/aa/Dagger_PlusOne_Icon.png", note: "Applies Rupture (damage on movement)." },
                { slot: "Head", name: "Diadem of Arcane Synergy", rarity: "uncommon", location: "Creche Y'llek", image: "https://bg3.wiki/w/images/f/fd/Helmet_Mag_Arcane_Synergy_Faded.png", note: "Adds Intelligence to weapon damage." },
                { slot: "Armor", name: "Bloodguzzler's Garb", rarity: "uncommon", location: "Underdark", image: "https://bg3.wiki/w/images/e/ef/Armor_Barbarian_Magic_A_1_Unfaded_Icon.png", note: "Wrath (+1 damage) when taking damage." },
                { slot: "Hands", name: "Bracers of Defense", rarity: "rare", location: "Blighted Village", image: "https://bg3.wiki/w/images/c/ca/Gloves_Leather_Defense_1_Unfaded_Icon.png", note: "+2 AC while unarmored." },
                { slot: "Ring", name: "Caustic Band", rarity: "uncommon", location: "Underdark", image: "https://bg3.wiki/w/images/6/69/Ring_I_Gold_A_1_Faded.png", note: "+2 Acid damage per attack." },
                { slot: "Ring", name: "Crusher's Ring", rarity: "rare", location: "Goblin Camp", image: "https://bg3.wiki/w/images/6/69/Ring_I_Gold_A_1_Faded.png", note: "+3m Movement speed." },
                { slot: "Amulet", name: "Periapt of Wound Closure", rarity: "rare", location: "Mountain Pass", image: "https://bg3.wiki/w/images/c/c1/Amulet_Necklace_B_Gold_A_1_Faded.png", note: "Maximized healing from Bladesong Climax." }
            ],
            act2: [
                { slot: "Off-Hand", name: "Knife of the Undermountain King", rarity: "very-rare", location: "Creche Y'llek", image: "https://bg3.wiki/w/images/2/21/Knife_of_the_Undermountain_King_Faded.webp", note: "Crit threshold and damage rerolls." },
                { slot: "Cloak", name: "Cloak of Protection", rarity: "uncommon", location: "Last Light Inn", image: "https://bg3.wiki/w/images/2/2a/Cloak_Of_Protection_Faded.png", note: "+1 AC and Saving Throws." },
                { slot: "Hands", name: "Gloves of the Battlemage's Power", rarity: "uncommon", location: "Tollhouse", image: "https://bg3.wiki/w/images/a/ac/Gloves_Mag_Arcane_Acuity_Icon.png", note: "Weapon hits stack Arcane Acuity." },
                { slot: "Ring", name: "Strange Conduit Ring", rarity: "uncommon", location: "Creche", image: "https://bg3.wiki/w/images/6/69/Ring_I_Gold_A_1_Faded.png", note: "+1d4 Psychic damage while concentrating." },
                { slot: "Inventory", name: "Resonance Stone", rarity: "rare", location: "Mind Flayer Colony", image: "https://bg3.wiki/w/images/8/8c/Resonance_Stone_Faded.png", note: "Doubles Psychic damage. Essential." }
            ],
            act3: [
                { slot: "Off-Hand", name: "Rhapsody", rarity: "very-rare", location: "Cazador", image: "https://bg3.wiki/w/images/4/4f/Dagger_Cazador_Unfaded_Icon.png", note: "+3 Attack, Damage, and Spell DC." },
                { slot: "Armor", name: "Robe of the Weave", rarity: "very-rare", location: "Ramazith's Tower", image: "https://bg3.wiki/w/images/6/6e/Armor_Robe_Weave_Unfaded_Icon.png", note: "+2 AC and Spell DC. Best in Slot." },
                { slot: "Amulet", name: "Amulet of Greater Health", rarity: "very-rare", location: "House of Hope", image: "https://bg3.wiki/w/images/b/b4/Amulet_Greater_Health_Faded.png", note: "Sets Constitution to 23." },
                { slot: "Ring", name: "Band of the Mystic Scoundrel", rarity: "rare", location: "Akabi", image: "https://bg3.wiki/w/images/6/69/Ring_I_Gold_A_1_Faded.png", note: "Cast Illusion/Enchantment as bonus action." },
                { slot: "Boots", name: "Helldusk Boots", rarity: "very-rare", location: "Gortash", image: "https://bg3.wiki/w/images/8/82/Helldusk_Boots_Icon.png", note: "Ignore difficult terrain and teleport." },
                { slot: "Bow", name: "Hell Rider Longbow", rarity: "rare", location: "Rivington", image: "https://bg3.wiki/w/images/3/36/Longbow_PlusOne_Icon.png", note: "+3 Initiative." }
            ]
        },
        equipment_traditional: {
            act1: [
                { slot: "Weapon", name: "Knife of the Undermountain King", rarity: "very-rare", location: "Creche", image: "https://bg3.wiki/w/images/2/21/Knife_of_the_Undermountain_King_Faded.webp", note: "Primary weapon for traditional duelist." },
                { slot: "Head", name: "Diadem of Arcane Synergy", rarity: "uncommon", location: "Creche", image: "https://bg3.wiki/w/images/f/fd/Helmet_Mag_Arcane_Synergy_Faded.png", note: "Intelligence to damage." },
                { slot: "Armor", name: "Bloodguzzler's Garb", rarity: "uncommon", location: "Underdark", image: "https://bg3.wiki/w/images/e/ef/Armor_Barbarian_Magic_A_1_Unfaded_Icon.png", note: "Early wrath stacks." }
            ],
            act2: [
                { slot: "Weapon", name: "Infernal Rapier", rarity: "very-rare", location: "Wyll's Quest", image: "https://bg3.wiki/w/images/2/2e/Rapier_PlusOne_Icon.png", note: "Scales with spellcasting ability." },
                { slot: "Armor", name: "Potent Robe", rarity: "very-rare", location: "Last Light Inn", image: "https://bg3.wiki/w/images/2/2f/Armor_Robe_Potent_Unfaded_Icon.png", note: "Boosts cantrips (Booming Blade)." }
            ],
            act3: [
                { slot: "Weapon", name: "Duellist's Prerogative", rarity: "legendary", location: "Lora's Quest", image: "https://bg3.wiki/w/images/4/47/Rapier_Duelist_Prerogative_Unfaded_Icon.png", note: "Legendary Rapier. Bonus reactions and extra hits." },
                { slot: "Armor", name: "Bhaalist Armour", rarity: "very-rare", location: "Murder Tribunal", image: "https://bg3.wiki/w/images/8/82/Armor_Leather_Bhaalist_A_1_Unfaded_Icon.png", note: "Aura of Murder: Doubles Piercing damage." },
                { slot: "Off-Hand", name: "Rhapsody", rarity: "very-rare", location: "Cazador", image: "https://bg3.wiki/w/images/4/4f/Dagger_Cazador_Unfaded_Icon.png", note: "Stat stick for accuracy/damage." }
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
        portrait: "https://bg3.wiki/w/images/c/ca/Class_Cleric_Death_Badge_Icon.png",
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
                { slot: "Weapon", name: "Melf's First Staff", rarity: "uncommon", location: "Blighted Village", image: "https://bg3.wiki/w/images/f/f8/Staff_Melfs_First_Staff_Unfaded_Icon.png", note: "+1 Spell Attack/DC." },
                { slot: "Hands", name: "Hellrider's Pride", rarity: "uncommon", location: "Zevlor", image: "https://bg3.wiki/w/images/3/38/Gloves_Leather_Magic_B_1_Unfaded_Icon.png", note: "Applies Blade Ward on heal." },
                { slot: "Ring", name: "The Whispering Promise", rarity: "uncommon", location: "Volo", image: "https://bg3.wiki/w/images/6/69/Ring_I_Gold_A_1_Faded.png", note: "Applies Bless on heal." },
                { slot: "Ring", name: "Ring of Protection", rarity: "rare", location: "Grove", image: "https://bg3.wiki/w/images/6/69/Ring_I_Gold_A_1_Faded.png", note: "+1 AC and Saving Throws." },
                { slot: "Boots", name: "Boots of Striding", rarity: "uncommon", location: "Goblin Camp", image: "https://bg3.wiki/w/images/c/c2/Boots_Mag_Striding_Unfaded_Icon.png", note: "Immunity to prone while concentrating." },
                { slot: "Armor", name: "Scale Mail +2", rarity: "rare", location: "Goblin Camp", image: "https://bg3.wiki/w/images/4/4d/Scale_Mail_PlusTwo_Icon.png", note: "High AC and Initiative." },
                { slot: "Amulet", name: "Amulet of Misty Step", rarity: "rare", location: "Goblin Camp", image: "https://bg3.wiki/w/images/c/c1/Amulet_Necklace_B_Gold_A_1_Faded.png", note: "Reposition Spirit Guardians easily." },
                { slot: "Head", name: "Holy Lance Helm", rarity: "rare", location: "Rosymorn", image: "https://bg3.wiki/w/images/3/36/Helmet_Plate_Magic_A_1_Unfaded_Icon.png", note: "Punish enemies who miss with Radiant damage." }
            ],
            act2: [
                { slot: "Weapon", name: "Blood of Lathander", rarity: "legendary", location: "Creche", image: "https://bg3.wiki/w/images/f/f5/The_Blood_of_Lathander_Icon.png", note: "The beacon for the 'Radiant Pivot' strategy." },
                { slot: "Armor", name: "Luminous Armour", rarity: "rare", location: "Underdark", image: "https://bg3.wiki/w/images/4/47/Armor_Scale_Mail_Magic_A_1_Unfaded_Icon.png", note: "Mass radiating orbs via Radiant Spirit Guardians." },
                { slot: "Hands", name: "Luminous Gloves", rarity: "uncommon", location: "Potter's Chest", image: "https://bg3.wiki/w/images/e/e5/Gloves_Leather_Magic_A_1_Unfaded_Icon.png", note: "Apply Radiant Orbs on radiant damage." },
                { slot: "Ring", name: "Callous Glow Ring", rarity: "uncommon", location: "Gauntlet of Shar", image: "https://bg3.wiki/w/images/6/69/Ring_I_Gold_A_1_Faded.png", note: "+2 damage to illuminated targets." },
                { slot: "Ring", name: "Coruscation Ring", rarity: "uncommon", location: "Last Light Inn", image: "https://bg3.wiki/w/images/6/69/Ring_I_Gold_A_1_Faded.png", note: "Radiant orbs on spell damage." },
                { slot: "Cloak", name: "Flesh Melter Cloak", rarity: "rare", location: "House of Healing", image: "https://bg3.wiki/w/images/c/c3/Cloak_Mag_Acid_1_Unfaded_Icon.png", note: "Acid damage to melee attackers." }
            ],
            act3: [
                { slot: "Weapon", name: "Staff of Cherished Necromancy", rarity: "very-rare", location: "Mystic Carrion", image: "https://bg3.wiki/w/images/d/dc/Staff_Necromancy_A_1_Unfaded_Icon.png", note: "Cast Necromancy spells for free on kill. L6 Inflict Wounds spam." },
                { slot: "Off-Hand", name: "Markoheshkir", rarity: "legendary", location: "Ramazith's Tower", image: "https://bg3.wiki/w/images/3/3d/Staff_Markoheshkir_Unfaded_Icon.png", note: "Kereska's Favour (Necrotic). Free L6 spells." },
                { slot: "Amulet", name: "Amulet of the Devout", rarity: "very-rare", location: "Stormshore Tabernacle", image: "https://bg3.wiki/w/images/c/c1/Amulet_Necklace_B_Gold_A_1_Faded.png", note: "Extra Channel Divinity and +2 Spell DC." },
                { slot: "Cloak", name: "Cloak of the Weave", rarity: "very-rare", location: "Ramazith's Tower", image: "https://bg3.wiki/w/images/e/e4/Cloak_Of_The_Weave_Unfaded_Icon.png", note: "+1 Spell DC and Attack." },
                { slot: "Head", name: "Hood of the Weave", rarity: "very-rare", location: "Philgrave's Mansion", image: "https://bg3.wiki/w/images/8/83/Hat_Hood_Of_The_Weave_Faded.png", note: "+2 Spell DC and Attack." },
                { slot: "Armor", name: "Armor of Agility", rarity: "very-rare", location: "Stormshore Armoury", image: "https://bg3.wiki/w/images/c/c9/Armor_Leather_A_2_Unfaded_Icon.png", note: "Full Dex modifier to AC." },
                { slot: "Hands", name: "Gloves of Dexterity", rarity: "very-rare", location: "Creche", image: "https://bg3.wiki/w/images/e/e9/Gloves_Leather_Dexterity_1_Unfaded_Icon.png", note: "Sets Dex to 18." },
                { slot: "Hands (Alt)", name: "Gemini Gloves", rarity: "rare", location: "Devil's Fee", image: "https://bg3.wiki/w/images/e/e5/Gloves_Leather_Magic_A_1_Unfaded_Icon.png", note: "Reaper-cast cantrips hit 4 targets once per rest." }
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
