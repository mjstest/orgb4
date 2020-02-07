console.log("injected");

var objectType = {
    PLAYER: 1,
    TILE: 2,
    FOOD: 3,
    SPAWN: 4,
    HIDE: 5,
    PLAYER_SPAWN: 6,
    EFFECT: 7,
    TELEPORT: 8,
    MISC: 9,
    GEM_SPAWN: 10,
    BOSS: 11
};
var skillEvent = {
    none: 0,
    onAttack: 1,
    onObtainAttack: 2,
    action: 3,
    onCollideTrigger: 4
};
var socketMsgType = {
    SYNC: 1,
    FLY: 2,
    BOOST: 3,
    SKILL: 4,
    REMOVEOBJECT: 5,
    PING: 6,
    PONG: 7,
    TEXTMSG: 8,
    TEXTEFFECT: 9,
    DOATTACK: 10,
    EFFECT: 11,
    EMOTE: 12
};
var questType = {
    KILL: 1,
    EVOLVE: 2,
    PLAYTIME: 3,
    REACH: 4,
    EAT: 5
};
game['skills'] = {
    beginnersLuck: {
        fullName: 'beginners luck',
        params: [50],
        icon: 'skill_beginnersLuck',
        active: false,
        event: skillEvent['onObtainAttack']
    },
    flowerLove: {
        fullName: 'flower love',
        icon: 'skill_flowerLove',
        active: false,
        event: skillEvent['onCollideTrigger']
    },
    infection: {
        fullName: 'infection',
        params: [20, 1],
        icon: 'skill_infection',
        active: false,
        event: skillEvent['onObtainAttack']
    },
    poisonWasp: {
        fullName: 'sting',
        params: [25, 2],
        icon: 'skill_poisonWasp',
        active: false,
        event: skillEvent['onAttack']
    },
    poisonSwampMonster: {
        fullName: 'poison',
        params: [100, 3],
        icon: 'skill_poisonSwampMonster',
        active: false,
        event: skillEvent['onAttack']
    },
    grabPrey: {
        fullName: 'grab prey',
        params: [4],
        cooldown: 20000,
        icon: 'skill_grabPrey',
        active: false,
        event: skillEvent['onAttack']
    },
    hunger: {
        fullName: 'hunger',
        cooldown: 20000,
        icon: 'skill_hunger',
        active: false,
        event: skillEvent['onAttack']
    },
    diving: {
        fullName: 'diving',
        icon: 'skill_diving',
        active: false,
        event: skillEvent['none']
    },
    swoop: {
        fullName: 'swoop',
        cooldown: 8000,
        icon: 'skill_swoop',
        active: true,
        event: skillEvent['action']
    },
    fruitEater: {
        fullName: 'fruit eater',
        params: [25],
        icon: 'skill_fruitEater',
        active: false,
        event: skillEvent['onAttack']
    },
    frogHunter: {
        fullName: 'frog hunter',
        params: [35],
        cooldown: 2000,
        icon: 'skill_frogHunter',
        active: false,
        event: skillEvent['none']
    },
    echolocation: {
        fullName: 'echolocation',
        icon: 'skill_echolocation',
        active: false,
        event: skillEvent['none']
    },
    dig: {
        fullName: 'dig',
        params: [40],
        cooldown: 10000,
        icon: 'skill_dig',
        active: false,
        event: skillEvent['onCollideTrigger']
    },
    excellentHunter: {
        fullName: 'excellent hunter',
        params: [10, 50],
        icon: 'skill_excellentHunter',
        active: false,
        event: skillEvent['onAttack']
    },
    speedUp: {
        fullName: 'speed up',
        cooldown: 7000,
        icon: 'skill_speedUp',
        active: true,
        event: skillEvent['action']
    },
    bloodthirsty: {
        fullName: 'bloodthirsty',
        cooldown: 5000,
        icon: 'skill_bloodthirsty',
        active: false,
        event: skillEvent['onAttack']
    },
    rage: {
        fullName: 'rage',
        params: [25],
        icon: 'skill_rage',
        active: false,
        event: skillEvent['onAttack']
    },
    scytheAttack1: {
        fullName: 'scythe attack',
        params: [35],
        cooldown: 500,
        icon: 'skill_scytheAttack',
        active: true,
        event: skillEvent['action']
    },
    scytheAttack2: {
        fullName: 'scythe attack',
        params: [30],
        cooldown: 500,
        icon: 'skill_scytheAttack',
        active: true,
        event: skillEvent['action']
    },
    scytheAttack3: {
        fullName: 'scythe attack',
        params: [25],
        cooldown: 500,
        icon: 'skill_scytheAttack',
        active: true,
        event: skillEvent['action']
    },
    thickSkin: {
        fullName: 'thick skin',
        cooldown: 25000,
        icon: 'skill_thickSkin',
        active: false,
        event: skillEvent['onObtainAttack']
    },
    stoneSkin: {
        fullName: 'stone skin',
        params: [75],
        icon: 'skill_stoneSkin',
        active: false,
        event: skillEvent['onObtainAttack']
    },
    toTheMoon: {
        fullName: 'to the moon',
        icon: 'skill_toTheMoon',
        active: false,
        event: skillEvent['none']
    },
    immortality: {
        fullName: 'immortality',
        icon: 'skill_immortality',
        active: false,
        event: skillEvent['none']
    },
    hotBath: {
        fullName: 'hot bath',
        icon: 'skill_hotBath',
        active: false,
        event: skillEvent['none']
    },
    fear: {
        fullName: 'fear',
        params: [4],
        cooldown: 20000,
        icon: 'skill_fear',
        active: false,
        event: skillEvent['onAttack']
    },
    burnInHell: {
        fullName: 'burn in hell',
        icon: 'skill_burnInHell',
        active: false,
        event: skillEvent['onAttack']
    },
    fireball: {
        fullName: 'fireball',
        params: [25, 3],
        cooldown: 8000,
        icon: 'skill_fireball',
        active: true,
        event: skillEvent['action']
    },
    flame: {
        fullName: 'flame',
        cooldown: 8000,
        icon: 'skill_flame',
        active: true,
        event: skillEvent['action']
    }
};
game['objectsDef'] = {
    skull: {
        name: 'skull',
        type: objectType['EFFECT'],
        width: 63,
        height: 46,
        gravityOn: false,
        isCollider: false,
        colliderRectangleOffset: {
            left: 0.08,
            right: 0.08,
            top: 0.3,
            bottom: 0.03
        },
        animations: {
            flying_right: {
                sprites: ['skull_1_right']
            },
            flying_left: {
                sprites: ['skull_1_left']
            },
            flapping_right: {
                sprites: ['skull_1_right', 'skull_2_right', 'skull_3_right', 'skull_2_right'],
                animationFrameTime: 80
            },
            flapping_left: {
                sprites: ['skull_1_left', 'skull_2_left', 'skull_3_left', 'skull_2_left'],
                animationFrameTime: 80
            }
        },
        animation: 'flying_right'
    },
    explosion: {
        name: 'explosion',
        type: objectType['EFFECT'],
        width: 142,
        height: 148,
        gravityOn: false,
        isCollider: false,
        animations: {
            right: {
                sprites: ['explosion_1_right', 'explosion_2_right', 'explosion_3_right', 'explosion_4_right', 'explosion_5_right', 'explosion_6_right', 'explosion_7_right'],
                animationFrameTime: 80
            },
            left: {
                sprites: ['explosion_1_left', 'explosion_2_left', 'explosion_3_left', 'explosion_4_left', 'explosion_5_left', 'explosion_6_left', 'explosion_7_left'],
                animationFrameTime: 80
            }
        },
        animation: 'right'
    },
    explosion2: {
        name: 'explosion2',
        type: objectType['EFFECT'],
        width: 387,
        height: 372,
        gravityOn: false,
        isCollider: false,
        animations: {
            normal: {
                sprites: ['explosion2_1', 'explosion2_2', 'explosion2_3', 'explosion2_4', 'explosion2_5', 'explosion2_6', 'explosion2_7', 'explosion2_8'],
                animationFrameTime: 80
            }
        },
        animation: 'normal'
    },
    eagle: {
        name: 'eagle',
        type: objectType['PLAYER'],
        width: 100,
        height: 64,
        colliderRectangleOffset: {
            left: 0.07,
            right: 0.07,
            top: 0.22,
            bottom: 0
        },
        animations: {
            flying_right: {
                sprites: ['eagle_1_right']
            },
            flying_left: {
                sprites: ['eagle_1_left']
            },
            flapping_right: {
                sprites: ['eagle_1_right', 'eagle_2_right', 'eagle_3_right', 'eagle_4_right', 'eagle_3_right', 'eagle_2_right'],
                animationFrameTime: 80
            },
            flapping_left: {
                sprites: ['eagle_1_left', 'eagle_2_left', 'eagle_3_left', 'eagle_4_left', 'eagle_3_left', 'eagle_2_left'],
                animationFrameTime: 80
            }
        },
        animation: 'flying_right',
        skill: game['skills']['speedUp']
    },
    falcon: {
        name: 'falcon',
        type: objectType['PLAYER'],
        width: 80,
        height: 52,
        colliderRectangleOffset: {
            left: 0.07,
            right: 0.07,
            top: 0.22,
            bottom: 0
        },
        animations: {
            flying_right: {
                sprites: ['falcon_1_right']
            },
            flying_left: {
                sprites: ['falcon_1_left']
            },
            flapping_right: {
                sprites: ['falcon_1_right', 'falcon_2_right', 'falcon_3_right', 'falcon_4_right', 'falcon_3_right', 'falcon_2_right'],
                animationFrameTime: 80
            },
            flapping_left: {
                sprites: ['falcon_1_left', 'falcon_2_left', 'falcon_3_left', 'falcon_4_left', 'falcon_3_left', 'falcon_2_left'],
                animationFrameTime: 80
            }
        },
        animation: 'flying_right',
        skill: game['skills']['speedUp']
    },
    bat: {
        name: 'bat',
        type: objectType['PLAYER'],
        width: 100,
        height: 64,
        colliderRectangleOffset: {
            left: 0.07,
            right: 0.07,
            top: 0.22,
            bottom: 0.15
        },
        animations: {
            flying_right: {
                sprites: ['bat_1_right']
            },
            flying_left: {
                sprites: ['bat_1_left']
            },
            flapping_right: {
                sprites: ['bat_1_right', 'bat_2_right', 'bat_3_right', 'bat_2_right'],
                animationFrameTime: 80
            },
            flapping_left: {
                sprites: ['bat_1_left', 'bat_2_left', 'bat_3_left', 'bat_2_left'],
                animationFrameTime: 80
            }
        },
        animation: 'flying_right',
        skill: game['skills']['echolocation']
    },
    madBat: {
        name: 'madBat',
        fullName: 'Mad Bat',
        type: objectType['PLAYER'],
        width: 100,
        height: 100,
        colliderRectangleOffset: {
            left: 0.09,
            right: 0.09,
            top: 0.22,
            bottom: 0.35
        },
        animations: {
            flying_right: {
                sprites: ['madBat_2_right']
            },
            flying_left: {
                sprites: ['madBat_2_left']
            },
            flapping_right: {
                sprites: ['madBat_1_right', 'madBat_2_right', 'madBat_3_right', 'madBat_4_right', 'madBat_5_right', 'madBat_6_right', 'madBat_5_right', 'madBat_4_right', 'madBat_3_right', 'madBat_2_right'],
                animationFrameTime: 80
            },
            flapping_left: {
                sprites: ['madBat_1_left', 'madBat_2_left', 'madBat_3_left', 'madBat_4_left', 'madBat_5_left', 'madBat_6_left', 'madBat_5_left', 'madBat_4_left', 'madBat_3_left', 'madBat_2_left'],
                animationFrameTime: 80
            }
        },
        animation: 'flying_right',
        skill: game['skills']['rage']
    },
    fly: {
        name: 'fly',
        type: objectType['PLAYER'],
        width: 45,
        height: 35,
        colliderRectangleOffset: {
            left: 0.08,
            right: 0.08,
            top: 0.3,
            bottom: 0.03
        },
        animations: {
            flying_right: {
                sprites: ['fly_1_right']
            },
            flying_left: {
                sprites: ['fly_1_left']
            },
            flapping_right: {
                sprites: ['fly_1_right', 'fly_2_right', 'fly_3_right', 'fly_4_right'],
                animationFrameTime: 80
            },
            flapping_left: {
                sprites: ['fly_1_left', 'fly_2_left', 'fly_3_left', 'fly_4_left'],
                animationFrameTime: 80
            }
        },
        animation: 'flying_right',
        skill: game['skills']['beginnersLuck']
    },
    pumpkinCharacter: {
        name: 'pumpkinCharacter',
        fullName: 'Pumpkin',
        type: objectType['PLAYER'],
        width: 123,
        height: 69,
        moveable: true,
        colliderRectangleOffset: {
            left: 0.25,
            right: 0.25,
            top: 0.25,
            bottom: 0.01
        },
        animations: {
            flying_right: {
                sprites: ['pumpkin_2_right']
            },
            flying_left: {
                sprites: ['pumpkin_2_left']
            },
            flapping_right: {
                sprites: ['pumpkin_1_right', 'pumpkin_2_right', 'pumpkin_3_right', 'pumpkin_4_right', 'pumpkin_3_right', 'pumpkin_2_right'],
                animationFrameTime: 80
            },
            flapping_left: {
                sprites: ['pumpkin_1_left', 'pumpkin_2_left', 'pumpkin_3_left', 'pumpkin_4_left', 'pumpkin_3_left', 'pumpkin_2_left'],
                animationFrameTime: 80
            }
        },
        animation: 'flying_right',
        skill: game['skills']['speedUp']
    },
    alienBug: {
        name: 'alienBug',
        fullName: 'Cosmic Insect',
        type: objectType['PLAYER'],
        width: 60,
        height: 60,
        colliderRectangleOffset: {
            left: 0.25,
            right: 0.25,
            top: 0.35,
            bottom: 0.09
        },
        animations: {
            flying_right: {
                sprites: ['alienBug_1_right']
            },
            flying_left: {
                sprites: ['alienBug_1_left']
            },
            flapping_right: {
                sprites: ['alienBug_1_right', 'alienBug_2_right', 'alienBug_3_right', 'alienBug_4_right', 'alienBug_5_right', 'alienBug_6_right'],
                animationFrameTime: 80
            },
            flapping_left: {
                sprites: ['alienBug_1_left', 'alienBug_2_left', 'alienBug_3_left', 'alienBug_4_left', 'alienBug_5_left', 'alienBug_6_left'],
                animationFrameTime: 80
            }
        },
        animation: 'flying_right',
        spaceResistance: true,
        skill: game['skills']['toTheMoon']
    },
    ghost: {
        name: 'ghost',
        type: objectType['PLAYER'],
        width: 60,
        height: 60,
        moveable: true,
        colliderRectangleOffset: {
            left: 0.16,
            right: 0.16,
            top: 0.05,
            bottom: 0.1
        },
        animations: {
            flying_right: {
                sprites: ['ghost_1_right']
            },
            flying_left: {
                sprites: ['ghost_1_left']
            },
            flapping_right: {
                sprites: ['ghost_1_right', 'ghost_2_right', 'ghost_3_right', 'ghost_4_right', 'ghost_5_right', 'ghost_6_right', 'ghost_5_right', 'ghost_4_right', 'ghost_3_right', 'ghost_2_right'],
                animationFrameTime: 80
            },
            flapping_left: {
                sprites: ['ghost_1_left', 'ghost_2_left', 'ghost_3_left', 'ghost_4_left', 'ghost_5_left', 'ghost_6_left', 'ghost_5_left', 'ghost_4_left', 'ghost_3_left', 'ghost_2_left'],
                animationFrameTime: 80
            }
        },
        animation: 'flying_right',
        skill: game['skills']['immortality'],
        immortal: true
    },
    ghostlyReaper: {
        name: 'ghostlyReaper',
        fullName: 'Ghostly Reaper',
        type: objectType['PLAYER'],
        width: 150,
        height: 165,
        moveable: true,
        colliderRectangleOffset: {
            left: 0.29,
            right: 0.29,
            top: 0.4,
            bottom: 0.1
        },
        animations: {
            flying_right: {
                sprites: ['ghostlyReaper_1_right']
            },
            flying_left: {
                sprites: ['ghostlyReaper_1_left']
            },
            flapping_right: {
                sprites: ['ghostlyReaper_1_right', 'ghostlyReaper_2_right', 'ghostlyReaper_3_right', 'ghostlyReaper_4_right', 'ghostlyReaper_5_right', 'ghostlyReaper_6_right', 'ghostlyReaper_7_right', 'ghostlyReaper_8_right', 'ghostlyReaper_9_right', 'ghostlyReaper_10_right', 'ghostlyReaper_11_right', 'ghostlyReaper_12_right', 'ghostlyReaper_13_right', 'ghostlyReaper_14_right', 'ghostlyReaper_15_right', 'ghostlyReaper_16_right', 'ghostlyReaper_17_right'],
                animationFrameTime: 80
            },
            flapping_left: {
                sprites: ['ghostlyReaper_1_left', 'ghostlyReaper_2_left', 'ghostlyReaper_3_left', 'ghostlyReaper_4_left', 'ghostlyReaper_5_left', 'ghostlyReaper_6_left', 'ghostlyReaper_7_left', 'ghostlyReaper_8_left', 'ghostlyReaper_9_left', 'ghostlyReaper_10_left', 'ghostlyReaper_11_left', 'ghostlyReaper_12_left', 'ghostlyReaper_13_left', 'ghostlyReaper_14_left', 'ghostlyReaper_15_left', 'ghostlyReaper_16_left', 'ghostlyReaper_17_left'],
                animationFrameTime: 80
            },
            attacking_right: {
                sprites: ['ghostlyReaper_1_attack_right', 'ghostlyReaper_2_attack_right', 'ghostlyReaper_3_attack_right', 'ghostlyReaper_4_attack_right', 'ghostlyReaper_5_attack_right', 'ghostlyReaper_6_attack_right', 'ghostlyReaper_7_attack_right', 'ghostlyReaper_8_attack_right', 'ghostlyReaper_9_attack_right', 'ghostlyReaper_10_attack_right', 'ghostlyReaper_11_attack_right', 'ghostlyReaper_12_attack_right', 'ghostlyReaper_13_attack_right', 'ghostlyReaper_14_attack_right', 'ghostlyReaper_15_attack_right', 'ghostlyReaper_16_attack_right'],
                animationFrameTime: 20
            },
            attacking_left: {
                sprites: ['ghostlyReaper_1_attack_left', 'ghostlyReaper_2_attack_left', 'ghostlyReaper_3_attack_left', 'ghostlyReaper_4_attack_left', 'ghostlyReaper_5_attack_left', 'ghostlyReaper_6_attack_left', 'ghostlyReaper_7_attack_left', 'ghostlyReaper_8_attack_left', 'ghostlyReaper_9_attack_left', 'ghostlyReaper_10_attack_left', 'ghostlyReaper_11_attack_left', 'ghostlyReaper_12_attack_left', 'ghostlyReaper_13_attack_left', 'ghostlyReaper_14_attack_left', 'ghostlyReaper_15_attack_left', 'ghostlyReaper_16_attack_left'],
                animationFrameTime: 20
            }
        },
        animation: 'flying_right',
        eatsSouls: true,
        skill: game['skills']['scytheAttack3']
    },
    butterfly: {
        name: 'butterfly',
        type: objectType['PLAYER'],
        width: 93,
        height: 134,
        colliderRectangleOffset: {
            left: 0.25,
            right: 0.25,
            top: 0.4,
            bottom: 0.45
        },
        animations: {
            flying_right: {
                sprites: ['butterfly_3_right']
            },
            flying_left: {
                sprites: ['butterfly_3_left']
            },
            flapping_right: {
                sprites: ['butterfly_1_right', 'butterfly_2_right', 'butterfly_3_right', 'butterfly_4_right', 'butterfly_5_right', 'butterfly_6_right', 'butterfly_7_right', 'butterfly_8_right', 'butterfly_9_right', 'butterfly_10_right', 'butterfly_11_right', 'butterfly_12_right'],
                animationFrameTime: 30
            },
            flapping_left: {
                sprites: ['butterfly_1_left', 'butterfly_2_left', 'butterfly_3_left', 'butterfly_4_left', 'butterfly_5_left', 'butterfly_6_left', 'butterfly_7_left', 'butterfly_8_left', 'butterfly_9_left', 'butterfly_10_left', 'butterfly_11_left', 'butterfly_12_left'],
                animationFrameTime: 30
            }
        },
        animation: 'flying_right',
        skill: game['skills']['flowerLove']
    },
    pelican: {
        name: 'pelican',
        type: objectType['PLAYER'],
        width: 163,
        height: 130,
        colliderRectangleOffset: {
            left: 0.16,
            right: 0.16,
            top: 0.3,
            bottom: 0.48
        },
        animations: {
            flying_right: {
                sprites: ['pelican_3_right']
            },
            flying_left: {
                sprites: ['pelican_3_left']
            },
            flapping_right: {
                sprites: ['pelican_1_right', 'pelican_2_right', 'pelican_3_right', 'pelican_4_right', 'pelican_5_right', 'pelican_6_right', 'pelican_7_right', 'pelican_8_right', 'pelican_9_right', 'pelican_10_right', 'pelican_11_right', 'pelican_12_right'],
                animationFrameTime: 40
            },
            flapping_left: {
                sprites: ['pelican_1_left', 'pelican_2_left', 'pelican_3_left', 'pelican_4_left', 'pelican_5_left', 'pelican_6_left', 'pelican_7_left', 'pelican_8_left', 'pelican_9_left', 'pelican_10_left', 'pelican_11_left', 'pelican_12_left'],
                animationFrameTime: 40
            }
        },
        animation: 'flying_right',
        skill: game['skills']['diving']
    },
    pterodactyl: {
        name: 'pterodactyl',
        type: objectType['PLAYER'],
        width: 293,
        height: 329,
        colliderRectangleOffset: {
            left: 0.13,
            right: 0.13,
            top: 0.42,
            bottom: 0.3
        },
        animations: {
            flying_right: {
                sprites: ['pterodactyl_3_right']
            },
            flying_left: {
                sprites: ['pterodactyl_3_left']
            },
            flapping_right: {
                sprites: ['pterodactyl_1_right', 'pterodactyl_2_right', 'pterodactyl_3_right', 'pterodactyl_4_right', 'pterodactyl_5_right', 'pterodactyl_6_right', 'pterodactyl_5_right', 'pterodactyl_4_right', 'pterodactyl_3_right', 'pterodactyl_2_right'],
                animationFrameTime: 40
            },
            flapping_left: {
                sprites: ['pterodactyl_1_left', 'pterodactyl_2_left', 'pterodactyl_3_left', 'pterodactyl_4_left', 'pterodactyl_5_left', 'pterodactyl_6_left', 'pterodactyl_5_left', 'pterodactyl_4_left', 'pterodactyl_3_left', 'pterodactyl_2_left'],
                animationFrameTime: 40
            }
        },
        animation: 'flying_right',
        skill: game['skills']['thickSkin']
    },
    pterodactylChild: {
        name: 'pterodactylChild',
        fullName: 'Pterodactyl Child',
        type: objectType['PLAYER'],
        width: 146,
        height: 164,
        colliderRectangleOffset: {
            left: 0.13,
            right: 0.13,
            top: 0.42,
            bottom: 0.3
        },
        animations: {
            flying_right: {
                sprites: ['pterodactylChild_3_right']
            },
            flying_left: {
                sprites: ['pterodactylChild_3_left']
            },
            flapping_right: {
                sprites: ['pterodactylChild_1_right', 'pterodactylChild_2_right', 'pterodactylChild_3_right', 'pterodactylChild_4_right', 'pterodactylChild_5_right', 'pterodactylChild_6_right', 'pterodactylChild_5_right', 'pterodactylChild_4_right', 'pterodactylChild_3_right', 'pterodactylChild_2_right'],
                animationFrameTime: 40
            },
            flapping_left: {
                sprites: ['pterodactylChild_1_left', 'pterodactylChild_2_left', 'pterodactylChild_3_left', 'pterodactylChild_4_left', 'pterodactylChild_5_left', 'pterodactylChild_6_left', 'pterodactylChild_5_left', 'pterodactylChild_4_left', 'pterodactylChild_3_left', 'pterodactylChild_2_left'],
                animationFrameTime: 40
            }
        },
        animation: 'flying_right',
        skill: game['skills']['thickSkin']
    },
    dragon: {
        name: 'dragon',
        type: objectType['PLAYER'],
        width: 113,
        height: 106,
        colliderRectangleOffset: {
            left: 0.1,
            right: 0.1,
            top: 0.33,
            bottom: 0.18
        },
        animations: {
            flying_right: {
                sprites: ['dragon_3_right']
            },
            flying_left: {
                sprites: ['dragon_3_left']
            },
            flapping_right: {
                sprites: ['dragon_1_right', 'dragon_2_right', 'dragon_3_right', 'dragon_4_right', 'dragon_3_right', 'dragon_2_right'],
                animationFrameTime: 100
            },
            flapping_left: {
                sprites: ['dragon_1_left', 'dragon_2_left', 'dragon_3_left', 'dragon_4_left', 'dragon_3_left', 'dragon_2_left'],
                animationFrameTime: 100
            },
            attacking_right: {
                sprites: ['dragon_1_attack_right', 'dragon_2_attack_right', 'dragon_3_attack_right', 'dragon_4_attack_right'],
                animationFrameTime: 130
            },
            attacking_left: {
                sprites: ['dragon_1_attack_left', 'dragon_2_attack_left', 'dragon_3_attack_left', 'dragon_4_attack_left'],
                animationFrameTime: 130
            }
        },
        animation: 'flying_right',
        skill: game['skills']['fireball']
    },
    phoenix: {
        name: 'phoenix',
        type: objectType['PLAYER'],
        width: 133,
        height: 116,
        colliderRectangleOffset: {
            left: 0.1,
            right: 0.1,
            top: 0.22,
            bottom: 0.35
        },
        animations: {
            flying_right: {
                sprites: ['phoenix_idle_1_right', 'phoenix_idle_2_right', 'phoenix_idle_3_right', 'phoenix_idle_4_right'],
                animationFrameTime: 100
            },
            flying_left: {
                sprites: ['phoenix_idle_1_left', 'phoenix_idle_2_left', 'phoenix_idle_3_left', 'phoenix_idle_4_left'],
                animationFrameTime: 100
            },
            flapping_right: {
                sprites: ['phoenix_1_right', 'phoenix_2_right', 'phoenix_3_right', 'phoenix_4_right', 'phoenix_5_right', 'phoenix_6_right', 'phoenix_7_right', 'phoenix_8_right'],
                animationFrameTime: 100
            },
            flapping_left: {
                sprites: ['phoenix_1_left', 'phoenix_2_left', 'phoenix_3_left', 'phoenix_4_left', 'phoenix_5_left', 'phoenix_6_left', 'phoenix_7_left', 'phoenix_8_left'],
                animationFrameTime: 100
            }
        },
        animation: 'flying_right',
        skill: game['skills']['flame'],
        lavaResistance: true
    },
    stoneEater: {
        name: 'stoneEater',
        fullName: 'Stone Eater',
        type: objectType['PLAYER'],
        width: 137,
        height: 155,
        colliderRectangleOffset: {
            left: 0.2,
            right: 0.2,
            top: 0.38,
            bottom: 0.23
        },
        animations: {
            flying_right: {
                sprites: ['stoneEater_3_right']
            },
            flying_left: {
                sprites: ['stoneEater_3_left']
            },
            flapping_right: {
                sprites: ['stoneEater_1_right', 'stoneEater_2_right', 'stoneEater_3_right', 'stoneEater_4_right', 'stoneEater_5_right', 'stoneEater_6_right'],
                animationFrameTime: 80
            },
            flapping_left: {
                sprites: ['stoneEater_1_left', 'stoneEater_2_left', 'stoneEater_3_left', 'stoneEater_4_left', 'stoneEater_5_left', 'stoneEater_6_left'],
                animationFrameTime: 80
            }
        },
        animation: 'flying_right',
        skill: game['skills']['stoneSkin']
    },
    demonicEggEater: {
        name: 'demonicEggEater',
        fullName: 'Demonic Egg Eater',
        type: objectType['PLAYER'],
        width: 137,
        height: 155,
        colliderRectangleOffset: {
            left: 0.2,
            right: 0.2,
            top: 0.38,
            bottom: 0.23
        },
        animations: {
            flying_right: {
                sprites: ['demonicEggEater_3_right']
            },
            flying_left: {
                sprites: ['demonicEggEater_3_left']
            },
            flapping_right: {
                sprites: ['demonicEggEater_1_right', 'demonicEggEater_2_right', 'demonicEggEater_3_right', 'demonicEggEater_4_right', 'demonicEggEater_5_right', 'demonicEggEater_6_right'],
                animationFrameTime: 80
            },
            flapping_left: {
                sprites: ['demonicEggEater_1_left', 'demonicEggEater_2_left', 'demonicEggEater_3_left', 'demonicEggEater_4_left', 'demonicEggEater_5_left', 'demonicEggEater_6_left'],
                animationFrameTime: 80
            }
        },
        animation: 'flying_right',
        skill: game['skills']['hotBath'],
        lavaResistance: true
    },
    demonicBat: {
        name: 'demonicBat',
        fullName: 'Demonic Bat',
        type: objectType['PLAYER'],
        width: 153,
        height: 130,
        colliderRectangleOffset: {
            left: 0.25,
            right: 0.25,
            top: 0.33,
            bottom: 0.26
        },
        animations: {
            flying_right: {
                sprites: ['demonicBat_3_right']
            },
            flying_left: {
                sprites: ['demonicBat_3_left']
            },
            flapping_right: {
                sprites: ['demonicBat_1_right', 'demonicBat_2_right', 'demonicBat_3_right', 'demonicBat_4_right', 'demonicBat_5_right', 'demonicBat_6_right'],
                animationFrameTime: 80
            },
            flapping_left: {
                sprites: ['demonicBat_1_left', 'demonicBat_2_left', 'demonicBat_3_left', 'demonicBat_4_left', 'demonicBat_5_left', 'demonicBat_6_left'],
                animationFrameTime: 80
            }
        },
        animation: 'flying_right',
        skill: game['skills']['fear'],
        lavaResistance: true
    },
    demonicImp: {
        name: 'demonicImp',
        fullName: 'Demonic Imp',
        type: objectType['PLAYER'],
        width: 129,
        height: 100,
        colliderRectangleOffset: {
            left: 0.26,
            right: 0.26,
            top: 0.37,
            bottom: 0.11
        },
        animations: {
            flying_right: {
                sprites: ['demonicImp_1_right']
            },
            flying_left: {
                sprites: ['demonicImp_1_left']
            },
            flapping_right: {
                sprites: ['demonicImp_1_right', 'demonicImp_2_right', 'demonicImp_3_right', 'demonicImp_4_right', 'demonicImp_5_right', 'demonicImp_6_right', 'demonicImp_7_right', 'demonicImp_8_right', 'demonicImp_9_right', 'demonicImp_10_right', 'demonicImp_11_right', 'demonicImp_12_right', 'demonicImp_13_right', 'demonicImp_14_right', 'demonicImp_15_right', 'demonicImp_16_right', 'demonicImp_17_right', 'demonicImp_18_right'],
                animationFrameTime: 40
            },
            flapping_left: {
                sprites: ['demonicImp_1_left', 'demonicImp_2_left', 'demonicImp_3_left', 'demonicImp_4_left', 'demonicImp_5_left', 'demonicImp_6_left', 'demonicImp_7_left', 'demonicImp_8_left', 'demonicImp_9_left', 'demonicImp_10_left', 'demonicImp_11_left', 'demonicImp_12_left', 'demonicImp_13_left', 'demonicImp_14_left', 'demonicImp_15_left', 'demonicImp_16_left', 'demonicImp_17_left', 'demonicImp_18_left'],
                animationFrameTime: 40
            }
        },
        animation: 'flying_right',
        skill: game['skills']['burnInHell'],
        lavaResistance: true
    },
    stork: {
        name: 'stork',
        type: objectType['PLAYER'],
        width: 154,
        height: 73,
        colliderRectangleOffset: {
            left: 0.11,
            right: 0.11,
            top: 0.3,
            bottom: 0.46
        },
        animations: {
            flying_right: {
                sprites: ['stork_3_right']
            },
            flying_left: {
                sprites: ['stork_3_left']
            },
            flapping_right: {
                sprites: ['stork_1_right', 'stork_2_right', 'stork_3_right', 'stork_4_right', 'stork_5_right', 'stork_6_right', 'stork_7_right', 'stork_8_right', 'stork_9_right', 'stork_8_right', 'stork_7_right', 'stork_6_right', 'stork_5_right', 'stork_4_right', 'stork_3_right', 'stork_2_right'],
                animationFrameTime: 30
            },
            flapping_left: {
                sprites: ['stork_1_left', 'stork_2_left', 'stork_3_left', 'stork_4_left', 'stork_5_left', 'stork_6_left', 'stork_7_left', 'stork_8_left', 'stork_9_left', 'stork_8_left', 'stork_7_left', 'stork_6_left', 'stork_5_left', 'stork_4_left', 'stork_3_left', 'stork_2_left'],
                animationFrameTime: 30
            }
        },
        animation: 'flying_right',
        skill: game['skills']['frogHunter']
    },
    vulture: {
        name: 'vulture',
        type: objectType['PLAYER'],
        width: 163,
        height: 130,
        colliderRectangleOffset: {
            left: 0.12,
            right: 0.12,
            top: 0.35,
            bottom: 0.33
        },
        animations: {
            flying_right: {
                sprites: ['vulture_3_right']
            },
            flying_left: {
                sprites: ['vulture_3_left']
            },
            flapping_right: {
                sprites: ['vulture_1_right', 'vulture_2_right', 'vulture_3_right', 'vulture_4_right', 'vulture_5_right', 'vulture_6_right', 'vulture_7_right', 'vulture_8_right', 'vulture_7_right', 'vulture_6_right', 'vulture_5_right', 'vulture_4_right', 'vulture_3_right', 'vulture_2_right'],
                animationFrameTime: 30
            },
            flapping_left: {
                sprites: ['vulture_1_left', 'vulture_2_left', 'vulture_3_left', 'vulture_4_left', 'vulture_4_left', 'vulture_5_left', 'vulture_7_left', 'vulture_8_left', 'vulture_7_left', 'vulture_6_left', 'vulture_5_left', 'vulture_4_left', 'vulture_3_left', 'vulture_2_left'],
                animationFrameTime: 30
            }
        },
        animation: 'flying_right',
        skill: game['skills']['bloodthirsty']
    },
    raven: {
        name: 'raven',
        type: objectType['PLAYER'],
        width: 162,
        height: 172,
        colliderRectangleOffset: {
            left: 0.12,
            right: 0.12,
            top: 0.5,
            bottom: 0.32
        },
        animations: {
            flying_right: {
                sprites: ['raven_3_right']
            },
            flying_left: {
                sprites: ['raven_3_left']
            },
            flapping_right: {
                sprites: ['raven_1_right', 'raven_2_right', 'raven_3_right', 'raven_4_right', 'raven_5_right', 'raven_6_right', 'raven_7_right', 'raven_6_right', 'raven_5_right', 'raven_4_right', 'raven_3_right', 'raven_2_right'],
                animationFrameTime: 30
            },
            flapping_left: {
                sprites: ['raven_1_left', 'raven_2_left', 'raven_3_left', 'raven_4_left', 'raven_5_left', 'raven_6_left', 'raven_7_left', 'raven_6_left', 'raven_5_left', 'raven_4_left', 'raven_3_left', 'raven_2_left'],
                animationFrameTime: 30
            }
        },
        animation: 'flying_right',
        skill: game['skills']['bloodthirsty']
    },
    alienBat: {
        name: 'alienBat',
        fullName: 'Cosmic Bat',
        type: objectType['PLAYER'],
        width: 273,
        height: 214,
        colliderRectangleOffset: {
            left: 0.3,
            right: 0.3,
            top: 0.45,
            bottom: 0.1
        },
        animations: {
            flying_right: {
                sprites: ['alienBat_1_idle_right', 'alienBat_2_idle_right'],
                animationFrameTime: 200
            },
            flying_left: {
                sprites: ['alienBat_1_idle_left', 'alienBat_2_idle_left'],
                animationFrameTime: 200
            },
            flapping_right: {
                sprites: ['alienBat_1_flying_right', 'alienBat_2_flying_right'],
                animationFrameTime: 200
            },
            flapping_left: {
                sprites: ['alienBat_1_flying_left', 'alienBat_2_flying_left'],
                animationFrameTime: 200
            }
        },
        animation: 'flying_right',
        spaceResistance: true,
        skill: game['skills']['toTheMoon']
    },
    overfedAlienBat: {
        name: 'overfedAlienBat',
        fullName: 'Overfed Cosmic Bat',
        type: objectType['PLAYER'],
        width: 273,
        height: 214,
        moveable: false,
        colliderRectangleOffset: {
            left: 0.3,
            right: 0.3,
            top: 0.45,
            bottom: 0.1
        },
        animations: {
            flying_right: {
                sprites: ['overfedAlienBat_1_right', 'overfedAlienBat_2_right', 'overfedAlienBat_3_right'],
                animationFrameTime: 180
            },
            flying_left: {
                sprites: ['overfedAlienBat_1_left', 'overfedAlienBat_2_left', 'overfedAlienBat_3_left'],
                animationFrameTime: 180
            },
            flapping_right: {
                sprites: ['overfedAlienBat_1_right', 'overfedAlienBat_2_right', 'overfedAlienBat_3_right'],
                animationFrameTime: 180
            },
            flapping_left: {
                sprites: ['overfedAlienBat_1_left', 'overfedAlienBat_2_left', 'overfedAlienBat_3_left'],
                animationFrameTime: 180
            }
        },
        animation: 'flying_right',
        spaceResistance: true,
        skill: game['skills']['toTheMoon']
    },
    alienBigEye: {
        name: 'alienBigEye',
        fullName: 'Cosmic Big Eye',
        type: objectType['PLAYER'],
        width: 185,
        height: 170,
        colliderRectangleOffset: {
            left: 0.25,
            right: 0.25,
            top: 0.25,
            bottom: 0.25
        },
        animations: {
            flying_right: {
                sprites: ['alienBigEye_12_right']
            },
            flying_left: {
                sprites: ['alienBigEye_12_left']
            },
            flapping_right: {
                sprites: ['alienBigEye_1_right', 'alienBigEye_2_right', 'alienBigEye_3_right', 'alienBigEye_4_right', 'alienBigEye_5_right', 'alienBigEye_6_right', 'alienBigEye_7_right', 'alienBigEye_8_right', 'alienBigEye_9_right', 'alienBigEye_10_right', 'alienBigEye_11_right', 'alienBigEye_12_right'],
                animationFrameTime: 60
            },
            flapping_left: {
                sprites: ['alienBigEye_1_left', 'alienBigEye_2_left', 'alienBigEye_3_left', 'alienBigEye_4_left', 'alienBigEye_5_left', 'alienBigEye_6_left', 'alienBigEye_7_left', 'alienBigEye_8_left', 'alienBigEye_9_left', 'alienBigEye_10_left', 'alienBigEye_11_left', 'alienBigEye_12_left'],
                animationFrameTime: 60
            }
        },
        animation: 'flying_right',
        spaceResistance: true
    },
    alienAngryEye: {
        name: 'alienAngryEye',
        fullName: 'Cosmic Angry Eye',
        type: objectType['PLAYER'],
        width: 234,
        height: 208,
        colliderRectangleOffset: {
            left: 0.23,
            right: 0.23,
            top: 0.32,
            bottom: 0.14
        },
        animations: {
            flying_right: {
                sprites: ['alienAngryEye_6_right']
            },
            flying_left: {
                sprites: ['alienAngryEye_6_left']
            },
            flapping_right: {
                sprites: ['alienAngryEye_1_right', 'alienAngryEye_2_right', 'alienAngryEye_3_right', 'alienAngryEye_4_right', 'alienAngryEye_5_right', 'alienAngryEye_6_right'],
                animationFrameTime: 60
            },
            flapping_left: {
                sprites: ['alienAngryEye_1_left', 'alienAngryEye_2_left', 'alienAngryEye_3_left', 'alienAngryEye_4_left', 'alienAngryEye_5_left', 'alienAngryEye_6_left'],
                animationFrameTime: 60
            }
        },
        animation: 'flying_right',
        spaceResistance: true,
        skill: game['skills']['toTheMoon']
    },
    owl: {
        name: 'owl',
        type: objectType['PLAYER'],
        width: 86,
        height: 93,
        colliderRectangleOffset: {
            left: 0.15,
            right: 0.15,
            top: 0.25,
            bottom: 0.3
        },
        animations: {
            flying_right: {
                sprites: ['owl_1_right']
            },
            flying_left: {
                sprites: ['owl_1_left']
            },
            flapping_right: {
                sprites: ['owl_1_right', 'owl_2_right', 'owl_3_right', 'owl_4_right', 'owl_5_right', 'owl_6_right', 'owl_7_right', 'owl_8_right', 'owl_9_right'],
                animationFrameTime: 60
            },
            flapping_left: {
                sprites: ['owl_1_left', 'owl_2_left', 'owl_3_left', 'owl_4_left', 'owl_5_left', 'owl_6_left', 'owl_7_left', 'owl_8_left', 'owl_9_left'],
                animationFrameTime: 60
            }
        },
        animation: 'flying_right',
        skill: game['skills']['excellentHunter']
    },
    snowyOwl: {
        name: 'snowyOwl',
        fullName: 'Snowy Owl',
        type: objectType['PLAYER'],
        width: 100,
        height: 108,
        colliderRectangleOffset: {
            left: 0.15,
            right: 0.15,
            top: 0.25,
            bottom: 0.3
        },
        animations: {
            flying_right: {
                sprites: ['snowyOwl_1_right']
            },
            flying_left: {
                sprites: ['snowyOwl_1_left']
            },
            flapping_right: {
                sprites: ['snowyOwl_1_right', 'snowyOwl_2_right', 'snowyOwl_3_right', 'snowyOwl_4_right', 'snowyOwl_5_right', 'snowyOwl_6_right', 'snowyOwl_7_right', 'snowyOwl_8_right', 'snowyOwl_9_right'],
                animationFrameTime: 60
            },
            flapping_left: {
                sprites: ['snowyOwl_1_left', 'snowyOwl_2_left', 'snowyOwl_3_left', 'snowyOwl_4_left', 'snowyOwl_5_left', 'snowyOwl_6_left', 'snowyOwl_7_left', 'snowyOwl_8_left', 'snowyOwl_9_left'],
                animationFrameTime: 60
            }
        },
        animation: 'flying_right',
        skill: game['skills']['excellentHunter']
    },
    grimReaper: {
        name: 'grimReaper',
        fullName: 'Grim Reaper',
        type: objectType['PLAYER'],
        width: 188,
        height: 156,
        colliderRectangleOffset: {
            left: 0.28,
            right: 0.28,
            top: 0.1,
            bottom: 0.27
        },
        animations: {
            flying_right: {
                sprites: ['grimReaper_1_idle_right', 'grimReaper_2_idle_right', 'grimReaper_3_idle_right', 'grimReaper_4_idle_right', 'grimReaper_5_idle_right', 'grimReaper_6_idle_right', 'grimReaper_5_idle_right', 'grimReaper_4_idle_right', 'grimReaper_3_idle_right', 'grimReaper_2_idle_right', 'grimReaper_1_idle_right'],
                animationFrameTime: 100
            },
            flying_left: {
                sprites: ['grimReaper_1_idle_left', 'grimReaper_2_idle_left', 'grimReaper_3_idle_left', 'grimReaper_4_idle_left', 'grimReaper_5_idle_left', 'grimReaper_6_idle_left', 'grimReaper_5_idle_left', 'grimReaper_4_idle_left', 'grimReaper_3_idle_left', 'grimReaper_2_idle_left', 'grimReaper_1_idle_left'],
                animationFrameTime: 100
            },
            flapping_right: {
                sprites: ['grimReaper_1_flying_right', 'grimReaper_2_flying_right', 'grimReaper_3_flying_right', 'grimReaper_4_flying_right', 'grimReaper_5_flying_right', 'grimReaper_4_flying_right', 'grimReaper_3_flying_right', 'grimReaper_2_flying_right'],
                animationFrameTime: 100
            },
            flapping_left: {
                sprites: ['grimReaper_1_flying_left', 'grimReaper_2_flying_left', 'grimReaper_3_flying_left', 'grimReaper_4_flying_left', 'grimReaper_5_flying_left', 'grimReaper_4_flying_left', 'grimReaper_3_flying_left', 'grimReaper_2_flying_left'],
                animationFrameTime: 100
            },
            attacking_right: {
                sprites: ['grimReaper_1_attack_right', 'grimReaper_2_attack_right', 'grimReaper_3_attack_right', 'grimReaper_4_attack_right', 'grimReaper_5_attack_right', 'grimReaper_6_attack_right', 'grimReaper_7_attack_right', 'grimReaper_8_attack_right'],
                animationFrameTime: 30
            },
            attacking_left: {
                sprites: ['grimReaper_1_attack_left', 'grimReaper_2_attack_left', 'grimReaper_3_attack_left', 'grimReaper_4_attack_left', 'grimReaper_5_attack_left', 'grimReaper_6_attack_left', 'grimReaper_7_attack_left', 'grimReaper_8_attack_left'],
                animationFrameTime: 30
            }
        },
        animation: 'flying_right',
        eatsSouls: true,
        skill: game['skills']['scytheAttack1']
    },
    pumpkinGhost: {
        name: 'pumpkinGhost',
        fullName: 'Pumpkin Ghost',
        type: objectType['PLAYER'],
        width: 213,
        height: 169,
        moveable: true,
        colliderRectangleOffset: {
            left: 0.3,
            right: 0.3,
            top: 0.11,
            bottom: 0.15
        },
        animations: {
            flying_right: {
                sprites: ['pumpkinGhost_1_right']
            },
            flying_left: {
                sprites: ['pumpkinGhost_1_left']
            },
            flapping_right: {
                sprites: ['pumpkinGhost_1_right', 'pumpkinGhost_2_right', 'pumpkinGhost_3_right', 'pumpkinGhost_4_right', 'pumpkinGhost_5_right', 'pumpkinGhost_6_right', 'pumpkinGhost_7_right', 'pumpkinGhost_8_right', 'pumpkinGhost_9_right', 'pumpkinGhost_10_right', 'pumpkinGhost_11_right', 'pumpkinGhost_12_right', 'pumpkinGhost_13_right', 'pumpkinGhost_14_right', 'pumpkinGhost_15_right', 'pumpkinGhost_16_right', 'pumpkinGhost_17_right', 'pumpkinGhost_16_right', 'pumpkinGhost_15_right', 'pumpkinGhost_14_right', 'pumpkinGhost_13_right', 'pumpkinGhost_12_right', 'pumpkinGhost_11_right', 'pumpkinGhost_10_right', 'pumpkinGhost_9_right', 'pumpkinGhost_8_right', 'pumpkinGhost_7_right', 'pumpkinGhost_6_right', 'pumpkinGhost_5_right', 'pumpkinGhost_4_right', 'pumpkinGhost_3_right', 'pumpkinGhost_2_right'],
                animationFrameTime: 60
            },
            flapping_left: {
                sprites: ['pumpkinGhost_1_left', 'pumpkinGhost_2_left', 'pumpkinGhost_3_left', 'pumpkinGhost_4_left', 'pumpkinGhost_5_left', 'pumpkinGhost_6_left', 'pumpkinGhost_7_left', 'pumpkinGhost_8_left', 'pumpkinGhost_9_left', 'pumpkinGhost_10_left', 'pumpkinGhost_11_left', 'pumpkinGhost_12_left', 'pumpkinGhost_13_left', 'pumpkinGhost_14_left', 'pumpkinGhost_15_left', 'pumpkinGhost_16_left', 'pumpkinGhost_17_left', 'pumpkinGhost_16_left', 'pumpkinGhost_15_left', 'pumpkinGhost_14_left', 'pumpkinGhost_13_left', 'pumpkinGhost_12_left', 'pumpkinGhost_11_left', 'pumpkinGhost_10_left', 'pumpkinGhost_9_left', 'pumpkinGhost_8_left', 'pumpkinGhost_7_left', 'pumpkinGhost_6_left', 'pumpkinGhost_5_left', 'pumpkinGhost_4_left', 'pumpkinGhost_3_left', 'pumpkinGhost_2_left'],
                animationFrameTime: 60
            },
            attacking_right: {
                sprites: ['pumpkinGhost_1_attack_right', 'pumpkinGhost_2_attack_right', 'pumpkinGhost_3_attack_right', 'pumpkinGhost_4_attack_right', 'pumpkinGhost_5_attack_right', 'pumpkinGhost_4_attack_right', 'pumpkinGhost_3_attack_right', 'pumpkinGhost_2_attack_right', 'pumpkinGhost_1_attack_right'],
                animationFrameTime: 35
            },
            attacking_left: {
                sprites: ['pumpkinGhost_1_attack_left', 'pumpkinGhost_2_attack_left', 'pumpkinGhost_3_attack_left', 'pumpkinGhost_4_attack_left', 'pumpkinGhost_5_attack_left', 'pumpkinGhost_4_attack_left', 'pumpkinGhost_3_attack_left', 'pumpkinGhost_2_attack_left', 'pumpkinGhost_1_attack_left'],
                animationFrameTime: 35
            }
        },
        animation: 'flying_right',
        eatsSouls: true,
        skill: game['skills']['scytheAttack2']
    },
    wasp: {
        name: 'wasp',
        type: objectType['PLAYER'],
        width: 60,
        height: 45,
        colliderRectangleOffset: {
            left: 0.05,
            right: 0.05,
            top: 0.45,
            bottom: 0
        },
        animations: {
            flying_right: {
                sprites: ['wasp_1_right']
            },
            flying_left: {
                sprites: ['wasp_1_left']
            },
            flapping_right: {
                sprites: ['wasp_1_right', 'wasp_2_right', 'wasp_3_right', 'wasp_4_right'],
                animationFrameTime: 80
            },
            flapping_left: {
                sprites: ['wasp_1_left', 'wasp_2_left', 'wasp_3_left', 'wasp_4_left'],
                animationFrameTime: 80
            }
        },
        animation: 'flying_right',
        skill: game['skills']['poisonWasp']
    },
    hornet: {
        name: 'hornet',
        type: objectType['PLAYER'],
        width: 90,
        height: 101,
        colliderRectangleOffset: {
            left: 0.08,
            right: 0.08,
            top: 0.35,
            bottom: 0.28
        },
        animations: {
            flying_right: {
                sprites: ['hornet_1_right']
            },
            flying_left: {
                sprites: ['hornet_1_left']
            },
            flapping_right: {
                sprites: ['hornet_1_right', 'hornet_2_right', 'hornet_3_right', 'hornet_4_right', 'hornet_5_right', 'hornet_6_right', 'hornet_7_right', 'hornet_8_right', 'hornet_9_right', 'hornet_8_right', 'hornet_7_right', 'hornet_6_right', 'hornet_5_right', 'hornet_4_right', 'hornet_3_right', 'hornet_2_right'],
                animationFrameTime: 80
            },
            flapping_left: {
                sprites: ['hornet_1_left', 'hornet_2_left', 'hornet_3_left', 'hornet_4_left', 'hornet_5_left', 'hornet_6_left', 'hornet_7_left', 'hornet_8_left', 'hornet_9_left', 'hornet_8_left', 'hornet_7_left', 'hornet_6_left', 'hornet_5_left', 'hornet_4_left', 'hornet_3_left', 'hornet_2_left'],
                animationFrameTime: 80
            }
        },
        animation: 'flying_right',
        skill: game['skills']['poisonWasp']
    },
    swampMonster: {
        name: 'swampMonster',
        fullName: 'Swamp Monster',
        type: objectType['PLAYER'],
        width: 160,
        height: 159,
        colliderRectangleOffset: {
            left: 0.36,
            right: 0.36,
            top: 0.23,
            bottom: 0.01
        },
        animations: {
            flying_right: {
                sprites: ['swampMonster_1_right']
            },
            flying_left: {
                sprites: ['swampMonster_1_left']
            },
            flapping_right: {
                sprites: ['swampMonster_1_right', 'swampMonster_2_right', 'swampMonster_3_right', 'swampMonster_4_right', 'swampMonster_5_right', 'swampMonster_6_right', 'swampMonster_7_right', 'swampMonster_8_right', 'swampMonster_9_right', 'swampMonster_10_right', 'swampMonster_11_right', 'swampMonster_12_right', 'swampMonster_13_right', 'swampMonster_14_right', 'swampMonster_15_right', 'swampMonster_16_right', 'swampMonster_17_right', 'swampMonster_18_right', 'swampMonster_19_right', 'swampMonster_20_right'],
                animationFrameTime: 80
            },
            flapping_left: {
                sprites: ['swampMonster_1_left', 'swampMonster_2_left', 'swampMonster_3_left', 'swampMonster_4_left', 'swampMonster_5_left', 'swampMonster_6_left', 'swampMonster_7_left', 'swampMonster_8_left', 'swampMonster_9_left', 'swampMonster_10_left', 'swampMonster_11_left', 'swampMonster_12_left', 'swampMonster_13_left', 'swampMonster_14_left', 'swampMonster_15_left', 'swampMonster_16_left', 'swampMonster_17_left', 'swampMonster_18_left', 'swampMonster_19_left', 'swampMonster_20_left'],
                animationFrameTime: 80
            }
        },
        animation: 'flying_right',
        skill: game['skills']['poisonSwampMonster']
    },
    turkey: {
        name: 'turkey',
        type: objectType['PLAYER'],
        width: 150,
        height: 126,
        colliderRectangleOffset: {
            left: 0.18,
            right: 0.18,
            top: 0.33,
            bottom: 0.19
        },
        animations: {
            flying_right: {
                sprites: ['turkey_2_right']
            },
            flying_left: {
                sprites: ['turkey_2_left']
            },
            flapping_right: {
                sprites: ['turkey_1_right', 'turkey_2_right', 'turkey_3_right', 'turkey_4_right', 'turkey_5_right', 'turkey_6_right', 'turkey_7_right', 'turkey_8_right', 'turkey_9_right', 'turkey_8_right', 'turkey_7_right', 'turkey_6_right', 'turkey_5_right', 'turkey_4_right', 'turkey_3_right', 'turkey_2_right'],
                animationFrameTime: 80
            },
            flapping_left: {
                sprites: ['turkey_1_left', 'turkey_2_left', 'turkey_3_left', 'turkey_4_left', 'turkey_5_left', 'turkey_6_left', 'turkey_7_left', 'turkey_8_left', 'turkey_9_left', 'turkey_8_left', 'turkey_7_left', 'turkey_6_left', 'turkey_5_left', 'turkey_4_left', 'turkey_3_left', 'turkey_2_left'],
                animationFrameTime: 80
            }
        },
        animation: 'flying_right',
        skill: game['skills']['dig']
    },
    mosquito: {
        name: 'mosquito',
        type: objectType['PLAYER'],
        width: 60,
        height: 45,
        colliderRectangleOffset: {
            left: 0.05,
            right: 0.05,
            top: 0.2,
            bottom: 0.05
        },
        animations: {
            flying_right: {
                sprites: ['mosquito_1_right']
            },
            flying_left: {
                sprites: ['mosquito_1_left']
            },
            flapping_right: {
                sprites: ['mosquito_1_right', 'mosquito_2_right', 'mosquito_3_right', 'mosquito_4_right'],
                animationFrameTime: 80
            },
            flapping_left: {
                sprites: ['mosquito_1_left', 'mosquito_2_left', 'mosquito_3_left', 'mosquito_4_left'],
                animationFrameTime: 80
            }
        },
        animation: 'flying_right',
        skill: game['skills']['infection']
    },
    dragonfly: {
        name: 'dragonfly',
        type: objectType['PLAYER'],
        width: 70,
        height: 55,
        colliderRectangleOffset: {
            left: 0.05,
            right: 0.05,
            top: 0.65,
            bottom: 0.01
        },
        animations: {
            flying_right: {
                sprites: ['dragonfly_1_right']
            },
            flying_left: {
                sprites: ['dragonfly_1_left']
            },
            flapping_right: {
                sprites: ['dragonfly_1_right', 'dragonfly_2_right', 'dragonfly_3_right', 'dragonfly_2_right'],
                animationFrameTime: 80
            },
            flapping_left: {
                sprites: ['dragonfly_1_left', 'dragonfly_2_left', 'dragonfly_3_left', 'dragonfly_2_left'],
                animationFrameTime: 80
            }
        },
        animation: 'flying_right',
        skill: game['skills']['grabPrey']
    },
    blueBird: {
        name: 'blueBird',
        fullName: 'Blue bird',
        type: objectType['PLAYER'],
        width: 48,
        height: 34,
        colliderRectangleOffset: {
            left: 0.05,
            right: 0.05,
            top: 0.2,
            bottom: 0.05
        },
        animations: {
            flying_right: {
                sprites: ['blueBird_1_right']
            },
            flying_left: {
                sprites: ['blueBird_1_left']
            },
            flapping_right: {
                sprites: ['blueBird_1_right', 'blueBird_2_right', 'blueBird_3_right', 'blueBird_4_right'],
                animationFrameTime: 80
            },
            flapping_left: {
                sprites: ['blueBird_1_left', 'blueBird_2_left', 'blueBird_3_left', 'blueBird_4_left'],
                animationFrameTime: 80
            }
        },
        animation: 'flying_right',
        skill: game['skills']['swoop']
    },
    seagull: {
        name: 'seagull',
        type: objectType['PLAYER'],
        width: 65,
        height: 45,
        colliderRectangleOffset: {
            left: 0.05,
            right: 0.05,
            top: 0.2,
            bottom: 0.05
        },
        animations: {
            flying_right: {
                sprites: ['seagull_1_right']
            },
            flying_left: {
                sprites: ['seagull_1_left']
            },
            flapping_right: {
                sprites: ['seagull_1_right', 'seagull_2_right', 'seagull_3_right', 'seagull_4_right'],
                animationFrameTime: 80
            },
            flapping_left: {
                sprites: ['seagull_1_left', 'seagull_2_left', 'seagull_3_left', 'seagull_4_left'],
                animationFrameTime: 80
            }
        },
        animation: 'flying_right',
        skill: game['skills']['diving']
    },
    pigeon: {
        name: 'pigeon',
        type: objectType['PLAYER'],
        width: 74,
        height: 60,
        colliderRectangleOffset: {
            left: 0.25,
            right: 0.25,
            top: 0.1,
            bottom: 0.05
        },
        animations: {
            flying_right: {
                sprites: ['pigeon_1_right']
            },
            flying_left: {
                sprites: ['pigeon_1_left']
            },
            standing_right: {
                sprites: ['pigeon_6_right']
            },
            standing_left: {
                sprites: ['pigeon_6_left']
            },
            flapping_right: {
                sprites: ['pigeon_1_right', 'pigeon_2_right', 'pigeon_3_right', 'pigeon_4_right', 'pigeon_5_right', 'pigeon_4_right', 'pigeon_3_right', 'pigeon_2_right'],
                animationFrameTime: 80
            },
            flapping_left: {
                sprites: ['pigeon_1_left', 'pigeon_2_left', 'pigeon_3_left', 'pigeon_4_left', 'pigeon_5_left', 'pigeon_4_left', 'pigeon_3_left', 'pigeon_2_left'],
                animationFrameTime: 80
            }
        },
        animation: 'flapping_right',
        skill: game['skills']['hunger']
    },
    duck: {
        name: 'duck',
        type: objectType['PLAYER'],
        width: 89,
        height: 72,
        colliderRectangleOffset: {
            left: 0.0,
            right: 0.0,
            top: 0.3,
            bottom: 0.24
        },
        animations: {
            flying_right: {
                sprites: ['duck_2_right']
            },
            flying_left: {
                sprites: ['duck_2_left']
            },
            flapping_right: {
                sprites: ['duck_1_right', 'duck_2_right', 'duck_3_right', 'duck_4_right', 'duck_5_right', 'duck_4_right', 'duck_3_right', 'duck_2_right'],
                animationFrameTime: 80
            },
            flapping_left: {
                sprites: ['duck_1_left', 'duck_2_left', 'duck_3_left', 'duck_4_left', 'duck_5_left', 'duck_4_left', 'duck_3_left', 'duck_2_left'],
                animationFrameTime: 80
            }
        },
        animation: 'flapping_right',
        skill: game['skills']['diving']
    },
    parrot: {
        name: 'parrot',
        type: objectType['PLAYER'],
        width: 98,
        height: 102,
        colliderRectangleOffset: {
            left: 0.05,
            right: 0.05,
            top: 0.52,
            bottom: 0.18
        },
        animations: {
            flying_right: {
                sprites: ['parrot_5_right']
            },
            flying_left: {
                sprites: ['parrot_5_left']
            },
            flapping_right: {
                sprites: ['parrot_1_right', 'parrot_2_right', 'parrot_3_right', 'parrot_4_right', 'parrot_5_right', 'parrot_6_right', 'parrot_5_right', 'parrot_4_right', 'parrot_3_right', 'parrot_2_right'],
                animationFrameTime: 80
            },
            flapping_left: {
                sprites: ['parrot_1_left', 'parrot_2_left', 'parrot_3_left', 'parrot_4_left', 'parrot_5_left', 'parrot_6_left', 'parrot_5_left', 'parrot_4_left', 'parrot_3_left', 'parrot_2_left'],
                animationFrameTime: 80
            }
        },
        animation: 'flying_right',
        skill: game['skills']['fruitEater']
    },
    redBird: {
        name: 'redBird',
        fullName: 'Red bird',
        type: objectType['PLAYER'],
        width: 64,
        height: 48,
        colliderRectangleOffset: {
            left: 0.05,
            right: 0.05,
            top: 0.3,
            bottom: 0.05
        },
        animations: {
            flying_right: {
                sprites: ['redBird_4_right']
            },
            flying_left: {
                sprites: ['redBird_4_left']
            },
            flapping_right: {
                sprites: ['redBird_1_right', 'redBird_2_right', 'redBird_3_right', 'redBird_4_right'],
                animationFrameTime: 80
            },
            flapping_left: {
                sprites: ['redBird_1_left', 'redBird_2_left', 'redBird_3_left', 'redBird_4_left'],
                animationFrameTime: 80
            }
        },
        animation: 'flying_right',
        skill: game['skills']['swoop']
    },
    commonBlackbird: {
        name: 'commonBlackbird',
        fullName: 'Blackbird',
        type: objectType['PLAYER'],
        width: 64,
        height: 48,
        colliderRectangleOffset: {
            left: 0.05,
            right: 0.05,
            top: 0.3,
            bottom: 0.05
        },
        animations: {
            flying_right: {
                sprites: ['commonBlackbird_4_right']
            },
            flying_left: {
                sprites: ['commonBlackbird_4_left']
            },
            flapping_right: {
                sprites: ['commonBlackbird_1_right', 'commonBlackbird_2_right', 'commonBlackbird_3_right', 'commonBlackbird_4_right'],
                animationFrameTime: 80
            },
            flapping_left: {
                sprites: ['commonBlackbird_1_left', 'commonBlackbird_2_left', 'commonBlackbird_3_left', 'commonBlackbird_4_left'],
                animationFrameTime: 80
            }
        },
        animation: 'flying_right',
        skill: game['skills']['swoop']
    },
    pompadourCotinga: {
        name: 'pompadourCotinga',
        fullName: 'Brown bird',
        type: objectType['PLAYER'],
        width: 96,
        height: 58,
        colliderRectangleOffset: {
            left: 0.05,
            right: 0.05,
            top: 0.3,
            bottom: 0.05
        },
        animations: {
            flying_right: {
                sprites: ['pompadourCotinga_4_right']
            },
            flying_left: {
                sprites: ['pompadourCotinga_4_left']
            },
            flapping_right: {
                sprites: ['pompadourCotinga_1_right', 'pompadourCotinga_2_right', 'pompadourCotinga_3_right', 'pompadourCotinga_4_right', 'pompadourCotinga_3_right', 'pompadourCotinga_2_right'],
                animationFrameTime: 50
            },
            flapping_left: {
                sprites: ['pompadourCotinga_1_left', 'pompadourCotinga_2_left', 'pompadourCotinga_3_left', 'pompadourCotinga_4_left', 'pompadourCotinga_3_left', 'pompadourCotinga_2_left'],
                animationFrameTime: 50
            }
        },
        animation: 'flying_right',
        skill: game['skills']['swoop']
    },
    hawk: {
        name: 'hawk',
        type: objectType['PLAYER'],
        width: 84,
        height: 60,
        colliderRectangleOffset: {
            left: 0.07,
            right: 0.07,
            top: 0.24,
            bottom: 0.01
        },
        animations: {
            flying_right: {
                sprites: ['hawk_1_right']
            },
            flying_left: {
                sprites: ['hawk_1_left']
            },
            flapping_right: {
                sprites: ['hawk_1_right', 'hawk_2_right', 'hawk_3_right', 'hawk_4_right', 'hawk_3_right', 'hawk_2_right'],
                animationFrameTime: 80
            },
            flapping_left: {
                sprites: ['hawk_1_left', 'hawk_2_left', 'hawk_3_left', 'hawk_4_left', 'hawk_3_left', 'hawk_2_left'],
                animationFrameTime: 80
            }
        },
        animation: 'flying_right',
        skill: game['skills']['speedUp']
    },
    dirt_grass: {
        name: 'dirt_grass',
        type: objectType['TILE'],
        width: 64,
        height: 64,
        gravityOn: false,
        moveable: false,
        animations: {
            none: {
                sprites: ['dirt_grass1']
            }
        },
        animation: 'none',
        antiStuck: true
    },
    dirt_grass1: {
        name: 'dirt_grass1',
        type: objectType['TILE'],
        width: 64,
        height: 64,
        gravityOn: false,
        moveable: false,
        animations: {
            none: {
                sprites: ['dirt_grass1']
            }
        },
        animation: 'none',
        antiStuck: true
    },
    dirt_grass2: {
        name: 'dirt_grass2',
        type: objectType['TILE'],
        width: 64,
        height: 64,
        gravityOn: false,
        moveable: false,
        animations: {
            none: {
                sprites: ['dirt_grass2']
            }
        },
        animation: 'none',
        antiStuck: true
    },
    dirt_grass3: {
        name: 'dirt_grass3',
        type: objectType['TILE'],
        width: 64,
        height: 64,
        gravityOn: false,
        moveable: false,
        animations: {
            none: {
                sprites: ['dirt_grass3']
            }
        },
        animation: 'none',
        antiStuck: true
    },
    dirt_snow: {
        name: 'dirt_snow',
        type: objectType['TILE'],
        width: 64,
        height: 64,
        gravityOn: false,
        moveable: false,
        animations: {
            none: {
                sprites: ['dirt_snow']
            }
        },
        animation: 'none',
        collideMovementReduce: 0.975,
        antiStuck: true
    },
    dirt_snow1: {
        name: 'dirt_snow1',
        type: objectType['TILE'],
        width: 64,
        height: 64,
        gravityOn: false,
        moveable: false,
        animations: {
            none: {
                sprites: ['dirt_snow1']
            }
        },
        animation: 'none',
        collideMovementReduce: 0.975,
        antiStuck: true
    },
    dirt_snow2: {
        name: 'dirt_snow2',
        type: objectType['TILE'],
        width: 64,
        height: 64,
        gravityOn: false,
        moveable: false,
        animations: {
            none: {
                sprites: ['dirt_snow2']
            }
        },
        animation: 'none',
        collideMovementReduce: 0.975,
        antiStuck: true
    },
    iceBlock: {
        name: 'iceBlock',
        type: objectType['TILE'],
        width: 64,
        height: 64,
        gravityOn: false,
        moveable: false,
        animations: {
            none: {
                sprites: ['iceBlock']
            }
        },
        animation: 'none',
        collideMovementReduce: 0.99,
        antiStuck: true
    },
    ice_left: {
        name: 'ice_left',
        type: objectType['TILE'],
        width: 128,
        height: 128,
        gravityOn: false,
        moveable: false,
        colliderRectangleOffset: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0.2
        },
        animations: {
            none: {
                sprites: ['ice_left']
            }
        },
        animation: 'none',
        collideMovementReduce: 0.99
    },
    ice_middle: {
        name: 'ice_middle',
        type: objectType['TILE'],
        width: 640,
        height: 128,
        gravityOn: false,
        moveable: false,
        colliderRectangleOffset: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0.2
        },
        animations: {
            none: {
                sprites: ['ice_middle']
            }
        },
        animation: 'none',
        collideMovementReduce: 0.99
    },
    ice_right: {
        name: 'ice_right',
        type: objectType['TILE'],
        width: 320,
        height: 128,
        gravityOn: false,
        moveable: false,
        colliderRectangleOffset: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0.2
        },
        animations: {
            none: {
                sprites: ['ice_right']
            }
        },
        animation: 'none',
        collideMovementReduce: 0.99
    },
    jungleTop: {
        name: 'jungleTop',
        type: objectType['TILE'],
        width: 128,
        height: 64,
        gravityOn: false,
        moveable: false,
        animations: {
            none: {
                sprites: ['jungleTop']
            }
        },
        animation: 'none',
        antiStuck: true
    },
    jungleBottom: {
        name: 'jungleBottom',
        type: objectType['TILE'],
        width: 128,
        height: 64,
        gravityOn: false,
        moveable: false,
        animations: {
            none: {
                sprites: ['jungleBottom']
            }
        },
        animation: 'none',
        antiStuck: true
    },
    dirt: {
        name: 'dirt',
        type: objectType['TILE'],
        width: 64,
        height: 64,
        gravityOn: false,
        moveable: false,
        animations: {
            none: {
                sprites: ['dirt']
            }
        },
        animation: 'none',
        antiStuck: true
    },
    dirt_top: {
        name: 'dirt_top',
        type: objectType['TILE'],
        width: 64,
        height: 64,
        gravityOn: false,
        moveable: false,
        animations: {
            none: {
                sprites: ['dirt']
            }
        },
        animation: 'none',
        antiStuck: true
    },
    dirt_top1: {
        name: 'dirt_top1',
        type: objectType['TILE'],
        width: 64,
        height: 64,
        gravityOn: false,
        moveable: false,
        animations: {
            none: {
                sprites: ['dirt_top1']
            }
        },
        animation: 'none',
        antiStuck: true
    },
    dirt_top2: {
        name: 'dirt_top2',
        type: objectType['TILE'],
        width: 64,
        height: 64,
        gravityOn: false,
        moveable: false,
        animations: {
            none: {
                sprites: ['dirt_top2']
            }
        },
        animation: 'none',
        antiStuck: true
    },
    dirt_top3: {
        name: 'dirt_top3',
        type: objectType['TILE'],
        width: 64,
        height: 64,
        gravityOn: false,
        moveable: false,
        animations: {
            none: {
                sprites: ['dirt_top3']
            }
        },
        animation: 'none',
        antiStuck: true
    },
    dirt_top4: {
        name: 'dirt_top4',
        type: objectType['TILE'],
        width: 64,
        height: 64,
        gravityOn: false,
        moveable: false,
        animations: {
            none: {
                sprites: ['dirt_top4']
            }
        },
        animation: 'none',
        antiStuck: true
    },
    brick_grey: {
        name: 'brick_grey',
        type: objectType['TILE'],
        width: 64,
        height: 64,
        gravityOn: false,
        moveable: false,
        animations: {
            none: {
                sprites: ['brick_grey']
            }
        },
        animation: 'none',
        antiStuck: true
    },
    brick_pyramid: {
        name: 'brick_pyramid',
        type: objectType['TILE'],
        width: 64,
        height: 64,
        gravityOn: false,
        moveable: false,
        animations: {
            none: {
                sprites: ['brick_pyramid']
            }
        },
        animation: 'none',
        antiStuck: true
    },
    sand: {
        name: 'sand',
        type: objectType['TILE'],
        width: 64,
        height: 64,
        gravityOn: false,
        moveable: false,
        animations: {
            none: {
                sprites: ['sand']
            }
        },
        animation: 'none',
        antiStuck: true
    },
    greystone: {
        name: 'greystone',
        type: objectType['TILE'],
        width: 64,
        height: 64,
        gravityOn: false,
        moveable: false,
        animations: {
            none: {
                sprites: ['greystone']
            }
        },
        animation: 'none',
        antiStuck: true
    },
    greystone_sand: {
        name: 'greystone_sand',
        type: objectType['TILE'],
        width: 64,
        height: 64,
        gravityOn: false,
        moveable: false,
        animations: {
            none: {
                sprites: ['greystone_sand']
            }
        },
        animation: 'none',
        antiStuck: true
    },
    fence: {
        name: 'fence',
        type: objectType['TILE'],
        width: 64,
        height: 64,
        gravityOn: false,
        moveable: false,
        isCollider: false,
        animations: {
            none: {
                sprites: ['fence']
            }
        },
        animation: 'none'
    },
    stalk_light_green: {
        name: 'stalk_light_green',
        type: objectType['TILE'],
        width: 64,
        height: 74,
        gravityOn: false,
        moveable: false,
        isCollider: true,
        colliderRectangleOffset: {
            left: 0.42,
            right: 0.34,
            top: 0,
            bottom: 0
        },
        animations: {
            none: {
                sprites: ['stalk_light_green']
            }
        },
        animation: 'none',
        antiStuck: true
    },
    ectoplasm_fire: {
        name: 'ectoplasm_fire',
        type: objectType['TILE'],
        width: 229,
        height: 192,
        gravityOn: false,
        moveable: false,
        colliderRectangleOffset: {
            left: 0.1,
            right: 0.1,
            top: 0,
            bottom: 0
        },
        animations: {
            none: {
                sprites: ['ectoplasm_fire_1', 'ectoplasm_fire_2', 'ectoplasm_fire_3', 'ectoplasm_fire_4'],
                animationFrameTime: 120
            }
        },
        animation: 'none',
        zIndex: 100
    },
    water: {
        name: 'water',
        type: objectType['TILE'],
        opacity: 0.85,
        width: 128,
        height: 256,
        gravityOn: false,
        moveable: false,
        colliderRectangleOffset: {
            left: 0,
            right: 0,
            top: 0.2,
            bottom: 0
        },
        animations: {
            none: {
                sprites: ['water1', 'water2'],
                animationFrameTime: 500
            }
        },
        animation: 'none',
        zIndex: 100
    },
    water2: {
        name: 'water2',
        type: objectType['TILE'],
        opacity: 0.8,
        width: 128,
        height: 256,
        gravityOn: false,
        moveable: false,
        colliderRectangleOffset: {
            left: 0,
            right: 0,
            top: 0.2,
            bottom: 0
        },
        animations: {
            none: {
                sprites: ['water2_1', 'water2_2'],
                animationFrameTime: 500
            }
        },
        animation: 'none',
        zIndex: 100
    },
    ocean: {
        name: 'ocean',
        type: objectType['TILE'],
        opacity: 0.8,
        width: 2560,
        height: 1600,
        gravityOn: false,
        moveable: false,
        colliderRectangleOffset: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        },
        animations: {
            none: {
                sprites: ['ocean']
            }
        },
        animation: 'none',
        zIndex: 100
    },
    arctic: {
        name: 'arctic',
        type: objectType['TILE'],
        opacity: 0.8,
        width: 2304,
        height: 1600,
        gravityOn: false,
        moveable: false,
        colliderRectangleOffset: {
            left: 0,
            right: 0,
            top: 0.01,
            bottom: 0
        },
        animations: {
            none: {
                sprites: ['arctic']
            }
        },
        animation: 'none',
        zIndex: 100
    },
    spiderweb_1: {
        name: 'spiderweb_1',
        type: objectType['TILE'],
        opacity: 0.85,
        width: 257,
        height: 341,
        gravityOn: false,
        moveable: false,
        colliderRectangleOffset: {
            left: 0.07,
            right: 0.21,
            top: 0.16,
            bottom: 0.1
        },
        animations: {
            none: {
                sprites: ['spiderweb_1']
            }
        },
        animation: 'none'
    },
    spiderweb_2: {
        name: 'spiderweb_2',
        type: objectType['TILE'],
        opacity: 0.85,
        width: 231,
        height: 231,
        gravityOn: false,
        moveable: false,
        colliderRectangleOffset: {
            left: 0.1,
            right: 0.1,
            top: 0.1,
            bottom: 0.1
        },
        animations: {
            none: {
                sprites: ['spiderweb_2']
            }
        },
        animation: 'none'
    },
    spiderweb_3: {
        name: 'spiderweb_3',
        type: objectType['TILE'],
        opacity: 0.85,
        width: 257,
        height: 341,
        gravityOn: false,
        moveable: false,
        colliderRectangleOffset: {
            left: 0.21,
            right: 0.07,
            top: 0.16,
            bottom: 0.1
        },
        animations: {
            none: {
                sprites: ['spiderweb_3']
            }
        },
        animation: 'none'
    },
    rock_1_blue: {
        name: 'rock_1_blue',
        type: objectType['TILE'],
        width: 1118,
        height: 432,
        gravityOn: false,
        moveable: false,
        isCollider: false,
        animations: {
            none: {
                sprites: ['rock_1_blue']
            }
        },
        animation: 'none',
        zIndex: -100
    },
    rock_3_grey: {
        name: 'rock_3_grey',
        type: objectType['TILE'],
        width: 1162,
        height: 505,
        gravityOn: false,
        moveable: false,
        isCollider: false,
        animations: {
            none: {
                sprites: ['rock_3_grey']
            }
        },
        animation: 'none',
        zIndex: -100
    },
    space_rock_1: {
        name: 'space_rock_1',
        type: objectType['TILE'],
        width: 795,
        height: 322,
        gravityOn: false,
        moveable: false,
        isCollider: false,
        animations: {
            none: {
                sprites: ['space_rock_1']
            }
        },
        animation: 'none',
        zIndex: -100
    },
    space_rock_2: {
        name: 'space_rock_2',
        type: objectType['TILE'],
        width: 581,
        height: 235,
        gravityOn: false,
        moveable: false,
        isCollider: false,
        animations: {
            none: {
                sprites: ['space_rock_2']
            }
        },
        animation: 'none',
        zIndex: -100
    },
    space_rock_3: {
        name: 'space_rock_3',
        type: objectType['TILE'],
        width: 491,
        height: 400,
        gravityOn: false,
        moveable: false,
        isCollider: false,
        animations: {
            none: {
                sprites: ['space_rock_3']
            }
        },
        animation: 'none',
        zIndex: -100
    },
    cosmicPlant: {
        name: 'cosmicPlant',
        type: objectType['FOOD'],
        width: 179,
        height: 187,
        gravityOn: false,
        moveable: false,
        isCollider: true,
        colliderRectangleOffset: {
            left: 0.18,
            right: 0.25,
            top: 0.16,
            bottom: 0
        },
        animations: {
            none: {
                sprites: ['cosmic_plant']
            }
        },
        animation: 'none',
        antiStuck: true
    },
    jungleTree1: {
        name: 'jungleTree1',
        type: objectType['TILE'],
        width: 1169,
        height: 1024,
        gravityOn: false,
        moveable: false,
        isCollider: false,
        animations: {
            none: {
                sprites: ['jungleTree1']
            }
        },
        animation: 'none',
        zIndex: -100
    },
    jungleTree2: {
        name: 'jungleTree2',
        type: objectType['TILE'],
        width: 1323,
        height: 990,
        gravityOn: false,
        moveable: false,
        isCollider: false,
        animations: {
            none: {
                sprites: ['jungleTree2']
            }
        },
        animation: 'none',
        zIndex: -100
    },
    jungleTree3: {
        name: 'jungleTree3',
        type: objectType['TILE'],
        width: 1610,
        height: 667,
        gravityOn: false,
        moveable: false,
        isCollider: false,
        animations: {
            none: {
                sprites: ['jungleTree3']
            }
        },
        animation: 'none',
        zIndex: -100
    },
    jungleTree4: {
        name: 'jungleTree4',
        type: objectType['TILE'],
        width: 1627,
        height: 638,
        gravityOn: false,
        moveable: false,
        isCollider: false,
        animations: {
            none: {
                sprites: ['jungleTree4']
            }
        },
        animation: 'none',
        zIndex: -101
    },
    strangeTree: {
        name: 'strangeTree',
        type: objectType['TILE'],
        width: 750,
        height: 686,
        gravityOn: false,
        moveable: false,
        isCollider: false,
        animations: {
            none: {
                sprites: ['strangeTree']
            }
        },
        animation: 'none',
        zIndex: -100
    },
    tree_1__no_vegetation_base: {
        name: 'tree_1__no_vegetation_base',
        type: objectType['TILE'],
        width: 1006,
        height: 1000,
        gravityOn: false,
        moveable: false,
        isCollider: false,
        animations: {
            none: {
                sprites: ['tree_1__no_vegetation_base']
            }
        },
        animation: 'none',
        zIndex: -100
    },
    tree_3_no_vegetation_base: {
        name: 'tree_3_no_vegetation_base',
        type: objectType['TILE'],
        width: 799,
        height: 1100,
        gravityOn: false,
        moveable: false,
        isCollider: false,
        animations: {
            none: {
                sprites: ['tree_3_no_vegetation_base']
            }
        },
        animation: 'none',
        zIndex: -100
    },
    thorn_branch_2: {
        name: 'thorn_branch_2',
        type: objectType['TILE'],
        width: 230,
        height: 300,
        gravityOn: false,
        moveable: false,
        isCollider: false,
        animations: {
            none: {
                sprites: ['thorn_branch_2']
            }
        },
        animation: 'none',
        zIndex: -100
    },
    thorn_branch_3: {
        name: 'thorn_branch_3',
        type: objectType['TILE'],
        width: 450,
        height: 311,
        gravityOn: false,
        moveable: false,
        isCollider: false,
        animations: {
            none: {
                sprites: ['thorn_branch_3']
            }
        },
        animation: 'none',
        zIndex: -100
    },
    statue_1_with_vegetation: {
        name: 'statue_1_with_vegetation',
        type: objectType['TILE'],
        width: 254,
        height: 381,
        gravityOn: false,
        moveable: false,
        isCollider: false,
        animations: {
            none: {
                sprites: ['statue_1_with_vegetation']
            }
        },
        animation: 'none',
        zIndex: -100
    },
    open_coffin: {
        name: 'open_coffin',
        type: objectType['TILE'],
        width: 266,
        height: 144,
        gravityOn: false,
        moveable: false,
        isCollider: false,
        animations: {
            none: {
                sprites: ['open_coffin']
            }
        },
        animation: 'none',
        zIndex: -100
    },
    grave: {
        name: 'grave',
        type: objectType['TILE'],
        width: 428,
        height: 260,
        gravityOn: false,
        moveable: false,
        isCollider: false,
        animations: {
            none: {
                sprites: ['grave']
            }
        },
        animation: 'none',
        zIndex: -100
    },
    coffin_dark: {
        name: 'coffin_dark',
        type: objectType['TILE'],
        width: 188,
        height: 160,
        gravityOn: false,
        moveable: false,
        isCollider: false,
        animations: {
            none: {
                sprites: ['coffin_dark']
            }
        },
        animation: 'none',
        zIndex: -100
    },
    brick_post_1: {
        name: 'brick_post_1',
        type: objectType['TILE'],
        width: 126,
        height: 300,
        gravityOn: false,
        moveable: false,
        isCollider: false,
        animations: {
            none: {
                sprites: ['brick_post_1']
            }
        },
        animation: 'none',
        zIndex: -100
    },
    swamp: {
        name: 'swamp',
        type: objectType['TILE'],
        width: 2048,
        height: 560,
        gravityOn: false,
        moveable: false,
        colliderRectangleOffset: {
            left: 0,
            right: 0,
            top: 0.06,
            bottom: 0
        },
        animations: {
            none: {
                sprites: ['swamp']
            }
        },
        opacity: 0.98,
        animation: 'none',
        zIndex: 100
    },
    tree_1_bright_green: {
        name: 'tree_1_bright_green',
        type: objectType['TILE'],
        width: 557,
        height: 764,
        gravityOn: false,
        moveable: false,
        isCollider: false,
        animations: {
            none: {
                sprites: ['tree_1_bright_green']
            }
        },
        animation: 'none',
        zIndex: -100
    },
    tree_2_bright_green: {
        name: 'tree_2_bright_green',
        type: objectType['TILE'],
        width: 831,
        height: 743,
        gravityOn: false,
        moveable: false,
        isCollider: false,
        animations: {
            none: {
                sprites: ['tree_2_bright_green']
            }
        },
        animation: 'none',
        zIndex: -100
    },
    tree_3_bright_green: {
        name: 'tree_3_bright_green',
        type: objectType['TILE'],
        width: 838,
        height: 871,
        gravityOn: false,
        moveable: false,
        isCollider: false,
        animations: {
            none: {
                sprites: ['tree_3_bright_green']
            }
        },
        animation: 'none',
        zIndex: -100
    },
    moon_full: {
        name: 'moon_full',
        type: objectType['TILE'],
        width: 85,
        height: 85,
        gravityOn: false,
        moveable: false,
        isCollider: false,
        animations: {
            none: {
                sprites: ['moon']
            }
        },
        animation: 'none',
        zIndex: -100
    },
    moon_half: {
        name: 'moon_half',
        type: objectType['TILE'],
        width: 85,
        height: 85,
        gravityOn: false,
        moveable: false,
        isCollider: false,
        animations: {
            none: {
                sprites: ['moon_half']
            }
        },
        animation: 'none',
        zIndex: -100
    },
    church: {
        name: 'church',
        type: objectType['TILE'],
        width: 1074,
        height: 1016,
        gravityOn: false,
        moveable: false,
        isCollider: false,
        animations: {
            none: {
                sprites: ['church']
            }
        },
        animation: 'none',
        zIndex: -200
    },
    dino_bones: {
        name: 'dino_bones',
        type: objectType['TILE'],
        width: 1118,
        height: 307,
        gravityOn: false,
        moveable: false,
        isCollider: false,
        animations: {
            none: {
                sprites: ['dino_bones']
            }
        },
        animation: 'none',
        zIndex: -100
    },
    volcano_1: {
        name: 'volcano_1',
        type: objectType['TILE'],
        width: 1165,
        height: 538,
        gravityOn: false,
        moveable: false,
        isCollider: false,
        animations: {
            none: {
                sprites: ['volcano_1']
            }
        },
        animation: 'none',
        zIndex: -100
    },
    volcano_2: {
        name: 'volcano_2',
        type: objectType['TILE'],
        width: 609,
        height: 296,
        gravityOn: false,
        moveable: false,
        isCollider: false,
        animations: {
            none: {
                sprites: ['volcano_2']
            }
        },
        animation: 'none',
        zIndex: -101
    },
    lava: {
        name: 'lava',
        type: objectType['TILE'],
        width: 64,
        height: 64,
        gravityOn: false,
        moveable: false,
        colliderRectangleOffset: {
            left: 0,
            right: 0,
            top: 0.01,
            bottom: 0
        },
        animations: {
            none: {
                sprites: ['lava', 'lava_mirrored'],
                animationFrameTime: 300
            }
        },
        animation: 'none',
        zIndex: 100
    },
    house_1: {
        name: 'house_1',
        type: objectType['TILE'],
        width: 398,
        height: 316,
        gravityOn: false,
        moveable: false,
        isCollider: false,
        animations: {
            none: {
                sprites: ['house_1']
            }
        },
        animation: 'none',
        zIndex: -100
    },
    house_2: {
        name: 'house_2',
        type: objectType['TILE'],
        width: 398,
        height: 389,
        gravityOn: false,
        moveable: false,
        isCollider: false,
        animations: {
            none: {
                sprites: ['house_2']
            }
        },
        animation: 'none',
        zIndex: -100
    },
    house_3: {
        name: 'house_3',
        type: objectType['TILE'],
        width: 552,
        height: 392,
        gravityOn: false,
        moveable: false,
        isCollider: false,
        animations: {
            none: {
                sprites: ['house_3']
            }
        },
        animation: 'none',
        zIndex: -100
    },
    house_4: {
        name: 'house_4',
        type: objectType['TILE'],
        width: 401,
        height: 380,
        gravityOn: false,
        moveable: false,
        isCollider: false,
        animations: {
            none: {
                sprites: ['house_4']
            }
        },
        animation: 'none',
        zIndex: -100
    },
    house_5: {
        name: 'house_5',
        type: objectType['TILE'],
        width: 401,
        height: 392,
        gravityOn: false,
        moveable: false,
        isCollider: false,
        animations: {
            none: {
                sprites: ['house_5']
            }
        },
        animation: 'none',
        zIndex: -100
    },
    house_6: {
        name: 'house_6',
        type: objectType['TILE'],
        width: 512,
        height: 557,
        gravityOn: false,
        moveable: false,
        isCollider: false,
        animations: {
            none: {
                sprites: ['house_6']
            }
        },
        animation: 'none',
        zIndex: -100
    },
    house_7: {
        name: 'house_7',
        type: objectType['TILE'],
        width: 512,
        height: 566,
        gravityOn: false,
        moveable: false,
        isCollider: false,
        animations: {
            none: {
                sprites: ['house_7']
            }
        },
        animation: 'none',
        zIndex: -100
    },
    house_8: {
        name: 'house_8',
        type: objectType['TILE'],
        width: 424,
        height: 391,
        gravityOn: false,
        moveable: false,
        isCollider: false,
        animations: {
            none: {
                sprites: ['house_8']
            }
        },
        animation: 'none',
        zIndex: -100
    },
    house_9: {
        name: 'house_9',
        type: objectType['TILE'],
        width: 424,
        height: 388,
        gravityOn: false,
        moveable: false,
        isCollider: false,
        animations: {
            none: {
                sprites: ['house_9']
            }
        },
        animation: 'none',
        zIndex: -100
    },
    house_10: {
        name: 'house_10',
        type: objectType['TILE'],
        width: 424,
        height: 631,
        gravityOn: false,
        moveable: false,
        isCollider: false,
        animations: {
            none: {
                sprites: ['house_10']
            }
        },
        animation: 'none',
        zIndex: -100
    },
    house_11: {
        name: 'house_11',
        type: objectType['TILE'],
        width: 637,
        height: 588,
        gravityOn: false,
        moveable: false,
        isCollider: false,
        animations: {
            none: {
                sprites: ['house_11']
            }
        },
        animation: 'none',
        zIndex: -100
    },
    house_12: {
        name: 'house_12',
        type: objectType['TILE'],
        width: 443,
        height: 488,
        gravityOn: false,
        moveable: false,
        isCollider: false,
        animations: {
            none: {
                sprites: ['house_12']
            }
        },
        animation: 'none',
        zIndex: -100
    },
    house_13: {
        name: 'house_13',
        type: objectType['TILE'],
        width: 473,
        height: 489,
        gravityOn: false,
        moveable: false,
        isCollider: false,
        animations: {
            none: {
                sprites: ['house_13']
            }
        },
        animation: 'none',
        zIndex: -100
    },
    cloud1: {
        name: 'cloud1',
        type: objectType['HIDE'],
        width: 341,
        height: 208,
        gravityOn: false,
        moveable: false,
        isCollider: true,
        colliderRectangleOffset: {
            left: 0.2,
            right: 0.15,
            top: 0.27,
            bottom: 0.14
        },
        animations: {
            none: {
                sprites: ['cloud1']
            }
        },
        animation: 'none',
        zIndex: 100
    },
    cloud2: {
        name: 'cloud2',
        type: objectType['HIDE'],
        width: 341,
        height: 208,
        gravityOn: false,
        moveable: false,
        isCollider: true,
        colliderRectangleOffset: {
            left: 0.15,
            right: 0.15,
            top: 0.3,
            bottom: 0.14
        },
        animations: {
            none: {
                sprites: ['cloud2']
            }
        },
        animation: 'none',
        zIndex: 100
    },
    cloud3: {
        name: 'cloud3',
        type: objectType['HIDE'],
        width: 341,
        height: 208,
        gravityOn: false,
        moveable: false,
        isCollider: true,
        colliderRectangleOffset: {
            left: 0.16,
            right: 0.17,
            top: 0.27,
            bottom: 0.14
        },
        animations: {
            none: {
                sprites: ['cloud3']
            }
        },
        animation: 'none',
        zIndex: 100
    },
    cloud4: {
        name: 'cloud4',
        type: objectType['HIDE'],
        width: 341,
        height: 208,
        gravityOn: false,
        moveable: false,
        isCollider: true,
        colliderRectangleOffset: {
            left: 0.13,
            right: 0.14,
            top: 0.27,
            bottom: 0.14
        },
        animations: {
            none: {
                sprites: ['cloud4']
            }
        },
        animation: 'none',
        zIndex: 100
    },
    bush_1_bright_green: {
        name: 'bush_1_bright_green',
        type: objectType['HIDE'],
        width: 250,
        height: 158,
        gravityOn: false,
        moveable: false,
        isCollider: true,
        colliderRectangleOffset: {
            left: 0.13,
            right: 0.2,
            top: 0.27,
            bottom: 0
        },
        animations: {
            none: {
                sprites: ['bush_1_bright_green']
            }
        },
        animation: 'none',
        zIndex: 100
    },
    star: {
        name: 'star',
        type: objectType['TILE'],
        width: 34,
        height: 32,
        gravityOn: false,
        moveable: false,
        isCollider: false,
        colliderRectangleOffset: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        },
        animations: {
            none: {
                sprites: ['star']
            }
        },
        animation: 'none',
        zIndex: -100
    },
    background_pyramid: {
        name: 'background_pyramid',
        type: objectType['TILE'],
        width: 128,
        height: 128,
        gravityOn: false,
        moveable: false,
        isCollider: false,
        animations: {
            none: {
                sprites: ['background_pyramid']
            }
        },
        animation: 'none',
        zIndex: -1000
    },
    castle_bg: {
        name: 'castle_bg',
        type: objectType['TILE'],
        width: 1024,
        height: 768,
        gravityOn: false,
        moveable: false,
        isCollider: false,
        animations: {
            none: {
                sprites: ['castle_bg']
            }
        },
        animation: 'none',
        zIndex: -3000
    },
    background_ice: {
        name: 'background_ice',
        type: objectType['TILE'],
        width: 256,
        height: 256,
        gravityOn: false,
        moveable: false,
        isCollider: false,
        animations: {
            none: {
                sprites: ['background_ice']
            }
        },
        animation: 'none',
        zIndex: -1000
    },
    background_lightblue: {
        name: 'background_lightblue',
        type: objectType['TILE'],
        width: 640,
        height: 1024,
        gravityOn: false,
        moveable: false,
        isCollider: false,
        animations: {
            none: {
                sprites: ['background_lightblue']
            }
        },
        animation: 'none',
        zIndex: -2000
    },
    background_lightblue_to_purple: {
        name: 'background_lightblue_to_purple',
        type: objectType['TILE'],
        width: 640,
        height: 1024,
        gravityOn: false,
        moveable: false,
        isCollider: true,
        animations: {
            none: {
                sprites: ['background_lightblue_to_purple']
            }
        },
        animation: 'none',
        zIndex: -2000
    },
    background_purple: {
        name: 'background_purple',
        type: objectType['TILE'],
        width: 640,
        height: 1024,
        gravityOn: false,
        moveable: false,
        isCollider: true,
        animations: {
            none: {
                sprites: ['background_purple']
            }
        },
        animation: 'none',
        zIndex: -2000
    },
    background_brown: {
        name: 'background_brown',
        type: objectType['TILE'],
        width: 640,
        height: 1024,
        gravityOn: false,
        moveable: false,
        isCollider: false,
        animations: {
            none: {
                sprites: ['background_brown']
            }
        },
        animation: 'none',
        zIndex: -2000
    },
    background_grey: {
        name: 'background_grey',
        type: objectType['TILE'],
        width: 640,
        height: 1024,
        gravityOn: false,
        moveable: false,
        isCollider: false,
        animations: {
            none: {
                sprites: ['background_grey']
            }
        },
        animation: 'none',
        zIndex: -2000
    },
    background_lightbrown_to_brown: {
        name: 'background_lightbrown_to_brown',
        type: objectType['TILE'],
        width: 256,
        height: 192,
        gravityOn: false,
        moveable: false,
        isCollider: false,
        animations: {
            none: {
                sprites: ['background_lightbrown_to_brown']
            }
        },
        animation: 'none',
        zIndex: -1999
    },
    graveyard_background: {
        name: 'graveyard_background',
        type: objectType['TILE'],
        width: 4000,
        height: 2000,
        gravityOn: false,
        moveable: false,
        isCollider: false,
        animations: {
            none: {
                sprites: ['graveyard_background']
            }
        },
        animation: 'none',
        zIndex: -1000
    },
    blackHole: {
        name: 'blackHole',
        type: objectType['TELEPORT'],
        width: 220,
        height: 220,
        gravityOn: false,
        moveable: false,
        animations: {
            none: {
                sprites: ['blackHole_1', 'blackHole_2', 'blackHole_3', 'blackHole_4', 'blackHole_5', 'blackHole_6', 'blackHole_7', 'blackHole_8', 'blackHole_9', 'blackHole_10', 'blackHole_11', 'blackHole_12', 'blackHole_13', 'blackHole_14', 'blackHole_15', 'blackHole_16', 'blackHole_17', 'blackHole_18', 'blackHole_19', 'blackHole_20', 'blackHole_21', 'blackHole_22', 'blackHole_23', 'blackHole_24', 'blackHole_25', 'blackHole_26', 'blackHole_27', 'blackHole_28', 'blackHole_29', 'blackHole_30'],
                animationFrameTime: 60
            }
        },
        animation: 'none',
        zIndex: -100
    },
    player_spawn: {
        name: 'player_spawn',
        type: objectType['PLAYER_SPAWN'],
        moveable: false,
        gravityOn: false,
        isCollider: false,
        visible: false
    },
    gem_spawn: {
        name: 'gem_spawn',
        type: objectType['GEM_SPAWN'],
        moveable: false,
        gravityOn: false,
        isCollider: false,
        visible: false
    },
    gem: {
        name: 'gem',
        type: objectType['MISC'],
        width: 53,
        height: 43,
        moveable: false,
        colliderRectangleOffset: {
            left: 0.1,
            right: 0.1,
            top: 0.1,
            bottom: 0.1
        },
        animations: {
            none: {
                sprites: ['gem_1', 'gem_2'],
                animationFrameTime: 150
            }
        },
        animation: 'none',
        hasSoul: true,
        antiStuck: true
    },
    pig_spawn: {
        name: 'pig_spawn',
        type: objectType['SPAWN'],
        moveable: false,
        gravityOn: false,
        isCollider: false,
        visible: false,
        spawning: 'pig',
        delay: 15000
    },
    penguin_spawn: {
        name: 'penguin_spawn',
        type: objectType['SPAWN'],
        moveable: false,
        gravityOn: false,
        isCollider: false,
        visible: false,
        spawning: 'penguin',
        delay: 60000
    },
    yeti_spawn: {
        name: 'yeti_spawn',
        type: objectType['SPAWN'],
        moveable: false,
        gravityOn: false,
        isCollider: false,
        visible: false,
        spawning: 'yeti',
        delay: 180000
    },
    frog_spawn: {
        name: 'frog_spawn',
        type: objectType['SPAWN'],
        moveable: false,
        gravityOn: false,
        isCollider: false,
        visible: false,
        spawning: 'frog',
        delay: 45000
    },
    starfish_spawn: {
        name: 'starfish_spawn',
        type: objectType['SPAWN'],
        moveable: false,
        gravityOn: false,
        isCollider: false,
        visible: false,
        spawning: 'starfish',
        delay: 100000
    },
    blackWidow_spawn: {
        name: 'blackWidow_spawn',
        type: objectType['SPAWN'],
        moveable: false,
        gravityOn: false,
        isCollider: false,
        visible: false,
        spawning: 'blackWidow',
        delay: 180000
    },
    snake_spawn: {
        name: 'snake_spawn',
        type: objectType['SPAWN'],
        moveable: false,
        gravityOn: false,
        isCollider: false,
        visible: false,
        spawning: 'snake',
        delay: 30000
    },
    crocodile_spawn: {
        name: 'crocodile_spawn',
        type: objectType['SPAWN'],
        moveable: false,
        gravityOn: false,
        isCollider: false,
        visible: false,
        spawning: 'crocodile',
        delay: 30000
    },
    mummy_spawn: {
        name: 'mummy_spawn',
        type: objectType['SPAWN'],
        moveable: false,
        gravityOn: false,
        isCollider: false,
        visible: false,
        spawning: 'mummy',
        delay: 180000
    },
    tyrannosaurus_spawn: {
        name: 'tyrannosaurus_spawn',
        type: objectType['SPAWN'],
        moveable: false,
        gravityOn: false,
        isCollider: false,
        visible: false,
        spawning: 'tyrannosaurus',
        delay: 60000
    },
    zombie_spawn: {
        name: 'zombie_spawn',
        type: objectType['SPAWN'],
        moveable: false,
        gravityOn: false,
        isCollider: false,
        visible: false,
        spawning: 'zombie',
        delay: 60000
    },
    alienBigInsect_spawn: {
        name: 'alienBigInsect_spawn',
        type: objectType['SPAWN'],
        moveable: false,
        gravityOn: false,
        isCollider: false,
        visible: false,
        spawning: 'alienBigInsect',
        delay: 180000
    },
    alienEye_spawn: {
        name: 'alienEye_spawn',
        type: objectType['SPAWN'],
        moveable: false,
        gravityOn: false,
        isCollider: false,
        visible: false,
        spawning: 'alienEye',
        delay: 80000
    },
    mouse_spawn: {
        name: 'mouse_spawn',
        type: objectType['SPAWN'],
        moveable: false,
        gravityOn: false,
        isCollider: false,
        visible: false,
        spawning: 'mouse',
        delay: 15000
    },
    smallDemon_spawn: {
        name: 'smallDemon_spawn',
        type: objectType['SPAWN'],
        moveable: false,
        gravityOn: false,
        isCollider: false,
        visible: false,
        spawning: 'smallDemon',
        delay: 30000
    },
    lemming_spawn: {
        name: 'lemming_spawn',
        type: objectType['SPAWN'],
        moveable: false,
        gravityOn: false,
        isCollider: false,
        visible: false,
        spawning: 'lemming',
        delay: 15000
    },
    worm_spawn: {
        name: 'worm_spawn',
        type: objectType['SPAWN'],
        moveable: false,
        gravityOn: false,
        isCollider: false,
        visible: false,
        spawning: 'worm',
        delay: 15000
    },
    cherry_spawn: {
        name: 'cherry_spawn',
        type: objectType['SPAWN'],
        moveable: false,
        gravityOn: false,
        isCollider: false,
        visible: false,
        spawning: 'cherry',
        delay: 10000
    },
    currant_spawn: {
        name: 'currant_spawn',
        type: objectType['SPAWN'],
        moveable: false,
        gravityOn: false,
        isCollider: false,
        visible: false,
        spawning: 'currant',
        delay: 10000
    },
    stone_spawn: {
        name: 'stone_spawn',
        type: objectType['SPAWN'],
        moveable: false,
        gravityOn: false,
        isCollider: false,
        visible: false,
        spawning: 'stone',
        delay: 60000
    },
    starFruit_spawn: {
        name: 'starFruit_spawn',
        type: objectType['SPAWN'],
        moveable: false,
        gravityOn: false,
        isCollider: false,
        visible: false,
        spawning: 'starFruit',
        delay: 15000
    },
    meat_spawn: {
        name: 'meat_spawn',
        type: objectType['SPAWN'],
        moveable: false,
        gravityOn: false,
        isCollider: false,
        visible: false,
        spawning: 'meat',
        delay: 25000
    },
    pumpkin_spawn: {
        name: 'pumpkin_spawn',
        type: objectType['SPAWN'],
        moveable: false,
        gravityOn: false,
        isCollider: false,
        visible: false,
        spawning: 'pumpkin',
        delay: 20000
    },
    alienFruit1_spawn: {
        name: 'alienFruit1_spawn',
        type: objectType['SPAWN'],
        moveable: false,
        gravityOn: false,
        isCollider: false,
        visible: false,
        spawning: 'alienFruit1',
        delay: 180000
    },
    alienFruit2_spawn: {
        name: 'alienFruit2_spawn',
        type: objectType['SPAWN'],
        moveable: false,
        gravityOn: false,
        isCollider: false,
        visible: false,
        spawning: 'alienFruit2',
        delay: 180000
    },
    alienFruit3_spawn: {
        name: 'alienFruit3_spawn',
        type: objectType['SPAWN'],
        moveable: false,
        gravityOn: false,
        isCollider: false,
        visible: false,
        spawning: 'alienFruit3',
        delay: 180000
    },
    seed_spawn: {
        name: 'seed_spawn',
        type: objectType['SPAWN'],
        moveable: false,
        gravityOn: false,
        isCollider: false,
        visible: false,
        spawning: 'seed',
        delay: 20000
    },
    star_spawn: {
        name: 'star_spawn',
        type: objectType['SPAWN'],
        moveable: false,
        gravityOn: false,
        isCollider: false,
        visible: false,
        spawning: 'star',
        delay: 60000
    },
    bread_spawn: {
        name: 'bread_spawn',
        type: objectType['SPAWN'],
        moveable: false,
        gravityOn: false,
        isCollider: false,
        visible: false,
        spawning: 'bread',
        delay: 20000
    },
    eggRed_spawn: {
        name: 'eggRed_spawn',
        type: objectType['SPAWN'],
        moveable: false,
        gravityOn: false,
        isCollider: false,
        visible: false,
        spawning: 'eggRed',
        delay: 30000
    },
    cosmicEgg_spawn: {
        name: 'cosmicEgg_spawn',
        type: objectType['SPAWN'],
        moveable: false,
        gravityOn: false,
        isCollider: false,
        visible: false,
        spawning: 'cosmicEgg',
        delay: 85000
    },
    ladybug_spawn: {
        name: 'ladybug_spawn',
        type: objectType['SPAWN'],
        moveable: false,
        gravityOn: false,
        isCollider: false,
        visible: false,
        spawning: 'ladybug',
        delay: 20000
    },
    woodpecker_spawn: {
        name: 'woodpecker_spawn',
        type: objectType['SPAWN'],
        moveable: false,
        gravityOn: false,
        isCollider: false,
        visible: false,
        spawning: 'woodpecker',
        delay: 90000
    },
    fishPink_spawn: {
        name: 'fishPink_spawn',
        type: objectType['SPAWN'],
        moveable: false,
        gravityOn: false,
        isCollider: false,
        visible: false,
        spawning: 'fishPink',
        delay: 25000
    },
    shark_spawn: {
        name: 'shark_spawn',
        type: objectType['SPAWN'],
        moveable: false,
        gravityOn: false,
        isCollider: false,
        visible: false,
        spawning: 'shark',
        delay: 35000
    },
    deadFish_spawn: {
        name: 'deadFish_spawn',
        type: objectType['SPAWN'],
        moveable: false,
        gravityOn: false,
        isCollider: false,
        visible: false,
        spawning: 'deadFish',
        delay: 20000
    },
    cat_spawn: {
        name: 'cat_spawn',
        type: objectType['SPAWN'],
        moveable: false,
        gravityOn: false,
        isCollider: false,
        visible: false,
        spawning: 'cat',
        delay: 20000
    },
    poo: {
        name: 'poo',
        type: objectType['FOOD'],
        width: 30,
        height: 30,
        colliderRectangleOffset: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        },
        animations: {
            none: {
                sprites: ['poo1', 'poo2'],
                animationFrameTime: 800
            }
        },
        animation: 'none'
    },
    cherry: {
        name: 'cherry',
        type: objectType['FOOD'],
        width: 44,
        height: 64,
        gravityOn: false,
        moveable: false,
        colliderRectangleOffset: {
            left: 0.05,
            right: 0.05,
            top: 0.55,
            bottom: 0
        },
        animations: {
            none: {
                sprites: ['cherry']
            }
        },
        animation: 'none',
        isFruit: true
    },
    currant: {
        name: 'currant',
        type: objectType['FOOD'],
        width: 12,
        height: 13,
        gravityOn: false,
        moveable: false,
        colliderRectangleOffset: {
            left: 0.05,
            right: 0.05,
            top: 0.05,
            bottom: 0.05
        },
        animations: {
            none: {
                sprites: ['currant']
            }
        },
        animation: 'none',
        zIndex: 101,
        isFruit: true
    },
    starFruit: {
        name: 'starFruit',
        type: objectType['FOOD'],
        width: 44,
        height: 64,
        gravityOn: false,
        moveable: false,
        colliderRectangleOffset: {
            left: 0.1,
            right: 0.1,
            top: 0.1,
            bottom: 0.1
        },
        animations: {
            none: {
                sprites: ['starFruit']
            }
        },
        animation: 'none',
        isFruit: true
    },
    starfish: {
        name: 'starfish',
        type: objectType['FOOD'],
        width: 58,
        height: 58,
        gravityOn: false,
        moveable: false,
        colliderRectangleOffset: {
            left: 0.2,
            right: 0.2,
            top: 0.2,
            bottom: 0.2
        },
        animations: {
            none: {
                sprites: ['starfish1', 'starfish1', 'starfish1', 'starfish1', 'starfish1', 'starfish1', 'starfish1', 'starfish1', 'starfish2', 'starfish3', 'starfish3', 'starfish3', 'starfish3', 'starfish3', 'starfish3', 'starfish3', 'starfish3', 'starfish3', 'starfish3', 'starfish3', 'starfish3', 'starfish3', 'starfish3', 'starfish3', 'starfish3', 'starfish3', 'starfish3', 'starfish3', 'starfish3', 'starfish3', 'starfish3', 'starfish3', 'starfish3', 'starfish3', 'starfish3', 'starfish3', 'starfish3', 'starfish3', 'starfish3', 'starfish3', 'starfish3', 'starfish3', 'starfish3', 'starfish3', 'starfish3', 'starfish3', 'starfish3', 'starfish3', 'starfish3', 'starfish3', 'starfish3', 'starfish3', 'starfish3', 'starfish3', 'starfish3', 'starfish3', 'starfish3', 'starfish2'],
                animationFrameTime: 100
            }
        },
        animation: 'none',
        hasSoul: true
    },
    meat: {
        name: 'meat',
        type: objectType['FOOD'],
        width: 90,
        height: 73,
        gravityOn: false,
        moveable: false,
        colliderRectangleOffset: {
            left: 0.05,
            right: 0.05,
            top: 0.05,
            bottom: 0
        },
        animations: {
            none: {
                sprites: ['meat']
            }
        },
        animation: 'none'
    },
    pumpkin: {
        name: 'pumpkin',
        type: objectType['FOOD'],
        width: 96,
        height: 94,
        gravityOn: false,
        moveable: false,
        colliderRectangleOffset: {
            left: 0.05,
            right: 0.05,
            top: 0.22,
            bottom: 0.05
        },
        animations: {
            none: {
                sprites: ['pumpkin']
            }
        },
        animation: 'none'
    },
    alienFruit1: {
        name: 'alienFruit1',
        type: objectType['FOOD'],
        width: 234,
        height: 276,
        gravityOn: false,
        moveable: false,
        colliderRectangleOffset: {
            left: 0.45,
            right: 0.05,
            top: 0.2,
            bottom: 0.05
        },
        animations: {
            none: {
                sprites: ['alienFruit1']
            }
        },
        animation: 'none'
    },
    alienFruit2: {
        name: 'alienFruit2',
        type: objectType['FOOD'],
        width: 121,
        height: 264,
        gravityOn: false,
        moveable: false,
        colliderRectangleOffset: {
            left: 0.05,
            right: 0.05,
            top: 0.3,
            bottom: 0
        },
        animations: {
            none: {
                sprites: ['alienFruit2']
            }
        },
        animation: 'none'
    },
    alienFruit3: {
        name: 'alienFruit3',
        type: objectType['FOOD'],
        width: 83,
        height: 294,
        gravityOn: false,
        moveable: false,
        colliderRectangleOffset: {
            left: 0.05,
            right: 0.05,
            top: 0.2,
            bottom: 0
        },
        animations: {
            none: {
                sprites: ['alienFruit3']
            }
        },
        animation: 'none'
    },
    seed: {
        name: 'seed',
        type: objectType['FOOD'],
        width: 16,
        height: 15,
        gravityOn: true,
        moveable: true,
        colliderRectangleOffset: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        },
        animations: {
            none: {
                sprites: ['seed']
            }
        },
        animation: 'none'
    },
    bread: {
        name: 'bread',
        type: objectType['FOOD'],
        width: 48,
        height: 35,
        gravityOn: false,
        moveable: false,
        colliderRectangleOffset: {
            left: 0.05,
            right: 0.05,
            top: 0.05,
            bottom: 0.02
        },
        animations: {
            none: {
                sprites: ['bread']
            }
        },
        animation: 'none',
        antiStuck: true
    },
    stone: {
        name: 'stone',
        type: objectType['FOOD'],
        width: 128,
        height: 54,
        gravityOn: false,
        moveable: false,
        colliderRectangleOffset: {
            left: 0.2,
            right: 0.16,
            top: 0.1,
            bottom: 0
        },
        animations: {
            none: {
                sprites: ['stone']
            }
        },
        animation: 'none',
        antiStuck: true
    },
    eggRed: {
        name: 'eggRed',
        type: objectType['FOOD'],
        width: 46,
        height: 64,
        gravityOn: false,
        moveable: false,
        colliderRectangleOffset: {
            left: 0.05,
            right: 0.05,
            top: 0.05,
            bottom: 0
        },
        animations: {
            none: {
                sprites: ['eggRed']
            }
        },
        animation: 'none',
        antiStuck: true
    },
    cosmicEgg: {
        name: 'cosmicEgg',
        type: objectType['FOOD'],
        width: 64,
        height: 80,
        gravityOn: false,
        moveable: false,
        colliderRectangleOffset: {
            left: 0.05,
            right: 0.05,
            top: 0.05,
            bottom: 0
        },
        animations: {
            none: {
                sprites: ['cosmicEgg']
            }
        },
        animation: 'none',
        antiStuck: true
    },
    ladybug: {
        name: 'ladybug',
        type: objectType['FOOD'],
        width: 19,
        height: 17,
        gravityOn: false,
        moveable: false,
        colliderRectangleOffset: {
            left: 0.1,
            right: 0.1,
            top: 0.1,
            bottom: 0.1
        },
        animations: {
            none: {
                sprites: ['ladybug']
            }
        },
        animation: 'none',
        hasSoul: true,
        zIndex: 9
    },
    pig: {
        name: 'pig',
        type: objectType['FOOD'],
        width: 70,
        height: 59,
        colliderRectangleOffset: {
            left: 0.1,
            right: 0.1,
            top: 0.1,
            bottom: 0
        },
        animations: {
            none: {
                sprites: ['pig']
            }
        },
        animation: 'none',
        hasSoul: true
    },
    cat: {
        name: 'cat',
        moveable: false,
        type: objectType['FOOD'],
        width: 81,
        height: 55,
        colliderRectangleOffset: {
            left: 0.1,
            right: 0.3,
            top: 0.3,
            bottom: 0
        },
        animations: {
            none: {
                sprites: ['cat1', 'cat2'],
                animationFrameTime: 1400
            }
        },
        animation: 'none',
        hasSoul: true,
        antiStuck: true
    },
    frog: {
        name: 'frog',
        type: objectType['FOOD'],
        width: 32,
        height: 40,
        moveable: false,
        colliderRectangleOffset: {
            left: 0.1,
            right: 0.1,
            top: 0.1,
            bottom: 0.06
        },
        animations: {
            idle_right: {
                sprites: ['frog_1_idle_right', 'frog_2_idle_right', 'frog_3_idle_right', 'frog_4_idle_right', 'frog_5_idle_right', 'frog_6_idle_right', 'frog_7_idle_right', 'frog_8_idle_right', 'frog_9_idle_right', 'frog_10_idle_right', 'frog_11_idle_right', 'frog_12_idle_right', 'frog_13_idle_right', 'frog_14_idle_right', 'frog_15_idle_right', 'frog_16_idle_right'],
                animationFrameTime: 80
            },
            idle_left: {
                sprites: ['frog_1_idle_left', 'frog_2_idle_left', 'frog_3_idle_left', 'frog_4_idle_left', 'frog_5_idle_left', 'frog_6_idle_left', 'frog_7_idle_left', 'frog_8_idle_left', 'frog_9_idle_left', 'frog_10_idle_left', 'frog_11_idle_left', 'frog_12_idle_left', 'frog_13_idle_left', 'frog_14_idle_left', 'frog_15_idle_left', 'frog_16_idle_left'],
                animationFrameTime: 80
            }
        },
        animation: 'idle_right',
        hasSoul: true,
        antiStuck: true
    },
    woodpecker: {
        name: 'woodpecker',
        type: objectType['FOOD'],
        width: 100,
        height: 107,
        moveable: false,
        colliderRectangleOffset: {
            left: 0.2,
            right: 0.4,
            top: 0.25,
            bottom: 0.02
        },
        animations: {
            idle: {
                sprites: ['woodpecker_1_idle', 'woodpecker_2_idle', 'woodpecker_3_idle', 'woodpecker_4_idle', 'woodpecker_5_idle', 'woodpecker_6_idle', 'woodpecker_5_idle', 'woodpecker_4_idle', 'woodpecker_3_idle', 'woodpecker_2_idle', 'woodpecker_1_idle', 'woodpecker_1_idle', 'woodpecker_2_idle', 'woodpecker_3_idle', 'woodpecker_4_idle', 'woodpecker_5_idle', 'woodpecker_6_idle', 'woodpecker_5_idle', 'woodpecker_4_idle', 'woodpecker_3_idle', 'woodpecker_2_idle', 'woodpecker_1_idle', 'woodpecker_1_idle', 'woodpecker_2_idle', 'woodpecker_3_idle', 'woodpecker_4_idle', 'woodpecker_5_idle', 'woodpecker_6_idle', 'woodpecker_5_idle', 'woodpecker_4_idle', 'woodpecker_3_idle', 'woodpecker_2_idle', 'woodpecker_1_idle', 'woodpecker_1_idle', 'woodpecker_2_idle', 'woodpecker_3_idle', 'woodpecker_4_idle', 'woodpecker_5_idle', 'woodpecker_6_idle', 'woodpecker_5_idle', 'woodpecker_4_idle', 'woodpecker_3_idle', 'woodpecker_2_idle', 'woodpecker_1_idle', 'woodpecker_1_idle', 'woodpecker_2_idle', 'woodpecker_3_idle', 'woodpecker_4_idle', 'woodpecker_5_idle', 'woodpecker_6_idle', 'woodpecker_5_idle', 'woodpecker_4_idle', 'woodpecker_3_idle', 'woodpecker_2_idle', 'woodpecker_1_idle', 'woodpecker_1_idle', 'woodpecker_2_idle', 'woodpecker_3_idle', 'woodpecker_4_idle', 'woodpecker_5_idle', 'woodpecker_6_idle', 'woodpecker_5_idle', 'woodpecker_4_idle', 'woodpecker_3_idle', 'woodpecker_2_idle', 'woodpecker_1_idle', 'woodpecker_1_idle', 'woodpecker_2_idle', 'woodpecker_3_idle', 'woodpecker_4_idle', 'woodpecker_5_idle', 'woodpecker_6_idle', 'woodpecker_5_idle', 'woodpecker_4_idle', 'woodpecker_3_idle', 'woodpecker_2_idle', 'woodpecker_1_idle', 'woodpecker_1_idle', 'woodpecker_2_idle', 'woodpecker_3_idle', 'woodpecker_4_idle', 'woodpecker_5_idle', 'woodpecker_6_idle', 'woodpecker_5_idle', 'woodpecker_4_idle', 'woodpecker_3_idle', 'woodpecker_2_idle', 'woodpecker_1_idle', 'woodpecker_1_idle', 'woodpecker_2_idle', 'woodpecker_3_idle', 'woodpecker_4_idle', 'woodpecker_5_idle', 'woodpecker_6_idle', 'woodpecker_5_idle', 'woodpecker_4_idle', 'woodpecker_3_idle', 'woodpecker_2_idle', 'woodpecker_1_idle', 'woodpecker_1_idle', 'woodpecker_2_idle', 'woodpecker_3_idle', 'woodpecker_4_idle', 'woodpecker_5_idle', 'woodpecker_6_idle', 'woodpecker_5_idle', 'woodpecker_4_idle', 'woodpecker_3_idle', 'woodpecker_2_idle', 'woodpecker_1_idle', 'woodpecker_1_idle', 'woodpecker_2_idle', 'woodpecker_3_idle', 'woodpecker_4_idle', 'woodpecker_5_idle', 'woodpecker_6_idle', 'woodpecker_5_idle', 'woodpecker_4_idle', 'woodpecker_3_idle', 'woodpecker_2_idle', 'woodpecker_1_idle', 'woodpecker_1_idle', 'woodpecker_2_idle', 'woodpecker_3_idle', 'woodpecker_4_idle', 'woodpecker_5_idle', 'woodpecker_6_idle', 'woodpecker_5_idle', 'woodpecker_4_idle', 'woodpecker_3_idle', 'woodpecker_2_idle', 'woodpecker_1_idle', 'woodpecker_1_idle', 'woodpecker_2_idle', 'woodpecker_3_idle', 'woodpecker_4_idle', 'woodpecker_5_idle', 'woodpecker_6_idle', 'woodpecker_5_idle', 'woodpecker_4_idle', 'woodpecker_3_idle', 'woodpecker_2_idle', 'woodpecker_1_idle', 'woodpecker_1_idle', 'woodpecker_2_idle', 'woodpecker_3_idle', 'woodpecker_4_idle', 'woodpecker_5_idle', 'woodpecker_6_idle', 'woodpecker_5_idle', 'woodpecker_4_idle', 'woodpecker_3_idle', 'woodpecker_2_idle', 'woodpecker_1_idle', 'woodpecker_1_idle', 'woodpecker_2_idle', 'woodpecker_3_idle', 'woodpecker_4_idle', 'woodpecker_5_idle', 'woodpecker_6_idle', 'woodpecker_5_idle', 'woodpecker_4_idle', 'woodpecker_3_idle', 'woodpecker_2_idle', 'woodpecker_1_idle', 'woodpecker_1_idle', 'woodpecker_2_idle', 'woodpecker_3_idle', 'woodpecker_4_idle', 'woodpecker_5_idle', 'woodpecker_6_idle', 'woodpecker_5_idle', 'woodpecker_4_idle', 'woodpecker_3_idle', 'woodpecker_2_idle', 'woodpecker_1_idle', 'woodpecker_1_idle', 'woodpecker_2_idle', 'woodpecker_3_idle', 'woodpecker_4_idle', 'woodpecker_5_idle', 'woodpecker_6_idle', 'woodpecker_5_idle', 'woodpecker_4_idle', 'woodpecker_3_idle', 'woodpecker_2_idle', 'woodpecker_1_idle', 'woodpecker_1_pecking', 'woodpecker_2_pecking', 'woodpecker_3_pecking', 'woodpecker_4_pecking', 'woodpecker_5_pecking', 'woodpecker_1_pecking', 'woodpecker_2_pecking', 'woodpecker_3_pecking', 'woodpecker_4_pecking', 'woodpecker_5_pecking', 'woodpecker_1_pecking', 'woodpecker_2_pecking', 'woodpecker_3_pecking', 'woodpecker_4_pecking', 'woodpecker_5_pecking', 'woodpecker_1_pecking', 'woodpecker_2_pecking', 'woodpecker_3_pecking', 'woodpecker_4_pecking', 'woodpecker_5_pecking', 'woodpecker_1_pecking', 'woodpecker_2_pecking', 'woodpecker_3_pecking', 'woodpecker_4_pecking', 'woodpecker_5_pecking', 'woodpecker_1_pecking', 'woodpecker_2_pecking', 'woodpecker_3_pecking', 'woodpecker_4_pecking', 'woodpecker_5_pecking', 'woodpecker_1_pecking', 'woodpecker_2_pecking', 'woodpecker_3_pecking', 'woodpecker_4_pecking', 'woodpecker_5_pecking', 'woodpecker_1_pecking', 'woodpecker_2_pecking', 'woodpecker_3_pecking', 'woodpecker_4_pecking', 'woodpecker_5_pecking', 'woodpecker_1_pecking', 'woodpecker_2_pecking', 'woodpecker_3_pecking', 'woodpecker_4_pecking', 'woodpecker_5_pecking', 'woodpecker_1_pecking', 'woodpecker_2_pecking', 'woodpecker_3_pecking', 'woodpecker_4_pecking', 'woodpecker_5_pecking', 'woodpecker_1_pecking', 'woodpecker_2_pecking', 'woodpecker_3_pecking', 'woodpecker_4_pecking', 'woodpecker_5_pecking'],
                animationFrameTime: 45
            }
        },
        animation: 'idle',
        hasSoul: true
    },
    deadFish: {
        name: 'deadFish',
        moveable: false,
        type: objectType['FOOD'],
        width: 60,
        height: 35,
        colliderRectangleOffset: {
            left: 0.1,
            right: 0.1,
            top: 0.1,
            bottom: 0.1
        },
        animations: {
            none: {
                sprites: ['deadFish']
            }
        },
        animation: 'none',
        antiStuck: true
    },
    mouse: {
        name: 'mouse',
        type: objectType['FOOD'],
        width: 78,
        height: 30,
        colliderRectangleOffset: {
            left: 0.1,
            right: 0.1,
            top: 0.1,
            bottom: 0.06
        },
        animations: {
            running_right: {
                sprites: ['mouse_1_right', 'mouse_2_right', 'mouse_3_right', 'mouse_4_right', 'mouse_5_right', 'mouse_6_right', 'mouse_7_right', 'mouse_8_right', 'mouse_9_right', 'mouse_8_right', 'mouse_7_right', 'mouse_6_right', 'mouse_5_right', 'mouse_4_right', 'mouse_3_right', 'mouse_2_right'],
                animationFrameTime: 80
            },
            running_left: {
                sprites: ['mouse_1_left', 'mouse_2_left', 'mouse_3_left', 'mouse_4_left', 'mouse_5_left', 'mouse_6_left', 'mouse_7_left', 'mouse_8_left', 'mouse_9_left', 'mouse_8_left', 'mouse_7_left', 'mouse_6_left', 'mouse_5_left', 'mouse_4_left', 'mouse_3_left', 'mouse_2_left'],
                animationFrameTime: 80
            },
            idle_right: {
                sprites: ['mouse_1_idle_right', 'mouse_2_idle_right', 'mouse_3_idle_right', 'mouse_4_idle_right', 'mouse_5_idle_right', 'mouse_6_idle_right', 'mouse_7_idle_right', 'mouse_6_idle_right', 'mouse_5_idle_right', 'mouse_4_idle_right', 'mouse_3_idle_right', 'mouse_2_idle_right'],
                animationFrameTime: 80
            },
            idle_left: {
                sprites: ['mouse_1_idle_left', 'mouse_2_idle_left', 'mouse_3_idle_left', 'mouse_4_idle_left', 'mouse_5_idle_left', 'mouse_6_idle_left', 'mouse_7_idle_left', 'mouse_6_idle_left', 'mouse_5_idle_left', 'mouse_4_idle_left', 'mouse_3_idle_left', 'mouse_2_idle_left'],
                animationFrameTime: 80
            }
        },
        animation: 'idle_right',
        hasSoul: true
    },
    smallDemon: {
        name: 'smallDemon',
        fullName: 'Small Demon',
        type: objectType['FOOD'],
        width: 60,
        height: 74,
        colliderRectangleOffset: {
            left: 0.05,
            right: 0.05,
            top: 0.06,
            bottom: 0.02
        },
        animations: {
            running_right: {
                sprites: ['smallDemon_1_right', 'smallDemon_2_right', 'smallDemon_3_right', 'smallDemon_4_right', 'smallDemon_5_right', 'smallDemon_6_right', 'smallDemon_7_right', 'smallDemon_8_right'],
                animationFrameTime: 80
            },
            running_left: {
                sprites: ['smallDemon_1_left', 'smallDemon_2_left', 'smallDemon_3_left', 'smallDemon_4_left', 'smallDemon_5_left', 'smallDemon_6_left', 'smallDemon_7_left', 'smallDemon_8_left'],
                animationFrameTime: 80
            }
        },
        animation: 'running_right',
        hasSoul: true
    },
    lemming: {
        name: 'lemming',
        type: objectType['FOOD'],
        width: 71,
        height: 43,
        colliderRectangleOffset: {
            left: 0.11,
            right: 0.11,
            top: 0.24,
            bottom: 0.06
        },
        animations: {
            running_right: {
                sprites: ['lemming_1_right', 'lemming_2_right', 'lemming_3_right', 'lemming_4_right', 'lemming_5_right', 'lemming_6_right', 'lemming_7_right', 'lemming_8_right', 'lemming_9_right', 'lemming_10_right', 'lemming_11_right', 'lemming_12_right', 'lemming_13_right', 'lemming_14_right', 'lemming_15_right'],
                animationFrameTime: 80
            },
            running_left: {
                sprites: ['lemming_1_left', 'lemming_2_left', 'lemming_3_left', 'lemming_4_left', 'lemming_5_left', 'lemming_6_left', 'lemming_7_left', 'lemming_8_left', 'lemming_9_left', 'lemming_10_left', 'lemming_11_left', 'lemming_12_left', 'lemming_13_left', 'lemming_14_left', 'lemming_15_left'],
                animationFrameTime: 80
            },
            idle_right: {
                sprites: ['lemming_1_idle_right', 'lemming_2_idle_right', 'lemming_3_idle_right', 'lemming_4_idle_right', 'lemming_5_idle_right', 'lemming_6_idle_right', 'lemming_7_idle_right', 'lemming_6_idle_right', 'lemming_5_idle_right', 'lemming_4_idle_right', 'lemming_3_idle_right', 'lemming_2_idle_right'],
                animationFrameTime: 40
            },
            idle_left: {
                sprites: ['lemming_1_idle_left', 'lemming_2_idle_left', 'lemming_3_idle_left', 'lemming_4_idle_left', 'lemming_5_idle_left', 'lemming_6_idle_left', 'lemming_7_idle_left', 'lemming_6_idle_left', 'lemming_5_idle_left', 'lemming_4_idle_left', 'lemming_3_idle_left', 'lemming_2_idle_left'],
                animationFrameTime: 40
            }
        },
        animation: 'idle_right',
        hasSoul: true
    },
    penguin: {
        name: 'penguin',
        type: objectType['FOOD'],
        width: 63,
        height: 77,
        colliderRectangleOffset: {
            left: 0.1,
            right: 0.1,
            top: 0.1,
            bottom: 0.06
        },
        animations: {
            running_right: {
                sprites: ['penguin_1_right', 'penguin_2_right', 'penguin_3_right', 'penguin_4_right', 'penguin_5_right', 'penguin_6_right', 'penguin_7_right', 'penguin_8_right', 'penguin_9_right', 'penguin_10_right', 'penguin_11_right'],
                animationFrameTime: 80
            },
            running_left: {
                sprites: ['penguin_1_left', 'penguin_2_left', 'penguin_3_left', 'penguin_4_left', 'penguin_5_left', 'penguin_6_left', 'penguin_7_left', 'penguin_8_left', 'penguin_9_left', 'penguin_10_left', 'penguin_11_left'],
                animationFrameTime: 80
            },
            idle_right: {
                sprites: ['penguin_1_idle_right', 'penguin_2_idle_right', 'penguin_3_idle_right', 'penguin_4_idle_right', 'penguin_3_idle_right', 'penguin_2_idle_right'],
                animationFrameTime: 150
            },
            idle_left: {
                sprites: ['penguin_1_idle_left', 'penguin_2_idle_left', 'penguin_3_idle_left', 'penguin_4_idle_left', 'penguin_3_idle_left', 'penguin_2_idle_left'],
                animationFrameTime: 150
            }
        },
        animation: 'idle_right',
        hasSoul: true
    },
    worm: {
        name: 'worm',
        type: objectType['FOOD'],
        width: 78,
        height: 45,
        colliderRectangleOffset: {
            left: 0.15,
            right: 0.15,
            top: 0.15,
            bottom: 0.23
        },
        animations: {
            running_right: {
                sprites: ['worm_1_right', 'worm_2_right', 'worm_3_right', 'worm_4_right', 'worm_5_right', 'worm_6_right', 'worm_7_right', 'worm_8_right', 'worm_9_right', 'worm_8_right', 'worm_7_right', 'worm_6_right', 'worm_5_right', 'worm_4_right', 'worm_3_right', 'worm_2_right'],
                animationFrameTime: 80
            },
            running_left: {
                sprites: ['worm_1_left', 'worm_2_left', 'worm_3_left', 'worm_4_left', 'worm_5_left', 'worm_6_left', 'worm_7_left', 'worm_8_left', 'worm_9_left', 'worm_8_left', 'worm_7_left', 'worm_6_left', 'worm_5_left', 'worm_4_left', 'worm_3_left', 'worm_2_left'],
                animationFrameTime: 80
            },
            idle_right: {
                sprites: ['worm_1_idle_right', 'worm_2_idle_right', 'worm_3_idle_right', 'worm_4_idle_right', 'worm_5_idle_right', 'worm_6_idle_right', 'worm_7_idle_right', 'worm_8_idle_right', 'worm_9_idle_right', 'worm_10_idle_right', 'worm_11_idle_right', 'worm_12_idle_right', 'worm_13_idle_right', 'worm_14_idle_right', 'worm_15_idle_right'],
                animationFrameTime: 80
            },
            idle_left: {
                sprites: ['worm_1_idle_left', 'worm_2_idle_left', 'worm_3_idle_left', 'worm_4_idle_left', 'worm_5_idle_left', 'worm_6_idle_left', 'worm_7_idle_left', 'worm_8_idle_left', 'worm_9_idle_left', 'worm_10_idle_left', 'worm_11_idle_left', 'worm_12_idle_left', 'worm_13_idle_left', 'worm_14_idle_left', 'worm_15_idle_left'],
                animationFrameTime: 80
            }
        },
        animation: 'idle_right',
        hasSoul: true
    },
    alienBigInsect: {
        name: 'alienBigInsect',
        fullName: 'Cosmic Big Insect',
        type: objectType['FOOD'],
        width: 340,
        height: 300,
        colliderRectangleOffset: {
            left: 0.2,
            right: 0.2,
            top: 0.45,
            bottom: 0.16
        },
        animations: {
            running_right: {
                sprites: ['alienBigInsect_1_right', 'alienBigInsect_2_right', 'alienBigInsect_3_right', 'alienBigInsect_4_right', 'alienBigInsect_5_right', 'alienBigInsect_6_right', 'alienBigInsect_7_right', 'alienBigInsect_8_right', 'alienBigInsect_9_right', 'alienBigInsect_10_right'],
                animationFrameTime: 80
            },
            running_left: {
                sprites: ['alienBigInsect_1_left', 'alienBigInsect_2_left', 'alienBigInsect_3_left', 'alienBigInsect_4_left', 'alienBigInsect_5_left', 'alienBigInsect_6_left', 'alienBigInsect_7_left', 'alienBigInsect_8_left', 'alienBigInsect_9_left', 'alienBigInsect_10_left'],
                animationFrameTime: 80
            },
            idle_right: {
                sprites: ['alienBigInsect_1_idle_right', 'alienBigInsect_2_idle_right', 'alienBigInsect_3_idle_right', 'alienBigInsect_4_idle_right', 'alienBigInsect_5_idle_right', 'alienBigInsect_6_idle_right', 'alienBigInsect_5_idle_right', 'alienBigInsect_4_idle_right', 'alienBigInsect_3_idle_right', 'alienBigInsect_2_idle_right'],
                animationFrameTime: 80
            },
            idle_left: {
                sprites: ['alienBigInsect_1_idle_left', 'alienBigInsect_2_idle_left', 'alienBigInsect_3_idle_left', 'alienBigInsect_4_idle_left', 'alienBigInsect_5_idle_left', 'alienBigInsect_6_idle_left', 'alienBigInsect_5_idle_left', 'alienBigInsect_4_idle_left', 'alienBigInsect_3_idle_left', 'alienBigInsect_2_idle_left'],
                animationFrameTime: 80
            }
        },
        animation: 'idle_right',
        hasSoul: true
    },
    blackWidow: {
        name: 'blackWidow',
        fullName: 'Black Widow',
        type: objectType['FOOD'],
        width: 601,
        height: 434,
        colliderRectangleOffset: {
            left: 0.2,
            right: 0.2,
            top: 0.3,
            bottom: 0.12
        },
        animations: {
            running_right: {
                sprites: ['blackWidow_1_right', 'blackWidow_2_right', 'blackWidow_3_right', 'blackWidow_4_right', 'blackWidow_5_right', 'blackWidow_6_right', 'blackWidow_7_right', 'blackWidow_8_right'],
                animationFrameTime: 80
            },
            running_left: {
                sprites: ['blackWidow_1_left', 'blackWidow_2_left', 'blackWidow_3_left', 'blackWidow_4_left', 'blackWidow_5_left', 'blackWidow_6_left', 'blackWidow_7_left', 'blackWidow_8_left'],
                animationFrameTime: 80
            },
            idle_right: {
                sprites: ['blackWidow_1_idle_right', 'blackWidow_2_idle_right', 'blackWidow_3_idle_right', 'blackWidow_4_idle_right', 'blackWidow_5_idle_right', 'blackWidow_6_idle_right', 'blackWidow_7_idle_right', 'blackWidow_6_idle_right', 'blackWidow_5_idle_right', 'blackWidow_4_idle_right', 'blackWidow_3_idle_right', 'blackWidow_2_idle_right'],
                animationFrameTime: 90
            },
            idle_left: {
                sprites: ['blackWidow_1_idle_left', 'blackWidow_2_idle_left', 'blackWidow_3_idle_left', 'blackWidow_4_idle_left', 'blackWidow_5_idle_left', 'blackWidow_6_idle_left', 'blackWidow_7_idle_left', 'blackWidow_6_idle_left', 'blackWidow_5_idle_left', 'blackWidow_4_idle_left', 'blackWidow_3_idle_left', 'blackWidow_2_idle_left'],
                animationFrameTime: 90
            }
        },
        animation: 'idle_right',
        hasSoul: true
    },
    mummy: {
        name: 'mummy',
        type: objectType['FOOD'],
        width: 286,
        height: 382,
        colliderRectangleOffset: {
            left: 0.18,
            right: 0.24,
            top: 0,
            bottom: 0
        },
        animations: {
            running_right: {
                sprites: ['mummy_1_right', 'mummy_2_right', 'mummy_3_right', 'mummy_4_right', 'mummy_5_right', 'mummy_6_right', 'mummy_7_right', 'mummy_8_right', 'mummy_9_right', 'mummy_10_right', 'mummy_11_right', 'mummy_12_right', 'mummy_13_right', 'mummy_14_right', 'mummy_15_right'],
                animationFrameTime: 80
            },
            running_left: {
                sprites: ['mummy_1_left', 'mummy_2_left', 'mummy_3_left', 'mummy_4_left', 'mummy_5_left', 'mummy_6_left', 'mummy_7_left', 'mummy_8_left', 'mummy_9_left', 'mummy_10_left', 'mummy_11_left', 'mummy_12_left', 'mummy_13_left', 'mummy_14_left', 'mummy_15_left'],
                animationFrameTime: 80
            },
            idle_right: {
                sprites: ['mummy_1_idle_right', 'mummy_2_idle_right', 'mummy_3_idle_right', 'mummy_4_idle_right', 'mummy_5_idle_right', 'mummy_6_idle_right', 'mummy_5_idle_right', 'mummy_4_idle_right', 'mummy_3_idle_right', 'mummy_2_idle_right'],
                animationFrameTime: 80
            },
            idle_left: {
                sprites: ['mummy_1_idle_left', 'mummy_2_idle_left', 'mummy_3_idle_left', 'mummy_4_idle_left', 'mummy_5_idle_left', 'mummy_6_idle_left', 'mummy_5_idle_left', 'mummy_4_idle_left', 'mummy_3_idle_left', 'mummy_2_idle_left'],
                animationFrameTime: 80
            }
        },
        animation: 'idle_right',
        hasSoul: true
    },
    yeti: {
        name: 'yeti',
        type: objectType['FOOD'],
        width: 427,
        height: 427,
        colliderRectangleOffset: {
            left: 0.285,
            right: 0.285,
            top: 0.25,
            bottom: 0.06
        },
        animations: {
            running_right: {
                sprites: ['yeti_1_right', 'yeti_2_right', 'yeti_3_right', 'yeti_4_right', 'yeti_5_right', 'yeti_6_right', 'yeti_7_right', 'yeti_8_right', 'yeti_9_right', 'yeti_10_right'],
                animationFrameTime: 80
            },
            running_left: {
                sprites: ['yeti_1_left', 'yeti_2_left', 'yeti_3_left', 'yeti_4_left', 'yeti_5_left', 'yeti_6_left', 'yeti_7_left', 'yeti_8_left', 'yeti_9_left', 'yeti_10_left'],
                animationFrameTime: 80
            },
            idle_right: {
                sprites: ['yeti_1_idle_right', 'yeti_2_idle_right', 'yeti_3_idle_right', 'yeti_4_idle_right', 'yeti_5_idle_right', 'yeti_6_idle_right', 'yeti_5_idle_right', 'yeti_4_idle_right', 'yeti_3_idle_right', 'yeti_2_idle_right'],
                animationFrameTime: 80
            },
            idle_left: {
                sprites: ['yeti_1_idle_left', 'yeti_2_idle_left', 'yeti_3_idle_left', 'yeti_4_idle_left', 'yeti_5_idle_left', 'yeti_6_idle_left', 'yeti_5_idle_left', 'yeti_4_idle_left', 'yeti_3_idle_left', 'yeti_2_idle_left'],
                animationFrameTime: 80
            }
        },
        animation: 'idle_right',
        hasSoul: true
    },
    tyrannosaurus: {
        name: 'tyrannosaurus',
        type: objectType['FOOD'],
        width: 504,
        height: 427,
        colliderRectangleOffset: {
            left: 0.25,
            right: 0.25,
            top: 0.345,
            bottom: 0.14
        },
        animations: {
            running_right: {
                sprites: ['tyrannosaurus_1_right', 'tyrannosaurus_2_right', 'tyrannosaurus_3_right', 'tyrannosaurus_4_right', 'tyrannosaurus_5_right', 'tyrannosaurus_6_right', 'tyrannosaurus_7_right', 'tyrannosaurus_8_right', 'tyrannosaurus_9_right', 'tyrannosaurus_10_right', 'tyrannosaurus_11_right', 'tyrannosaurus_12_right', 'tyrannosaurus_13_right', 'tyrannosaurus_14_right', 'tyrannosaurus_15_right'],
                animationFrameTime: 80
            },
            running_left: {
                sprites: ['tyrannosaurus_1_left', 'tyrannosaurus_2_left', 'tyrannosaurus_3_left', 'tyrannosaurus_4_left', 'tyrannosaurus_5_left', 'tyrannosaurus_6_left', 'tyrannosaurus_7_left', 'tyrannosaurus_8_left', 'tyrannosaurus_9_left', 'tyrannosaurus_10_left', 'tyrannosaurus_11_left', 'tyrannosaurus_12_left', 'tyrannosaurus_13_left', 'tyrannosaurus_14_left', 'tyrannosaurus_15_left'],
                animationFrameTime: 80
            },
            idle_right: {
                sprites: ['tyrannosaurus_1_idle_right', 'tyrannosaurus_2_idle_right', 'tyrannosaurus_3_idle_right', 'tyrannosaurus_4_idle_right', 'tyrannosaurus_5_idle_right', 'tyrannosaurus_6_idle_right', 'tyrannosaurus_7_idle_right', 'tyrannosaurus_8_idle_right', 'tyrannosaurus_9_idle_right', 'tyrannosaurus_10_idle_right', 'tyrannosaurus_9_idle_right', 'tyrannosaurus_8_idle_right', 'tyrannosaurus_7_idle_right', 'tyrannosaurus_6_idle_right', 'tyrannosaurus_5_idle_right', 'tyrannosaurus_4_idle_right', 'tyrannosaurus_3_idle_right', 'tyrannosaurus_2_idle_right'],
                animationFrameTime: 80
            },
            idle_left: {
                sprites: ['tyrannosaurus_1_idle_left', 'tyrannosaurus_2_idle_left', 'tyrannosaurus_3_idle_left', 'tyrannosaurus_4_idle_left', 'tyrannosaurus_5_idle_left', 'tyrannosaurus_6_idle_left', 'tyrannosaurus_7_idle_left', 'tyrannosaurus_8_idle_left', 'tyrannosaurus_9_idle_left', 'tyrannosaurus_10_idle_left', 'tyrannosaurus_9_idle_left', 'tyrannosaurus_8_idle_left', 'tyrannosaurus_7_idle_left', 'tyrannosaurus_6_idle_left', 'tyrannosaurus_5_idle_left', 'tyrannosaurus_4_idle_left', 'tyrannosaurus_3_idle_left', 'tyrannosaurus_2_idle_left'],
                animationFrameTime: 80
            }
        },
        animation: 'idle_right',
        hasSoul: true
    },
    zombie: {
        name: 'zombie',
        type: objectType['FOOD'],
        width: 184,
        height: 266,
        colliderRectangleOffset: {
            left: 0.22,
            right: 0.22,
            top: 0.12,
            bottom: 0.07
        },
        animations: {
            running_right: {
                sprites: ['zombie_1_right', 'zombie_2_right', 'zombie_3_right', 'zombie_4_right', 'zombie_5_right', 'zombie_6_right', 'zombie_7_right', 'zombie_8_right', 'zombie_9_right', 'zombie_10_right', 'zombie_11_right', 'zombie_12_right', 'zombie_13_right', 'zombie_14_right', 'zombie_15_right', 'zombie_16_right'],
                animationFrameTime: 80
            },
            running_left: {
                sprites: ['zombie_1_left', 'zombie_2_left', 'zombie_3_left', 'zombie_4_left', 'zombie_5_left', 'zombie_6_left', 'zombie_7_left', 'zombie_8_left', 'zombie_9_left', 'zombie_10_left', 'zombie_11_left', 'zombie_12_left', 'zombie_13_left', 'zombie_14_left', 'zombie_15_left', 'zombie_16_left'],
                animationFrameTime: 80
            },
            idle_right: {
                sprites: ['zombie_1_idle_right', 'zombie_2_idle_right', 'zombie_3_idle_right', 'zombie_4_idle_right', 'zombie_5_idle_right', 'zombie_6_idle_right', 'zombie_7_idle_right', 'zombie_8_idle_right', 'zombie_9_idle_right', 'zombie_10_idle_right', 'zombie_11_idle_right', 'zombie_12_idle_right', 'zombie_13_idle_right', 'zombie_14_idle_right', 'zombie_15_idle_right', 'zombie_16_idle_right'],
                animationFrameTime: 80
            },
            idle_left: {
                sprites: ['zombie_1_idle_left', 'zombie_2_idle_left', 'zombie_3_idle_left', 'zombie_4_idle_left', 'zombie_5_idle_left', 'zombie_6_idle_left', 'zombie_7_idle_left', 'zombie_8_idle_left', 'zombie_9_idle_left', 'zombie_10_idle_left', 'zombie_11_idle_left', 'zombie_12_idle_left', 'zombie_13_idle_left', 'zombie_14_idle_left', 'zombie_15_idle_left', 'zombie_16_idle_left'],
                animationFrameTime: 80
            }
        },
        animation: 'idle_right',
        hasSoul: true
    },
    alienEye: {
        name: 'alienEye',
        fullName: 'Cosmic Eye',
        type: objectType['FOOD'],
        width: 130,
        height: 150,
        colliderRectangleOffset: {
            left: 0.23,
            right: 0.23,
            top: 0.3,
            bottom: 0.15
        },
        animations: {
            running_right: {
                sprites: ['alienEye_1_right', 'alienEye_2_right', 'alienEye_3_right', 'alienEye_4_right', 'alienEye_5_right', 'alienEye_6_right', 'alienEye_7_right', 'alienEye_8_right', 'alienEye_9_right', 'alienEye_10_right'],
                animationFrameTime: 80
            },
            running_left: {
                sprites: ['alienEye_1_left', 'alienEye_2_left', 'alienEye_3_left', 'alienEye_4_left', 'alienEye_5_left', 'alienEye_6_left', 'alienEye_7_left', 'alienEye_8_left', 'alienEye_9_left', 'alienEye_10_left'],
                animationFrameTime: 80
            },
            idle_right: {
                sprites: ['alienEye_1_idle_right', 'alienEye_2_idle_right', 'alienEye_3_idle_right', 'alienEye_4_idle_right', 'alienEye_5_idle_right', 'alienEye_6_idle_right', 'alienEye_5_idle_right', 'alienEye_4_idle_right', 'alienEye_3_idle_right', 'alienEye_2_idle_right'],
                animationFrameTime: 80
            },
            idle_left: {
                sprites: ['alienEye_1_idle_left', 'alienEye_2_idle_left', 'alienEye_3_idle_left', 'alienEye_4_idle_left', 'alienEye_5_idle_left', 'alienEye_6_idle_left', 'alienEye_5_idle_left', 'alienEye_4_idle_left', 'alienEye_3_idle_left', 'alienEye_2_idle_left'],
                animationFrameTime: 80
            }
        },
        animation: 'idle_right',
        hasSoul: true
    },
    snake: {
        name: 'snake',
        type: objectType['FOOD'],
        width: 131,
        height: 75,
        colliderRectangleOffset: {
            left: 0.15,
            right: 0.15,
            top: 0.45,
            bottom: 0.06
        },
        animations: {
            running_right: {
                sprites: ['snake_1_right', 'snake_2_right', 'snake_3_right', 'snake_4_right', 'snake_5_right', 'snake_4_right', 'snake_3_right', 'snake_2_right'],
                animationFrameTime: 80
            },
            running_left: {
                sprites: ['snake_1_left', 'snake_2_left', 'snake_3_left', 'snake_4_left', 'snake_5_left', 'snake_4_left', 'snake_3_left', 'snake_2_left'],
                animationFrameTime: 80
            },
            idle_right: {
                sprites: ['snake_1_idle_right', 'snake_2_idle_right', 'snake_3_idle_right', 'snake_4_idle_right', 'snake_5_idle_right', 'snake_6_idle_right', 'snake_7_idle_right', 'snake_8_idle_right', 'snake_9_idle_right', 'snake_10_idle_right', 'snake_11_idle_right', 'snake_12_idle_right', 'snake_13_idle_right', 'snake_14_idle_right', 'snake_15_idle_right', 'snake_16_idle_right', 'snake_17_idle_right', 'snake_18_idle_right', 'snake_19_idle_right', 'snake_20_idle_right'],
                animationFrameTime: 80
            },
            idle_left: {
                sprites: ['snake_1_idle_left', 'snake_2_idle_left', 'snake_3_idle_left', 'snake_4_idle_left', 'snake_5_idle_left', 'snake_6_idle_left', 'snake_7_idle_left', 'snake_8_idle_left', 'snake_9_idle_left', 'snake_10_idle_left', 'snake_11_idle_left', 'snake_12_idle_left', 'snake_13_idle_left', 'snake_14_idle_left', 'snake_15_idle_left', 'snake_16_idle_left', 'snake_17_idle_left', 'snake_18_idle_left', 'snake_19_idle_left', 'snake_20_idle_left'],
                animationFrameTime: 80
            }
        },
        animation: 'idle_right',
        hasSoul: true
    },
    crocodile: {
        name: 'crocodile',
        type: objectType['FOOD'],
        width: 270,
        height: 138,
        colliderRectangleOffset: {
            left: 0.055,
            right: 0.055,
            top: 0.5,
            bottom: 0.135
        },
        animations: {
            running_right: {
                sprites: ['crocodile_1_right', 'crocodile_2_right', 'crocodile_3_right', 'crocodile_4_right', 'crocodile_5_right', 'crocodile_6_right', 'crocodile_7_right', 'crocodile_8_right', 'crocodile_9_right', 'crocodile_10_right', 'crocodile_11_right', 'crocodile_12_right', 'crocodile_13_right', 'crocodile_14_right', 'crocodile_15_right'],
                animationFrameTime: 80
            },
            running_left: {
                sprites: ['crocodile_1_left', 'crocodile_2_left', 'crocodile_3_left', 'crocodile_4_left', 'crocodile_5_left', 'crocodile_6_left', 'crocodile_7_left', 'crocodile_8_left', 'crocodile_9_left', 'crocodile_10_left', 'crocodile_11_left', 'crocodile_12_left', 'crocodile_13_left', 'crocodile_14_left', 'crocodile_15_left'],
                animationFrameTime: 80
            },
            idle_right: {
                sprites: ['crocodile_1_idle_right', 'crocodile_2_idle_right', 'crocodile_3_idle_right', 'crocodile_4_idle_right', 'crocodile_5_idle_right', 'crocodile_6_idle_right', 'crocodile_7_idle_right', 'crocodile_8_idle_right', 'crocodile_9_idle_right', 'crocodile_10_idle_right', 'crocodile_11_idle_right'],
                animationFrameTime: 80
            },
            idle_left: {
                sprites: ['crocodile_1_idle_left', 'crocodile_2_idle_left', 'crocodile_3_idle_left', 'crocodile_4_idle_left', 'crocodile_5_idle_left', 'crocodile_6_idle_left', 'crocodile_7_idle_left', 'crocodile_8_idle_left', 'crocodile_9_idle_left', 'crocodile_10_idle_left', 'crocodile_11_idle_left'],
                animationFrameTime: 80
            }
        },
        animation: 'idle_right',
        hasSoul: true
    },
    shark: {
        name: 'shark',
        type: objectType['FOOD'],
        width: 267,
        height: 163,
        colliderRectangleOffset: {
            left: 0.17,
            right: 0.17,
            top: 0.28,
            bottom: 0.15
        },
        animations: {
            running_right: {
                sprites: ['shark_1_right', 'shark_2_right', 'shark_3_right', 'shark_4_right', 'shark_5_right', 'shark_6_right', 'shark_5_right', 'shark_4_right', 'shark_3_right', 'shark_2_right'],
                animationFrameTime: 80
            },
            running_left: {
                sprites: ['shark_1_left', 'shark_2_left', 'shark_3_left', 'shark_4_left', 'shark_5_left', 'shark_6_left', 'shark_5_left', 'shark_4_left', 'shark_3_left', 'shark_2_left'],
                animationFrameTime: 80
            }
        },
        animation: 'idle_right',
        hasSoul: true
    },
    fishPink: {
        name: 'fishPink',
        type: objectType['FOOD'],
        width: 55,
        height: 55,
        colliderRectangleOffset: {
            left: 0.05,
            right: 0.1,
            top: 0.2,
            bottom: 0.16
        },
        animations: {
            running_right: {
                sprites: ['fishPink_1_right', 'fishPink_2_right'],
                animationFrameTime: 400
            },
            running_left: {
                sprites: ['fishPink_1_left', 'fishPink_2_left'],
                animationFrameTime: 400
            },
            idle_right: {
                sprites: ['fishPink_1_right']
            },
            idle_left: {
                sprites: ['fishPink_1_left']
            }
        },
        animation: 'running_right',
        hasSoul: true
    },
    flower_1_face_on_red: {
        name: 'flower_1_face_on_red',
        type: objectType['FOOD'],
        width: 64,
        height: 64,
        gravityOn: false,
        moveable: false,
        isCollider: true,
        colliderRectangleOffset: {
            left: 0.15,
            right: 0.15,
            top: 0.15,
            bottom: 0.1
        },
        animations: {
            none: {
                sprites: ['flower_1_face_on_red']
            }
        },
        animation: 'none',
        antiStuck: true
    },
    fireball: {
        name: 'fireball',
        type: objectType['MISC'],
        width: 90,
        height: 68,
        gravityOn: false,
        moveable: true,
        isCollider: true,
        colliderRectangleOffset: {
            left: 0.15,
            right: 0.15,
            top: 0.16,
            bottom: 0.1
        },
        animations: {
            left: {
                sprites: ['fireball_1_left', 'fireball_2_left', 'fireball_3_left', 'fireball_4_left', 'fireball_5_left', 'fireball_6_left'],
                animationFrameTime: 80
            },
            right: {
                sprites: ['fireball_1_right', 'fireball_2_right', 'fireball_3_right', 'fireball_4_right', 'fireball_5_right', 'fireball_6_right'],
                animationFrameTime: 80
            }
        },
        animation: 'right',
        zIndex: 11
    },
    boss1: {
        name: 'boss1',
        fullName: 'Demonic Angel',
        type: objectType['BOSS'],
        width: 345,
        height: 389,
        colliderRectangleOffset: {
            left: 0.22,
            right: 0.22,
            top: 0.1,
            bottom: 0.21
        },
        animations: {
            flying_left: {
                sprites: ['boss1_1_right', 'boss1_2_right', 'boss1_3_right', 'boss1_4_right', 'boss1_3_right', 'boss1_2_right'],
                animationFrameTime: 135
            },
            flying_right: {
                sprites: ['boss1_1_left', 'boss1_2_left', 'boss1_3_left', 'boss1_4_left', 'boss1_3_left', 'boss1_2_left'],
                animationFrameTime: 135
            }
        },
        animation: 'flying_right',
        eatsSouls: true
    },
    boss1_spawn: {
        name: 'boss1_spawn',
        type: objectType['SPAWN'],
        moveable: false,
        gravityOn: false,
        isCollider: false,
        visible: false,
        spawning: 'boss1',
        inBossArena: true,
        delay: 1000 * 60 * 60 - 1
    }
};
var expTable = {
    fly: {
        next: 'butterfly',
        exp: 30
    },
    butterfly: {
        next: 'mosquito',
        exp: 50
    },
    mosquito: {
        next: 'wasp',
        exp: 70
    },
    wasp: {
        next: 'dragonfly',
        exp: 240
    },
    dragonfly: {
        next: 'pigeon',
        exp: 260
    },
    pigeon: {
        next: 'duck',
        exp: 300
    },
    duck: {
        next: 'blueBird',
        exp: 350
    },
    blueBird: {
        next: 'parrot',
        exp: 400
    },
    parrot: {
        next: 'stork',
        exp: 450
    },
    stork: {
        next: 'redBird',
        exp: 500
    },
    redBird: {
        next: 'pelican',
        exp: 550
    },
    pelican: {
        next: 'turkey',
        exp: 850
    },
    turkey: {
        next: 'bat',
        exp: 750
    },
    bat: {
        next: 'seagull',
        exp: 800
    },
    seagull: {
        next: 'commonBlackbird',
        exp: 2000
    },
    commonBlackbird: {
        next: 'hornet',
        exp: 1000
    },
    hornet: {
        next: 'vulture',
        exp: 1000
    },
    vulture: {
        next: 'owl',
        exp: 600
    },
    owl: {
        next: 'pompadourCotinga',
        exp: 1400
    },
    pompadourCotinga: {
        next: 'falcon',
        exp: 1700
    },
    falcon: {
        next: 'eagle',
        exp: 2000
    },
    eagle: {
        next: 'snowyOwl',
        exp: 2400
    },
    snowyOwl: {
        next: 'hawk',
        exp: 5000
    },
    hawk: {
        next: 'raven',
        exp: 6000
    },
    raven: {
        next: 'madBat',
        exp: 8000
    },
    madBat: {
        next: 'pterodactylChild',
        exp: 10000
    },
    pterodactylChild: {
        next: 'pterodactyl',
        exp: 10000
    },
    pterodactyl: {
        next: 'swampMonster',
        exp: 30000
    },
    swampMonster: {
        next: 'stoneEater',
        exp: 35000
    },
    stoneEater: {
        next: 'demonicEggEater',
        exp: 15000
    },
    demonicEggEater: {
        next: 'demonicBat',
        exp: 20000
    },
    demonicBat: {
        next: 'demonicImp',
        exp: 30000
    },
    demonicImp: {
        next: 'dragon',
        exp: 25000
    },
    dragon: {
        next: 'phoenix',
        exp: 25000
    },
    phoenix: {
        next: 'alienBug',
        exp: 40000
    },
    alienBug: {
        next: 'alienBigEye',
        exp: 15000
    },
    alienBigEye: {
        next: 'alienAngryEye',
        exp: 12000
    },
    alienAngryEye: {
        next: 'alienBat',
        exp: 15000
    },
    alienBat: {
        next: 'overfedAlienBat',
        exp: 35000
    },
    overfedAlienBat: {
        next: 'ghost',
        exp: 0
    },
    ghost: {
        next: 'ghostlyReaper',
        exp: 20000
    },
    ghostlyReaper: {
        next: 'pumpkinCharacter',
        exp: 12000
    },
    pumpkinCharacter: {
        next: 'pumpkinGhost',
        exp: 50000
    },
    pumpkinGhost: {
        next: 'grimReaper',
        exp: 20000
    },
    grimReaper: {
        next: '',
        exp: Infinity
    }
};
var foodChain = {
    fly: {
        eats: {
            poo: {
                dmg: 20,
                exp: 10
            },
            deadFish: {
                dmg: 15,
                exp: 20
            }
        }
    },
    butterfly: {
        eats: {
            flower_1_face_on_red: {
                dmg: 0,
                exp: 4
            }
        }
    },
    mosquito: {
        eats: {
            pig: {
                dmg: 0,
                exp: 8
            },
            cat: {
                dmg: 0,
                exp: 5
            }
        }
    },
    dragonfly: {
        eats: {
            fly: {
                dmg: 15,
                exp: 90
            },
            butterfly: {
                dmg: 12,
                exp: 120
            },
            mosquito: {
                dmg: 12,
                exp: 140
            },
            ladybug: {
                dmg: 50,
                exp: 65
            }
        }
    },
    wasp: {
        eats: {
            flower_1_face_on_red: {
                dmg: 0,
                exp: 10
            },
            cherry: {
                dmg: 20,
                exp: 70
            },
            currant: {
                dmg: 100,
                exp: 25
            },
            blueBird: {
                dmg: 10,
                exp: 225
            },
            pigeon: {
                dmg: 10,
                exp: 200
            },
            woodpecker: {
                dmg: 10,
                exp: 100
            }
        }
    },
    hornet: {
        eats: {
            cherry: {
                dmg: 35,
                exp: 50
            },
            currant: {
                dmg: 100,
                exp: 10
            },
            blueBird: {
                dmg: 25,
                exp: 250
            },
            parrot: {
                dmg: 25,
                exp: 250
            },
            stork: {
                dmg: 25,
                exp: 250
            },
            pigeon: {
                dmg: 25,
                exp: 200
            },
            woodpecker: {
                dmg: 25,
                exp: 100
            },
            wasp: {
                dmg: 25,
                exp: 100
            },
            redBird: {
                dmg: 20,
                exp: 300
            },
            bat: {
                dmg: 20,
                exp: 400
            }
        }
    },
    pigeon: {
        eats: {
            seed: {
                dmg: 20,
                exp: 25
            },
            bread: {
                dmg: 15,
                exp: 55
            },
            worm: {
                dmg: 25,
                exp: 100
            }
        }
    },
    duck: {
        eats: {
            seed: {
                dmg: 20,
                exp: 35
            },
            bread: {
                dmg: 15,
                exp: 55
            },
            fishPink: {
                dmg: 15,
                exp: 150
            },
            worm: {
                dmg: 30,
                exp: 120
            }
        }
    },
    parrot: {
        eats: {
            seed: {
                dmg: 20,
                exp: 20
            },
            bread: {
                dmg: 15,
                exp: 35
            },
            cherry: {
                dmg: 15,
                exp: 50
            },
            currant: {
                dmg: 100,
                exp: 10
            },
            worm: {
                dmg: 30,
                exp: 100
            },
            starFruit: {
                dmg: 15,
                exp: 150
            }
        }
    },
    turkey: {
        eats: {
            seed: {
                dmg: 35,
                exp: 30
            },
            cherry: {
                dmg: 35,
                exp: 50
            },
            currant: {
                dmg: 100,
                exp: 10
            },
            worm: {
                dmg: 35,
                exp: 100
            },
            dragonfly: {
                dmg: 35,
                exp: 150
            },
            wasp: {
                dmg: 35,
                exp: 150
            },
            snake: {
                dmg: 15,
                exp: 125
            }
        }
    },
    blueBird: {
        eats: {
            fly: {
                dmg: 45,
                exp: 30
            },
            cherry: {
                dmg: 25,
                exp: 40
            },
            currant: {
                dmg: 100,
                exp: 10
            },
            seed: {
                dmg: 50,
                exp: 20
            },
            bread: {
                dmg: 20,
                exp: 45
            },
            worm: {
                dmg: 35,
                exp: 100
            }
        }
    },
    redBird: {
        eats: {
            mosquito: {
                dmg: 25,
                exp: 150
            },
            butterfly: {
                dmg: 45,
                exp: 100
            },
            fly: {
                dmg: 45,
                exp: 50
            },
            cherry: {
                dmg: 35,
                exp: 30
            },
            currant: {
                dmg: 100,
                exp: 10
            },
            seed: {
                dmg: 100,
                exp: 15
            },
            bread: {
                dmg: 25,
                exp: 45
            },
            worm: {
                dmg: 35,
                exp: 100
            }
        }
    },
    pelican: {
        eats: {
            fishPink: {
                dmg: 35,
                exp: 140
            },
            frog: {
                dmg: 20,
                exp: 200
            }
        }
    },
    seagull: {
        eats: {
            fishPink: {
                dmg: 25,
                exp: 75
            },
            starfish: {
                dmg: 35,
                exp: 150
            }
        }
    },
    stork: {
        eats: {
            frog: {
                dmg: 35,
                exp: 60
            },
            worm: {
                dmg: 45,
                exp: 75
            },
            fishPink: {
                dmg: 25,
                exp: 35
            }
        }
    },
    vulture: {
        eats: {
            deadFish: {
                dmg: 40,
                exp: 200
            }
        }
    },
    bat: {
        eats: {
            mouse: {
                dmg: 25,
                exp: 135
            }
        }
    },
    madBat: {
        eats: {
            mouse: {
                dmg: 50,
                exp: 100
            },
            pigeon: {
                dmg: 30,
                exp: 300
            },
            woodpecker: {
                dmg: 30,
                exp: 175
            },
            duck: {
                dmg: 30,
                exp: 400
            },
            parrot: {
                dmg: 30,
                exp: 400
            },
            stork: {
                dmg: 30,
                exp: 450
            },
            blueBird: {
                dmg: 30,
                exp: 500
            },
            redBird: {
                dmg: 30,
                exp: 550
            },
            pelican: {
                dmg: 30,
                exp: 600
            },
            seagull: {
                dmg: 30,
                exp: 700
            },
            turkey: {
                dmg: 30,
                exp: 650
            },
            commonBlackbird: {
                dmg: 30,
                exp: 700
            },
            owl: {
                dmg: 25,
                exp: 800
            },
            pompadourCotinga: {
                dmg: 30,
                exp: 800
            },
            falcon: {
                dmg: 25,
                exp: 800
            },
            eagle: {
                dmg: 20,
                exp: 1200
            },
            snowyOwl: {
                dmg: 12,
                exp: 1500
            },
            pig: {
                dmg: 40,
                exp: 200
            },
            cat: {
                dmg: 40,
                exp: 150
            },
            snake: {
                dmg: 45,
                exp: 200
            },
            meat: {
                dmg: 30,
                exp: 400
            },
            penguin: {
                dmg: 30,
                exp: 400
            }
        }
    },
    pterodactylChild: {
        eats: {
            starFruit: {
                dmg: 50,
                exp: 1200
            }
        }
    },
    pterodactyl: {
        eats: {
            pigeon: {
                dmg: 45,
                exp: 500
            },
            woodpecker: {
                dmg: 45,
                exp: 300
            },
            duck: {
                dmg: 45,
                exp: 600
            },
            parrot: {
                dmg: 45,
                exp: 600
            },
            stork: {
                dmg: 45,
                exp: 650
            },
            blueBird: {
                dmg: 45,
                exp: 700
            },
            redBird: {
                dmg: 45,
                exp: 750
            },
            pelican: {
                dmg: 45,
                exp: 800
            },
            seagull: {
                dmg: 40,
                exp: 700
            },
            turkey: {
                dmg: 45,
                exp: 800
            },
            vulture: {
                dmg: 45,
                exp: 800
            },
            bat: {
                dmg: 45,
                exp: 850
            },
            commonBlackbird: {
                dmg: 45,
                exp: 1000
            },
            pompadourCotinga: {
                dmg: 45,
                exp: 1500
            },
            falcon: {
                dmg: 40,
                exp: 1800
            },
            owl: {
                dmg: 40,
                exp: 1400
            },
            eagle: {
                dmg: 40,
                exp: 2500
            },
            snowyOwl: {
                dmg: 35,
                exp: 2800
            },
            hawk: {
                dmg: 40,
                exp: 3000
            },
            raven: {
                dmg: 40,
                exp: 4000
            },
            madBat: {
                dmg: 35,
                exp: 4500
            },
            pig: {
                dmg: 50,
                exp: 400
            },
            cat: {
                dmg: 50,
                exp: 300
            },
            snake: {
                dmg: 45,
                exp: 300
            },
            meat: {
                dmg: 100,
                exp: 500
            },
            penguin: {
                dmg: 30,
                exp: 400
            },
            crocodile: {
                dmg: 25,
                exp: 800
            }
        }
    },
    demonicBat: {
        eats: {
            pigeon: {
                dmg: 25,
                exp: 500
            },
            woodpecker: {
                dmg: 25,
                exp: 400
            },
            duck: {
                dmg: 25,
                exp: 600
            },
            parrot: {
                dmg: 25,
                exp: 600
            },
            stork: {
                dmg: 25,
                exp: 650
            },
            blueBird: {
                dmg: 25,
                exp: 700
            },
            redBird: {
                dmg: 25,
                exp: 750
            },
            pelican: {
                dmg: 25,
                exp: 800
            },
            seagull: {
                dmg: 20,
                exp: 700
            },
            turkey: {
                dmg: 25,
                exp: 800
            },
            vulture: {
                dmg: 25,
                exp: 800
            },
            bat: {
                dmg: 25,
                exp: 850
            },
            commonBlackbird: {
                dmg: 25,
                exp: 1000
            },
            pompadourCotinga: {
                dmg: 25,
                exp: 1500
            },
            falcon: {
                dmg: 20,
                exp: 1800
            },
            owl: {
                dmg: 20,
                exp: 1400
            },
            eagle: {
                dmg: 20,
                exp: 2500
            },
            snowyOwl: {
                dmg: 20,
                exp: 2800
            },
            hawk: {
                dmg: 20,
                exp: 3000
            },
            raven: {
                dmg: 20,
                exp: 4000
            },
            madBat: {
                dmg: 15,
                exp: 4500
            },
            eggRed: {
                dmg: 50,
                exp: 1000
            }
        }
    },
    stoneEater: {
        eats: {
            stone: {
                dmg: 25,
                exp: 4000
            },
            stoneEater: {
                dmg: 25,
                exp: 10000
            }
        }
    },
    demonicEggEater: {
        eats: {
            eggRed: {
                dmg: 25,
                exp: 2000
            }
        }
    },
    commonBlackbird: {
        eats: {
            butterfly: {
                dmg: 40,
                exp: 100
            },
            fly: {
                dmg: 40,
                exp: 50
            },
            mosquito: {
                dmg: 40,
                exp: 200
            },
            wasp: {
                dmg: 30,
                exp: 300
            },
            cherry: {
                dmg: 50,
                exp: 30
            },
            currant: {
                dmg: 100,
                exp: 10
            },
            seed: {
                dmg: 100,
                exp: 15
            },
            bread: {
                dmg: 35,
                exp: 45
            },
            worm: {
                dmg: 35,
                exp: 100
            }
        }
    },
    pompadourCotinga: {
        eats: {
            butterfly: {
                dmg: 40,
                exp: 150
            },
            fly: {
                dmg: 45,
                exp: 80
            },
            pigeon: {
                dmg: 30,
                exp: 350
            },
            woodpecker: {
                dmg: 30,
                exp: 300
            },
            mosquito: {
                dmg: 40,
                exp: 200
            },
            wasp: {
                dmg: 30,
                exp: 250
            },
            cherry: {
                dmg: 50,
                exp: 50
            },
            currant: {
                dmg: 100,
                exp: 20
            },
            seed: {
                dmg: 100,
                exp: 30
            },
            dragonfly: {
                dmg: 30,
                exp: 250
            },
            worm: {
                dmg: 45,
                exp: 100
            }
        }
    },
    falcon: {
        eats: {
            pigeon: {
                dmg: 35,
                exp: 350
            },
            woodpecker: {
                dmg: 35,
                exp: 300
            },
            duck: {
                dmg: 35,
                exp: 400
            },
            parrot: {
                dmg: 35,
                exp: 400
            },
            blueBird: {
                dmg: 30,
                exp: 450
            },
            mouse: {
                dmg: 35,
                exp: 150
            },
            frog: {
                dmg: 35,
                exp: 150
            },
            meat: {
                dmg: 25,
                exp: 250
            }
        }
    },
    owl: {
        eats: {
            pigeon: {
                dmg: 30,
                exp: 350
            },
            woodpecker: {
                dmg: 30,
                exp: 300
            },
            duck: {
                dmg: 30,
                exp: 400
            },
            parrot: {
                dmg: 30,
                exp: 400
            },
            mouse: {
                dmg: 35,
                exp: 150
            },
            worm: {
                dmg: 45,
                exp: 80
            },
            frog: {
                dmg: 35,
                exp: 150
            }
        }
    },
    snowyOwl: {
        eats: {
            penguin: {
                dmg: 30,
                exp: 500
            },
            lemming: {
                dmg: 35,
                exp: 250
            }
        }
    },
    eagle: {
        eats: {
            bat: {
                dmg: 40,
                exp: 200
            },
            blueBird: {
                dmg: 35,
                exp: 500
            },
            redBird: {
                dmg: 30,
                exp: 600
            },
            pigeon: {
                dmg: 35,
                exp: 400
            },
            woodpecker: {
                dmg: 35,
                exp: 300
            },
            duck: {
                dmg: 35,
                exp: 450
            },
            parrot: {
                dmg: 35,
                exp: 450
            },
            stork: {
                dmg: 30,
                exp: 500
            },
            seagull: {
                dmg: 30,
                exp: 500
            },
            cat: {
                dmg: 60,
                exp: 200
            },
            meat: {
                dmg: 35,
                exp: 300
            },
            penguin: {
                dmg: 30,
                exp: 400
            }
        }
    },
    hawk: {
        eats: {
            blueBird: {
                dmg: 35,
                exp: 200
            },
            redBird: {
                dmg: 35,
                exp: 250
            },
            bat: {
                dmg: 35,
                exp: 350
            },
            pigeon: {
                dmg: 35,
                exp: 200
            },
            woodpecker: {
                dmg: 35,
                exp: 200
            },
            duck: {
                dmg: 35,
                exp: 210
            },
            parrot: {
                dmg: 35,
                exp: 220
            },
            stork: {
                dmg: 35,
                exp: 250
            },
            pig: {
                dmg: 30,
                exp: 200
            },
            pelican: {
                dmg: 30,
                exp: 300
            },
            seagull: {
                dmg: 30,
                exp: 500
            },
            commonBlackbird: {
                dmg: 30,
                exp: 600
            },
            turkey: {
                dmg: 30,
                exp: 400
            },
            cat: {
                dmg: 60,
                exp: 150
            },
            meat: {
                dmg: 35,
                exp: 350
            },
            penguin: {
                dmg: 30,
                exp: 400
            }
        }
    },
    raven: {
        eats: {
            blueBird: {
                dmg: 45,
                exp: 200
            },
            pigeon: {
                dmg: 45,
                exp: 150
            },
            woodpecker: {
                dmg: 45,
                exp: 150
            },
            duck: {
                dmg: 45,
                exp: 210
            },
            parrot: {
                dmg: 45,
                exp: 220
            },
            redBird: {
                dmg: 45,
                exp: 320
            },
            deadFish: {
                dmg: 80,
                exp: 100
            },
            snake: {
                dmg: 25,
                exp: 200
            },
            worm: {
                dmg: 80,
                exp: 100
            },
            frog: {
                dmg: 35,
                exp: 100
            },
            meat: {
                dmg: 35,
                exp: 300
            },
            penguin: {
                dmg: 30,
                exp: 400
            }
        }
    },
    alienBug: {
        eats: {
            cosmicPlant: {
                dmg: 0,
                exp: 200
            },
            cosmicEgg: {
                dmg: 17,
                exp: 3500
            }
        }
    },
    alienBigEye: {
        eats: {
            alienFruit1: {
                dmg: 3,
                exp: 5000
            },
            alienFruit2: {
                dmg: 8,
                exp: 2000
            },
            alienFruit3: {
                dmg: 12,
                exp: 1000
            },
            cherry: {
                dmg: 100,
                exp: 150
            },
            currant: {
                dmg: 100,
                exp: 20
            },
            starFruit: {
                dmg: 100,
                exp: 250
            }
        }
    },
    alienAngryEye: {
        eats: {
            cosmicEgg: {
                dmg: 35,
                exp: 500
            },
            alienEye: {
                dmg: 25,
                exp: 1000
            },
            alienBigInsect: {
                dmg: 15,
                exp: 7000
            },
            alienBug: {
                dmg: 30,
                exp: 5000
            },
            alienBigEye: {
                dmg: 25,
                exp: 6500
            }
        }
    },
    alienBat: {
        eats: {
            cosmicEgg: {
                dmg: 50,
                exp: 750
            },
            alienEye: {
                dmg: 40,
                exp: 1500
            },
            pigeon: {
                dmg: 45,
                exp: 500
            },
            woodpecker: {
                dmg: 45,
                exp: 400
            },
            duck: {
                dmg: 45,
                exp: 600
            },
            parrot: {
                dmg: 45,
                exp: 600
            },
            stork: {
                dmg: 45,
                exp: 650
            },
            blueBird: {
                dmg: 45,
                exp: 700
            },
            redBird: {
                dmg: 45,
                exp: 750
            },
            pelican: {
                dmg: 45,
                exp: 800
            },
            seagull: {
                dmg: 40,
                exp: 900
            },
            turkey: {
                dmg: 45,
                exp: 800
            },
            vulture: {
                dmg: 45,
                exp: 800
            },
            bat: {
                dmg: 45,
                exp: 850
            },
            commonBlackbird: {
                dmg: 45,
                exp: 1000
            },
            pompadourCotinga: {
                dmg: 45,
                exp: 1500
            },
            falcon: {
                dmg: 45,
                exp: 1800
            },
            owl: {
                dmg: 45,
                exp: 1400
            },
            snowyOwl: {
                dmg: 45,
                exp: 2500
            },
            eagle: {
                dmg: 45,
                exp: 2500
            },
            hawk: {
                dmg: 45,
                exp: 3000
            },
            raven: {
                dmg: 45,
                exp: 4000
            },
            madBat: {
                dmg: 35,
                exp: 4500
            },
            pig: {
                dmg: 80,
                exp: 500
            },
            cat: {
                dmg: 80,
                exp: 350
            },
            snake: {
                dmg: 45,
                exp: 400
            },
            alienBug: {
                dmg: 35,
                exp: 8000
            },
            alienBigEye: {
                dmg: 25,
                exp: 9000
            },
            alienAngryEye: {
                dmg: 17,
                exp: 11000
            },
            pterodactylChild: {
                dmg: 35,
                exp: 6000
            },
            pterodactyl: {
                dmg: 15,
                exp: 7000
            },
            meat: {
                dmg: 55,
                exp: 400
            },
            penguin: {
                dmg: 60,
                exp: 400
            },
            demonicBat: {
                dmg: 15,
                exp: 10000
            },
            demonicImp: {
                dmg: 15,
                exp: 13000
            },
            alienBigInsect: {
                dmg: 25,
                exp: 5000
            },
            swampMonster: {
                dmg: 20,
                exp: 8000
            },
            dragon: {
                dmg: 20,
                exp: 14000
            }
        }
    },
    demonicImp: {
        eats: {
            pigeon: {
                dmg: 15,
                exp: 500
            },
            woodpecker: {
                dmg: 15,
                exp: 400
            },
            duck: {
                dmg: 15,
                exp: 600
            },
            parrot: {
                dmg: 15,
                exp: 600
            },
            stork: {
                dmg: 12,
                exp: 650
            },
            blueBird: {
                dmg: 15,
                exp: 700
            },
            redBird: {
                dmg: 15,
                exp: 750
            },
            pelican: {
                dmg: 12,
                exp: 800
            },
            seagull: {
                dmg: 12,
                exp: 900
            },
            turkey: {
                dmg: 12,
                exp: 800
            },
            vulture: {
                dmg: 12,
                exp: 800
            },
            bat: {
                dmg: 12,
                exp: 850
            },
            commonBlackbird: {
                dmg: 12,
                exp: 1000
            },
            pompadourCotinga: {
                dmg: 12,
                exp: 1500
            },
            falcon: {
                dmg: 10,
                exp: 1800
            },
            owl: {
                dmg: 10,
                exp: 1400
            },
            snowyOwl: {
                dmg: 10,
                exp: 2500
            },
            eagle: {
                dmg: 10,
                exp: 2500
            },
            hawk: {
                dmg: 10,
                exp: 3000
            },
            raven: {
                dmg: 10,
                exp: 4000
            },
            madBat: {
                dmg: 10,
                exp: 4500
            },
            pterodactylChild: {
                dmg: 10,
                exp: 6000
            },
            pterodactyl: {
                dmg: 10,
                exp: 7000
            },
            swampMonster: {
                dmg: 10,
                exp: 8000
            },
            yeti: {
                dmg: 5,
                exp: 4000
            },
            blackWidow: {
                dmg: 5,
                exp: 4000
            },
            mummy: {
                dmg: 5,
                exp: 4000
            }
        }
    },
    dragon: {
        eats: {
            pigeon: {
                dmg: 25,
                exp: 500
            },
            woodpecker: {
                dmg: 25,
                exp: 400
            },
            duck: {
                dmg: 25,
                exp: 600
            },
            parrot: {
                dmg: 25,
                exp: 600
            },
            stork: {
                dmg: 20,
                exp: 650
            },
            blueBird: {
                dmg: 20,
                exp: 700
            },
            redBird: {
                dmg: 20,
                exp: 750
            },
            pelican: {
                dmg: 20,
                exp: 800
            },
            seagull: {
                dmg: 20,
                exp: 900
            },
            turkey: {
                dmg: 20,
                exp: 800
            },
            vulture: {
                dmg: 20,
                exp: 800
            },
            bat: {
                dmg: 20,
                exp: 850
            },
            commonBlackbird: {
                dmg: 20,
                exp: 1000
            },
            pompadourCotinga: {
                dmg: 20,
                exp: 1500
            },
            falcon: {
                dmg: 17,
                exp: 1800
            },
            owl: {
                dmg: 17,
                exp: 1400
            },
            snowyOwl: {
                dmg: 17,
                exp: 2500
            },
            eagle: {
                dmg: 17,
                exp: 2500
            },
            hawk: {
                dmg: 17,
                exp: 3000
            },
            raven: {
                dmg: 17,
                exp: 4000
            },
            madBat: {
                dmg: 15,
                exp: 4500
            },
            pig: {
                dmg: 30,
                exp: 500
            },
            cat: {
                dmg: 30,
                exp: 350
            },
            snake: {
                dmg: 30,
                exp: 400
            },
            pterodactylChild: {
                dmg: 17,
                exp: 6000
            },
            pterodactyl: {
                dmg: 13,
                exp: 7000
            },
            meat: {
                dmg: 45,
                exp: 400
            },
            penguin: {
                dmg: 45,
                exp: 400
            },
            swampMonster: {
                dmg: 15,
                exp: 8000
            }
        }
    },
    phoenix: {
        eats: {
            pigeon: {
                dmg: 8,
                exp: 500
            },
            woodpecker: {
                dmg: 8,
                exp: 400
            },
            duck: {
                dmg: 8,
                exp: 600
            },
            parrot: {
                dmg: 8,
                exp: 600
            },
            stork: {
                dmg: 8,
                exp: 650
            },
            blueBird: {
                dmg: 8,
                exp: 700
            },
            redBird: {
                dmg: 8,
                exp: 750
            },
            pelican: {
                dmg: 8,
                exp: 800
            },
            seagull: {
                dmg: 8,
                exp: 900
            },
            turkey: {
                dmg: 8,
                exp: 800
            },
            vulture: {
                dmg: 8,
                exp: 800
            },
            bat: {
                dmg: 8,
                exp: 850
            },
            commonBlackbird: {
                dmg: 8,
                exp: 1000
            },
            pompadourCotinga: {
                dmg: 8,
                exp: 1500
            },
            falcon: {
                dmg: 8,
                exp: 1800
            },
            owl: {
                dmg: 8,
                exp: 1400
            },
            snowyOwl: {
                dmg: 8,
                exp: 2500
            },
            eagle: {
                dmg: 8,
                exp: 2500
            },
            hawk: {
                dmg: 8,
                exp: 3000
            },
            raven: {
                dmg: 8,
                exp: 4000
            },
            madBat: {
                dmg: 8,
                exp: 4500
            },
            pterodactylChild: {
                dmg: 8,
                exp: 6000
            },
            pterodactyl: {
                dmg: 8,
                exp: 7000
            },
            swampMonster: {
                dmg: 8,
                exp: 8000
            },
            yeti: {
                dmg: 8,
                exp: 4000
            },
            blackWidow: {
                dmg: 8,
                exp: 4000
            },
            mummy: {
                dmg: 8,
                exp: 4000
            },
            crocodile: {
                dmg: 12,
                exp: 350
            },
            tyrannosaurus: {
                dmg: 12,
                exp: 400
            },
            pig: {
                dmg: 20,
                exp: 250
            },
            cat: {
                dmg: 20,
                exp: 250
            },
            penguin: {
                dmg: 20,
                exp: 300
            },
            snake: {
                dmg: 20,
                exp: 300
            }
        }
    },
    swampMonster: {
        eats: {
            pigeon: {
                dmg: 10,
                exp: 1500
            },
            woodpecker: {
                dmg: 10,
                exp: 700
            },
            duck: {
                dmg: 10,
                exp: 1600
            },
            parrot: {
                dmg: 10,
                exp: 1600
            },
            stork: {
                dmg: 10,
                exp: 1650
            },
            blueBird: {
                dmg: 10,
                exp: 1700
            },
            redBird: {
                dmg: 10,
                exp: 1750
            },
            pelican: {
                dmg: 10,
                exp: 1800
            },
            seagull: {
                dmg: 10,
                exp: 1900
            },
            turkey: {
                dmg: 7,
                exp: 1800
            },
            vulture: {
                dmg: 7,
                exp: 1800
            },
            bat: {
                dmg: 7,
                exp: 1850
            },
            commonBlackbird: {
                dmg: 7,
                exp: 2000
            },
            pompadourCotinga: {
                dmg: 7,
                exp: 2500
            },
            falcon: {
                dmg: 7,
                exp: 2800
            },
            owl: {
                dmg: 7,
                exp: 2400
            },
            snowyOwl: {
                dmg: 7,
                exp: 3500
            },
            eagle: {
                dmg: 7,
                exp: 3500
            },
            hawk: {
                dmg: 7,
                exp: 4000
            },
            raven: {
                dmg: 7,
                exp: 5000
            },
            madBat: {
                dmg: 7,
                exp: 7000
            },
            frog: {
                dmg: 50,
                exp: 500
            },
            deadFish: {
                dmg: 50,
                exp: 500
            },
            demonicImp: {
                dmg: 7,
                exp: 15000
            }
        }
    },
    overfedAlienBat: {
        eats: {}
    },
    ghost: {
        eats: {
            zombie: {
                dmg: 10,
                exp: 20000
            }
        }
    },
    pumpkinCharacter: {
        eats: {
            pumpkin: {
                dmg: 20,
                exp: 10000
            }
        }
    },
    ghostlyReaper: {
        eats: {}
    },
    grimReaper: {
        eats: {}
    },
    pumpkinGhost: {
        eats: {}
    },
    pig: {
        eats: {
            dragonfly: {
                dmg: 30
            }
        }
    },
    alienBigInsect: {
        eats: {
            fly: {
                dmg: 100
            },
            butterfly: {
                dmg: 100
            },
            mosquito: {
                dmg: 100
            },
            wasp: {
                dmg: 100
            },
            hornet: {
                dmg: 90
            },
            dragonfly: {
                dmg: 100
            },
            pigeon: {
                dmg: 95
            },
            duck: {
                dmg: 95
            },
            parrot: {
                dmg: 95
            },
            stork: {
                dmg: 90
            },
            blueBird: {
                dmg: 90
            },
            redBird: {
                dmg: 90
            },
            pelican: {
                dmg: 90
            },
            seagull: {
                dmg: 90
            },
            turkey: {
                dmg: 90
            },
            bat: {
                dmg: 90
            },
            vulture: {
                dmg: 90
            },
            commonBlackbird: {
                dmg: 90
            },
            pompadourCotinga: {
                dmg: 90
            },
            falcon: {
                dmg: 85
            },
            owl: {
                dmg: 85
            },
            snowyOwl: {
                dmg: 85
            },
            eagle: {
                dmg: 80
            },
            hawk: {
                dmg: 80
            },
            raven: {
                dmg: 80
            },
            madBat: {
                dmg: 80
            },
            alienBug: {
                dmg: 60
            },
            pterodactylChild: {
                dmg: 60
            },
            pterodactyl: {
                dmg: 35
            },
            demonicBat: {
                dmg: 35
            },
            swampMonster: {
                dmg: 35
            },
            dragon: {
                dmg: 35
            },
            alienAngryEye: {
                dmg: 21
            }
        }
    },
    tyrannosaurus: {
        eats: {
            fly: {
                dmg: 100
            },
            butterfly: {
                dmg: 100
            },
            mosquito: {
                dmg: 100
            },
            wasp: {
                dmg: 100
            },
            hornet: {
                dmg: 90
            },
            dragonfly: {
                dmg: 100
            },
            pigeon: {
                dmg: 99
            },
            duck: {
                dmg: 99
            },
            parrot: {
                dmg: 99
            },
            stork: {
                dmg: 85
            },
            blueBird: {
                dmg: 85
            },
            redBird: {
                dmg: 85
            },
            pelican: {
                dmg: 85
            },
            seagull: {
                dmg: 85
            },
            turkey: {
                dmg: 85
            },
            bat: {
                dmg: 85
            },
            vulture: {
                dmg: 85
            },
            commonBlackbird: {
                dmg: 85
            },
            pompadourCotinga: {
                dmg: 85
            },
            falcon: {
                dmg: 70
            },
            owl: {
                dmg: 70
            },
            snowyOwl: {
                dmg: 70
            },
            eagle: {
                dmg: 70
            },
            hawk: {
                dmg: 65
            },
            raven: {
                dmg: 65
            },
            madBat: {
                dmg: 60
            },
            alienBug: {
                dmg: 60
            },
            pterodactylChild: {
                dmg: 45
            },
            demonicBat: {
                dmg: 35
            },
            swampMonster: {
                dmg: 35
            },
            dragon: {
                dmg: 25
            }
        }
    },
    smallDemon: {
        eats: {
            fly: {
                dmg: 100
            },
            butterfly: {
                dmg: 100
            },
            mosquito: {
                dmg: 100
            },
            wasp: {
                dmg: 100
            },
            hornet: {
                dmg: 90
            },
            dragonfly: {
                dmg: 100
            },
            pigeon: {
                dmg: 99
            },
            duck: {
                dmg: 99
            },
            parrot: {
                dmg: 99
            },
            stork: {
                dmg: 85
            },
            blueBird: {
                dmg: 85
            },
            redBird: {
                dmg: 85
            },
            pelican: {
                dmg: 85
            },
            seagull: {
                dmg: 85
            },
            turkey: {
                dmg: 85
            },
            bat: {
                dmg: 85
            },
            vulture: {
                dmg: 85
            },
            commonBlackbird: {
                dmg: 85
            },
            pompadourCotinga: {
                dmg: 85
            },
            falcon: {
                dmg: 70
            },
            owl: {
                dmg: 70
            },
            snowyOwl: {
                dmg: 70
            },
            eagle: {
                dmg: 70
            },
            hawk: {
                dmg: 65
            },
            raven: {
                dmg: 65
            },
            madBat: {
                dmg: 60
            },
            alienBug: {
                dmg: 60
            },
            pterodactylChild: {
                dmg: 45
            },
            stoneEater: {
                dmg: 45
            },
            demonicEggEater: {
                dmg: 25
            },
            demonicBat: {
                dmg: 25
            },
            swampMonster: {
                dmg: 25
            },
            dragon: {
                dmg: 15
            }
        }
    },
    blackWidow: {
        eats: {
            fly: {
                dmg: 100
            },
            butterfly: {
                dmg: 100
            },
            mosquito: {
                dmg: 100
            },
            wasp: {
                dmg: 100
            },
            dragonfly: {
                dmg: 100
            },
            pigeon: {
                dmg: 45
            },
            duck: {
                dmg: 45
            },
            parrot: {
                dmg: 45
            },
            stork: {
                dmg: 40
            },
            blueBird: {
                dmg: 40
            },
            redBird: {
                dmg: 40
            },
            pelican: {
                dmg: 40
            },
            seagull: {
                dmg: 40
            },
            turkey: {
                dmg: 35
            },
            bat: {
                dmg: 35
            },
            vulture: {
                dmg: 40
            },
            hornet: {
                dmg: 80
            },
            commonBlackbird: {
                dmg: 30
            },
            pompadourCotinga: {
                dmg: 30
            },
            falcon: {
                dmg: 35
            },
            owl: {
                dmg: 30
            },
            snowyOwl: {
                dmg: 30
            },
            eagle: {
                dmg: 30
            },
            hawk: {
                dmg: 30
            },
            raven: {
                dmg: 30
            },
            madBat: {
                dmg: 20
            },
            alienBug: {
                dmg: 60
            },
            pterodactylChild: {
                dmg: 20
            },
            demonicBat: {
                dmg: 20
            },
            swampMonster: {
                dmg: 20
            },
            dragon: {
                dmg: 20
            }
        }
    },
    zombie: {
        eats: {
            fly: {
                dmg: 100
            },
            butterfly: {
                dmg: 100
            },
            mosquito: {
                dmg: 100
            },
            wasp: {
                dmg: 100
            },
            dragonfly: {
                dmg: 100
            },
            pigeon: {
                dmg: 55
            },
            duck: {
                dmg: 55
            },
            parrot: {
                dmg: 55
            },
            stork: {
                dmg: 45
            },
            blueBird: {
                dmg: 45
            },
            redBird: {
                dmg: 45
            },
            pelican: {
                dmg: 45
            },
            seagull: {
                dmg: 40
            },
            turkey: {
                dmg: 35
            },
            bat: {
                dmg: 35
            },
            vulture: {
                dmg: 40
            },
            hornet: {
                dmg: 40
            },
            commonBlackbird: {
                dmg: 30
            },
            pompadourCotinga: {
                dmg: 30
            },
            falcon: {
                dmg: 35
            },
            owl: {
                dmg: 30
            },
            snowyOwl: {
                dmg: 30
            },
            eagle: {
                dmg: 30
            },
            hawk: {
                dmg: 30
            },
            raven: {
                dmg: 30
            },
            madBat: {
                dmg: 20
            },
            alienBug: {
                dmg: 60
            },
            pterodactylChild: {
                dmg: 20
            },
            demonicBat: {
                dmg: 20
            },
            swampMonster: {
                dmg: 20
            },
            dragon: {
                dmg: 20
            }
        }
    },
    mummy: {
        eats: {
            fly: {
                dmg: 100
            },
            butterfly: {
                dmg: 100
            },
            mosquito: {
                dmg: 100
            },
            wasp: {
                dmg: 95
            },
            dragonfly: {
                dmg: 95
            },
            pigeon: {
                dmg: 60
            },
            duck: {
                dmg: 60
            },
            parrot: {
                dmg: 60
            },
            stork: {
                dmg: 45
            },
            blueBird: {
                dmg: 45
            },
            redBird: {
                dmg: 45
            },
            pelican: {
                dmg: 45
            },
            seagull: {
                dmg: 40
            },
            turkey: {
                dmg: 45
            },
            bat: {
                dmg: 45
            },
            vulture: {
                dmg: 45
            },
            hornet: {
                dmg: 80
            },
            commonBlackbird: {
                dmg: 40
            },
            pompadourCotinga: {
                dmg: 35
            },
            falcon: {
                dmg: 35
            },
            owl: {
                dmg: 30
            },
            snowyOwl: {
                dmg: 30
            },
            eagle: {
                dmg: 30
            },
            hawk: {
                dmg: 30
            },
            raven: {
                dmg: 30
            },
            madBat: {
                dmg: 30
            },
            alienBug: {
                dmg: 65
            },
            pterodactylChild: {
                dmg: 25
            },
            demonicBat: {
                dmg: 25
            },
            swampMonster: {
                dmg: 25
            },
            dragon: {
                dmg: 20
            }
        }
    },
    yeti: {
        eats: {
            fly: {
                dmg: 100
            },
            butterfly: {
                dmg: 100
            },
            mosquito: {
                dmg: 100
            },
            wasp: {
                dmg: 95
            },
            dragonfly: {
                dmg: 95
            },
            pigeon: {
                dmg: 60
            },
            duck: {
                dmg: 60
            },
            parrot: {
                dmg: 60
            },
            stork: {
                dmg: 55
            },
            blueBird: {
                dmg: 55
            },
            redBird: {
                dmg: 55
            },
            pelican: {
                dmg: 55
            },
            seagull: {
                dmg: 50
            },
            turkey: {
                dmg: 55
            },
            bat: {
                dmg: 55
            },
            vulture: {
                dmg: 55
            },
            hornet: {
                dmg: 80
            },
            commonBlackbird: {
                dmg: 50
            },
            pompadourCotinga: {
                dmg: 45
            },
            falcon: {
                dmg: 45
            },
            owl: {
                dmg: 40
            },
            snowyOwl: {
                dmg: 35
            },
            eagle: {
                dmg: 40
            },
            hawk: {
                dmg: 40
            },
            raven: {
                dmg: 40
            },
            madBat: {
                dmg: 40
            },
            alienBug: {
                dmg: 65
            },
            pterodactylChild: {
                dmg: 35
            },
            demonicBat: {
                dmg: 30
            },
            swampMonster: {
                dmg: 30
            },
            dragon: {
                dmg: 30
            }
        }
    },
    alienEye: {
        eats: {
            fly: {
                dmg: 60
            },
            butterfly: {
                dmg: 60
            },
            mosquito: {
                dmg: 60
            },
            wasp: {
                dmg: 60
            },
            hornet: {
                dmg: 40
            },
            dragonfly: {
                dmg: 60
            },
            pigeon: {
                dmg: 45
            },
            duck: {
                dmg: 45
            },
            parrot: {
                dmg: 45
            },
            stork: {
                dmg: 45
            },
            blueBird: {
                dmg: 40
            },
            redBird: {
                dmg: 40
            },
            pelican: {
                dmg: 40
            },
            seagull: {
                dmg: 40
            },
            turkey: {
                dmg: 40
            },
            bat: {
                dmg: 40
            },
            vulture: {
                dmg: 35
            },
            commonBlackbird: {
                dmg: 30
            },
            pompadourCotinga: {
                dmg: 30
            },
            falcon: {
                dmg: 35
            },
            owl: {
                dmg: 35
            },
            snowyOwl: {
                dmg: 35
            },
            eagle: {
                dmg: 25
            },
            hawk: {
                dmg: 25
            },
            raven: {
                dmg: 25
            },
            alienBug: {
                dmg: 30
            },
            pterodactylChild: {
                dmg: 20
            },
            demonicBat: {
                dmg: 20
            },
            swampMonster: {
                dmg: 20
            },
            dragon: {
                dmg: 20
            }
        }
    },
    snake: {
        eats: {
            pigeon: {
                dmg: 35
            },
            duck: {
                dmg: 35
            },
            parrot: {
                dmg: 35
            },
            stork: {
                dmg: 30
            },
            blueBird: {
                dmg: 30
            },
            redBird: {
                dmg: 30
            },
            pelican: {
                dmg: 30
            },
            seagull: {
                dmg: 30
            },
            bat: {
                dmg: 30
            },
            vulture: {
                dmg: 30
            },
            commonBlackbird: {
                dmg: 30
            },
            pompadourCotinga: {
                dmg: 30
            },
            falcon: {
                dmg: 25
            },
            owl: {
                dmg: 25
            },
            snowyOwl: {
                dmg: 20
            },
            eagle: {
                dmg: 20
            },
            hawk: {
                dmg: 20
            }
        }
    },
    shark: {
        eats: {
            fly: {
                dmg: 95
            },
            butterfly: {
                dmg: 95
            },
            mosquito: {
                dmg: 95
            },
            wasp: {
                dmg: 90
            },
            hornet: {
                dmg: 90
            },
            dragonfly: {
                dmg: 95
            },
            pigeon: {
                dmg: 80
            },
            duck: {
                dmg: 55
            },
            parrot: {
                dmg: 80
            },
            stork: {
                dmg: 80
            },
            blueBird: {
                dmg: 70
            },
            redBird: {
                dmg: 70
            },
            pelican: {
                dmg: 40
            },
            seagull: {
                dmg: 40
            },
            turkey: {
                dmg: 40
            },
            bat: {
                dmg: 40
            },
            vulture: {
                dmg: 40
            },
            commonBlackbird: {
                dmg: 40
            },
            pompadourCotinga: {
                dmg: 40
            },
            falcon: {
                dmg: 35
            },
            owl: {
                dmg: 35
            },
            snowyOwl: {
                dmg: 30
            },
            eagle: {
                dmg: 30
            },
            hawk: {
                dmg: 30
            },
            raven: {
                dmg: 30
            },
            madBat: {
                dmg: 30
            },
            alienBug: {
                dmg: 60
            },
            pterodactylChild: {
                dmg: 40
            },
            demonicBat: {
                dmg: 20
            },
            swampMonster: {
                dmg: 20
            }
        }
    },
    crocodile: {
        eats: {
            fly: {
                dmg: 80
            },
            butterfly: {
                dmg: 75
            },
            mosquito: {
                dmg: 65
            },
            wasp: {
                dmg: 60
            },
            hornet: {
                dmg: 40
            },
            dragonfly: {
                dmg: 55
            },
            pigeon: {
                dmg: 50
            },
            duck: {
                dmg: 45
            },
            parrot: {
                dmg: 45
            },
            stork: {
                dmg: 45
            },
            blueBird: {
                dmg: 45
            },
            redBird: {
                dmg: 45
            },
            pelican: {
                dmg: 40
            },
            seagull: {
                dmg: 40
            },
            turkey: {
                dmg: 40
            },
            bat: {
                dmg: 40
            },
            vulture: {
                dmg: 40
            },
            commonBlackbird: {
                dmg: 40
            },
            pompadourCotinga: {
                dmg: 40
            },
            falcon: {
                dmg: 35
            },
            owl: {
                dmg: 35
            },
            snowyOwl: {
                dmg: 30
            },
            eagle: {
                dmg: 30
            },
            hawk: {
                dmg: 30
            },
            raven: {
                dmg: 30
            },
            madBat: {
                dmg: 30
            },
            alienBug: {
                dmg: 60
            },
            demonicBat: {
                dmg: 10
            },
            swampMonster: {
                dmg: 20
            }
        }
    },
    boss1: {
        eats: {
            grimReaper: {
                dmg: 19
            },
            ghostlyReaper: {
                dmg: 19
            },
            pumpkinCharacter: {
                dmg: 25
            },
            pumpkinGhost: {
                dmg: 19
            }
        }
    }
};
var objectsByUniqueIdArr = [];
for (var i = 0; i < Object['keys'](game['objectsDef'])['length']; i++) {
    var object = game['objectsDef'][Object['keys'](game['objectsDef'])[i]];
    object['uid'] = i;
    objectsByUniqueIdArr[i] = object;
    if (object['type'] == objectType['PLAYER']) {
        object['skinsLoaded'] = []
    }
};
for (var i = 0; i < Object['keys'](game['skills'])['length']; i++) {
    var skill = game['skills'][Object['keys'](game['skills'])[i]];
    skill['func'] = function() {
        return true
    }
}