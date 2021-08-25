var talents = [
   {
      n: 'Balance',
      t: [
         {
            i: 112,
            n: 'Nature\'s Grasp',
            m: 1,
            s: [
               16812,
            ],
            d: [
               'Reduces the cost of your Maul, Swipe, Claw, Rake and Mangle abilities by 1 Rage or Energy',
            ],
            x: 1,
            y: 0,
            iconname: 'spell_nature_natureswrath',
            c: 0,
            aura: function (count) { return { naturesgrasp: count } },
         },
      ],
   },
   {
      n: 'Feral Combat',
      t: [
         {
            i: 211,
            n: 'Ferocity',
            m: 5,
            s: [
               16934,
               16935,
               16936,
               16937,
               16938
            ],
            d: [
               'Reduces the cost of your Maul, Swipe, Claw, Rake and Mangle abilities by 1 Rage or Energy',
               'Reduces the cost of your Maul, Swipe, Claw, Rake and Mangle abilities by 2 Rage or Energy',
               'Reduces the cost of your Maul, Swipe, Claw, Rake and Mangle abilities by 3 Rage or Energy',
               'Reduces the cost of your Maul, Swipe, Claw, Rake and Mangle abilities by 4 Rage or Energy',
               'Reduces the cost of your Maul, Swipe, Claw, Rake and Mangle abilities by 5 Rage or Energy',
            ],
            x: 1,
            y: 0,
            iconname: 'ferocity',
            c: 0,
            aura: function (count) { return { ferocity: count } },
         },
         {
            i: 212,
            n: 'Feral Aggression',
            m: 5,
            s: [
               16858,
               16859,
               16860,
               16861,
               16862
            ],
            d: [
               'Increases the attack power reduction of your Demoralizing Roar by 8% and the damage caused by your Ferocious Bite by 3%',
               'Increases the attack power reduction of your Demoralizing Roar by 16% and the damage caused by your Ferocious Bite by 6%',
               'Increases the attack power reduction of your Demoralizing Roar by 24% and the damage caused by your Ferocious Bite by 9%',
               'Increases the attack power reduction of your Demoralizing Roar by 32% and the damage caused by your Ferocious Bite by 12%',
               'Increases the attack power reduction of your Demoralizing Roar by 40% and the damage caused by your Ferocious Bite by 15%',
            ],
            x: 2,
            y: 0,
            iconname: 'demoralizingroar',
            c: 0,
            aura: function (count) { return { feralaggressionmod: count * 0.08 } },
         },
         {
            i: 221,
            n: 'Feral Instinct',
            m: 3,
            s: [
               16947,
               16948,
               16949
            ],
            d: [
               'Increases threat caused in Bear and Dire Bear Form by 5% and reduces the chance enemies have to detect you while Prowling..',
               'Increases threat caused in Bear and Dire Bear Form by 10% and reduces the chance enemies have to detect you while Prowling..',
               'Increases threat caused in Bear and Dire Bear Form by 15% and reduces the chance enemies have to detect you while Prowling..'
            ],
            x: 0,
            y: 1,
            iconname: 'ability_ambush',
            c: 0,
            aura: function (count) { return { feralinstinctmod: count * 0.05 } },
         },
         {
            i: 231,
            n: 'Thick Hide',
            m: 3,
            s: [
               16929,
               16930,
               16931
            ],
            d: [
               'Increases your armor contribution from items by 4%.',
               'Increases your armor contribution from items by 7%.'
            ],
            x: 2,
            y: 1,
            c: 0,
            iconname: 'thickhide',
            aura: function (count) { return { thickhidemod: 1 + Math.ceil(count * 3.3)*0.01 } },
         },
         {
            i: 311,
            n: 'Feral Swiftness',
            m: 2,
            s: [
               17002,
               24866
            ],
            d: [
               'Increases your movement speed by 15% while outdoors in Cat Form and increases your chance to dodge while in Cat Form, Bear Form and Dire Bear Form by 2%',
               'Increases your movement speed by 30% while outdoors in Cat Form and increases your chance to dodge while in Cat Form, Bear Form and Dire Bear Form by 4%',
            ],
            x: 0,
            y: 2,
            c: 0,
            iconname: 'spell_nature_spiritwolf',
            aura: function (count) { return { feralswiftnessmod: 2 * count} },
         },
         {
            i: 233,
            n: 'Sharpened Claws',
            m: 3,
            s: [
               16942,
               16943,
               16944
            ],
            d: [
               'Increases your critical strike chance while in Bear, Dire Bear or Cat Form by 2%.',
               'Increases your critical strike chance while in Bear, Dire Bear or Cat Form by 4%.',
               'Increases your critical strike chance while in Bear, Dire Bear or Cat Form by 6%.'
            ],
            x: 2,
            y: 2,
            c: 0,
            iconname: 'inv_misc_monsterclaw',
            aura: function (count) { return { sharpenedclawsmod: count * 2 } },
         },
         {
            i: 241,
            n: 'Shredding Attacks',
            m: 2,
            s: [
               16967,
               16968
            ],
            d: [
               'Reduces the energy cost of your Shred ability by 9 and the rage cost of your Lacerate ability by 1',
               'Reduces the energy cost of your Shred ability by 18 and the rage cost of your Lacerate ability by 2',
            ],
            x: 0,
            y: 3,
            c: 0,
            iconname: 'spell_shadow_vampiricaura',
            aura: function (count) { return { shreddingattacks: count} },
         },
         {
            i: 242,
            n: 'Predatory Strikes',
            m: 3,
            s: [
               16972,
               16974,
               16975
            ],
            d: [
               'Increases your melee attack power in Cat, Bear, Dire Bear and Moonkin Forms by 50% of your level.',
               'Increases your melee attack power in Cat, Bear, Dire Bear and Moonkin Forms by 100% of your level.',
               'Increases your melee attack power in Cat, Bear, Dire Bear and Moonkin Forms by 150% of your level.'
            ],
            x: 1,
            y: 3,
            c: 0,
            iconname: 'ability_hunter_pet_cat',
            aura: function (count) { return { predatorystrikes: count } },
         },
         {
            i: 243,
            n: 'Primal Fury',
            m: 2,
            s: [
               37116,
               37117
            ],
            d: [
               'Gives you a 50% chance to gain an additional 5 Rage anytime you get a \
               critical strike while in Bear and Dire Bear Form and your critical strikes \
               from Cat Form abilities that add combo points  have a 100% chance to add an additional combo point.',
               'Gives you a 100% chance to gain an additional 5 Rage anytime you get a \
               critical strike while in Bear and Dire Bear Form and your critical strikes \
               from Cat Form abilities that add combo points  have a 100% chance to add an additional combo point.'
            ],
            x: 2,
            y: 3,
            c: 0,
            iconname: 'ability_racial_cannibalize',
            aura: function (count) { return { primalfury: count } },
         },
         {
            i: 251,
            n: 'Savage Fury',
            m: 2,
            s: [
               16997,
               16998
            ],
            d: [
               'Increases the damage caused by your Claw, Rake, and Mangle (Cat) abilities by 10%.',
               'Increases the damage caused by your Claw, Rake, and Mangle (Cat) abilities by 20%.'
            ],
            x: 0,
            y: 4,
            c: 0,
            iconname: 'ability_druid_ravage',
            aura: function (count) { return { savagefurymod: 1.0 + 0.1*count } },
         },
         {
            i: 261,
            n: 'Heart of the Wild',
            m: 5,
            s: [
               17003,
               17004,
               17005,
               17006,
               24894
            ],
            d: [
               'Increases your Intellect by 4%.  In addition, while in Bear or Dire Bear Form your Stamina is increased by 4% and while in Cat Form your attack power is increased by 2%',
               'Increases your Intellect by 8%.  In addition, while in Bear or Dire Bear Form your Stamina is increased by 8% and while in Cat Form your attack power is increased by 4%',
               'Increases your Intellect by 12%.  In addition, while in Bear or Dire Bear Form your Stamina is increased by 12% and while in Cat Form your attack power is increased by 6%',
               'Increases your Intellect by 16%.  In addition, while in Bear or Dire Bear Form your Stamina is increased by 16% and while in Cat Form your attack power is increased by 8%',
               'Increases your Intellect by 20%.  In addition, while in Bear or Dire Bear Form your Stamina is increased by 20% and while in Cat Form your attack power is increased by 10%'
            ],
            x: 1,
            y: 5,
            c: 0,
            iconname: 'spell_holy_blessingofagility',
            aura: function (count) { return { heartofthewild: count } },
         },
         {
            i: 262,
            n: 'Survival of the Fittest',
            m: 3,
            s: [
               33853,
               33855,
               33856
            ],
            d: [
               'Increases all attributes by 1% and reduces the chance you\'ll be critically hit by melee attacks by 1%.',
               'Increases all attributes by 2% and reduces the chance you\'ll be critically hit by melee attacks by 2%.',
               'Increases all attributes by 3% and reduces the chance you\'ll be critically hit by melee attacks by 3%.',
            ],
            x: 2,
            y: 5,
            c: 0,
            iconname: 'ability_druid_enrage',
            aura: function (count) { return { survivalofthefittest: count } },
         },
         {
            i: 272,
            n: 'Leader of the Pack',
            m: 1,
            s: [
               24932
            ],
            d: [
               'Increases ranged and melee critical chance by 5%.'
            ],
            x: 1,
            y: 6,
            c: 0,
            iconname: 'spell_nature_unyeildingstamina',
            aura: function (count) { return { abilitiescrit: count * 5 } },
         },
         {
            i: 281,
            n: 'Predatory Instincts',
            m: 5,
            s: [
               33859,
               33866,
               33867,
               33868,
               33869
            ],
            d: [
               'While in Cat Form, Bear Form, or Dire Bear Form, increases your damage from melee critical strikes by 2% and your chance to avoid area effect attacks by 3%.',
               'While in Cat Form, Bear Form, or Dire Bear Form, increases your damage from melee critical strikes by 4% and your chance to avoid area effect attacks by 6%.',
               'While in Cat Form, Bear Form, or Dire Bear Form, increases your damage from melee critical strikes by 6% and your chance to avoid area effect attacks by 9%.',
               'While in Cat Form, Bear Form, or Dire Bear Form, increases your damage from melee critical strikes by 8% and your chance to avoid area effect attacks by 12%.',
               'While in Cat Form, Bear Form, or Dire Bear Form, increases your damage from melee critical strikes by 10% and your chance to avoid area effect attacks by 15%.'
            ],
            x: 2,
            y: 7,
            c: 0,
            iconname: 'ability_druid_predatoryinstincts',
            aura: function (count) { return { predatoryinstincts: count } },
         },
         {
            i: 291,
            n: 'Mangle',
            m: 1,
            s: [
               33917
            ],
            d: [
               'Mangle the target, inflicting damage and causing the target to take additional damage from bleed effects for 12 sec.  \
                This ability can be used in Cat Form or Dire Bear Form.'
            ],
            x: 1,
            y: 8,
            c: 0,
            iconname: 'ability_druid_mangle2',
            aura: function (count) { return { mangle: count } },
         }
      ]
   },
   {
      n: 'Restoration',
      t: [
         {
            i: 321,
            n: 'Naturalist',
            m: 5,
            s: [
               17069,
               12870,
               12871,
               17072,
               17073
            ],
            d: [
               'Reduces the cast time of your Healing Touch spell by 0.1 sec and increases the damage you deal with physical attacks in all forms by 2%.',
               'Reduces the cast time of your Healing Touch spell by 0.2 sec and increases the damage you deal with physical attacks in all forms by 4%.',
               'Reduces the cast time of your Healing Touch spell by 0.3 sec and increases the damage you deal with physical attacks in all forms by 6%.',
               'Reduces the cast time of your Healing Touch spell by 0.4 sec and increases the damage you deal with physical attacks in all forms by 8%.',
               'Reduces the cast time of your Healing Touch spell by 0.5 sec and increases the damage you deal with physical attacks in all forms by 10%.'
            ],
            x: 0,
            y: 1,
            c: 0,
            iconname: 'spell_nature_healingtouch',
            aura: function (count) { return { naturalistmod: .02*count } },
         },
         {
            i: 331,
            n: 'Intensity',
            m: 3,
            s: [
               17106,
               17107,
               17108,
            ],
            d: [
               'Allows 10% of your Mana regeneration to continue while casting and causes your Enrage ability to instantly generate 4 rage..',
               'Allows 20% of your Mana regeneration to continue while casting and causes your Enrage ability to instantly generate 7 rage..',
               'Allows 30% of your Mana regeneration to continue while casting and causes your Enrage ability to instantly generate 10 rage..'
            ],
            x: 0,
            y: 2,
            c: 0,
            iconname: 'spell_frost_windwalkon',
            aura: function (count) { return { intensity: count } }
         },
         {
            i: 333,
            n: 'Omen of Clarity',
            m: 1,
            s: [
               16864
            ],
            d: [
               'Imbues the Druid with natural energy.  Each of the Druid\'s melee attacks has a chance of causing the caster to enter a Clearcasting state.  The Clearcasting state reduces the Mana, Rage or Energy cost of your next damage or healing spell or offensive ability by 100%.  Lasts 30 min'
            ],
            x: 2,
            y: 2,
            c: 0,
            iconname: 'spell_nature_crystalball',
            aura: function (count) { return { ooc: count } },
         },
      ]
   }
];
