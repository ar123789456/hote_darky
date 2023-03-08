const json = {
    "belt of giant strength": {
        "name": "Belt of Giant Strength",
        "recipe": ["Belt of Strength", "Shimmerweed"],
        "stat": "STR 16"
    },
    "greater ring strength": {
        "name": "Greater Ring Strength",
        "recipe": ["Belt of Giant Strength", "Ring of Strength"],
        "stat": "STR 34"
    },
    "elite scroll of strength": {
        "name": "Elite Scroll of Strength",
        "recipe": ["Greater Ring Strength", "Scroll of Strength"],
        "stat": "STR 85"
    },
    "mystic scroll of strength": {
        "name": "Mystic Scroll of Strength",
        "recipe": ["Elite Scroll of Strength", "Flag of Strength"],
        "stat": "STR 185"
    },
    "sacred scroll of strength": {
        "name": "Sacred Scroll of Strength",
        "recipe": ["Mystic Scroll of Strength", "Horn of Toughness", "Ring of Strength"],
        "stat": "STR 600"
    },
    "kratos": {
        "name": "KRATOS",
        "recipe": ["Sacred Scroll of Strength", "Perfect Topaz", "Perfect Sapphire", "The Heart of Searinox"],
        "stat": "STR 900, HP 15000, HP Regen 60"
    },
    "god's guarding shell": {
        "name": "God's Guarding Shell",
        "recipe": ["Kratos", "Sacred Guard Shell", "Gods Atom"],
        "stat": "STR 1000, HP 80000, 800 hp regen"
    },
    "q. ring": {"name": "Q. Ring", "recipe": ["J. Ring", "Shimmerweed"], "stat": "AGI 16"},
    "k. ring": {"name": "K. Ring", "recipe": ["Q. Ring", "Ring of Agility"], "stat": "AGI 35"},
    "a. ring": {"name": "A. Ring", "recipe": ["K. Ring", "Scroll of Agility (40)"], "stat": "AGI 102"},
    "mystic a. ring": {"name": "Mystic A. Ring", "recipe": ["A. Ring", "Flute of Accuracy"], "stat": "AGI 210"},
    "sacred a. ring": {"name": "Sacred A. Ring", "recipe": ["Mystic A. Ring", "Tizona"], "stat": "AGI 430"},
    "artemis ring": {
        "name": "Artemis Ring",
        "recipe": ["Sacred A. Ring", "Perfect Topaz", "Titanium Scimitar"],
        "stat": "AGI 500, Dmg 500, Armor 100"
    },
    "hermes": {
        "name": "HERMES",
        "recipe": ["Sacred A. Ring", "Artemis Flute", "Scroll of Agility (90)", "Boots of Quel'Thalas", "Perfect Topaz"],
        "stat": "\nAGI 1100, 400 armor\n"
    },
    "eloquence of hermes": {
        "name": "Eloquence of Hermes",
        "recipe": ["Hermes", "Sacred Sword"],
        "stat": "\nAGI 1500, 400 armor, Deal x3 AGI in spell damage with every hit\n"
    },
    "eidyia": {
        "name": "EIDYIA",
        "recipe": ["Diamond of Knowledge (200 int)", "Perfect Ruby", "Greater Mana Talisman", "Perfect Sapphire"],
        "stat": "INT 1000, MP 20000, MP Regen 500%, 1150 spellpower"
    },
    "mana crystal": {
        "name": "Mana Crystal",
        "recipe": ["Eidyia", "Pulsar", "Greater Mana Talisman"],
        "stat": "INT 1250, MP Regen 500%, 1500 spellpower, Armor 800, 40000 spell damage in 500 aoe"
    },
    "fashion armor": {
        "name": "Fashion Armor",
        "recipe": ["Elegant", "J. Ring", "Belt of Strength"],
        "stat": "Armor 20, HP 800, STR 20, AGI 20"
    },
    "moon armor": {
        "name": "Moon Armor",
        "recipe": ["Fashion Armor", "Q. Ring", "Belt of Giant Strength"],
        "stat": "Armor 80, HP 1500, STR 50, AGI 50, HP Regen 20"
    },
    "shining moon armor": {
        "name": "Shining Moon Armor",
        "recipe": ["Moon armor", "Lavahand gauntlets", "Steel armor", "Quality armor"],
        "stat": "Armor 200, HP 5600, STR 100, AGI 100, HP Regen 50"
    },
    "shaman claws": {"name": "Shaman Claws", "recipe": ["Savage Claws", "Rusty Mining Pick"], "stat": "Dmg 30, AS 30%"},
    "elite shaman claws": {
        "name": "Elite Shaman Claws",
        "recipe": ["Shaman Claws", "Katana", "Bloody Katana"],
        "stat": "Dmg 500, AS 200%"
    },
    "rusty figurine": {
        "name": "Rusty Figurine",
        "recipe": ["Figurine", "Shimmerweed"],
        "stat": "All Stat 5, Dmg 5, Armor 5"
    },
    "old figurine": {
        "name": "Old Figurine",
        "recipe": ["Rusty Figurine", "Circlet of Nobility"],
        "stat": "All Stat 12, Dmg 12, Armor 12"
    },
    "ancient figurine": {
        "name": "Ancient Figurine",
        "recipe": ["Old Figurine", "Rusty Mining Pick", "Runed Bracers"],
        "stat": "All Stat 30, Dmg 30, Armor 30"
    },
    "mystic figurine": {
        "name": "Mystic Figurine",
        "recipe": ["Ancient Figurine", "Basic Claws", "Runed Bracers"],
        "stat": "All Stat 70, Dmg 70, Armor 70"
    },
    "unholy sword": {
        "name": "Unholy Sword",
        "recipe": ["Corrupted Sword", "Perfect Emerald"],
        "stat": "Dmg 350, AS 100%, All Stat 40, Orb effect Life Steal 20%"
    },
    "vampiric sword": {
        "name": "Vampiric Sword",
        "recipe": ["Vampire Fangs", "Mithril Sword", "Perfect Ruby"],
        "stat": "Dmg 700, AS 120%, All Stat 60, Orb effect Life Steal 23%"
    },
    "nosferatu sword": {
        "name": "Nosferatu Sword",
        "recipe": ["Nosferatu Fangs", "Rune Sword", "Royal Emblem"],
        "stat": "Dmg 1800, AS 300%, All Stat 80, Orb effect Life Steal 25%"
    },
    "improve sword": {"name": "Improve Sword", "recipe": ["Iron Sword", "Rusty Mining Pick"], "stat": "Dmg 50, AS 15%"},
    "keen sword": {
        "name": "Keen Sword",
        "recipe": ["Improve Sword", "Basic Claws"],
        "stat": "Dmg 70, AS 25%, All Stat 10"
    },
    "cutting sword": {
        "name": "Cutting Sword",
        "recipe": ["Keen Sword", "Sturdy Axe"],
        "stat": "Dmg 120, AS 30%, All Stat 12"
    },
    "sharp sword": {
        "name": "Sharp Sword",
        "recipe": ["Cutting Sword", "Accurate Sword"],
        "stat": "Dmg 160, AS 50%, All Stat 22, 16% crit x2,1"
    },
    "edged sword": {
        "name": "Edged Sword",
        "recipe": ["Sharp Sword", "Deadly Spear"],
        "stat": "Dmg 250, AS 70%, All Stat 40, 14% crit x3"
    },
    "razor sword": {
        "name": "Razor Sword",
        "recipe": ["Edged Sword", "Assassin Lance"],
        "stat": "Dmg 500, AS 80%, All Stat 50, 12% crit x5"
    },
    "sacred edge sword": {
        "name": "Sacred edge sword",
        "recipe": ["Razor Sword", "Perfect Ruby"],
        "stat": "Dmg 1400, AS 100%, All Stat 100, 10% crit x7"
    },
    "blessing sword": {
        "name": "Blessing Sword",
        "recipe": ["Cutting Sword", "Mithril Sword"],
        "stat": "Dmg 240, AS 80%, HP Regen 12, 10% x5 AGI in spell dmg"
    },
    "sacred sword": {
        "name": "Sacred Sword",
        "recipe": ["Blessing Sword", "Perfect Ruby"],
        "stat": "Dmg 700, 100 Agility, HP Regen 18, STR 50, 100% x1 AGI in spell dmg"
    },
    "golden sword": {
        "name": "Golden Sword",
        "recipe": ["Blessing Sword", "Perfect Topaz"],
        "stat": "Dmg 1200, AS 140%, HP Regen 40, 40 to all stats, 20% x8 AGI in spell dmg"
    },
    "improve scimitar": {"name": "Improve Scimitar", "recipe": ["Scimitar", "J. Ring"], "stat": "Dmg 30, AGI 12"},
    "swords pair": {
        "name": "Swords Pair",
        "recipe": ["Improve Sword", "Improve Scimitar"],
        "stat": "Dmg 80, AS 15%, AGI 15"
    },
    "duo swords": {
        "name": "Duo Swords",
        "recipe": ["Steel Sword", "Steel Scimitar"],
        "stat": "Dmg 120, AS 30%, AGI 30"
    },
    "twins sword": {"name": "Twins Sword", "recipe": ["Swords Pair", "Duo Swords"], "stat": "Dmg 200, AS 70%, AGI 70"},
    "elite rune scimitar": {
        "name": "Elite Rune Scimitar",
        "recipe": ["Rune Scimitar", "Perfect Ruby"],
        "stat": "Dmg 800, AGI 170, 5% crit x11"
    },
    "sacred scimitar": {
        "name": "Sacred Scimitar",
        "recipe": ["Sacred Edge Sword", "Elite Rune Scimitar", "Katar"],
        "stat": "Dmg 2200, AGI 320, 12% crit x12 with true strike"
    },
    "masamune (blue)": {
        "name": "Masamune (Blue)",
        "recipe": ["Masamune (Gold)", "Perfect Sapphire"],
        "stat": "Dmg 1800, AS 100%, All Stat 150, 10% crit x10 with true strike"
    },
    "elite rune gloves": {
        "name": "Elite Rune Gloves",
        "recipe": ["Rune Gloves", "Perfect Emerald"],
        "stat": "AS 300%, Armor 50, STR 30, Passive: Deal 1700 normal dmg on atk"
    },
    "elite rune sword": {
        "name": "Elite Rune Sword",
        "recipe": ["Rune Sword", "Perfect Emerald"],
        "stat": "Dmg 700, AS 160%, 30% deal 6000 normal dmg on atk with true strike"
    },
    "divine sword": {
        "name": "Divine Sword",
        "recipe": ["Titanium Sword", "Perfect Ruby"],
        "stat": "Dmg 400, AS 100%, HP 1500\n150% base dmg and primary attribute bonus"
    },
    "celestial sword": {
        "name": "Celestial Sword",
        "recipe": ["Divine Sword", "Rune Sword", "Royal Emblem"],
        "stat": "Dmg 250%, AS 160%, HP 15000"
    },
    "decapitator (green)": {
        "name": "Decapitator (Green)",
        "recipe": ["Decapitator (Red)", "Rune Axe", "Assassin Lance"],
        "stat": "Dmg 3200, 20% to deal 800 + 100x level in pure damage, can cast Terror                       "
    },
    "decapitator (blue)": {
        "name": "Decapitator (Blue)",
        "recipe": ["Decapitator (Green)", "Perfect Topaz"],
        "stat": "Dmg 3200, Armor 260, 60% to 80x level in pure damage and heal for 15% of the damage"
    },
    "ares": {
        "name": "ARES",
        "recipe": ["Decapitator (Blue)", "The Heart of Searinox", "Perfect Sapphire"],
        "stat": "Dmg 10000, Armor 350, All Stat 300, 200 hp reg, 100% chance to deal 80x level and heal for 20% of the damage"
    },
    "elite mithril scimitar": {
        "name": "Elite Mithril Scimitar",
        "recipe": ["Mithril Scimitar", "Crystal Ball"],
        "stat": "Dmg 120, All Stat 18, AGI 44"
    },
    "diabolic scimitar": {
        "name": "Diabolic Scimitar",
        "recipe": ["Elite Mithril Scimitar", "Rune Scimitar"],
        "stat": "Dmg 400, All Stat 20, AGI 170, Aura 40 armor reduction"
    },
    "demon king's scimitar": {
        "name": "Demon king's Scimitar",
        "recipe": ["Diabolic Scimitar", "Darkness Broach", "Mystic A. Ring"],
        "stat": "Dmg 2600, All Stat 115, AGI 170, Aura 87 armor reduction"
    },
    "killer blade": {
        "name": "Killer Blade",
        "recipe": ["Assassin Blade", "Steel Axe"],
        "stat": "Dmg 240, 32 Armor Reduction upon dealing physical damage"
    },
    "hitman blade": {
        "name": "Hitman Blade",
        "recipe": ["Killer Blade", "Perfect Ruby", "Assassin Lance"],
        "stat": "Dmg 500, 70 to all stats, 5600 Hitpoints, 81 Armor Reduction on any damage"
    },
    "shaman axe": {"name": "Shaman Axe", "recipe": ["Iron Axe", "Shamanic totem"], "stat": "Dmg 120"},
    "bone axe": {
        "name": "Bone Axe",
        "recipe": ["Shaman Axe", "Large War Axe"],
        "stat": "Dmg 160, Cleaving: 30% in 300 AOE (Melee and Ranged)"
    },
    "destructive axe": {
        "name": "Destructive Axe",
        "recipe": ["Bone Axe", "Steel Axe"],
        "stat": "Dmg 280, Cleaving: 38% in 330 AOE (Melee and Ranged)"
    },
    "genocidal axe": {
        "name": "Genocidal Axe",
        "recipe": ["Destructive Axe", "Decapitator (gold)"],
        "stat": "Dmg 1000, Cleaving: 50% in 400 AOE (Melee and Ranged)"
    },
    "heavy war hammer": {"name": "Heavy War Hammer", "recipe": ["Mithril Axe", "War Hammer"], "stat": "Dmg 300"},
    "two tons war hammer": {
        "name": "Two Tons War Hammer",
        "recipe": ["Heavy War Hammer", "Titanium Axe", "Decapitator"],
        "stat": "Dmg 1700, AS -80%"
    },
    "adamantium war maul": {
        "name": "Adamantium War Maul",
        "recipe": ["Two Tons War Hammer", "Perfect Ruby"],
        "stat": "Dmg 6000, AS -250%"
    },
    "elite rune axe": {
        "name": "Elite Rune Axe",
        "recipe": ["Rune Axe", "Perfect Topaz"],
        "stat": "Dmg 900, 100% crit x2"
    },
    "true raven sword": {
        "name": "True Raven Sword",
        "recipe": ["Elite Rune Axe", "Raven Sword"],
        "stat": "Dmg 2600, 100% crit x4.1, 12% lifesteal, STR 200, AGI 200"
    },
    "lavahand gauntlets": {
        "name": "Lavahand Gauntlets",
        "recipe": ["Firehand gauntlets", "Elegant armor"],
        "stat": "Armor 22, HP 600, AS 50%, AGI 40"
    },
    "mystic gloves": {
        "name": "Mystic Gloves",
        "recipe": ["Leather Gloves", "Steel Gloves", "Mithril Gloves"],
        "stat": "AS 230%, Armor 18, STR 25"
    },
    "sacred gloves": {
        "name": "Sacred Gloves",
        "recipe": ["Mystic Gloves", "Titanium Gloves"],
        "stat": "AS 500%, Armor 40, Dmg 70, STR 60"
    },
    "divine gloves": {
        "name": "Divine Gloves",
        "recipe": ["Sacred Gloves", "Perfect Ruby"],
        "stat": "AS 1200%, Armor 180, Dmg 150, STR 160"
    },
    "toxic spear": {
        "name": "Toxic Spear",
        "recipe": ["Choro Spear", "Rusty Mining Pick"],
        "stat": "Dmg 40, Orb effect 40 DPS, last 12 sec"
    },
    "noxious spear": {
        "name": "Noxious Spear",
        "recipe": ["Toxic Spear", "Deadly Lance"],
        "stat": "Dmg 120, Orb effect 50 DPS, last 16 sec"
    },
    "poisonous spear": {
        "name": "Poisonous Spear",
        "recipe": ["Noxious Spear", "Zombie Helm", "Shamanic Totem"],
        "stat": "Dmg 160, Orb effect 80 DPS, last 20 sec, HP Regen 20"
    },
    "venomous spear": {
        "name": "Venomous Spear",
        "recipe": ["Poisonous Spear", "Titanium Helm", "Assassin Lance"],
        "stat": "Dmg 400, Orb effect 100 DPS, last 25 sec, HP Regen 50"
    },
    "baneful spear": {
        "name": "Baneful Spear",
        "recipe": ["Venomous Spear", "Perfect Emerald"],
        "stat": "Dmg 500, Orb effect 200 DPS, last 30 sec, HP Regen 60"
    },
    "firebolt wand": {
        "name": "Firebolt Wand",
        "recipe": ["Wand of Wizard", "Dark Staff"],
        "stat": "INT 40, Active: Deal 1000 dmg, stun 2 sec, CD 15 sec"
    },
    "firebolt staff": {
        "name": "Firebolt Staff",
        "recipe": ["Firebolt Wand", "Lesser Mana Talisman"],
        "stat": "INT 50, MP 500, Active: Deal 1400 dmg, stun 3 sec, CD 14 sec"
    },
    "firebolt scepter": {
        "name": "Firebolt Scepter",
        "recipe": ["Firebolt Staff", "Mana Talisman"],
        "stat": "INT 80, MP 900, MP Regen 100%\nActive: Deal 2100, stun 4 sec, CD 13 sec"
    },
    "mystic firebolt scepter": {
        "name": "Mystic Firebolt Scepter",
        "recipe": ["Firebolt Scepter", "Bigger Mana Talisman"],
        "stat": "INT 100, MP 1300, MP Regen 160%\nActive: Deal 3300, stun 5 sec, CD 12 sec"
    },
    "sacred firebolt scepter": {
        "name": "Sacred Firebolt Scepter",
        "recipe": ["Mystic Firebolt Scepter", "Khadgar's Gem of the Energy"],
        "stat": "INT 180, MP 3000, MP Regen 250%\nActive: Deal 4500, stun 6 sec, CD 11 sec"
    },
    "grimoire of the orc soul": {
        "name": "Grimoire of the Orc Soul",
        "recipe": ["Tome of Sacrifices", "Runed Bracers", "Crystal Ball"],
        "stat": "All Stat 40, HP Regen 26, MP 900\nActive: Summon Elite Orc Warrior, CD 70 sec"
    },
    "hell grimoire": {
        "name": "Hell Grimoire",
        "recipe": ["Grimoire of the Orc Soul", "Firebolt Scepter"],
        "stat": "All Stat 50, INT 100, HP Regen 40, MP 2000, Active: Deal 4000 dmg,\nparalize 4 sec, summon 2 Hell Skeletals, CD 40 sec"
    },
    "elite hell grimoire": {
        "name": "Elite Hell Grimoire",
        "recipe": ["Hell Grimoire", "Sorcerer Armor", "Necklace of Majesty"],
        "stat": "All Stat 150, INT 200, MP 6000, 500 Spellpower, Active: Deal 8000 dmg,\nparalize 6 sec, summon 2 Elite Hell Skeletals, CD 40 sec"
    },
    "circlet of aristocracy": {
        "name": "Circlet of Aristocracy",
        "recipe": ["Shimmerweed", "Circlet of Nobility"],
        "stat": "All Stat 10"
    },
    "circlet of grandeur": {
        "name": "Circlet of Grandeur",
        "recipe": ["Circlet of Aristocracy", "Ring of Strength", "Ring of Agility", "Ring of Intelligence"],
        "stat": "All Stat 28"
    },
    "necklace of greatness": {
        "name": "Necklace of Greatness",
        "recipe": ["Circlet of Grandeur", "Crystal Ball"],
        "stat": "All Stat 50"
    },
    "necklace of majesty": {
        "name": "Necklace of Majesty",
        "recipe": ["Necklace of Greatness", "Ring of Superiority"],
        "stat": "All Stat 100"
    },
    "necklace of magnificence": {
        "name": "Necklace of Magnificence",
        "recipe": ["Necklace of Majesty", "Gem of Hades"],
        "stat": "All Stat 200"
    },
    "necklace of divinity": {
        "name": "Necklace of Divinity",
        "recipe": ["Necklace of Magnificence", "The Heart of Searinox"],
        "stat": "All Stat 350"
    },
    "figurine of magnificence": {
        "name": "Figurine of Magnificence",
        "recipe": ["Necklace of Magnificence", "Mystic Figurine", "Elite Shaman Claws"],
        "stat": "All Stat 400, Dmg 400, Armor 400, AS 100%"
    },
    "figurine of ultimatum": {
        "name": "Figurine of Ultimatum",
        "recipe": ["Figurine of Magnificence", "Mystic Scroll of Strength", "A. Ring", "Scepter of Wisdom", "Perfect Sapphire"],
        "stat": "All Stat 1000,Armor 400, AS 100%, Active: Deal 150% of your total stats to a random enemy around you \neach second for 12 seconds. CD 75 sec"
    },
    "guard shield": {
        "name": "Guard Shield",
        "recipe": ["Rusty Shield", "Steel Shield"],
        "stat": "Armor 50, 33% chance to block 170 physical dmg"
    },
    "plate shield": {
        "name": "Plate Shield",
        "recipe": ["Guard Shield", "Talisman of the Wild"],
        "stat": "Armor 60, HP 1000, 35% chance to block 315 physical dmg"
    },
    "defender": {
        "name": "Defender",
        "recipe": ["Plate Shield", "Titanium Shield", "Perfect Topaz"],
        "stat": "Armor 180, HP 1300, 50% chance to block 710 physical and spell dmg\nActive: Divine Skin, last 12 sec, CD 80 sec"
    },
    "edge and defence": {
        "name": "Edge and Defence",
        "recipe": ["Guard Shield", "Cutting Sword"],
        "stat": "Dmg 250, Armor 90, AS 80%, 33% chance to block 800 physical and spell dmg"
    },
    "elite rune shield": {
        "name": "Elite Rune Shield",
        "recipe": ["Rune Shield", "Perfect Topaz"],
        "stat": "Armor 180, HP Regen 200, 60% block 540 physical and spell dmg\nActive: Bonus 100000 Armor, last 10 sec, CD 55 sec"
    },
    "hard armor": {"name": "Hard Armor", "recipe": ["Hide Armor", "Elegant Armor"], "stat": "Armor 25, HP 900"},
    "knight armor": {"name": "Knight Armor", "recipe": ["Hard Armor", "Warrior Armor"], "stat": "Armor 80, HP 1800"},
    "diamond armor": {
        "name": "Diamond Armor",
        "recipe": ["Knight Armor", "Titanium Armor", "Talismand of the Wild"],
        "stat": "Armor 300, HP 4000"
    },
    "adamantium armor": {
        "name": "Adamantium Armor",
        "recipe": ["Diamond Armor", "Perfect Topaz"],
        "stat": "Armor 800, HP 15000, AS -150%, MS -30%\nchange armor type to Hero"
    },
    "elite rune armor": {
        "name": "Elite Rune Armor",
        "recipe": ["Rune Armor", "Perfect Ruby"],
        "stat": "Armor 300, HP 5000, HP Regen 20\nchange armor type to Hero\nPassive: When HP<40%, if Boss atk, 50% heal 600hp"
    },
    "magician armor": {
        "name": "Magician Armor",
        "recipe": ["Mage Armor", "Robe of the Magic"],
        "stat": "Armor 18, HP 500, MP 500, 50 spellpower"
    },
    "magus armor": {
        "name": "Magus Armor",
        "recipe": ["Magician Armor", "Hide Armor", "Lesser Mana Talisman"],
        "stat": "Armor 40, HP 900, MP 900, MP Regen 100%, 75 spellpower"
    },
    "wizard armor": {
        "name": "Wizard Armor",
        "recipe": ["Magus Armor", "Quality Armor", "Medallion of Warlock"],
        "stat": "Armor 60, HP 1300, MP 1300, MP Regen 160%, 120 spellpower"
    },
    "sorcerer armor": {
        "name": "Sorcerer Armor",
        "recipe": ["Wizard Armor", "Merlinis Cape"],
        "stat": "Armor 90, HP 2000, MP 2000, MP Regen 250%, 150 spellpower"
    },
    "diviner armor": {
        "name": "Diviner Armor",
        "recipe": ["Sorcerer Armor", "Divine Armor", "Khadgar's Gem of the Energy"],
        "stat": "Armor 180, HP 4000, MP 4000, MP Regen 400%, 400 spellpower\nWhen be attacked, 30% cost 300 mana to heal 2000hp"
    },
    "hide leather": {"name": "Hide Leather", "recipe": ["Hide Armor", "Leather Helm"], "stat": "HP 500, HP Regen 6"},
    "life gem": {
        "name": "Life Gem",
        "recipe": ["Hide Leather", "Green Flag", "Voodoo Doll"],
        "stat": "HP 1000, HP Regen 12"
    },
    "vigor gem": {"name": "Vigor Gem", "recipe": ["Life Gem", "Soul Gem"], "stat": "HP 2000, HP Regen 23"},
    "spirit gem": {"name": "Spirit Gem", "recipe": ["Vigor Gem", "Titanium Helm"], "stat": "HP 3000, HP Regen 50"},
    "vitality gem": {
        "name": "Vitality Gem",
        "recipe": ["Spirit Gem", "Talismand of the Wild", "Zombie Helm"],
        "stat": "HP 5000, HP Regen 80"
    },
    "sacred sphere of vitality": {
        "name": "Sacred Sphere of Vitality",
        "recipe": ["Vitality Gem", "Perfect Topaz"],
        "stat": "HP 13000, HP Regen 150"
    },
    "aegle": {
        "name": "Aegle",
        "recipe": ["Sacred Sphere of Vitality", "Atlas", "Heart Container", "The Heart of Searinox Recipe"],
        "stat": "HP 68000, HP Regen 300, STR 200"
    },
    "magic helm": {"name": "Magic Helm", "recipe": ["Hide Helm", "Voodoo Doll"], "stat": "Armor 10, HP Regen 10"},
    "magic iron helm": {
        "name": "Magic Iron Helm",
        "recipe": ["Magic Helm", "Steel Helm"],
        "stat": "Armor 22, HP Regen 20"
    },
    "mystic helm": {
        "name": "Mystic Helm",
        "recipe": ["Magic Iron Helm", "Mithril Helm", "Zombie Helm"],
        "stat": "Armor 60, HP Regen 40, Spell Resistance 25%"
    },
    "sacred helm": {
        "name": "Sacred Helm",
        "recipe": ["Mystic Helm", "Necklace of Greatness", "Crystal Ball"],
        "stat": "Armor 80, HP Regen 40 , All Stat 50, Spell Resistance 40%"
    },
    "hephaestus helm": {
        "name": "Hephaestus Helm",
        "recipe": ["Sacred Helm", "Titanium Helm", "Perfect Topaz", "Perfect Ruby"],
        "stat": "Armor 200, HP Regen 100, All Stat 100, Spell Resistance 80%"
    },
    "elite rune helm": {
        "name": "Elite Rune Helm",
        "recipe": ["Rune Helm", "Perfect Emerald"],
        "stat": "Armor 150, HP Regen 100, Spell Resistance 50%"
    },
    "centurion armor": {
        "name": "Centurion Armor",
        "recipe": ["Knight Armor", "Life Gem", "Magic Iron Helm"],
        "stat": "Armor 122, HP 2500, HP Regen 40"
    },
    "royal armor": {
        "name": "Royal Armor",
        "recipe": ["Centurion Armor", "Necklace of Majesty", "Perfect Emerald"],
        "stat": "Armor 150, HP 2500, HP Regen 50, All Stat 150\nchange armor type to Hero"
    },
    "spiked armor": {
        "name": "Spiked Armor",
        "recipe": ["Steel Armor", "Spiked Carapace"],
        "stat": "Armor 60, HP 1000, Melee Dmg Return 40%"
    },
    "sharp armor": {
        "name": "Sharp Armor",
        "recipe": ["Spiked Armor", "Magic Iron Helm"],
        "stat": "Armor 100, HP 1300, HP Regen 26, Melee Dmg Return 60%"
    },
    "impale armor": {
        "name": "Impale Armor",
        "recipe": ["Sharp Armor", "Mithril Armor", "Perfect Emerald"],
        "stat": "Armor 400, HP 4000, HP Regen 50, Melee Dmg Return 100%"
    },
    "unholy crystal": {
        "name": "Unholy Crystal",
        "recipe": ["Spiked Armor", "Perfect Emerald", "Perfect Ruby"],
        "stat": "Dmg 150, Armor 100, HP 4000, 50% chance to return\nyour STR + your AGI in spell dmg when you are attacked"
    },
    "valor boots": {
        "name": "Valor Boots",
        "recipe": ["Leather Boots", "Boots of Courage"],
        "stat": "MS 70, Armor 7, HP 200"
    },
    "audacity boots": {
        "name": "Audacity Boots",
        "recipe": ["Valor Boots", "Improve Boots"],
        "stat": "MS 135, Armor 16, HP 350"
    },
    "bravery boots": {
        "name": "Bravery Boots",
        "recipe": ["Audacity Boots", "Circlet of Grandeur"],
        "stat": "MS 150, Armor 18, All Stat 40, HP 500"
    },
    "heroism boots": {
        "name": "Heroism Boots",
        "recipe": ["Bravery Boots", "Mithril Boots"],
        "stat": "MS 250, Armor 30, All Stat 60, HP 800"
    },
    "elite rune boots": {
        "name": "Elite Rune Boots",
        "recipe": ["Rune Boots", "Perfect Ruby"],
        "stat": "Max MS, Armor 120, All Stat 100, HP Regen 40\nMS can't be recuded"
    }
}

let BSJson = {
    "hide armor": {"name": "Hide Armor", "level": 1, "color": "#FF0000", "command": "-FAR"},
    "steel armor": {"name": "Steel Armor", "level": 2, "color": "#FF0000", "command": "-FAR"},
    "mithril armor": {"name": "Mithril Armor", "level": 3, "color": "#FF0000", "command": "-FAR"},
    "titanium armor": {"name": "Titanium Armor", "level": 3, "color": "#FF0000", "command": "-FAR"},
    "rune armor": {"name": "Rune Armor", "level": 4, "color": "#FF0000", "command": "-FAR"},
    "hide helm": {"name": "Hide Helm", "level": 1, "color": "#FF7F00", "command": "-FHE"},
    "steel helm": {"name": "Steel Helm", "level": 2, "color": "#FF7F00", "command": "-FHE"},
    "mithril helm": {"name": "Mithril Helm", "level": 3, "color": "#FF7F00", "command": "-FHE"},
    "titanium helm": {"name": "Titanium Helm", "level": 3, "color": "#FF7F00", "command": "-FHE"},
    "rune helm": {"name": "Rune Helm", "level": 4, "color": "#FF7F00", "command": "-FHE"},
    "iron axe": {"name": "Iron Axe", "level": 1, "color": "#FFFF00", "command": "-FAX"},
    "steel axe": {"name": "Steel Axe", "level": 2, "color": "#FFFF00", "command": "-FAX"},
    "mithril axe": {"name": "Mithril Axe", "level": 3, "color": "#FFFF00", "command": "-FAX"},
    "titanium axe": {"name": "Titanium Axe", "level": 3, "color": "#FFFF00", "command": "-FAX"},
    "rune axe": {"name": "Rune Axe", "level": 4, "color": "#FFFF00", "command": "-FAX"},
    "iron sword": {"name": "Iron Sword", "level": 1, "color": "#00FF00", "command": "-FSW"},
    "steel sword": {"name": "Steel Sword", "level": 2, "color": "#00FF00", "command": "-FSW"},
    "mithril sword": {"name": "Mithril Sword", "level": 3, "color": "#00FF00", "command": "-FSW"},
    "titanium sword": {"name": "Titanium Sword", "level": 3, "color": "#00FF00", "command": "-FSW"},
    "rune sword": {"name": "Rune Sword", "level": 4, "color": "#00FF00", "command": "-FSW"},
    "scimitar": {"name": "Scimitar", "level": 1, "color": "#0000FF", "command": "-FSC"},
    "steel scimitar": {"name": "Steel Scimitar", "level": 2, "color": "#0000FF", "command": "-FSC"},
    "mithril scimitar": {"name": "Mithril Scimitar", "level": 3, "color": "#0000FF", "command": "-FSC"},
    "titanium scimitar": {"name": "Titanium Scimitar", "level": 3, "color": "#0000FF", "command": "-FSC"},
    "rune scimitar": {"name": "Rune Scimitar", "level": 4, "color": "#0000FF", "command": "-FSC"},
    "rusty shield": {"name": "Rusty Shield", "level": 1, "color": "#4B0082", "command": "-FSH"},
    "steel shield": {"name": "Steel Shield", "level": 2, "color": "#4B0082", "command": "-FSH"},
    "mithril shield": {"name": "Mithril Shield", "level": 3, "color": "#4B0082", "command": "-FSH"},
    "titanium shield": {"name": "Titanium Shield", "level": 3, "color": "#4B0082", "command": "-FSH"},
    "rune shield": {"name": "Rune Shield", "level": 4, "color": "#4B0082", "command": "-FSH"},
    "leather gloves": {"name": "Leather Gloves", "level": 1, "color": "#9400D3", "command": "-FGL"},
    "steel gloves": {"name": "Steel Gloves", "level": 2, "color": "#9400D3", "command": "-FGL"},
    "mithril gloves": {"name": "Mithril Gloves", "level": 3, "color": "#9400D3", "command": "-FGL"},
    "titanium gloves": {"name": "Titanium Gloves", "level": 3, "color": "#9400D3", "command": "-FGL"},
    "rune gloves": {"name": "Rune Gloves", "level": 4, "color": "#9400D3", "command": "-FGL"},
    "leather boots": {"name": "Leather Boots", "level": 1, "color": "#FFFFFF", "command": "-FBO"},
    "improve boots": {"name": "Improve Boots", "level": 2, "color": "#FFFFFF", "command": "-FBO"},
    "mithril boots": {"name": "Mithril Boots", "level": 3, "color": "#FFFFFF", "command": "-FBO"},
    "rune boots": {"name": "Rune Boots", "level": 4, "color": "#FFFFFF", "command": "-FBO"},
    "lesser mana talisman": {"name": "Lesser Mana Talisman", "level": 1, "color": "#000000", "command": "-FMA"},
    "mana talisman": {"name": "Mana Talisman", "level": 2, "color": "#000000", "command": "-FMA"},
    "bigger mana talisman": {"name": "Bigger Mana Talisman", "level": 3, "color": "#000000", "command": "-FMA"},
    "greater mana talisman": {"name": "Greater Mana Talisman", "level": 4, "color": "#000000", "command": "-FMA"}
}
///Excel macro


function parse() {
    let spreadsheet = SpreadsheetApp.getActive();
    let list = spreadsheet.getRange('B14:D179').getValues();
    let obj = {};

    for (let i = 0; i < list.length; i++) {
        if (list[i][0] === '') continue;
        let recipe = list[i][0].split('+').map((item) => item.trim());
        obj[list[i][1].toLowerCase()] = {
            name: list[i][1],
            recipe: recipe,
            stat: list[i][2]
        }
    }
    spreadsheet.getCurrentCell().setValue(JSON.stringify(obj))
}

function myFunction1() {
    let spreadsheet = SpreadsheetApp.getActive();
    let list = spreadsheet.getRange('B1:E10').activate();
    let obj = {};
    let nineColors = ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#4B0082", "#9400D3", "#FFFFFF", "#000000"];
    for (let i = 0; i < list.length; i++) {
        console.log(list[i])
        let level = 0;
        for (let j = 0; j < list[i].length; j++) {
            if (j === 0) continue;
            list[i][j].split("-").map((item) => item.trim()).forEach((item) => {
                obj[item.toLowerCase()] = {
                    name: item,
                    level: level,
                    color: nineColors[i]
                }
            })
            level++;
        }
    }
    spreadsheet.getCurrentCell().setValue(JSON.stringify(obj))
};