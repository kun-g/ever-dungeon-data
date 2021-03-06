exports.data = [
	{
		"classId": 0,
		"className": "战士",
		"faction": "hero",
		"classType": 0,
		"avatar": "avatar.ccbi",
		"emblem": [
			"emblem-warrior.png",
			"emblem-warrior2.png"
		],
		"property": {
			"health": 35,
			"attack": 3,
			"critical": 2,
			"strong": 4,
			"accuracy": 2,
			"reactivity": 1,
			"speed": 2
		},
		"defaultArmors": [
			6,
			10,
			11,
			40,
			41,
			42,
			43,
            622,
            712
		],
        "initialEquipment":[
            {"type":0,"value":43,"count":1},
            {"type":0,"value":42,"count":1},
            {"type":0,"value":41,"count":1},
            {"type":0,"value":712,"count":1},
            {"type":0,"value":40,"count":1},
            {"type":0,"value":622,"count":1}
        ],
		"levelId": 0,
        "pkTransId":197,
        "teammateLevelId":11
	},
	{
		"classId": 1,
		"className": "法师",
		"faction": "hero",
		"classType": 0,
		"avatar": "avatar.ccbi",
		"emblem": [
			"emblem-mage.png",
			"emblem-mage2.png"
		],
		"property": {
			"health": 21,
			"attack": 5,
			"critical": 4,
			"strong": 2,
			"accuracy": 2,
			"reactivity": 2,
			"speed": 2
		},
		"defaultArmors": [
			6,
			10,
			11,
			32,
			33,
			34,
            35,
			652,
            742
		],
        "initialEquipment":[
            {"type":0,"value":35,"count":1},
            {"type":0,"value":34,"count":1},
            {"type":0,"value":33,"count":1},
            {"type":0,"value":742,"count":1},
            {"type":0,"value":32,"count":1},
            {"type":0,"value":652,"count":1}
        ],
		"levelId": 0,
        "pkTransId":198,
		"teammateLevelId":11
	},
	{
		"classId": 2,
		"className": "牧师",
		"faction": "hero",
		"classType": 0,
		"avatar": "avatar.ccbi",
		"emblem": [
			"emblem-priest.png",
			"emblem-priest2.png"
		],
		"property": {
			"health": 25,
			"attack": 2,
			"critical": 2,
			"strong": 4,
			"accuracy": 4,
			"reactivity": 3,
			"speed": 6
		},
		"defaultArmors": [
			6,
			10,
			11,
			36,
			37,
			38,
			39,
            682,
            772
		],
        "initialEquipment":[
            {"type":0,"value":39, "count":1},
            {"type":0,"value":38,"count":1},
            {"type":0,"value":37,"count":1},
            {"type":0,"value":772,"count":1},
            {"type":0,"value":36,"count":1},
            {"type":0,"value":682,"count":1}
        ],
		"levelId": 0,
        "pkTransId":199,
		"teammateLevelId":11
	},
	{
		"classId": 3,
		"className": "蝙蝠",
		"faction": "monster",
		"classType": 1,
        "skeleton": "bat1.json",
        "atlas": "bat1.atlas",
		"property": {
			"health": 0.2,
			"attack": 0.18,
			"critical": 40,
			"strong": -40,
			"accuracy": 50,
			"reactivity": 0,
			"speed": 0,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "bianfu.mp3",
		"soundWound": "bianfuwound.mp3",
		"soundAttack": "bianfuattack.mp3",
		"soundDie": "bianfudie.mp3",
		"effectAttack": 9,
        "skill": [
            {
                "id": 163,
                "level": 1
            }
        ]
	},
	{
		"classId": 4,
		"className": "蜘蛛",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-spider1.ccbi",
		"property": {
			"health": 0.4,
			"attack": 0.24,
			"critical": 20,
			"strong": -40,
			"accuracy": 20,
			"reactivity": -60,
			"speed": 20,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "zhizhu.mp3",
		"soundWound": "zhizhuwound.mp3",
		"soundAttack": "zhizhuattack.mp3",
		"soundDie": "zhizhudie.mp3",
		"effectAttack": 9,
		"skill": [
			{
				"id": 164,
				"level": 1
			}
		]
	},
	{
		"classId": 5,
		"className": "土狼",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-wolf2.ccbi",
		"property": {
			"health": 0.6,
			"attack": 0.36,
			"critical": -10,
			"strong": -10,
			"accuracy": 50,
			"reactivity": -50,
			"speed": 10,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "tulang.mp3",
		"soundWound": "tulangwound.mp3",
		"soundAttack": "tulangattack.mp3",
		"soundDie": "tulangdie.mp3",
		"effectAttack": 31,
		"collectId": 3001
	},
	{
		"classId": 6,
		"className": "史莱姆",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-slime1.ccbi",
		"property": {
			"health": 0.9,
			"attack": 0.24,
			"critical": -40,
			"strong": -10,
			"accuracy": 50,
			"reactivity": -90,
			"speed": -30,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "shilaimu.mp3",
		"soundWound": "shilaimuwound.mp3",
		"soundAttack": "shilaimuattack.mp3",
		"soundDie": "shilaimudie.mp3",
		"effectAttack": 9,
		"skill": [
			{
				"id": 31,
				"level": 1
			}
		]
	},
	{
		"classId": 7,
		"className": "哥布林",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-goblin1.ccbi",
		"property": {
			"health": 0.5,
			"attack": 0.3,
			"critical": 2,
			"strong": 3,
			"accuracy": 40,
			"reactivity": -40,
			"speed": 0,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "gebulin.mp3",
		"soundWound": "gebulinwound.mp3",
		"soundAttack": "gebulinattack.mp3",
		"soundDie": "gebulindie.mp3",
		"effectAttack": 9,
		"collectId": 6001
	},
	{
		"classId": 8,
		"className": "哥布林投矛手",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-goblin2.ccbi",
		"property": {
			"health": 0.6,
			"attack": 0.05,
			"critical": 2,
			"strong": 2,
			"accuracy": 15,
			"reactivity": -90,
			"speed": 0,
			"counterAttack": false,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "gebulintou.mp3",
		"soundWound": "gebulinwound.mp3",
		"soundAttack": "shouren.mp3",
		"soundDie": "gebulindie.mp3",
		"effectAttack": 9,
		"skill": [
			{
				"id": 26,
				"level": 2
			},
            {
                "id": 272,
                "level": 1
            },
			{
				"id": 27,
				"level": 1
			}
		]
	},
	{
		"classId": 9,
		"className": "山贼",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-robber1.ccbi",
		"property": {
			"health": 0.5,
			"attack": 0.42,
			"critical": -10,
			"strong": 0,
			"accuracy": 20,
			"reactivity": -50,
			"speed": -20,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "shanzei.mp3",
		"soundWound": "shanzeiwound.mp3",
		"soundAttack": "shanzeiattack.mp3",
		"soundDie": "shanzeidie.mp3",
		"effectAttack": 8
	},
	{
		"classId": 10,
		"className": "盗贼",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-thief1.ccbi",
		"property": {
			"health": 0.3,
			"attack": 0.18,
			"critical": 30,
			"strong": -40,
			"accuracy": 80,
			"reactivity": 0,
			"speed": 40,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundWound": "daozeiwound.mp3",
		"soundAttack": "daozeiattack.mp3",
		"soundDie": "daozeidie.mp3",
		"effectAttack": 8,
		"skill": [
			{
				"id": 34,
				"level": 1
			}
		]
	},
	{
		"classId": 11,
		"className": "山贼头目",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-robber3.ccbi",
		"property": {
			"health": 0.7,
			"attack": 0.54,
			"critical": -20,
			"strong": -10,
			"accuracy": 20,
			"reactivity": -50,
			"speed": 0,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "shanzeitoumu.mp3",
		"soundWound": "shanzeiroumuwound.mp3",
		"soundAttack": "shanzeitoumuattack.mp3",
		"soundDie": "shanzeitoumudie.mp3",
		"effectAttack": 8,
		"skill": [

		]
	},
	{
		"classId": 12,
		"className": "流浪剑士",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-sword2.ccbi",
		"property": {
			"health": 0.7,
			"attack": 0.3,
			"critical": 0,
			"strong": 0,
			"accuracy": 40,
			"reactivity": -40,
			"speed": 0,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundWound": "liulangwound.mp3",
		"soundAttack": "liulangattack.mp3",
		"soundDie": "liulangdie.mp3",
		"effectAttack": 8,
		"skill": [

		],
		"collectId": 66001
	},
	{
		"classId": 13,
		"className": "游侠",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-archer1.ccbi",
		"property": {
			"health": 0.3,
			"attack": 0.07,
			"critical": 20,
			"strong": -40,
			"accuracy": 60,
			"reactivity": -80,
			"speed": -40,
			"counterAttack": false,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundWound": "youxiawound.mp3",
		"soundDie": "youxiadie.mp3",
		"effectAttack": 9,
		"collectId": 40001,
		"skill": [
			{
				"id": 26,
				"level": 1
			},
            {
                "id": 272,
                "level": 1
            },
			{
				"id": 27,
				"level": 1
			}
		]
	},
	{
		"classId": 14,
		"className": "兽人",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-orcs2.ccbi",
		"property": {
			"health": 0.7,
			"attack": 0.42,
			"critical": 0,
			"strong": 0,
			"accuracy": 20,
			"reactivity": -60,
			"speed": -20,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "shouren.mp3",
		"soundWound": "shourenwound.mp3",
		"soundAttack": "shourenattack.mp3",
		"soundDie": "shourendie.mp3",
		"effectAttack": 8,
		"collectId": 20001
	},
	{
		"classId": 15,
		"className": "狼骑",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-wolf1.ccbi",
		"property": {
			"health": 0.7,
			"attack": 0.36,
			"critical": -20,
			"strong": -10,
			"accuracy": 50,
			"reactivity": -70,
			"speed": 20,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "tulang.mp3",
		"soundWound": "tulangwound.mp3",
		"soundAttack": "tulangattack.mp3",
		"soundDie": "tulangdie.mp3",
		"effectAttack": 31,
		"skill": [
			{
				"id": 32,
				"level": 1
			}
		]
	},
	{
		"classId": 16,
		"className": "兽人投矛手",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-orcs1.ccbi",
		"property": {
			"health": 0.5,
			"attack": 0.1,
			"critical": 10,
			"strong": 0,
			"accuracy": 40,
			"reactivity": -80,
			"speed": -40,
			"counterAttack": false,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.5,
			"health": 0.3,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundWound": "shourenwound.mp3",
		"soundAttack": "shourenattack.mp3",
		"soundDie": "shourendie.mp3",
		"effectAttack": 9,
		"skill": [
			{
				"id": 27,
				"level": 1
			},
            {
                "id": 272,
                "level": 1
            },
			{
				"id": 26,
				"level": 3
			}
		]
	},
	{
		"classId": 17,
		"className": "食人魔",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-ogre1.ccbi",
		"property": {
			"health": 0.8,
			"attack": 0.48,
			"critical": 10,
			"strong": -30,
			"accuracy": 20,
			"reactivity": -60,
			"speed": -20,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "shirenmo.mp3",
		"soundWound": "shirenmodie.mp3",
		"soundAttack": "shirenmo.mp3",
		"effectAttack": 9,
		"skill": [

		],
		"collectId": 36001
	},
	{
		"classId": 18,
		"className": "骷髅兵",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-skeleton1.ccbi",
		"property": {
			"health": 1.5,
			"attack": 0.06,
			"critical": 0,
			"strong": 0,
			"accuracy": 40,
			"reactivity": -40,
			"speed": 0,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"effectAttack": 8,
		"collectId": 51001,
        "skill": [
            {
                "id": 187,
                "level": 1
            }
        ]
	},
	{
		"classId": 19,
		"className": "小史莱姆",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-slime2.ccbi",
		"property": {
			"health": 0.6,
			"attack": 0.12,
			"critical": -40,
			"strong": -40,
			"accuracy": 50,
			"reactivity": -90,
			"speed": 10,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "shilaimu.mp3",
		"soundWound": "shilaimuwound.mp3",
		"soundAttack": "shilaimuattack.mp3",
		"soundDie": "shilaimudie.mp3",
		"effectAttack": 9,
		"animSpawn": "spell-5"
	},
	{
		"classId": 20,
		"className": "Boss蝙蝠",
		"faction": "monster",
		"classType": 1,
        "skeleton": "bat1.json",
        "atlas": "bat1.atlas",
		"property": {
			"health": 1.5,
			"attack": 0.27,
			"critical": 40,
			"strong": -20,
			"accuracy": 50,
			"reactivity": 0,
			"speed": 0,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.2,
			"health": 0.5,
			"attack": 0.4,
			"critical": 0.2,
			"strong": 0.2,
			"accuracy": 0.3,
			"reactivity": 0.2,
			"speed": 0.3
		},
		"soundSpawn": "bianfu.mp3",
		"soundWound": "bianfuwound.mp3",
		"soundAttack": "bianfuattack.mp3",
		"soundDie": "bianfudie.mp3",
		"effectAttack": 9,
		"scale": 1.2,
        "skill": [
            {
                "id": 163,
                "level": 1
            }
        ]
	},
	{
		"classId": 21,
		"className": "Boss蜘蛛",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-spider1.ccbi",
		"property": {
			"health": 2,
			"attack": 0.36,
			"critical": 20,
			"strong": -20,
			"accuracy": 20,
			"reactivity": -60,
			"speed": 20,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.4,
			"health": 0.3,
			"attack": 0.4,
			"critical": 0.2,
			"strong": 0.2,
			"accuracy": 0.3,
			"reactivity": 0.3,
			"speed": 0.2
		},
		"soundSpawn": "zhizhu.mp3",
		"soundWound": "zhizhuwound.mp3",
		"soundAttack": "zhizhuattack.mp3",
		"soundDie": "zhizhudie.mp3",
		"effectAttack": 9,
		"skill": [
			{
				"id": 29,
				"level": 1
			}
		],
		"scale": 1.2
	},
	{
		"classId": 22,
		"className": "Boss土狼",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-wolf2.ccbi",
		"property": {
			"health": 3,
			"attack": 0.54,
			"critical": -10,
			"strong": 0,
			"accuracy": 50,
			"reactivity": -50,
			"speed": 10,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "tulang.mp3",
		"soundWound": "tulangwound.mp3",
		"soundAttack": "tulangattack.mp3",
		"soundDie": "tulangdie.mp3",
		"effectAttack": 31,
		"scale": 1.2
	},
	{
		"classId": 23,
		"className": "Boss史莱姆",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-slime1.ccbi",
		"property": {
			"health": 4.5,
			"attack": 0.36,
			"critical": -40,
			"strong": 10,
			"accuracy": 50,
			"reactivity": -90,
			"speed": -30,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "shilaimu.mp3",
		"soundWound": "shilaimuwound.mp3",
		"soundAttack": "shilaimuattack.mp3",
		"soundDie": "shilaimudie.mp3",
		"effectAttack": 9,
		"skill": [
			{
				"id": 31,
				"level": 2
			}
		],
		"scale": 1.2
	},
	{
		"classId": 24,
		"className": "Boss哥布林",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-goblin1.ccbi",
		"property": {
			"health": 2.5,
			"attack": 0.45,
			"critical": 0,
			"strong": 10,
			"accuracy": 40,
			"reactivity": -40,
			"speed": 0,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "gebulin.mp3",
		"soundWound": "gebulinwound.mp3",
		"soundAttack": "gebulinattack.mp3",
		"soundDie": "gebulindie.mp3",
		"effectAttack": 9,
		"scale": 1.2
	},
	{
		"classId": 25,
		"className": "Boss哥布林投矛手",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-goblin2.ccbi",
		"property": {
			"health": 3,
			"attack": 0.18,
			"critical": 0,
			"strong": 10,
			"accuracy": 40,
			"reactivity": -90,
			"speed": 0,
			"counterAttack": false,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "gebulintou.mp3",
		"soundWound": "gebulinwound.mp3",
		"soundAttack": "shouren.mp3",
		"soundDie": "gebulindie.mp3",
		"effectAttack": 9,
		"scale": 1.2,
		"skill": [
			{
				"id": 26,
				"level": 2
			},
            {
                "id": 272,
                "level": 1
            },
			{
				"id": 27,
				"level": 1
			},
			{
				"id": 28,
				"level": 1
			}
		]
	},
	{
		"classId": 26,
		"className": "Boss山贼",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-robber1.ccbi",
		"property": {
			"health": 2.5,
			"attack": 0.63,
			"critical": -10,
			"strong": 20,
			"accuracy": 20,
			"reactivity": -50,
			"speed": -20,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "shanzei.mp3",
		"soundWound": "shanzeiwound.mp3",
		"soundAttack": "shanzeiattack.mp3",
		"soundDie": "shanzeidie.mp3",
		"effectAttack": 8,
		"scale": 1.2
	},
	{
		"classId": 27,
		"className": "Boss盗贼",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-thief1.ccbi",
		"property": {
			"health": 1.5,
			"attack": 0.27,
			"critical": 30,
			"strong": -20,
			"accuracy": 80,
			"reactivity": 0,
			"speed": 40,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundWound": "daozeiwound.mp3",
		"soundAttack": "daozeiattack.mp3",
		"soundDie": "daozeidie.mp3",
		"effectAttack": 8,
		"skill": [
			{
				"id": 34,
				"level": 1
			}
		],
		"scale": 1.2
	},
	{
		"classId": 28,
		"className": "Boss山贼头目",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-robber3.ccbi",
		"property": {
			"health": 3.5,
			"attack": 0.81,
			"critical": -20,
			"strong": 10,
			"accuracy": 20,
			"reactivity": -50,
			"speed": 0,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "shanzeitoumu.mp3",
		"soundWound": "shanzeiroumuwound.mp3",
		"soundAttack": "shanzeitoumuattack.mp3",
		"soundDie": "shanzeitoumudie.mp3",
		"effectAttack": 8,
		"scale": 1.2,
		"skill": [

		]
	},
	{
		"classId": 29,
		"className": "Boss流浪剑士",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-sword2.ccbi",
		"property": {
			"health": 3.5,
			"attack": 0.45,
			"critical": 0,
			"strong": 20,
			"accuracy": 40,
			"reactivity": -40,
			"speed": 0,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundWound": "liulangwound.mp3",
		"soundAttack": "liulangattack.mp3",
		"soundDie": "liulangdie.mp3",
		"effectAttack": 8,
		"skill": [
            {
                "id": 109,
                "level": 1
            }
		],
		"scale": 1.2
	},
	{
		"classId": 30,
		"className": "Boss游侠",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-archer1.ccbi",
		"property": {
			"health": 1.5,
			"attack": 0.42,
			"critical": 20,
			"strong": -20,
			"accuracy": 60,
			"reactivity": -80,
			"speed": -40,
			"counterAttack": false,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundWound": "youxiawound.mp3",
		"soundDie": "youxiadie.mp3",
		"effectAttack": 9,
		"scale": 1.2,
		"skill": [
			{
				"id": 26,
				"level": 1
			},
            {
                "id": 272,
                "level": 1
            },
			{
				"id": 27,
				"level": 1
			}
		]
	},
	{
		"classId": 31,
		"className": "Boss兽人",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-orcs2.ccbi",
		"property": {
			"health": 3.5,
			"attack": 0.63,
			"critical": 0,
			"strong": 20,
			"accuracy": 20,
			"reactivity": -60,
			"speed": -20,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 0.3,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "shouren.mp3",
		"soundWound": "shourenwound.mp3",
		"soundAttack": "shourenattack.mp3",
		"soundDie": "shourendie.mp3",
		"effectAttack": 8,
		"scale": 1.2
	},
	{
		"classId": 32,
		"className": "Boss狼骑",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-wolf1.ccbi",
		"property": {
			"health": 3.5,
			"attack": 0.54,
			"critical": -20,
			"strong": 0,
			"accuracy": 50,
			"reactivity": -70,
			"speed": 20,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "tulang.mp3",
		"soundWound": "tulangwound.mp3",
		"soundAttack": "tulangattack.mp3",
		"soundDie": "tulangdie.mp3",
		"effectAttack": 31,
		"skill": [
			{
				"id": 32,
				"level": 2
			}
		],
		"scale": 1.2
	},
	{
		"classId": 33,
		"className": "Boss兽人投矛手",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-orcs1.ccbi",
		"property": {
			"health": 2.5,
			"attack": 0.45,
			"critical": 10,
			"strong": 20,
			"accuracy": 40,
			"reactivity": -80,
			"speed": -40,
			"counterAttack": false,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundWound": "shourenwound.mp3",
		"soundAttack": "shourenattack.mp3",
		"soundDie": "shourendie.mp3",
		"effectAttack": 9,
		"scale": 1.2,
		"skill": [
			{
				"id": 26,
				"level": 3
			},
            {
                "id": 272,
                "level": 1
            },
			{
				"id": 27,
				"level": 1
			}
		]
	},
	{
		"classId": 34,
		"className": "Boss食人魔",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-ogre1.ccbi",
		"property": {
			"health": 4,
			"attack": 0.72,
			"critical": 10,
			"strong": -10,
			"accuracy": 20,
			"reactivity": -60,
			"speed": -20,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "shirenmo.mp3",
		"soundWound": "shirenmodie.mp3",
		"soundAttack": "shirenmo.mp3",
		"effectAttack": 9,
		"skill": [

		],
		"scale": 1.3
	},
	{
		"classId": 35,
		"className": "蝙蝠2",
		"faction": "monster",
		"classType": 1,
        "skeleton": "bat2.json",
        "atlas": "bat2.atlas",
		"property": {
			"health": 0.2,
			"attack": 0.18,
			"critical": 40,
			"strong": -40,
			"accuracy": 50,
			"reactivity": 0,
			"speed": 0,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.2,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "bianfu.mp3",
		"soundWound": "bianfuwound.mp3",
		"soundAttack": "bianfuattack.mp3",
		"soundDie": "bianfudie.mp3",
		"effectAttack": 9,
        "skill": [
            {
                "id": 163,
                "level": 1
            }
        ]
	},
	{
		"classId": 36,
		"className": "蜘蛛2",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-spider12.ccbi",
		"property": {
			"health": 0.4,
			"attack": 0.24,
			"critical": 20,
			"strong": -40,
			"accuracy": 20,
			"reactivity": -60,
			"speed": 20,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "zhizhu.mp3",
		"soundWound": "zhizhuwound.mp3",
		"soundAttack": "zhizhuattack.mp3",
		"soundDie": "zhizhudie.mp3",
		"effectAttack": 9,
		"skill": [
			{
				"id": 164,
				"level": 1
			}
		],
		"collectId": 25001
	},
	{
		"classId": 37,
		"className": "土狼2",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-wolf22.ccbi",
		"property": {
			"health": 0.6,
			"attack": 0.36,
			"critical": -10,
			"strong": -10,
			"accuracy": 50,
			"reactivity": -50,
			"speed": 10,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "tulang.mp3",
		"soundWound": "tulangwound.mp3",
		"soundAttack": "tulangattack.mp3",
		"soundDie": "tulangdie.mp3",
		"effectAttack": 31,
		"collectId": 28001
	},
	{
		"classId": 38,
		"className": "史莱姆2",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-slime12.ccbi",
		"property": {
			"health": 0.9,
			"attack": 0.24,
			"critical": -40,
			"strong": -10,
			"accuracy": 50,
			"reactivity": -90,
			"speed": -30,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "shilaimu.mp3",
		"soundWound": "shilaimuwound.mp3",
		"soundAttack": "shilaimuattack.mp3",
		"soundDie": "shilaimudie.mp3",
		"effectAttack": 9,
		"skill": [
			{
				"id": 31,
				"level": 3
			}
		]
	},
	{
		"classId": 39,
		"className": "哥布林2",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-goblin12.ccbi",
		"property": {
			"health": 0.5,
			"attack": 0.3,
			"critical": 2,
			"strong": 3,
			"accuracy": 40,
			"reactivity": -40,
			"speed": 0,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "gebulin.mp3",
		"soundWound": "gebulinwound.mp3",
		"soundAttack": "gebulinattack.mp3",
		"soundDie": "gebulindie.mp3",
		"effectAttack": 9,
        "skill": [
            {
                "id": 173,
                "level": 1
            }
        ]
	},
	{
		"classId": 40,
		"className": "哥布林投矛手2",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-goblin22.ccbi",
		"property": {
			"health": 0.6,
			"attack": 0.05,
			"critical": 2,
			"strong": 2,
			"accuracy": 15,
			"reactivity": -90,
			"speed": 0,
			"counterAttack": false,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "gebulintou.mp3",
		"soundWound": "gebulinwound.mp3",
		"soundAttack": "shouren.mp3",
		"soundDie": "gebulindie.mp3",
		"effectAttack": 9,
		"collectId": 61001,
		"skill": [
			{
				"id": 26,
				"level": 2
			},
            {
                "id": 272,
                "level": 1
            },
			{
				"id": 27,
				"level": 1
			},
			{
				"id": 177,
				"level": 1
			}
		]
	},
	{
		"classId": 41,
		"className": "山贼2",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-robber12.ccbi",
		"property": {
			"health": 0.5,
			"attack": 0.42,
			"critical": -10,
			"strong": 0,
			"accuracy": 20,
			"reactivity": -50,
			"speed": -20,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.2,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "shanzei.mp3",
		"soundWound": "shanzeiwound.mp3",
		"soundAttack": "shanzeiattack.mp3",
		"soundDie": "shanzeidie.mp3",
		"effectAttack": 8
	},
	{
		"classId": 42,
		"className": "盗贼2",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-thief12.ccbi",
		"property": {
			"health": 0.3,
			"attack": 0.18,
			"critical": 30,
			"strong": -40,
			"accuracy": 80,
			"reactivity": 0,
			"speed": 40,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundWound": "daozeiwound.mp3",
		"soundAttack": "daozeiattack.mp3",
		"soundDie": "daozeidie.mp3",
		"effectAttack": 8,
		"skill": [
			{
				"id": 34,
				"level": 1
			}
		]
	},
	{
		"classId": 43,
		"className": "山贼头目2",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-robber32.ccbi",
		"property": {
			"health": 0.7,
			"attack": 0.54,
			"critical": -20,
			"strong": -10,
			"accuracy": 20,
			"reactivity": -50,
			"speed": 0,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "shanzeitoumu.mp3",
		"soundWound": "shanzeiroumuwound.mp3",
		"soundAttack": "shanzeitoumuattack.mp3",
		"soundDie": "shanzeitoumudie.mp3",
		"effectAttack": 8,
		"skill": [

		]
	},
	{
		"classId": 44,
		"className": "流浪剑士2",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-sword22.ccbi",
		"property": {
			"health": 0.7,
			"attack": 0.3,
			"critical": 0,
			"strong": 0,
			"accuracy": 40,
			"reactivity": -40,
			"speed": 0,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundWound": "liulangwound.mp3",
		"soundAttack": "liulangattack.mp3",
		"soundDie": "liulangdie.mp3",
		"effectAttack": 8,
		"skill": [
            {
                "id": 180,
                "level": 1
            }
		]
	},
	{
		"classId": 45,
		"className": "游侠2",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-archer12.ccbi",
		"property": {
			"health": 0.3,
			"attack": 0.07,
			"critical": 20,
			"strong": -40,
			"accuracy": 60,
			"reactivity": -80,
			"speed": -40,
			"counterAttack": false,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundWound": "youxiawound.mp3",
		"soundDie": "youxiadie.mp3",
		"effectAttack": 9,
		"collectId": 68001,
		"skill": [
			{
				"id": 26,
				"level": 1
			},
            {
                "id": 272,
                "level": 1
            },
			{
				"id": 27,
				"level": 1
			}
		]
	},
	{
		"classId": 46,
		"className": "兽人2",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-orcs22.ccbi",
		"property": {
			"health": 0.7,
			"attack": 0.42,
			"critical": 0,
			"strong": 0,
			"accuracy": 20,
			"reactivity": -60,
			"speed": -20,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "shouren.mp3",
		"soundWound": "shourenwound.mp3",
		"soundAttack": "shourenattack.mp3",
		"soundDie": "shourendie.mp3",
		"effectAttack": 9
	},
	{
		"classId": 47,
		"className": "狼骑2",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-wolf12.ccbi",
		"property": {
			"health": 0.7,
			"attack": 0.36,
			"critical": -20,
			"strong": -10,
			"accuracy": 50,
			"reactivity": -70,
			"speed": 20,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "tulang.mp3",
		"soundWound": "tulangwound.mp3",
		"soundAttack": "tulangattack.mp3",
		"soundDie": "tulangdie.mp3",
		"effectAttack": 31,
		"skill": [
			{
				"id": 32,
				"level": 3
			}
		]
	},
	{
		"classId": 48,
		"className": "兽人投矛手2",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-orcs12.ccbi",
		"property": {
			"health": 0.5,
			"attack": 0.1,
			"critical": 10,
			"strong": 0,
			"accuracy": 40,
			"reactivity": -80,
			"speed": -40,
			"counterAttack": false,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundWound": "shourenwound.mp3",
		"soundAttack": "shourenattack.mp3",
		"soundDie": "shourendie.mp3",
		"effectAttack": 9,
		"skill": [
			{
				"id": 26,
				"level": 3
			},
            {
                "id": 272,
                "level": 1
            },
			{
				"id": 27,
				"level": 1
			}
		]
	},
	{
		"classId": 49,
		"className": "食人魔2",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-ogre12.ccbi",
		"property": {
			"health": 0.8,
			"attack": 0.48,
			"critical": 10,
			"strong": -30,
			"accuracy": 20,
			"reactivity": -60,
			"speed": -20,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "shirenmo.mp3",
		"soundWound": "shirenmodie.mp3",
		"soundAttack": "shirenmo.mp3",
		"effectAttack": 9,
		"skill": [

		]
	},
	{
		"classId": 50,
		"className": "骷髅兵2",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-skeleton12.ccbi",
		"property": {
			"health": 1.5,
			"attack": 0.06,
			"critical": 0,
			"strong": 0,
			"accuracy": 40,
			"reactivity": -40,
			"speed": 0,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"effectAttack": 8,
		"collectId": 84001,
        "skill": [
            {
                "id": 187,
                "level": 1
            }
        ]
	},
	{
		"classId": 51,
		"className": "小史莱姆2",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-slime22.ccbi",
		"property": {
			"health": 0.6,
			"attack": 0.12,
			"critical": -40,
			"strong": -40,
			"accuracy": 50,
			"reactivity": -90,
			"speed": 10,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "shilaimu.mp3",
		"soundWound": "shilaimuwound.mp3",
		"soundAttack": "shilaimuattack.mp3",
		"soundDie": "shilaimudie.mp3",
		"effectAttack": 8,
		"animSpawn": "spell-5"
	},
	{
		"classId": 52,
		"className": "Boss蝙蝠2",
		"faction": "monster",
		"classType": 1,
        "skeleton": "bat2.json",
        "atlas": "bat2.atlas",
		"property": {
			"health": 1.5,
			"attack": 0.27,
			"critical": 40,
			"strong": -20,
			"accuracy": 50,
			"reactivity": 0,
			"speed": 0,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "bianfu.mp3",
		"soundWound": "bianfuwound.mp3",
		"soundAttack": "bianfuattack.mp3",
		"soundDie": "bianfudie.mp3",
		"effectAttack": 9,
		"scale": 1.2,
        "skill": [
            {
                "id": 163,
                "level": 1
            }
        ]
	},
	{
		"classId": 53,
		"className": "Boss蜘蛛2",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-spider12.ccbi",
		"property": {
			"health": 2,
			"attack": 0.36,
			"critical": 20,
			"strong": -20,
			"accuracy": 20,
			"reactivity": -60,
			"speed": 20,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "zhizhu.mp3",
		"soundWound": "zhizhuwound.mp3",
		"soundAttack": "zhizhuattack.mp3",
		"soundDie": "zhizhudie.mp3",
		"effectAttack": 9,
		"skill": [
			{
				"id": 29,
				"level": 1
			}
		],
		"scale": 1.2
	},
	{
		"classId": 54,
		"className": "Boss土狼2",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-wolf22.ccbi",
		"property": {
			"health": 3,
			"attack": 0.54,
			"critical": -10,
			"strong": 0,
			"accuracy": 50,
			"reactivity": -50,
			"speed": 10,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "tulang.mp3",
		"soundWound": "tulangwound.mp3",
		"soundAttack": "tulangattack.mp3",
		"soundDie": "tulangdie.mp3",
		"effectAttack": 31,
		"scale": 1.2
	},
	{
		"classId": 55,
		"className": "Boss史莱姆2",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-slime12.ccbi",
		"property": {
			"health": 4.5,
			"attack": 0.36,
			"critical": -40,
			"strong": 10,
			"accuracy": 50,
			"reactivity": -90,
			"speed": -30,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "shilaimu.mp3",
		"soundWound": "shilaimuwound.mp3",
		"soundAttack": "shilaimuattack.mp3",
		"soundDie": "shilaimudie.mp3",
		"effectAttack": 9,
		"skill": [
			{
				"id": 31,
				"level": 4
			}
		],
		"scale": 1.2
	},
	{
		"classId": 56,
		"className": "Boss哥布林2",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-goblin12.ccbi",
		"property": {
			"health": 2.5,
			"attack": 0.45,
			"critical": 0,
			"strong": 10,
			"accuracy": 40,
			"reactivity": -40,
			"speed": 0,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "gebulin.mp3",
		"soundWound": "gebulinwound.mp3",
		"soundAttack": "gebulinattack.mp3",
		"soundDie": "gebulindie.mp3",
		"effectAttack": 9,
		"scale": 1.2
	},
	{
		"classId": 57,
		"className": "Boss哥布林投矛手2",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-goblin22.ccbi",
		"property": {
			"health": 3,
			"attack": 0.18,
			"critical": 0,
			"strong": 10,
			"accuracy": 40,
			"reactivity": -90,
			"speed": 0,
			"counterAttack": false,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "gebulintou.mp3",
		"soundWound": "gebulinwound.mp3",
		"soundAttack": "shouren.mp3",
		"soundDie": "gebulindie.mp3",
		"effectAttack": 9,
		"scale": 1.2,
		"skill": [
			{
				"id": 26,
				"level": 2
			},
            {
                "id": 272,
                "level": 1
            },
			{
				"id": 27,
				"level": 1
			},
			{
				"id": 28,
				"level": 1
			}
		]
	},
	{
		"classId": 58,
		"className": "Boss山贼2",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-robber12.ccbi",
		"property": {
			"health": 2.5,
			"attack": 0.63,
			"critical": -10,
			"strong": 20,
			"accuracy": 20,
			"reactivity": -50,
			"speed": -20,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "shanzei.mp3",
		"soundWound": "shanzeiwound.mp3",
		"soundAttack": "shanzeiattack.mp3",
		"soundDie": "shanzeidie.mp3",
		"effectAttack": 8,
		"scale": 1.2
	},
	{
		"classId": 59,
		"className": "Boss盗贼2",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-thief12.ccbi",
		"property": {
			"health": 1.5,
			"attack": 0.27,
			"critical": 30,
			"strong": -20,
			"accuracy": 80,
			"reactivity": 0,
			"speed": 40,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundWound": "daozeiwound.mp3",
		"soundAttack": "daozeiattack.mp3",
		"soundDie": "daozeidie.mp3",
		"effectAttack": 8,
		"skill": [
			{
				"id": 34,
				"level": 1
			}
		],
		"scale": 1.2
	},
	{
		"classId": 60,
		"className": "Boss山贼头目2",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-robber32.ccbi",
		"property": {
			"health": 3.5,
			"attack": 0.81,
			"critical": -20,
			"strong": 10,
			"accuracy": 20,
			"reactivity": -50,
			"speed": 0,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "shanzeitoumu.mp3",
		"soundWound": "shanzeiroumuwound.mp3",
		"soundAttack": "shanzeitoumuattack.mp3",
		"soundDie": "shanzeitoumudie.mp3",
		"effectAttack": 8,
		"scale": 1.2,
		"skill": [

		]
	},
	{
		"classId": 61,
		"className": "Boss流浪剑士2",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-sword22.ccbi",
		"property": {
			"health": 3.5,
			"attack": 0.45,
			"critical": 0,
			"strong": 20,
			"accuracy": 40,
			"reactivity": -40,
			"speed": 0,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundWound": "liulangwound.mp3",
		"soundAttack": "liulangattack.mp3",
		"soundDie": "liulangdie.mp3",
		"effectAttack": 8,
		"skill": [
            {
                "id": 66,
                "level": 1
            }
		],
		"scale": 1.2
	},
	{
		"classId": 62,
		"className": "Boss游侠2",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-archer12.ccbi",
		"property": {
			"health": 1.5,
			"attack": 0.42,
			"critical": 20,
			"strong": -20,
			"accuracy": 60,
			"reactivity": -80,
			"speed": -40,
			"counterAttack": false,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundWound": "youxiawound.mp3",
		"soundDie": "youxiadie.mp3",
		"effectAttack": 9,
		"scale": 1.2,
		"skill": [
			{
				"id": 26,
				"level": 1
			},
            {
                "id": 272,
                "level": 1
            },
			{
				"id": 27,
				"level": 1
			}
		]
	},
	{
		"classId": 63,
		"className": "Boss兽人2",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-orcs22.ccbi",
		"property": {
			"health": 3.5,
			"attack": 0.63,
			"critical": 0,
			"strong": 20,
			"accuracy": 20,
			"reactivity": -60,
			"speed": -20,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "shouren.mp3",
		"soundWound": "shourenwound.mp3",
		"soundAttack": "shourenattack.mp3",
		"soundDie": "shourendie.mp3",
		"effectAttack": 8,
		"scale": 1.2
	},
	{
		"classId": 64,
		"className": "Boss狼骑2",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-wolf12.ccbi",
		"property": {
			"health": 3.5,
			"attack": 0.54,
			"critical": -20,
			"strong": 0,
			"accuracy": 50,
			"reactivity": -70,
			"speed": 20,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "tulang.mp3",
		"soundWound": "tulangwound.mp3",
		"soundAttack": "tulangattack.mp3",
		"soundDie": "tulangdie.mp3",
		"effectAttack": 31,
		"skill": [
			{
				"id": 32,
				"level": 4
			}
		],
		"scale": 1.2
	},
	{
		"classId": 65,
		"className": "Boss兽人投矛手2",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-orcs12.ccbi",
		"property": {
			"health": 2.5,
			"attack": 0.45,
			"critical": 10,
			"strong": 20,
			"accuracy": 40,
			"reactivity": -80,
			"speed": -40,
			"counterAttack": false,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundWound": "shourenwound.mp3",
		"soundAttack": "shourenattack.mp3",
		"soundDie": "shourendie.mp3",
		"effectAttack": 9,
		"scale": 1.2,
		"skill": [
			{
				"id": 26,
				"level": 3
			},
            {
                "id": 272,
                "level": 1
            },
			{
				"id": 27,
				"level": 1
			}
		]
	},
	{
		"classId": 66,
		"className": "Boss食人魔2",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-ogre12.ccbi",
		"property": {
			"health": 4,
			"attack": 0.72,
			"critical": 10,
			"strong": -10,
			"accuracy": 20,
			"reactivity": -60,
			"speed": -20,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "shirenmo.mp3",
		"soundWound": "shirenmodie.mp3",
		"soundAttack": "shirenmo.mp3",
		"effectAttack": 9,
		"skill": [

		],
		"scale": 1.3
	},
	{
		"classId": 67,
		"className": "蝙蝠3",
		"faction": "monster",
		"classType": 1,
        "skeleton": "bat3.json",
        "atlas": "bat3.atlas",
		"property": {
			"health": 0.2,
			"attack": 0.18,
			"critical": 40,
			"strong": -40,
			"accuracy": 50,
			"reactivity": 0,
			"speed": 0,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "bianfu.mp3",
		"soundWound": "bianfuwound.mp3",
		"soundAttack": "bianfuattack.mp3",
		"soundDie": "bianfudie.mp3",
		"effectAttack": 9,
        "skill": [
            {
                "id": 163,
                "level": 1
            }
        ]
	},
	{
		"classId": 68,
		"className": "蜘蛛3",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-spider13.ccbi",
		"property": {
			"health": 0.4,
			"attack": 0.24,
			"critical": 20,
			"strong": -40,
			"accuracy": 20,
			"reactivity": -60,
			"speed": 20,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "zhizhu.mp3",
		"soundWound": "zhizhuwound.mp3",
		"soundAttack": "zhizhuattack.mp3",
		"soundDie": "zhizhudie.mp3",
		"effectAttack": 9,
		"skill": [
			{
				"id": 165,
				"level": 1
			}
		],
		"collectId": 96001
	},
	{
		"classId": 69,
		"className": "土狼3",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-wolf23.ccbi",
		"property": {
			"health": 0.6,
			"attack": 0.36,
			"critical": -10,
			"strong": -10,
			"accuracy": 50,
			"reactivity": -50,
			"speed": 10,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "tulang.mp3",
		"soundWound": "tulangwound.mp3",
		"soundAttack": "tulangattack.mp3",
		"soundDie": "tulangdie.mp3",
		"effectAttack": 31
	},
	{
		"classId": 70,
		"className": "史莱姆3",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-slime13.ccbi",
		"property": {
			"health": 0.9,
			"attack": 0.24,
			"critical": -40,
			"strong": -10,
			"accuracy": 50,
			"reactivity": -90,
			"speed": -30,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "shilaimu.mp3",
		"soundWound": "shilaimuwound.mp3",
		"soundAttack": "shilaimuattack.mp3",
		"soundDie": "shilaimudie.mp3",
		"effectAttack": 9,
		"skill": [
			{
				"id": 31,
				"level": 5
			}
		]
	},
	{
		"classId": 71,
		"className": "哥布林3",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-goblin13.ccbi",
		"property": {
			"health": 0.5,
			"attack": 0.3,
			"critical": 2,
			"strong": 3,
			"accuracy": 40,
			"reactivity": -40,
			"speed": 0,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "gebulin.mp3",
		"soundWound": "gebulinwound.mp3",
		"soundAttack": "gebulinattack.mp3",
		"soundDie": "gebulindie.mp3",
		"effectAttack": 9,
		"collectId": 78001,
        "skill": [
            {
                "id": 174,
                "level": 1
            }
        ]
	},
	{
		"classId": 72,
		"className": "哥布林投矛手3",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-goblin23.ccbi",
		"property": {
			"health": 0.6,
			"attack": 0.05,
			"critical": 2,
			"strong": 2,
			"accuracy": 15,
			"reactivity": -90,
			"speed": 0,
			"counterAttack": false,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "gebulintou.mp3",
		"soundWound": "gebulinwound.mp3",
		"soundAttack": "shouren.mp3",
		"soundDie": "gebulindie.mp3",
		"effectAttack": 9,
		"skill": [
			{
				"id": 26,
				"level": 2
			},
            {
                "id": 272,
                "level": 1
            },
			{
				"id": 27,
				"level": 1
			},
			{
				"id": 177,
				"level": 1
			}
		]
	},
	{
		"classId": 73,
		"className": "山贼3",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-robber13.ccbi",
		"property": {
			"health": 0.5,
			"attack": 0.42,
			"critical": -10,
			"strong": 0,
			"accuracy": 20,
			"reactivity": -50,
			"speed": -20,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "shanzei.mp3",
		"soundWound": "shanzeiwound.mp3",
		"soundAttack": "shanzeiattack.mp3",
		"soundDie": "shanzeidie.mp3",
		"effectAttack": 8
	},
	{
		"classId": 74,
		"className": "盗贼3",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-thief13.ccbi",
		"property": {
			"health": 0.3,
			"attack": 0.18,
			"critical": 30,
			"strong": -40,
			"accuracy": 80,
			"reactivity": 0,
			"speed": 40,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundWound": "daozeiwound.mp3",
		"soundAttack": "daozeiattack.mp3",
		"soundDie": "daozeidie.mp3",
		"effectAttack": 8,
		"skill": [
			{
				"id": 34,
				"level": 1
			}
		]
	},
	{
		"classId": 75,
		"className": "山贼头目3",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-robber33.ccbi",
		"property": {
			"health": 0.7,
			"attack": 0.54,
			"critical": -20,
			"strong": -10,
			"accuracy": 20,
			"reactivity": -50,
			"speed": 0,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "shanzeitoumu.mp3",
		"soundWound": "shanzeiroumuwound.mp3",
		"soundAttack": "shanzeitoumuattack.mp3",
		"soundDie": "shanzeitoumudie.mp3",
		"effectAttack": 8,
		"skill": [

		]
	},
	{
		"classId": 76,
		"className": "流浪剑士3",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-sword23.ccbi",
		"property": {
			"health": 0.7,
			"attack": 0.3,
			"critical": 0,
			"strong": 0,
			"accuracy": 40,
			"reactivity": -40,
			"speed": 0,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundWound": "liulangwound.mp3",
		"soundAttack": "liulangattack.mp3",
		"soundDie": "liulangdie.mp3",
		"effectAttack": 8,
		"skill": [
            {
                "id": 180,
                "level": 1
            }
		]
	},
	{
		"classId": 77,
		"className": "游侠3",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-archer13.ccbi",
		"property": {
			"health": 0.3,
			"attack": 0.07,
			"critical": 20,
			"strong": -40,
			"accuracy": 60,
			"reactivity": -80,
			"speed": -40,
			"counterAttack": false,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundWound": "youxiawound.mp3",
		"soundDie": "youxiadie.mp3",
		"effectAttack": 9,
		"skill": [
			{
				"id": 26,
				"level": 1
			},
            {
                "id": 272,
                "level": 1
            },
			{
				"id": 27,
				"level": 1
			}
		]
	},
	{
		"classId": 78,
		"className": "兽人3",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-orcs23.ccbi",
		"property": {
			"health": 0.7,
			"attack": 0.42,
			"critical": 0,
			"strong": 0,
			"accuracy": 20,
			"reactivity": -60,
			"speed": -20,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "shouren.mp3",
		"soundWound": "shourenwound.mp3",
		"soundAttack": "shourenattack.mp3",
		"soundDie": "shourendie.mp3",
		"effectAttack": 8,
		"collectId": 118001
	},
	{
		"classId": 79,
		"className": "狼骑3",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-wolf13.ccbi",
		"property": {
			"health": 0.7,
			"attack": 0.36,
			"critical": -20,
			"strong": -10,
			"accuracy": 50,
			"reactivity": -70,
			"speed": 20,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "tulang.mp3",
		"soundWound": "tulangwound.mp3",
		"soundAttack": "tulangattack.mp3",
		"soundDie": "tulangdie.mp3",
		"effectAttack": 31,
		"skill": [
			{
				"id": 32,
				"level": 5
			}
		]
	},
	{
		"classId": 80,
		"className": "兽人投矛手3",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-orcs13.ccbi",
		"property": {
			"health": 0.5,
			"attack": 0.1,
			"critical": 10,
			"strong": 0,
			"accuracy": 40,
			"reactivity": -80,
			"speed": -40,
			"counterAttack": false,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundWound": "shourenwound.mp3",
		"soundAttack": "shourenattack.mp3",
		"soundDie": "shourendie.mp3",
		"effectAttack": 9,
		"skill": [
			{
				"id": 26,
				"level": 3
			},
            {
                "id": 272,
                "level": 1
            },
			{
				"id": 27,
				"level": 1
			}
		]
	},
	{
		"classId": 81,
		"className": "食人魔3",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-ogre13.ccbi",
		"property": {
			"health": 0.8,
			"attack": 0.48,
			"critical": 10,
			"strong": -30,
			"accuracy": 20,
			"reactivity": -60,
			"speed": -20,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "shirenmo.mp3",
		"soundWound": "shirenmodie.mp3",
		"soundAttack": "shirenmo.mp3",
		"effectAttack": 9,
		"skill": [

		]
	},
	{
		"classId": 82,
		"className": "骷髅兵3",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-skeleton13.ccbi",
		"property": {
			"health": 1.5,
			"attack": 0.06,
			"critical": 0,
			"strong": 0,
			"accuracy": 40,
			"reactivity": -40,
			"speed": 0,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.2,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"effectAttack": 9,
        "collectId": 214001,
        "skill": [
            {
                "id": 187,
                "level": 1
            }
        ]
	},
	{
		"classId": 83,
		"className": "小史莱姆3",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-slime23.ccbi",
		"property": {
			"health": 0.6,
			"attack": 0.12,
			"critical": -40,
			"strong": -40,
			"accuracy": 50,
			"reactivity": -90,
			"speed": 10,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "shilaimu.mp3",
		"soundWound": "shilaimuwound.mp3",
		"soundAttack": "shilaimuattack.mp3",
		"soundDie": "shilaimudie.mp3",
		"effectAttack": 9,
		"animSpawn": "spell-5"
	},
	{
		"classId": 84,
		"className": "Boss蝙蝠3",
		"faction": "monster",
		"classType": 1,
        "skeleton": "bat3.json",
        "atlas": "bat3.atlas",
		"property": {
			"health": 1.5,
			"attack": 0.27,
			"critical": 40,
			"strong": -20,
			"accuracy": 50,
			"reactivity": 0,
			"speed": 0,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.2,
			"health": 0.5,
			"attack": 0.4,
			"critical": 0.2,
			"strong": 0.2,
			"accuracy": 0.3,
			"reactivity": 0.2,
			"speed": 0.3
		},
		"soundSpawn": "bianfu.mp3",
		"soundWound": "bianfuwound.mp3",
		"soundAttack": "bianfuattack.mp3",
		"soundDie": "bianfudie.mp3",
		"effectAttack": 9,
		"scale": 1.2,
        "skill": [
            {
                "id": 163,
                "level": 1
            }
        ]
	},
	{
		"classId": 85,
		"className": "Boss蜘蛛3",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-spider13.ccbi",
		"property": {
			"health": 2,
			"attack": 0.36,
			"critical": 20,
			"strong": -20,
			"accuracy": 20,
			"reactivity": -60,
			"speed": 20,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.4,
			"health": 0.3,
			"attack": 0.4,
			"critical": 0.2,
			"strong": 0.2,
			"accuracy": 0.3,
			"reactivity": 0.3,
			"speed": 0.2
		},
		"soundSpawn": "zhizhu.mp3",
		"soundWound": "zhizhuwound.mp3",
		"soundAttack": "zhizhuattack.mp3",
		"soundDie": "zhizhudie.mp3",
		"effectAttack": 9,
		"skill": [
			{
				"id": 165,
				"level": 2
			}
		],
		"scale": 1.2
	},
	{
		"classId": 86,
		"className": "Boss土狼3",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-wolf23.ccbi",
		"property": {
			"health": 3,
			"attack": 0.54,
			"critical": -10,
			"strong": 0,
			"accuracy": 50,
			"reactivity": -50,
			"speed": 10,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "tulang.mp3",
		"soundWound": "tulangwound.mp3",
		"soundAttack": "tulangattack.mp3",
		"soundDie": "tulangdie.mp3",
		"effectAttack": 31,
		"scale": 1.2
	},
	{
		"classId": 87,
		"className": "Boss史莱姆3",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-slime13.ccbi",
		"property": {
			"health": 4.5,
			"attack": 0.36,
			"critical": -40,
			"strong": 10,
			"accuracy": 50,
			"reactivity": -90,
			"speed": -30,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "shilaimu.mp3",
		"soundWound": "shilaimuwound.mp3",
		"soundAttack": "shilaimuattack.mp3",
		"soundDie": "shilaimudie.mp3",
		"effectAttack": 9,
		"skill": [
			{
				"id": 31,
				"level": 6
			}
		],
		"scale": 1.2
	},
	{
		"classId": 88,
		"className": "Boss哥布林3",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-goblin13.ccbi",
		"property": {
			"health": 2.5,
			"attack": 0.45,
			"critical": 0,
			"strong": 10,
			"accuracy": 40,
			"reactivity": -40,
			"speed": 0,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "gebulin.mp3",
		"soundWound": "gebulinwound.mp3",
		"soundAttack": "gebulinattack.mp3",
		"soundDie": "gebulindie.mp3",
		"effectAttack": 9,
		"scale": 1.2
	},
	{
		"classId": 89,
		"className": "Boss哥布林投矛手3",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-goblin23.ccbi",
		"property": {
			"health": 3,
			"attack": 0.18,
			"critical": 0,
			"strong": 10,
			"accuracy": 40,
			"reactivity": -90,
			"speed": 0,
			"counterAttack": false,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "gebulin.mp3",
		"soundWound": "gebulinwound.mp3",
		"soundAttack": "shouren.mp3",
		"soundDie": "gebulindie.mp3",
		"effectAttack": 9,
		"scale": 1.2,
		"skill": [
			{
				"id": 26,
				"level": 2
			},
            {
                "id": 272,
                "level": 1
            },
			{
				"id": 27,
				"level": 1
			},
			{
				"id": 28,
				"level": 1
			}
		]
	},
	{
		"classId": 90,
		"className": "Boss山贼3",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-robber13.ccbi",
		"property": {
			"health": 2.5,
			"attack": 0.63,
			"critical": -10,
			"strong": 20,
			"accuracy": 20,
			"reactivity": -50,
			"speed": -20,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.2,
			"health": 0.3,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "shanzei.mp3",
		"soundWound": "shanzeiwound.mp3",
		"soundAttack": "shanzeiattack.mp3",
		"soundDie": "shanzeidie.mp3",
		"effectAttack": 8,
		"scale": 1.2
	},
	{
		"classId": 91,
		"className": "Boss盗贼3",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-thief13.ccbi",
		"property": {
			"health": 1.5,
			"attack": 0.27,
			"critical": 30,
			"strong": -20,
			"accuracy": 80,
			"reactivity": 0,
			"speed": 40,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundWound": "daozeiwound.mp3",
		"soundAttack": "daozeiattack.mp3",
		"soundDie": "daozeidie.mp3",
		"effectAttack": 8,
		"skill": [
			{
				"id": 34,
				"level": 1
			}
		],
		"scale": 1.2
	},
	{
		"classId": 92,
		"className": "Boss山贼头目3",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-robber33.ccbi",
		"property": {
			"health": 3.5,
			"attack": 0.81,
			"critical": -20,
			"strong": 10,
			"accuracy": 20,
			"reactivity": -50,
			"speed": 0,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "shanzeitoumu.mp3",
		"soundWound": "shanzeiroumuwound.mp3",
		"soundAttack": "shanzeitoumuattack.mp3",
		"soundDie": "shanzeitoumudie.mp3",
		"effectAttack": 8,
		"scale": 1.2,
		"skill": [

		]
	},
	{
		"classId": 93,
		"className": "Boss流浪剑士3",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-sword23.ccbi",
		"property": {
			"health": 3.5,
			"attack": 0.45,
			"critical": 0,
			"strong": 20,
			"accuracy": 40,
			"reactivity": -40,
			"speed": 0,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundWound": "liulangwound.mp3",
		"soundAttack": "liulangattack.mp3",
		"soundDie": "liulangdie.mp3",
		"effectAttack": 8,
		"skill": [
            {
                "id": 183,
                "level": 1
            }
		],
		"scale": 1.2
	},
	{
		"classId": 94,
		"className": "Boss游侠3",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-archer13.ccbi",
		"property": {
			"health": 1.5,
			"attack": 0.42,
			"critical": 20,
			"strong": -20,
			"accuracy": 60,
			"reactivity": -80,
			"speed": -40,
			"counterAttack": false,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundWound": "youxiawound.mp3",
		"soundDie": "youxiadie.mp3",
		"effectAttack": 9,
		"scale": 1.2,
		"skill": [
			{
				"id": 26,
				"level": 1
			},
            {
                "id": 272,
                "level": 1
            },
			{
				"id": 27,
				"level": 1
			}
		]
	},
	{
		"classId": 95,
		"className": "Boss兽人3",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-orcs23.ccbi",
		"property": {
			"health": 3.5,
			"attack": 0.63,
			"critical": 0,
			"strong": 20,
			"accuracy": 20,
			"reactivity": -60,
			"speed": -20,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "shouren.mp3",
		"soundWound": "shourenwound.mp3",
		"soundAttack": "shourenattack.mp3",
		"soundDie": "shourendie.mp3",
		"effectAttack": 8,
		"scale": 1.2
	},
	{
		"classId": 96,
		"className": "Boss狼骑3",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-wolf13.ccbi",
		"property": {
			"health": 3.5,
			"attack": 0.54,
			"critical": -20,
			"strong": 0,
			"accuracy": 50,
			"reactivity": -70,
			"speed": 20,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "tulang.mp3",
		"soundWound": "tulangwound.mp3",
		"soundAttack": "tulangattack.mp3",
		"soundDie": "tulangdie.mp3",
		"effectAttack": 31,
		"skill": [
			{
				"id": 32,
				"level": 6
			}
		],
		"scale": 1.2
	},
	{
		"classId": 97,
		"className": "Boss兽人投矛手3",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-orcs13.ccbi",
		"property": {
			"health": 2.5,
			"attack": 0.45,
			"critical": 10,
			"strong": 20,
			"accuracy": 40,
			"reactivity": -80,
			"speed": -40,
			"counterAttack": false,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundWound": "shourenwound.mp3",
		"soundAttack": "shourenattack.mp3",
		"soundDie": "shourendie.mp3",
		"effectAttack": 9,
		"scale": 1.2,
		"skill": [
			{
				"id": 26,
				"level": 3
			},
            {
                "id": 272,
                "level": 1
            },
			{
				"id": 27,
				"level": 1
			}
		]
	},
	{
		"classId": 98,
		"className": "Boss食人魔3",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-ogre13.ccbi",
		"property": {
			"health": 4,
			"attack": 0.72,
			"critical": 10,
			"strong": -10,
			"accuracy": 20,
			"reactivity": -60,
			"speed": -20,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "shirenmo.mp3",
		"soundWound": "shirenmodie.mp3",
		"soundAttack": "shirenmo.mp3",
		"effectAttack": 9,
		"skill": [

		],
		"scale": 1.3
	},
	{
		"classId": 99,
		"className": "蝙蝠4",
		"faction": "monster",
		"classType": 1,
        "skeleton": "bat4.json",
        "atlas": "bat4.atlas",
		"property": {
			"health": 0.2,
			"attack": 0.18,
			"critical": 40,
			"strong": -40,
			"accuracy": 50,
			"reactivity": 0,
			"speed": 0,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.2,
			"health": 0.5,
			"attack": 0.4,
			"critical": 0.2,
			"strong": 0.2,
			"accuracy": 0.3,
			"reactivity": 0.2,
			"speed": 0.3
		},
		"soundSpawn": "bianfu.mp3",
		"soundWound": "bianfuwound.mp3",
		"soundAttack": "bianfuattack.mp3",
		"soundDie": "bianfudie.mp3",
		"effectAttack": 9,
        "skill": [
            {
                "id": 163,
                "level": 1
            }
        ]
	},
	{
		"classId": 100,
		"className": "蜘蛛4",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-spider14.ccbi",
		"property": {
			"health": 0.4,
			"attack": 0.24,
			"critical": 20,
			"strong": -40,
			"accuracy": 20,
			"reactivity": -60,
			"speed": 20,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.4,
			"health": 0.3,
			"attack": 0.4,
			"critical": 0.2,
			"strong": 0.2,
			"accuracy": 0.3,
			"reactivity": 0.3,
			"speed": 0.2
		},
		"soundSpawn": "zhizhu.mp3",
		"soundWound": "zhizhuwound.mp3",
		"soundAttack": "zhizhuattack.mp3",
		"soundDie": "zhizhudie.mp3",
		"effectAttack": 9,
		"skill": [
			{
				"id": 165,
				"level": 1
			}
		]
	},
	{
		"classId": 101,
		"className": "土狼4",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-wolf24.ccbi",
		"property": {
			"health": 0.6,
			"attack": 0.36,
			"critical": -10,
			"strong": -10,
			"accuracy": 50,
			"reactivity": -50,
			"speed": 10,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "tulang.mp3",
		"soundWound": "tulangwound.mp3",
		"soundAttack": "tulangattack.mp3",
		"soundDie": "tulangdie.mp3",
		"effectAttack": 31
	},
	{
		"classId": 103,
		"className": "史莱姆4",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-slime14.ccbi",
		"property": {
			"health": 0.9,
			"attack": 0.24,
			"critical": -40,
			"strong": -10,
			"accuracy": 50,
			"reactivity": -90,
			"speed": -30,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "shilaimu.mp3",
		"soundWound": "shilaimuwound.mp3",
		"soundAttack": "shilaimuattack.mp3",
		"soundDie": "shilaimudie.mp3",
		"effectAttack": 9,
		"skill": [
			{
				"id": 31,
				"level": 7
			}
		],
		"collectId": 105001
	},
	{
		"classId": 103,
		"className": "哥布林4",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-goblin14.ccbi",
		"property": {
			"health": 0.5,
			"attack": 0.3,
			"critical": 2,
			"strong": 3,
			"accuracy": 40,
			"reactivity": -40,
			"speed": 0,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "gebulin.mp3",
		"soundWound": "gebulinwound.mp3",
		"soundAttack": "gebulinattack.mp3",
		"soundDie": "gebulindie.mp3",
		"effectAttack": 9,
        "skill": [
            {
                "id": 175,
                "level": 1
            }
        ]
	},
	{
		"classId": 104,
		"className": "哥布林投矛手4",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-goblin24.ccbi",
		"property": {
			"health": 0.6,
			"attack": 0.05,
			"critical": 2,
			"strong": 2,
			"accuracy": 15,
			"reactivity": -90,
			"speed": 0,
			"counterAttack": false,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "gebulintou.mp3",
		"soundWound": "gebulinwound.mp3",
		"soundAttack": "shouren.mp3",
		"soundDie": "gebulindie.mp3",
		"effectAttack": 9,
		"collectId": 114001,
		"skill": [
			{
				"id": 26,
				"level": 2
			},
            {
                "id": 272,
                "level": 1
            },
			{
				"id": 27,
				"level": 1
			},
			{
				"id": 28,
				"level": 1
			}
		]
	},
	{
		"classId": 105,
		"className": "山贼4",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-robber14.ccbi",
		"property": {
			"health": 0.5,
			"attack": 0.42,
			"critical": -10,
			"strong": 0,
			"accuracy": 20,
			"reactivity": -50,
			"speed": -20,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.2,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "shanzei.mp3",
		"soundWound": "shanzeiwound.mp3",
		"soundAttack": "shanzeiattack.mp3",
		"soundDie": "shanzeidie.mp3",
		"effectAttack": 8
	},
	{
		"classId": 106,
		"className": "盗贼4",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-thief14.ccbi",
		"property": {
			"health": 0.3,
			"attack": 0.18,
			"critical": 30,
			"strong": -40,
			"accuracy": 80,
			"reactivity": 0,
			"speed": 40,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundWound": "daozeiwound.mp3",
		"soundAttack": "daozeiattack.mp3",
		"soundDie": "daozeidie.mp3",
		"effectAttack": 8,
		"skill": [
			{
				"id": 34,
				"level": 1
			}
		]
	},
	{
		"classId": 107,
		"className": "山贼头目4",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-robber34.ccbi",
		"property": {
			"health": 0.7,
			"attack": 0.54,
			"critical": -20,
			"strong": -10,
			"accuracy": 20,
			"reactivity": -50,
			"speed": 0,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "shanzeitoumu.mp3",
		"soundWound": "shanzeiroumuwound.mp3",
		"soundAttack": "shanzeitoumuattack.mp3",
		"soundDie": "shanzeitoumudie.mp3",
		"effectAttack": 8,
		"skill": [

		]
	},
	{
		"classId": 108,
		"className": "流浪剑士4",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-sword24.ccbi",
		"property": {
			"health": 0.7,
			"attack": 0.3,
			"critical": 0,
			"strong": 0,
			"accuracy": 40,
			"reactivity": -40,
			"speed": 0,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundWound": "liulangwound.mp3",
		"soundAttack": "liulangattack.mp3",
		"soundDie": "liulangdie.mp3",
		"effectAttack": 8,
		"skill": [
            {
                "id": 180,
                "level": 1
            }
		]
	},
	{
		"classId": 109,
		"className": "游侠4",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-archer14.ccbi",
		"property": {
			"health": 0.3,
			"attack": 0.07,
			"critical": 20,
			"strong": -40,
			"accuracy": 60,
			"reactivity": -80,
			"speed": -40,
			"counterAttack": false,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundWound": "youxiawound.mp3",
		"soundDie": "youxiadie.mp3",
		"effectAttack": 9,
		"skill": [
			{
				"id": 26,
				"level": 1
			},
            {
                "id": 272,
                "level": 1
            },
			{
				"id": 27,
				"level": 1
			}
		]
	},
	{
		"classId": 110,
		"className": "兽人4",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-orcs24.ccbi",
		"property": {
			"health": 0.7,
			"attack": 0.42,
			"critical": 0,
			"strong": 0,
			"accuracy": 20,
			"reactivity": -60,
			"speed": -20,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "shouren.mp3",
		"soundWound": "shourenwound.mp3",
		"soundAttack": "shourenattack.mp3",
		"soundDie": "shourendie.mp3",
		"effectAttack": 9
	},
	{
		"classId": 111,
		"className": "狼骑4",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-wolf14.ccbi",
		"property": {
			"health": 0.7,
			"attack": 0.36,
			"critical": -20,
			"strong": -10,
			"accuracy": 50,
			"reactivity": -70,
			"speed": 20,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "tulang.mp3",
		"soundWound": "tulangwound.mp3",
		"soundAttack": "tulangattack.mp3",
		"soundDie": "tulangdie.mp3",
		"effectAttack": 31,
		"skill": [
			{
				"id": 32,
				"level": 7
			}
		],
		"collectId": 126001
	},
	{
		"classId": 112,
		"className": "兽人投矛手4",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-orcs14.ccbi",
		"property": {
			"health": 0.5,
			"attack": 0.1,
			"critical": 10,
			"strong": 0,
			"accuracy": 40,
			"reactivity": -80,
			"speed": -40,
			"counterAttack": false,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundWound": "shourenwound.mp3",
		"soundAttack": "shourenattack.mp3",
		"soundDie": "shourendie.mp3",
		"effectAttack": 9,
		"skill": [
			{
				"id": 26,
				"level": 3
			},
            {
                "id": 272,
                "level": 1
            },
			{
				"id": 27,
				"level": 1
			}
		]
	},
	{
		"classId": 113,
		"className": "食人魔4",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-ogre14.ccbi",
		"property": {
			"health": 0.8,
			"attack": 0.48,
			"critical": 10,
			"strong": -30,
			"accuracy": 20,
			"reactivity": -60,
			"speed": -20,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 0.4,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "shirenmo.mp3",
		"soundWound": "shirenmodie.mp3",
		"soundAttack": "shirenmo.mp3",
		"effectAttack": 9,
		"skill": [

		]
	},
	{
		"classId": 114,
		"className": "骷髅兵4",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-skeleton14.ccbi",
		"property": {
			"health": 1.5,
			"attack": 0.06,
			"critical": 0,
			"strong": 0,
			"accuracy": 40,
			"reactivity": -40,
			"speed": 0,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.2,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"effectAttack": 9,
        "skill": [
            {
                "id": 187,
                "level": 1
            }
        ]
	},
	{
		"classId": 115,
		"className": "小史莱姆4",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-slime24.ccbi",
		"property": {
			"health": 0.6,
			"attack": 0.12,
			"critical": -40,
			"strong": -40,
			"accuracy": 50,
			"reactivity": -90,
			"speed": 10,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "shilaimu.mp3",
		"soundWound": "shilaimuwound.mp3",
		"soundAttack": "shilaimuattack.mp3",
		"soundDie": "shilaimudie.mp3",
		"effectAttack": 9,
		"animSpawn": "spell-5"
	},
	{
		"classId": 116,
		"className": "Boss蝙蝠4",
		"faction": "monster",
		"classType": 1,
        "skeleton": "bat4.json",
        "atlas": "bat4.atlas",
		"property": {
			"health": 1.5,
			"attack": 0.27,
			"critical": 40,
			"strong": -20,
			"accuracy": 50,
			"reactivity": 0,
			"speed": 0,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.2,
			"health": 0.5,
			"attack": 0.4,
			"critical": 0.2,
			"strong": 0.2,
			"accuracy": 0.3,
			"reactivity": 0.2,
			"speed": 0.3
		},
		"soundSpawn": "bianfu.mp3",
		"soundWound": "bianfuwound.mp3",
		"soundAttack": "bianfuattack.mp3",
		"soundDie": "bianfudie.mp3",
		"effectAttack": 9,
		"scale": 1.2,
        "skill": [
            {
                "id": 163,
                "level": 1
            }
        ]
	},
	{
		"classId": 117,
		"className": "Boss蜘蛛4",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-spider14.ccbi",
		"property": {
			"health": 2,
			"attack": 0.36,
			"critical": 20,
			"strong": -20,
			"accuracy": 20,
			"reactivity": -60,
			"speed": 20,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.4,
			"health": 0.3,
			"attack": 0.4,
			"critical": 0.2,
			"strong": 0.2,
			"accuracy": 0.3,
			"reactivity": 0.3,
			"speed": 0.2
		},
		"soundSpawn": "zhizhu.mp3",
		"soundWound": "zhizhuwound.mp3",
		"soundAttack": "zhizhuattack.mp3",
		"soundDie": "zhizhudie.mp3",
		"effectAttack": 9,
		"skill": [
			{
				"id": 165,
				"level": 2
			}
		],
		"scale": 1.2
	},
	{
		"classId": 118,
		"className": "Boss土狼4",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-wolf24.ccbi",
		"property": {
			"health": 3,
			"attack": 0.54,
			"critical": -10,
			"strong": 0,
			"accuracy": 50,
			"reactivity": -50,
			"speed": 10,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.4,
			"health": 0.3,
			"attack": 0.4,
			"critical": 0.2,
			"strong": 0.3,
			"accuracy": 0.2,
			"reactivity": 0.2,
			"speed": 0.2
		},
		"soundSpawn": "tulang.mp3",
		"soundWound": "tulangwound.mp3",
		"soundAttack": "tulangattack.mp3",
		"soundDie": "tulangdie.mp3",
		"effectAttack": 31,
		"scale": 1.2
	},
	{
		"classId": 119,
		"className": "Boss史莱姆4",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-slime14.ccbi",
		"property": {
			"health": 4.5,
			"attack": 0.36,
			"critical": -40,
			"strong": 10,
			"accuracy": 50,
			"reactivity": -90,
			"speed": -30,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "shilaimu.mp3",
		"soundWound": "shilaimuwound.mp3",
		"soundAttack": "shilaimuattack.mp3",
		"soundDie": "shilaimudie.mp3",
		"effectAttack": 9,
		"skill": [
			{
				"id": 31,
				"level": 8
			}
		],
		"scale": 1.2
	},
	{
		"classId": 120,
		"className": "Boss哥布林4",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-goblin14.ccbi",
		"property": {
			"health": 2.5,
			"attack": 0.45,
			"critical": 0,
			"strong": 10,
			"accuracy": 40,
			"reactivity": -40,
			"speed": 0,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "gebulin.mp3",
		"soundWound": "gebulinwound.mp3",
		"soundAttack": "gebulinattack.mp3",
		"soundDie": "gebulindie.mp3",
		"effectAttack": 9,
		"scale": 1.2
	},
	{
		"classId": 121,
		"className": "Boss哥布林投矛手4",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-goblin24.ccbi",
		"property": {
			"health": 3,
			"attack": 0.18,
			"critical": 0,
			"strong": 10,
			"accuracy": 40,
			"reactivity": -90,
			"speed": 0,
			"counterAttack": false,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "gebulin.mp3",
		"soundWound": "gebulinwound.mp3",
		"soundAttack": "shouren.mp3",
		"soundDie": "gebulindie.mp3",
		"effectAttack": 9,
		"scale": 1.2,
		"skill": [
			{
				"id": 26,
				"level":2
			},
            {
                "id": 272,
                "level": 1
            },
			{
				"id": 27,
				"level": 1
			},
			{
				"id": 28,
				"level": 1
			}
		]
	},
	{
		"classId": 122,
		"className": "Boss山贼4",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-robber14.ccbi",
		"property": {
			"health": 2.5,
			"attack": 0.63,
			"critical": -10,
			"strong": 20,
			"accuracy": 20,
			"reactivity": -50,
			"speed": -20,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.2,
			"health": 0.3,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "shanzei.mp3",
		"soundWound": "shanzeiwound.mp3",
		"soundAttack": "shanzeiattack.mp3",
		"soundDie": "shanzeidie.mp3",
		"effectAttack": 8,
		"scale": 1.2
	},
	{
		"classId": 123,
		"className": "Boss盗贼4",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-thief14.ccbi",
		"property": {
			"health": 1.5,
			"attack": 0.27,
			"critical": 30,
			"strong": -20,
			"accuracy": 80,
			"reactivity": 0,
			"speed": 40,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundWound": "daozeiwound.mp3",
		"soundAttack": "daozeiattack.mp3",
		"soundDie": "daozeidie.mp3",
		"effectAttack": 8,
		"skill": [
			{
				"id": 34,
				"level": 1
			}
		],
		"scale": 1.2
	},
	{
		"classId": 124,
		"className": "Boss山贼头目4",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-robber34.ccbi",
		"property": {
			"health": 3.5,
			"attack": 0.81,
			"critical": -20,
			"strong": 10,
			"accuracy": 20,
			"reactivity": -50,
			"speed": 0,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "shanzeitoumu.mp3",
		"soundWound": "shanzeiroumuwound.mp3",
		"soundAttack": "shanzeitoumuattack.mp3",
		"soundDie": "shanzeitoumudie.mp3",
		"effectAttack": 8,
		"scale": 1.2,
		"skill": [

		]
	},
	{
		"classId": 125,
		"className": "Boss流浪剑士4",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-sword24.ccbi",
		"property": {
			"health": 3.5,
			"attack": 0.45,
			"critical": 0,
			"strong": 20,
			"accuracy": 40,
			"reactivity": -40,
			"speed": 0,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundWound": "liulangwound.mp3",
		"soundAttack": "liulangattack.mp3",
		"soundDie": "liulangdie.mp3",
		"effectAttack": 8,
		"skill": [
            {
                "id": 185,
                "level": 1
            }
		],
		"scale": 1.2
	},
	{
		"classId": 126,
		"className": "Boss游侠4",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-archer14.ccbi",
		"property": {
			"health": 1.5,
			"attack": 0.42,
			"critical": 20,
			"strong": -20,
			"accuracy": 60,
			"reactivity": -80,
			"speed": -40,
			"counterAttack": false,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundWound": "youxiawound.mp3",
		"soundDie": "youxiadie.mp3",
		"effectAttack": 9,
		"scale": 1.2,
		"skill": [
			{
				"id": 26,
				"level": 1
			},
            {
                "id": 272,
                "level": 1
            },
			{
				"id": 27,
				"level": 1
			}
		]
	},
	{
		"classId": 127,
		"className": "Boss兽人4",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-orcs24.ccbi",
		"property": {
			"health": 3.5,
			"attack": 0.63,
			"critical": 0,
			"strong": 20,
			"accuracy": 20,
			"reactivity": -60,
			"speed": -20,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "shouren.mp3",
		"soundWound": "shourenwound.mp3",
		"soundAttack": "shourenattack.mp3",
		"soundDie": "shourendie.mp3",
		"effectAttack": 8,
		"scale": 1.2
	},
	{
		"classId": 128,
		"className": "Boss狼骑4",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-wolf14.ccbi",
		"property": {
			"health": 3.5,
			"attack": 0.54,
			"critical": -20,
			"strong": 0,
			"accuracy": 50,
			"reactivity": -70,
			"speed": 20,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "tulang.mp3",
		"soundWound": "tulangwound.mp3",
		"soundAttack": "tulangattack.mp3",
		"soundDie": "tulangdie.mp3",
		"effectAttack": 31,
		"skill": [
			{
				"id": 32,
				"level": 8
			}
		],
		"scale": 1.2
	},
	{
		"classId": 129,
		"className": "Boss兽人投矛手4",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-orcs14.ccbi",
		"property": {
			"health": 2.5,
			"attack": 0.45,
			"critical": 10,
			"strong": 20,
			"accuracy": 40,
			"reactivity": -80,
			"speed": -40,
			"counterAttack": false,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundWound": "shourenwound.mp3",
		"soundAttack": "shourenattack.mp3",
		"soundDie": "shourendie.mp3",
		"effectAttack": 9,
		"scale": 1.2,
		"skill": [
			{
				"id": 26,
				"level": 3
			},
            {
                "id": 272,
                "level": 1
            },
			{
				"id": 27,
				"level": 1
			}
		]
	},
	{
		"classId": 130,
		"className": "Boss食人魔4",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-ogre14.ccbi",
		"property": {
			"health": 4,
			"attack": 0.72,
			"critical": 10,
			"strong": -10,
			"accuracy": 20,
			"reactivity": -60,
			"speed": -20,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "shirenmo.mp3",
		"soundWound": "shirenmodie.mp3",
		"soundAttack": "shirenmo.mp3",
		"effectAttack": 9,
		"skill": [

		],
		"scale": 1.3
	},
	{
		"classId": 131,
		"className": "战士+",
		"faction": "hero",
		"classType": 0,
		"avatar": "avatar.ccbi",
		"property": {
			"health": 2250,
			"attack": 52,
			"critical": 60,
			"strong": 7,
			"accuracy": 34,
			"reactivity": 0.75,
			"speed": 65
		},
		"defaultArmors": [
			6,
			10,
			11,
			388,
			389,
			390,
			391,
			547,
			548,
			549,
			611
		],
		"skill": [
			{
				"id": 4,
				"level": 1
			},
			{
				"id": 13,
				"level": 1
			},
			{
				"id": 382,
				"level": 3
			},
			{
				"id": 383,
				"level": 3
			}
		]
	},
	{
		"classId": 132,
		"className": "法师+",
		"faction": "hero",
		"classType": 0,
		"avatar": "avatar.ccbi",
		"property": {
			"health": 765,
			"attack": 160,
			"critical": 130,
			"strong": 66,
			"accuracy": 49,
			"reactivity": 1,
			"speed": 24
		},
		"defaultArmors": [
			6,
			10,
			11,
			541,
			544,
			545,
			546,
			382,
			383,
			611
		],
		"skill": [
			{
				"id": 43,
				"level": 1
			},
			{
				"id": 6,
				"level": 1
			},
			{
				"id": 385,
				"level": 3
			},
			{
				"id": 386,
				"level": 3
			}
		]
	},
	{
		"abtest": [
			{
				"classId": 133,
				"className": "龙",
				"faction": "monster",
				"classType": 1,
				"bossFlag": true,
				"avatar": "enemy-dragon.ccbi",
				"animSpawn": "open",
				"property": {
					"health": 40,
					"attack": 3,
					"critical": 4,
					"strong": 600,
					"accuracy": 40,
					"reactivity": -1000,
					"speed": 4,
					"counterAttack": false,
					"exp": 0,
					"gold": 0
				},
				"xproperty": {
					"balance": 0.1,
					"health": 1.5,
					"attack": 0.4,
					"critical": 1,
					"strong": 1,
					"accuracy": 1,
					"reactivity": 1,
					"speed": 1
				},
				"skill": [
					{
						"id": 39,
						"level": 1
					},
                    {
                        "id": 40,
                        "level": 1
                    },
                    {
                        "id": 41,
                        "level": 1
                    },
                    {
                        "id": 42,
                        "level": 1
                    },
					{
						"id": 35,
						"level": 1
					},
					{
						"id": 42,
						"level": 1
					}
				]
			},
			{
				"classId": 133,
				"className": "龙",
				"faction": "monster",
				"classType": 1,
				"bossFlag": true,
				"avatar": "enemy-dragon.ccbi",
				"animSpawn": "open",
				"property": {
					"health": 18,
					"attack": 3,
					"critical": 4,
					"strong": 600,
					"accuracy": 40,
					"reactivity": -1000,
					"speed": 4,
					"counterAttack": false,
					"exp": 0,
					"gold": 0
				},
				"xproperty": {
					"balance": 0.1,
					"health": 1.5,
					"attack": 0.4,
					"critical": 1,
					"strong": 1,
					"accuracy": 1,
					"reactivity": 1,
					"speed": 1
				},
				"skill": [
					{
						"id": 39,
						"level": 1
					},
                    {
                        "id": 40,
                        "level": 1
                    },
                    {
                        "id": 41,
                        "level": 1
                    },
                    {
                        "id": 42,
                        "level": 1
                    },
					{
						"id": 35,
						"level": 1
					},
					{
						"id": 42,
						"level": 1
					}
				]
			}
		]
	},
	{
		"classId": 134,
		"className": "导演",
		"faction": "monster",
		"classType": 1,
		"avatar": "avatar.ccbi",
		"property": {
			"health": 1.5,
			"attack": 3,
			"critical": 4,
			"strong": 6,
			"accuracy": 15,
			"reactivity": -15,
			"speed": 4,
			"counterAttack": false,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"skill": [
			{
				"id": 38,
				"level": 1
			}
		]
	},
	{
		"classId": 135,
		"className": "食人魔怪",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-ogreboss.ccbi",
		"property": {
			"health": 10,
			"attack": 0.6,
			"critical": 40,
			"strong": 40,
			"accuracy": 30,
			"reactivity": -60,
			"speed": 0,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "shirenmo.mp3",
		"soundWound": "shirenmodie.mp3",
		"soundAttack": "shirenmo.mp3",
		"effectAttack": 9,
		"scale": 1.2,
		"skill": [
			{
				"id": 45,
				"level": 1
			},
			{
				"id": 47,
				"level": 1
			},
			{
				"id": 55,
				"level": 1
			}
		],
		"bossFlag": true
	},
	{
		"classId": 136,
		"className": "史莱姆之王",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-slimeboss.ccbi",
		"property": {
			"health": 10,
			"attack": 0.6,
			"critical": 20,
			"strong": 10,
			"accuracy": 60,
			"reactivity": -50,
			"speed": 0,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "shilaimu.mp3",
		"soundWound": "shilaimuwound.mp3",
		"soundAttack": "shilaimuattack.mp3",
		"soundDie": "shilaimudie.mp3",
		"effectAttack": 9,
		"scale": 1.2,
		"skill": [
			{
				"id": 55,
				"level": 1
			},
			{
				"id": 56,
				"level": 1
			},
			{
				"id": 57,
				"level": 1
			}
		],
		"bossFlag": true
	},
	{
		"classId": 137,
		"className": "游侠头领",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-archerboss.ccbi",
		"property": {
			"health": 10,
			"attack": 1,
			"critical": 6,
			"strong": 105,
			"accuracy": 60,
			"reactivity": -10,
			"speed": 0,
			"counterAttack": false,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundWound": "liulangwound.mp3",
		"soundDie": "liulangdie.mp3",
		"scale": 1.2,
		"skill": [
			{
				"id": 51,
				"level": 1
			},
			{
				"id": 53,
				"level": 1
			},
			{
				"id": 54,
				"level": 1
			},
			{
				"id": 55,
				"level": 1
			}
		],
		"bossFlag": true
	},
	{
		"classId": 138,
		"className": "狂暴哥布林",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-goblinboss.ccbi",
		"property": {
			"health": 10,
			"attack": 1,
			"critical": 60,
			"strong": 20,
			"accuracy": 10,
			"reactivity": -20,
			"speed": 0,
			"counterAttack": false,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundDie": "gebulindie.mp3",
		"scale": 1.2,
		"skill": [
			{
				"id": 55,
				"level": 1
			},
			{
				"id": 28,
				"level": 1
			},
			{
				"id": 58,
				"level": 1
			},
			{
				"id": 59,
				"level": 1
			},
			{
				"id": 61,
				"level": 1
			}
		],
		"bossFlag": true
	},
	{
		"classId": 139,
		"className": "狼王",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-wolfboss.ccbi",
		"property": {
			"health": 10,
			"attack": 0.6,
			"critical": 10,
			"strong": 20,
			"accuracy": 60,
			"reactivity": -40,
			"speed": 20,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "tulang.mp3",
		"soundWound": "tulangwound.mp3",
		"soundAttack": "tulangattack.mp3",
		"soundDie": "tulangdie.mp3",
		"effectAttack": 31,
		"scale": 1.2,
		"skill": [
			{
				"id": 62,
				"level": 1
			},
			{
				"id": 63,
				"level": 1
			},
			{
				"id": 64,
				"level": 1
			},
			{
				"id": 66,
				"level": 1
			},
			{
				"id": 55,
				"level": 1
			}
		],
		"bossFlag": true
	},
	{
		"classId": 140,
		"className": "剑圣",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-swordboss.ccbi",
		"property": {
			"health": 10,
			"attack": 0.75,
			"critical": 30,
			"strong": 10,
			"accuracy": 60,
			"reactivity": -20,
			"speed": 30,
			"counterAttack": true,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundWound": "liulangwound.mp3",
		"soundAttack": "liulangattack.mp3",
		"soundDie": "liulangdie.mp3",
		"effectAttack": 8,
		"scale": 1.2,
		"skill": [
			{
				"id": 69,
				"level": 1
			},
			{
				"id": 71,
				"level": 1
			},
			{
				"id": 72,
				"level": 1
			},
			{
				"id": 55,
				"level": 1
			}
		],
		"bossFlag": true
	},
	{
		"classId": 141,
		"className": "小伙伴战士",
		"faction": "npc",
		"classType": 2,
		"avatar": "npc-warrior.ccbi",
		"property": {
			"health": 5
		},
		"skill": [
			{
				"id": 74,
				"level": 1
			}
		]
	},
	{
		"classId": 142,
		"className": "小伙伴法师",
		"faction": "npc",
		"classType": 2,
		"avatar": "npc-mage.ccbi",
		"property": {
			"health": 5
		},
		"skill": [
			{
				"id": 74,
				"level": 1
			}
		]
	},
	{
		"classId": 143,
		"className": "小伙伴牧师",
		"faction": "npc",
		"classType": 2,
		"avatar": "npc-priest.ccbi",
		"property": {
			"health": 5
		},
		"skill": [
			{
				"id": 74,
				"level": 1
			}
		]
	},
	{
		"classId": 144,
		"className": "矿石1",
		"faction": "npc",
		"classType": 2,
		"avatar": "npc-crystal1.ccbi",
		"property": {
			"health": 5
		},
		"skill": [
			{
				"id": 74,
				"level": 1
			}
		]
	},
	{
		"classId": 145,
		"className": "矿石2",
		"faction": "npc",
		"classType": 2,
		"avatar": "npc-crystal2.ccbi",
		"property": {
			"health": 5
		},
		"skill": [
			{
				"id": 74,
				"level": 1
			}
		]
	},
	{
		"classId": 146,
		"className": "村姑1",
		"faction": "npc",
		"classType": 2,
		"avatar": "npc-woman.ccbi",
		"property": {
			"health": 5
		},
		"skill": [
			{
				"id": 74,
				"level": 1
			}
		]
	},
	{
		"classId": 147,
		"className": "草药1",
		"faction": "npc",
		"classType": 2,
		"avatar": "npc-herbs1.ccbi",
		"property": {
			"health": 5
		},
		"skill": [
			{
				"id": 74,
				"level": 1
			}
		]
	},
	{
		"classId": 148,
		"className": "游侠头领分身",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-archerboss.ccbi",
		"property": {
			"health": 1.5,
			"attack": 3,
			"critical": 6,
			"strong": 13,
			"accuracy": 10,
			"reactivity": -100,
			"speed": 0,
			"counterAttack": false,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 0,
			"reactivity": 1,
			"speed": 1
		},
		"skill": [
			{
				"id": 75,
				"level": 1
			}
		],
		"hideHealth": true,
		"hideAttack": true
	},
	{
		"classId": 149,
		"className": "宝箱",
		"faction": "npc",
		"classType": 2,
		"avatar": "enemy-treasurebox.ccbi",
		"property": {
			"health": 1.5,
			"attack": 3,
			"critical": 6,
			"strong": 13,
			"accuracy": 10,
			"reactivity": -100,
			"speed": 0,
			"counterAttack": false,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"skill": [
			{
				"id": 48,
				"level": 1
			}
		]
	},
	{
		"classId": 150,
		"className": "任务宝箱",
		"faction": "npc",
		"classType": 2,
		"avatar": "npc-treasurebox.ccbi",
		"property": {
			"health": 5
		},
		"skill": [
			{
				"id": 74,
				"level": 1
			}
		]
	},
	{
		"classId": 151,
		"className": "矿石3",
		"faction": "npc",
		"classType": 2,
		"avatar": "npc-crystal3.ccbi",
		"property": {
			"health": 5
		},
		"skill": [
			{
				"id": 74,
				"level": 1
			}
		]
	},
	{
		"classId": 152,
		"className": "矿石4",
		"faction": "npc",
		"classType": 2,
		"avatar": "npc-crystal4.ccbi",
		"property": {
			"health": 5
		},
		"skill": [
			{
				"id": 74,
				"level": 1
			}
		]
	},
	{
		"classId": 153,
		"className": "村姑2",
		"faction": "npc",
		"classType": 2,
		"avatar": "npc-woman2.ccbi",
		"property": {
			"health": 5
		},
		"skill": [
			{
				"id": 74,
				"level": 1
			}
		]
	},
	{
		"classId": 154,
		"className": "村姑3",
		"faction": "npc",
		"classType": 2,
		"avatar": "npc-woman3.ccbi",
		"property": {
			"health": 5
		},
		"skill": [
			{
				"id": 74,
				"level": 1
			}
		]
	},
	{
		"classId": 155,
		"className": "村姑4",
		"faction": "npc",
		"classType": 2,
		"avatar": "npc-woman4.ccbi",
		"property": {
			"health": 5
		},
		"skill": [
			{
				"id": 74,
				"level": 1
			}
		]
	},
	{
		"classId": 156,
		"className": "村夫1",
		"faction": "npc",
		"classType": 2,
		"avatar": "npc-man.ccbi",
		"property": {
			"health": 5
		},
		"skill": [
			{
				"id": 74,
				"level": 1
			}
		]
	},
	{
		"classId": 157,
		"className": "村夫2",
		"faction": "npc",
		"classType": 2,
		"avatar": "npc-man2.ccbi",
		"property": {
			"health": 5
		},
		"skill": [
			{
				"id": 74,
				"level": 1
			}
		]
	},
	{
		"classId": 158,
		"className": "考古学家",
		"faction": "npc",
		"classType": 2,
		"avatar": "npc-archaeologist.ccbi",
		"property": {
			"health": 5
		},
		"skill": [
			{
				"id": 74,
				"level": 1
			}
		]
	},
	{
		"classId": 159,
		"className": "草药2",
		"faction": "npc",
		"classType": 2,
		"avatar": "npc-herbs2.ccbi",
		"property": {
			"health": 5
		},
		"skill": [
			{
				"id": 74,
				"level": 1
			}
		]
	},
	{
		"classId": 160,
		"className": "草药3",
		"faction": "npc",
		"classType": 2,
		"avatar": "npc-herbs3.ccbi",
		"property": {
			"health": 5
		},
		"skill": [
			{
				"id": 74,
				"level": 1
			}
		]
	},
	{
		"classId": 161,
		"className": "草药4",
		"faction": "npc",
		"classType": 2,
		"avatar": "npc-herbs4.ccbi",
		"property": {
			"health": 5
		},
		"skill": [
			{
				"id": 74,
				"level": 1
			}
		]
	},
	{
		"classId": 162,
		"className": "小小哥布林",
		"faction": "npc",
		"classType": 2,
		"avatar": "enemy-goblin1.ccbi",
		"property": {
			"health": 5
		},
		"skill": [
			{
				"id": 74,
				"level": 1
			}
		],
		"scale": 0.8
	},
	{
		"classId": 163,
		"className": "牧师+npc",
		"faction": "npc",
		"classType": 2,
		"avatar": "avatar.ccbi",
		"property": {
			"health": 50,
			"hairColor": 15
		},
		"defaultArmors": [
			6,
			554,
			555,
			556,
			557,
			11
		],
		"skill": [
			{
				"id": 74,
				"level": 1
			}
		]
	},
	{
		"classId": 164,
		"className": "牧师+",
		"faction": "hero",
		"classType": 0,
		"avatar": "avatar.ccbi",
		"property": {
			"health": 50,
			"attack": 4,
			"critical": 10,
			"strong": 66,
			"accuracy": 49,
			"reactivity": 1,
			"speed": 24
		},
		"defaultArmors": [
			6,
			554,
			555,
			556,
			557,
			98,
			99,
			11
		],
		"skill": [
			{
				"id": 77,
				"level": 1
			}
		]
	},
	{
		"classId": 165,
		"className": "村长",
		"faction": "npc",
		"classType": 2,
		"avatar": "npc-village.ccbi",
		"property": {
			"health": 5
		},
		"skill": [
			{
				"id": 74,
				"level": 1
			}
		]
	},
	{
		"classId": 166,
		"className": "龙",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-dragon.ccbi",
		"property": {
			"health": 40,
			"attack": 3,
			"critical": 4,
			"strong": 600,
			"accuracy": 40,
			"reactivity": -1000,
			"speed": 4,
			"counterAttack": false,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"skill": [
			{
				"id": 79,
				"level": 1
			},
            {
                "id": 40,
                "level": 1
            },
            {
                "id": 80,
                "level": 1
            },
			{
				"id": 35,
				"level": 1
			},
			{
				"id": 42,
				"level": 1
			}
		],
		"animSpawn": "open",
		"zOrderOffset": 100,
		"bossFlag": true
	},
	{
		"classId": 167,
		"className": "导演",
		"faction": "monster",
		"classType": 1,
		"avatar": "avatar.ccbi",
		"property": {
			"health": 1.5,
			"attack": 3,
			"critical": 4,
			"strong": 6,
			"accuracy": 15,
			"reactivity": -15,
			"speed": 4,
			"counterAttack": false,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"skill": [
			{
				"id": 78,
				"level": 1
			}
		]
	},
	{
		"classId": 168,
		"className": "导演0",
		"faction": "monster",
		"classType": 1,
		"avatar": "avatar.ccbi",
		"property": {
			"health": 1.5,
			"attack": 3,
			"critical": 4,
			"strong": 6,
			"accuracy": 15,
			"reactivity": -15,
			"speed": 4,
			"counterAttack": false,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"skill": [
			{
				"id": 81,
				"level": 1
			}
		]
	},
	{
		"classId": 169,
		"className": "宝箱X",
		"faction": "npc",
		"classType": 2,
		"avatar": "enemy-treasurebox.ccbi",
		"property": {
			"health": 1.5,
			"attack": 3,
			"critical": 6,
			"strong": 13,
			"accuracy": 10,
			"reactivity": -100,
			"speed": 0,
			"counterAttack": false,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"skill": [
			{
				"id": 82,
				"level": 1
			}
		]
	},
	{
		"classId": 170,
		"className": "我方全体回血",
		"faction": "npch",
		"classType": 2,
		"avatar": "effect-smzq.ccbi",
		"property": {
			"health": 5,
			"strong": 0
		},
		"xproperty": {
			"strong": 0.8
		},
		"skill": [
			{
				"id": 84,
				"level": 1
			}
		],
		"effectDeath": -1,
		"flipFlag": false
	},
	{
		"classId": 171,
		"className": "敌方全体回血",
		"faction": "npcm",
		"classType": 2,
		"avatar": "effect-xc.ccbi",
		"property": {
			"health": 5,
			"strong": 0
		},
		"xproperty": {
			"strong": 0.8
		},
		"skill": [
			{
				"id": 84,
				"level": 1
			}
		],
		"effectDeath": -1,
		"flipFlag": false
	},
	{
		"classId": 172,
		"className": "我方全体掉血",
		"faction": "npch",
		"classType": 2,
		"avatar": "effect-bomb.ccbi",
		"property": {
			"health": 5,
			"strong": 0
		},
		"xproperty": {
			"strong": 0.8
		},
		"skill": [
			{
				"id": 83,
				"level": 1
			}
		],
		"effectDeath": -1,
		"flipFlag": false
	},
	{
		"classId": 173,
		"className": "敌方全体掉血",
		"faction": "npcm",
		"classType": 2,
		"avatar": "effect-sszg.ccbi",
		"property": {
			"health": 5,
			"strong": 4
		},
		"xproperty": {
			"strong": 2
		},
		"skill": [
			{
				"id": 83,
				"level": 2
			}
		],
		"effectDeath": -1,
		"flipFlag": false
	},
	{
		"classId": 174,
		"className": "我方全体攻击加速",
		"faction": "npch",
		"classType": 2,
		"avatar": "effect-js-1.ccbi",
		"property": {
			"health": 5
		},
		"skill": [
			{
				"id": 87
			}
		],
		"effectDeath": -1,
		"flipFlag": false
	},
	{
		"classId": 175,
		"className": "敌方全体攻击加速",
		"faction": "npcm",
		"classType": 2,
		"avatar": "effect-js-2.ccbi",
		"property": {
			"health": 5
		},
		"skill": [
			{
				"id": 87
			}
		],
		"effectDeath": -1,
		"flipFlag": false
	},
	{
		"classId": 176,
		"className": "我方全体攻击上升",
		"faction": "npch",
		"classType": 2,
		"avatar": "effect-ll-1.ccbi",
		"property": {
			"health": 5
		},
		"skill": [
			{
				"id": 89
			}
		],
		"effectDeath": -1,
		"flipFlag": false
	},
	{
		"classId": 177,
		"className": "敌方全体攻击上升",
		"faction": "npcm",
		"classType": 2,
		"avatar": "effect-ll-2.ccbi",
		"property": {
			"health": 5
		},
		"skill": [
			{
				"id": 89
			}
		],
		"effectDeath": -1,
		"flipFlag": false
	},
	{
		"classId": 178,
		"className": "我方全体攻击降低",
		"faction": "npch",
		"classType": 2,
		"avatar": "effect-xr-2x.ccbi",
		"property": {
			"health": 5
		},
		"skill": [
			{
				"id": 91
			}
		],
		"effectDeath": -1,
		"flipFlag": false
	},
	{
		"classId": 179,
		"className": "敌方全体攻击降低",
		"faction": "npcm",
		"classType": 2,
		"avatar": "effect-xr-1.ccbi",
		"property": {
			"health": 5
		},
		"skill": [
			{
				"id": 91
			}
		],
		"effectDeath": -1,
		"flipFlag": false
	},
	{
		"classId": 180,
		"className": "我方全体持续掉血",
		"faction": "npch",
		"classType": 2,
		"avatar": "effect-gas.ccbi",
		"property": {
			"health": 5
		},
		"skill": [
			{
				"id": 93
			}
		],
		"effectDeath": -1,
		"flipFlag": false
	},
	{
		"classId": 181,
		"className": "我方全体无敌",
		"faction": "npch",
		"classType": 2,
		"avatar": "effect-wd-1.ccbi",
		"property": {
			"health": 5
		},
		"skill": [
			{
				"id": 95
			}
		],
		"effectDeath": -1,
		"flipFlag": false
	},
	{
		"classId": 182,
		"className": "敌方全体无敌",
		"faction": "npcm",
		"classType": 2,
		"avatar": "effect-wd-2.ccbi",
		"property": {
			"health": 5
		},
		"skill": [
			{
				"id": 95
			}
		],
		"effectDeath": -1,
		"flipFlag": false
	},
	{
		"classId": 183,
		"className": "我方全体攻击吸收",
		"faction": "npch",
		"classType": 2,
		"avatar": "effect-xssh-1.ccbi",
		"property": {
			"health": 5
		},
		"skill": [
			{
				"id": 97
			}
		],
		"effectDeath": -1,
		"flipFlag": false
	},
	{
		"classId": 184,
		"className": "敌方全体攻击吸收",
		"faction": "npcm",
		"classType": 2,
		"avatar": "effect-xssh-2.ccbi",
		"property": {
			"health": 5
		},
		"skill": [
			{
				"id": 97
			}
		],
		"effectDeath": -1,
		"flipFlag": false
	},
	{
		"classId": 185,
		"className": "清除我方所有buff",
		"faction": "npch",
		"classType": 2,
		"avatar": "effect-buffclear.ccbi",
		"property": {
			"health": 5
		},
		"skill": [
			{
				"id": 99
			}
		],
		"effectDeath": -1,
		"flipFlag": false
	},
	{
		"classId": 186,
		"className": "游侠头领教程",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-archerboss.ccbi",
		"property": {
			"health": 75,
			"attack": 1,
			"critical": 6,
			"strong": 105,
			"accuracy": 60,
			"reactivity": -10,
			"speed": 0,
			"counterAttack": false,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundWound": "liulangwound.mp3",
		"soundDie": "liulangdie.mp3",
		"skill": [
			{
				"id": 114,
				"level": 1
			},
			{
				"id": 117,
				"level": 1
			},
			{
				"id": 116,
				"level": 1
			},
			{
				"id": 55,
				"level": 1
			}
		],
		"bossFlag": true
	},
	{
		"classId": 187,
		"className": "狂暴哥布林教程",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-goblinboss.ccbi",
		"property": {
			"health": 65,
			"attack": 1,
			"critical": 60,
			"strong": 2000,
			"accuracy": 10,
			"reactivity": -20,
			"speed": 0,
			"counterAttack": false,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 1.5,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundDie": "gebulindie.mp3",
		"skill": [
			{
				"id": 55,
				"level": 1
			},
			{
				"id": 28,
				"level": 1
			},
			{
				"id": 118,
				"level": 1
			},
			{
				"id": 119,
				"level": 1
			},
			{
				"id": 121,
				"level": 1
			}
		],
		"bossFlag": true
	},
	{
		"classId": 188,
		"className": "哥布林土豪",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-thgoblin1.ccbi",
		"property": {
			"health": 1.5,
			"attack": 0.12,
			"critical": 2,
			"strong": 2,
			"accuracy": 15,
			"reactivity": 0,
			"speed": 0,
			"counterAttack": false,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 2,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "gebulintou.mp3",
		"soundWound": "gebulinwound.mp3",
		"soundAttack": "shouren.mp3",
		"soundDie": "gebulindie.mp3",
		"effectAttack": 9,
		"skill": [
			{
				"id": 122,
				"level": 1
			},
			{
				"id": 124,
				"level": 1
			},
			{
				"id": 125,
				"level": 1
			}
		],
		"dropInfo": [
			5
		]
	},
	{
		"classId": 189,
		"className": "哥布林土豪",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-thgoblin2.ccbi",
		"property": {
			"health": 1.5,
			"attack": 0.12,
			"critical": 2,
			"strong": 2,
			"accuracy": 15,
			"reactivity": 10,
			"speed": 0,
			"counterAttack": false,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 3,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "gebulintou.mp3",
		"soundWound": "gebulinwound.mp3",
		"soundAttack": "shouren.mp3",
		"soundDie": "gebulindie.mp3",
		"effectAttack": 9,
		"skill": [
			{
				"id": 122,
				"level": 1
			},
			{
				"id": 124,
				"level": 1
			},
			{
				"id": 125,
				"level": 1
			}
		],
		"dropInfo": [
			6
		]
	},
	{
		"classId": 190,
		"className": "哥布林土豪",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-thgoblin3.ccbi",
		"property": {
			"health": 1.5,
			"attack": 0.12,
			"critical": 2,
			"strong": 2,
			"accuracy": 15,
			"reactivity": 30,
			"speed": 0,
			"counterAttack": false,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 4,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "gebulintou.mp3",
		"soundWound": "gebulinwound.mp3",
		"soundAttack": "shouren.mp3",
		"soundDie": "gebulindie.mp3",
		"effectAttack": 9,
		"skill": [
			{
				"id": 122,
				"level": 1
			},
			{
				"id": 124,
				"level": 1
			},
			{
				"id": 125,
				"level": 1
			}
		],
		"dropInfo": [
			7
		]
	},
    {
        "classId": 191,
        "className": "装备达人",
        "faction": "monster",
        "classType": 1,
        "avatar": "enemy-zbdr1.ccbi",
        "property": {
            "health": 2,
            "attack": 0.3,
            "critical": 2,
            "strong": 2,
            "accuracy": 15,
            "reactivity": -20,
            "speed": 0,
            "exp": 0,
            "counterAttack": true,
            "gold": 0
        },
        "xproperty": {
            "balance": 0.1,
            "health": 4,
            "attack": 0.4,
            "critical": 1,
            "strong": 1,
            "accuracy": 1,
            "reactivity": 1,
            "speed": 1
        },
        "soundWound": "liulangwound.mp3",
        "soundAttack": "liulangattack.mp3",
        "soundDie": "liulangdie.mp3",
        "effectAttack": 9,
        "skill": [
            {
                "id": 126,
                "level": 1
            },
            {
                "id": 125,
                "level": 1
            },
            {
                "id": 34,
                "level": 1
            }
        ],
        "dropInfo": [
            87
        ]
    },
    {
        "classId": 192,
        "className": "强劲装备达人",
        "faction": "monster",
        "classType": 1,
        "avatar": "enemy-zbdr2.ccbi",
        "property": {
            "health": 1.5,
            "attack": 0.12,
            "critical": 2,
            "strong": 2,
            "accuracy": 15,
            "reactivity": -20,
            "speed": 0,
            "exp": 0,
            "gold": 0,
            "counterAttack": true
        },
        "xproperty": {
            "balance": 0.1,
            "health": 4,
            "attack": 0.4,
            "critical": 1,
            "strong": 1,
            "accuracy": 1,
            "reactivity": 1,
            "speed": 1
        },
        "soundWound": "liulangwound.mp3",
        "soundAttack": "liulangattack.mp3",
        "soundDie": "liulangdie.mp3",
        "effectAttack": 9,
        "skill": [
            {
                "id": 126,
                "level": 2
            },
            {
                "id": 125,
                "level": 1
            },
            {
                "id": 34,
                "level": 1
            }
        ],
        "dropInfo": [
            88
        ]
    },
    {
        "classId": 193,
        "className": "威力装备达人",
        "faction": "monster",
        "classType": 1,
        "avatar": "enemy-zbdr3.ccbi",
        "property": {
            "health": 3,
            "attack": 0.8,
            "critical": 2,
            "strong": 2,
            "accuracy": 15,
            "reactivity": -20,
            "speed": 0,
            "exp": 0,
            "gold": 0,
            "counterAttack": true
        },
        "xproperty": {
            "balance": 0.1,
            "health": 4,
            "attack": 0.4,
            "critical": 1,
            "strong": 1,
            "accuracy": 1,
            "reactivity": 1,
            "speed": 1
        },
        "soundWound": "liulangwound.mp3",
        "soundAttack": "liulangattack.mp3",
        "soundDie": "liulangdie.mp3",
        "effectAttack": 9,
        "skill": [
            {
                "id": 126,
                "level": 3
            },
            {
                "id": 125,
                "level": 1
            },
            {
                "id": 34,
                "level": 1
            }
        ],
        "dropInfo": [
            89
        ]
    },
    {
        "classId": 194,
        "className": "狼骑3",
        "faction": "monster",
        "classType": 1,
        "avatar": "enemy-wolf13.ccbi",
        "property": {
            "health": 0.7,
            "attack": 0.36,
            "critical": -20,
            "strong": -10,
            "accuracy": 50,
            "reactivity": -70,
            "speed": 20,
            "counterAttack": true,
            "exp": 0,
            "gold": 0
        },
        "xproperty": {
            "balance": 0.1,
            "health": 1.5,
            "attack": 0.4,
            "critical": 1,
            "strong": 1,
            "accuracy": 1,
            "reactivity": 1,
            "speed": 1
        },
        "soundSpawn": "tulang.mp3",
        "soundWound": "tulangwound.mp3",
        "soundAttack": "tulangattack.mp3",
        "soundDie": "tulangdie.mp3",
        "effectAttack": 31,
        "skill": [
            {
                "id": 32,
                "level": 5
            }
        ],
        "dropInfo": [
            90
        ]
    },
    {
        "classId": 195,
        "className": "哥布林2",
        "faction": "monster",
        "classType": 1,
        "avatar": "enemy-goblin12.ccbi",
        "property": {
            "health": 0.5,
            "attack": 0.3,
            "critical": 2,
            "strong": 3,
            "accuracy": 40,
            "reactivity": -40,
            "speed": 0,
            "counterAttack": true,
            "exp": 0,
            "gold": 0
        },
        "xproperty": {
            "balance": 0.1,
            "health": 1.5,
            "attack": 0.4,
            "critical": 1,
            "strong": 1,
            "accuracy": 1,
            "reactivity": 1,
            "speed": 1
        },
        "soundSpawn": "gebulin.mp3",
        "soundWound": "gebulinwound.mp3",
        "soundAttack": "gebulinattack.mp3",
        "soundDie": "gebulindie.mp3",
        "effectAttack": 9,
        "dropInfo": [
            90
        ]
    },
    {
        "classId": 196,
        "className": "食人魔4",
        "faction": "monster",
        "classType": 1,
        "avatar": "enemy-ogre14.ccbi",
        "property": {
            "health": 0.8,
            "attack": 0.48,
            "critical": 10,
            "strong": -30,
            "accuracy": 20,
            "reactivity": -60,
            "speed": -20,
            "counterAttack": true,
            "exp": 0,
            "gold": 0
        },
        "xproperty": {
            "balance": 0.1,
            "health": 0.4,
            "attack": 0.4,
            "critical": 1,
            "strong": 1,
            "accuracy": 1,
            "reactivity": 1,
            "speed": 1
        },
        "soundSpawn": "shirenmo.mp3",
        "soundWound": "shirenmodie.mp3",
        "soundAttack": "shirenmo.mp3",
        "effectAttack": 9,
        "skill": [

        ],
        "dropInfo": [
            90
        ]
    },
    {
        "classId": 197,
        "className": "pk战士",
        "faction": "monster",
        "classType": 4,
        "avatar": "avatar.ccbi",
        "emblem": [
            "emblem-warrior.png",
            "emblem-warrior2.png"
        ],
        "defaultArmors": [
            6,
            10,
            11,
            40,
            41,
            42,
            43,
            662,
            712
        ],
        "property": {
            "keyd":true,
            "counterAttack": true
        },
        "levelId": 4
    },
    {
        "classId": 198,
        "className": "法师",
        "faction": "monster",
        "classType": 4,
        "avatar": "avatar.ccbi",
        "emblem": [
            "emblem-mage.png",
            "emblem-mage2.png"
        ],
        "defaultArmors": [
            6,
            10,
            11,
            32,
            33,
            34,
            35,
            652,
            742
        ],
        "property": {
            "keyd":true,
            "counterAttack": true
        },
        "levelId": 5
    },
    {
        "classId": 199,
        "className": "牧师",
        "faction": "monster",
        "classType": 4,
        "avatar": "avatar.ccbi",
        "emblem": [
            "emblem-priest.png",
            "emblem-priest2.png"
        ],
        "defaultArmors": [
            6,
            10,
            11,
            36,
            37,
            38,
            39,
            682,
            772
        ],
        "property": {
            "keyd":true,
            "counterAttack": true
        },
        "levelId": 6
    },
    {
        "classId": 200,
        "className": "狂暴哥布林",
        "faction": "monster",
        "classType": 1,
        "avatar": "enemy-goblinboss.ccbi",
        "property": {
            "health": 10,
            "attack": 1,
            "critical": 60,
            "strong": 20,
            "accuracy": 10,
            "reactivity": -20,
            "speed": 0,
            "counterAttack": false,
            "exp": 0,
            "gold": 0
        },
        "xproperty": {
            "balance": 0.1,
            "health": 1.5,
            "attack": 0.4,
            "critical": 1,
            "strong": 1,
            "accuracy": 1,
            "reactivity": 1,
            "speed": 1
        },
        "soundDie": "gebulindie.mp3",
        "scale": 1.2,
        "skill": [
            {
                "id": 55,
                "level": 1
            },
            {
                "id": 28,
                "level": 1
            },
            {
                "id": 58,
                "level": 1
            },
            {
                "id": 140,
                "level": 1
            },
            {
                "id": 142,
                "level": 1
            }
        ],
        "bossFlag": true
    },
    {
        "classId": 201,
        "className": "狼王",
        "faction": "monster",
        "classType": 1,
        "avatar": "enemy-wolfboss.ccbi",
        "property": {
            "health": 10,
            "attack": 0.6,
            "critical": 10,
            "strong": 20,
            "accuracy": 60,
            "reactivity": -40,
            "speed": 20,
            "counterAttack": true,
            "exp": 0,
            "gold": 0
        },
        "xproperty": {
            "balance": 0.1,
            "health": 1.5,
            "attack": 0.4,
            "critical": 1,
            "strong": 1,
            "accuracy": 1,
            "reactivity": 1,
            "speed": 1
        },
        "soundSpawn": "tulang.mp3",
        "soundWound": "tulangwound.mp3",
        "soundAttack": "tulangattack.mp3",
        "soundDie": "tulangdie.mp3",
        "effectAttack": 31,
        "scale": 1.2,
        "skill": [
            {
                "id": 62,
                "level": 1
            },
            {
                "id": 143,
                "level": 1
            },
            {
                "id": 144,
                "level": 1
            },
            {
                "id": 146,
                "level": 1
            },
            {
                "id": 55,
                "level": 1
            }
        ],
        "bossFlag": true
    },
    {
        "classId": 202,
        "className": "剑圣",
        "faction": "monster",
        "classType": 1,
        "avatar": "enemy-swordboss.ccbi",
        "property": {
            "health": 10,
            "attack": 0.75,
            "critical": 30,
            "strong": 10,
            "accuracy": 60,
            "reactivity": -20,
            "speed": 30,
            "counterAttack": true,
            "exp": 0,
            "gold": 0
        },
        "xproperty": {
            "balance": 0.1,
            "health": 1.5,
            "attack": 0.4,
            "critical": 1,
            "strong": 1,
            "accuracy": 1,
            "reactivity": 1,
            "speed": 1
        },
        "soundWound": "liulangwound.mp3",
        "soundAttack": "liulangattack.mp3",
        "soundDie": "liulangdie.mp3",
        "effectAttack": 8,
        "scale": 1.2,
        "skill": [
            {
                "id": 149,
                "level": 1
            },
            {
                "id": 151,
                "level": 1
            },
            {
                "id": 72,
                "level": 1
            },
            {
                "id": 55,
                "level": 1
            }
        ],
        "bossFlag": true
    },
    {
        "classId": 203,
        "className": "蝙蝠3",
        "faction": "monster",
        "classType": 1,
        "skeleton": "bat3.json",
        "atlas": "bat3.atlas",
        "property": {
            "health": 0.2,
            "attack": 0.18,
            "critical": 40,
            "strong": -40,
            "accuracy": 50,
            "reactivity": 0,
            "speed": 0,
            "counterAttack": true,
            "exp": 0,
            "gold": 0
        },
        "xproperty": {
            "balance": 0.1,
            "health": 1.5,
            "attack": 0.4,
            "critical": 1,
            "strong": 1,
            "accuracy": 1,
            "reactivity": 1,
            "speed": 1
        },
        "soundSpawn": "bianfu.mp3",
        "soundWound": "bianfuwound.mp3",
        "soundAttack": "bianfuattack.mp3",
        "soundDie": "bianfudie.mp3",
        "effectAttack": 9,
        "skill": [
            {
                "id": 163,
                "level": 1
            }
        ],
        "dropInfo": [
            90
        ]
    },
    {
        "classId": 204,
        "className": "蜘蛛3",
        "faction": "monster",
        "classType": 1,
        "avatar": "enemy-spider13.ccbi",
        "property": {
            "health": 0.4,
            "attack": 0.24,
            "critical": 20,
            "strong": -40,
            "accuracy": 20,
            "reactivity": -60,
            "speed": 20,
            "counterAttack": true,
            "exp": 0,
            "gold": 0
        },
        "xproperty": {
            "balance": 0.1,
            "health": 1.5,
            "attack": 0.4,
            "critical": 1,
            "strong": 1,
            "accuracy": 1,
            "reactivity": 1,
            "speed": 1
        },
        "soundSpawn": "zhizhu.mp3",
        "soundWound": "zhizhuwound.mp3",
        "soundAttack": "zhizhuattack.mp3",
        "soundDie": "zhizhudie.mp3",
        "effectAttack": 9,
        "skill": [
            {
                "id": 165,
                "level": 1
            }
        ],
        "dropInfo": [
    90
]
    },
    {
        "classId": 205,
        "className": "土狼3",
        "faction": "monster",
        "classType": 1,
        "avatar": "enemy-wolf23.ccbi",
        "property": {
            "health": 0.6,
            "attack": 0.36,
            "critical": -10,
            "strong": -10,
            "accuracy": 50,
            "reactivity": -50,
            "speed": 10,
            "counterAttack": true,
            "exp": 0,
            "gold": 0
        },
        "xproperty": {
            "balance": 0.1,
            "health": 1.5,
            "attack": 0.4,
            "critical": 1,
            "strong": 1,
            "accuracy": 1,
            "reactivity": 1,
            "speed": 1
        },
        "soundSpawn": "tulang.mp3",
        "soundWound": "tulangwound.mp3",
        "soundAttack": "tulangattack.mp3",
        "soundDie": "tulangdie.mp3",
        "effectAttack": 31,
        "dropInfo": [
            90
        ]
    },
    {
        "classId": 206,
        "className": "史莱姆3",
        "faction": "monster",
        "classType": 1,
        "avatar": "enemy-slime13.ccbi",
        "property": {
            "health": 0.9,
            "attack": 0.24,
            "critical": -40,
            "strong": -10,
            "accuracy": 50,
            "reactivity": -90,
            "speed": -30,
            "counterAttack": true,
            "exp": 0,
            "gold": 0
        },
        "xproperty": {
            "balance": 0.1,
            "health": 1.5,
            "attack": 0.4,
            "critical": 1,
            "strong": 1,
            "accuracy": 1,
            "reactivity": 1,
            "speed": 1
        },
        "soundSpawn": "shilaimu.mp3",
        "soundWound": "shilaimuwound.mp3",
        "soundAttack": "shilaimuattack.mp3",
        "soundDie": "shilaimudie.mp3",
        "effectAttack": 9,
        "skill": [
            {
                "id": 31,
                "level": 5
            }
        ],
        "dropInfo": [
            90
        ]
    },
    {
        "classId": 207,
        "className": "哥布林3",
        "faction": "monster",
        "classType": 1,
        "avatar": "enemy-goblin13.ccbi",
        "property": {
            "health": 0.5,
            "attack": 0.3,
            "critical": 2,
            "strong": 3,
            "accuracy": 40,
            "reactivity": -40,
            "speed": 0,
            "counterAttack": true,
            "exp": 0,
            "gold": 0
        },
        "xproperty": {
            "balance": 0.1,
            "health": 1.5,
            "attack": 0.4,
            "critical": 1,
            "strong": 1,
            "accuracy": 1,
            "reactivity": 1,
            "speed": 1
        },
        "soundSpawn": "gebulin.mp3",
        "soundWound": "gebulinwound.mp3",
        "soundAttack": "gebulinattack.mp3",
        "soundDie": "gebulindie.mp3",
        "effectAttack": 9,
        "dropInfo": [
            90
        ]
    },
    {
        "classId": 208,
        "className": "山贼3",
        "faction": "monster",
        "classType": 1,
        "avatar": "enemy-robber13.ccbi",
        "property": {
            "health": 0.5,
            "attack": 0.42,
            "critical": -10,
            "strong": 0,
            "accuracy": 20,
            "reactivity": -50,
            "speed": -20,
            "counterAttack": true,
            "exp": 0,
            "gold": 0
        },
        "xproperty": {
            "balance": 0.1,
            "health": 1.5,
            "attack": 0.4,
            "critical": 1,
            "strong": 1,
            "accuracy": 1,
            "reactivity": 1,
            "speed": 1
        },
        "soundSpawn": "shanzei.mp3",
        "soundWound": "shanzeiwound.mp3",
        "soundAttack": "shanzeiattack.mp3",
        "soundDie": "shanzeidie.mp3",
        "effectAttack": 8,
        "dropInfo": [
            90
        ]
    },
    {
        "classId": 209,
        "className": "盗贼3",
        "faction": "monster",
        "classType": 1,
        "avatar": "enemy-thief13.ccbi",
        "property": {
            "health": 0.3,
            "attack": 0.18,
            "critical": 30,
            "strong": -40,
            "accuracy": 80,
            "reactivity": 0,
            "speed": 40,
            "counterAttack": true,
            "exp": 0,
            "gold": 0
        },
        "xproperty": {
            "balance": 0.1,
            "health": 1.5,
            "attack": 0.4,
            "critical": 1,
            "strong": 1,
            "accuracy": 1,
            "reactivity": 1,
            "speed": 1
        },
        "soundWound": "daozeiwound.mp3",
        "soundAttack": "daozeiattack.mp3",
        "soundDie": "daozeidie.mp3",
        "effectAttack": 8,
        "skill": [
            {
                "id": 34,
                "level": 1
            }
        ],
        "dropInfo": [
            90
        ]
    },
    {
        "classId": 210,
        "className": "山贼头目3",
        "faction": "monster",
        "classType": 1,
        "avatar": "enemy-robber33.ccbi",
        "property": {
            "health": 0.7,
            "attack": 0.54,
            "critical": -20,
            "strong": -10,
            "accuracy": 20,
            "reactivity": -50,
            "speed": 0,
            "counterAttack": true,
            "exp": 0,
            "gold": 0
        },
        "xproperty": {
            "balance": 0.1,
            "health": 1.5,
            "attack": 0.4,
            "critical": 1,
            "strong": 1,
            "accuracy": 1,
            "reactivity": 1,
            "speed": 1
        },
        "soundSpawn": "shanzeitoumu.mp3",
        "soundWound": "shanzeiroumuwound.mp3",
        "soundAttack": "shanzeitoumuattack.mp3",
        "soundDie": "shanzeitoumudie.mp3",
        "effectAttack": 8,
        "skill": [

        ],
        "dropInfo": [
            90
        ]
    },
    {
        "classId": 211,
        "className": "奖励宝箱",
        "faction": "npc",
        "classType": 2,
        "avatar": "enemy-treasurebox2.ccbi",
        "property": {
            "health": 1.5,
            "attack": 3,
            "critical": 6,
            "strong": 13,
            "accuracy": 10,
            "reactivity": -100,
            "speed": 0,
            "counterAttack": false,
            "exp": 0,
            "gold": 0
        },
        "xproperty": {
            "balance": 0.1,
            "health": 1.5,
            "attack": 0.4,
            "critical": 1,
            "strong": 1,
            "accuracy": 1,
            "reactivity": 1,
            "speed": 1
        },
        "skill": [
            {
                "id": 155,
                "level": 1
            }
        ]
    },
    {
        "classId": 212,
        "className": "pk宝箱",
        "faction": "npc",
        "classType": 2,
        "avatar": "enemy-treasurebox.ccbi",
        "property": {
            "health": 1.5,
            "attack": 3,
            "critical": 6,
            "strong": 13,
            "accuracy": 10,
            "reactivity": -100,
            "speed": 0,
            "counterAttack": false,
            "exp": 0,
            "gold": 0
        },
        "xproperty": {
            "balance": 0.1,
            "health": 1.5,
            "attack": 0.4,
            "critical": 1,
            "strong": 1,
            "accuracy": 1,
            "reactivity": 1,
            "speed": 1
        },
        "skill": [
            {
                "id": 156,
                "level": 1
            }
        ]
    },
    {
        "classId": 213,
        "className": "邪恶法师",
        "faction": "monster",
        "classType": 1,
        "avatar": "enemy-wlfs1.ccbi",
        "bossFlag": true,
        "property": {
            "health": 1.3,
            "attack": 0.7,
            "critical": 0,
            "strong": -10,
            "accuracy": 20,
            "reactivity": -50,
            "speed": 0,
            "counterAttack": false,
            "exp": 0,
            "gold": 0
        },
        "xproperty": {
            "balance": 0.1,
            "health": 1.5,
            "attack": 0.4,
            "critical": 1,
            "strong": 1,
            "accuracy": 1,
            "reactivity": 1,
            "speed": 1
        },
        "soundWound": "shanzeiroumuwound.mp3",
        "soundDie": "shanzeitoumudie.mp3",
        "effectAttack": 10,
        "skill": [
            {
                "id":159,
                "level": 1
            },
            {
                "id": 160,
                "level": 1
            },
            {
                "id": 214,
                "level": 1
            },
            {
                "id": 27,
                "level": 1
            },
            {
                "id": 55,
                "level": 1
            }
        ],
        "dropInfo": [ 148

        ]
    },
    {
        "classId": 214,
        "className": "邪恶守护者",
        "faction": "monster",
        "classType": 1,
        "avatar": "enemy-db1.ccbi",
        "property": {
            "health": 3.5,
            "attack": 0.1,
            "critical": -20,
            "strong": -10,
            "accuracy": 20,
            "reactivity": -50,
            "speed": 0,
            "counterAttack": true,
            "exp": 0,
            "gold": 0
        },
        "xproperty": {
            "balance": 0.1,
            "health": 1.5,
            "attack": 0.4,
            "critical": 1,
            "strong": 1,
            "accuracy": 1,
            "reactivity": 1,
            "speed": 1
        },
        "soundSpawn": "shanzeitoumu.mp3",
        "soundWound": "shanzeiroumuwound.mp3",
        "soundAttack": "shanzeitoumuattack.mp3",
        "soundDie": "shanzeitoumudie.mp3",
        "effectAttack": 8,
        "skill": [
            {
                "id": 157,
                "level": 1
            },
            {
                "id": 158,
                "level": 1
            }
        ],
        "dropInfo": [

        ]
    },
    {
        "classId": 215,
        "className": "大宗师",
        "faction": "monster",
        "classType": 1,
        "skeleton": "master.json",
        "atlas": "master.atlas",
        "bossFlag": true,
        "property": {
            "health": 5,
            "attack": 0.6,
            "critical": 30,
            "strong": 0,
            "accuracy": 70,
            "reactivity": -40,
            "speed": 0,
            "counterAttack": true,
            "exp": 0,
            "gold": 0
        },
        "xproperty": {
            "balance": 0.1,
            "health": 1.5,
            "attack": 0.4,
            "critical": 1,
            "strong": 1,
            "accuracy": 1,
            "reactivity": 1,
            "speed": 1
        },
        "soundWound": "liulangwound.mp3",
        "soundAttack": "liulangattack.mp3",
        "soundDie": "liulangdie.mp3",
        "effectAttack": 8,
        "skill": [
            {
                "id": 321,
                "level": 1
            },
            {
                "id": 323,
                "level": 1
            },
            {
                "id": 27,
                "level": 1
            },
            {
                "id": 324,
                "level": 1
            },
            {
                "id": 325,
                "level": 1
            },
            {
                "id": 326,
                "level": 1
            },
            {
                "id": 328,
                "level": 1
            },
            {
                "id": 55,
                "level": 1
            },
            {
                "id": 333,
                "level": 1
            }
        ]
    },
    {
        "classId": 216,
        "className": "狂战士",
        "faction": "hero",
        "classType": 0,
        "avatar": "avatar1.ccbi",
        "emblem": [
            "emblem-warrior.png",
            "emblem-warrior2.png"
        ],
        "property": {
            "health": 35,
            "attack": 3,
            "critical": 2,
            "strong": 4,
            "accuracy": 2,
            "reactivity": 1,
            "speed": 2
        },
        "defaultArmors": [
            6,
            10,
            11,
            879,
            909,
            939,
            969,
            999,
            1029
        ],
        "initialEquipment":[
            {"type":0,"value":969,"count":1},
            {"type":0,"value":939,"count":1},
            {"type":0,"value":909,"count":1},
            {"type":0,"value":999,"count":1},
            {"type":0,"value":879,"count":1},
            {"type":0,"value":1029,"count":1}
        ],
        "levelId": 0,
        "pkTransId":219,
        "teammateTransId":259
    },
    {
        "classId": 217,
        "className": "魔导师",
        "faction": "hero",
        "classType": 0,
        "avatar": "avatar2.ccbi",
        "emblem": [
            "emblem-mage.png",
            "emblem-mage2.png"
        ],
        "property": {
            "health": 21,
            "attack": 5,
            "critical": 4,
            "strong": 2,
            "accuracy": 2,
            "reactivity": 2,
            "speed": 2
        },
        "defaultArmors": [
            6,
            10,
            11,
            1059,
            1089,
            1119,
            1149,
            1179,
            1209
        ],
        "initialEquipment":[
            {"type":0,"value":1149,"count":1},
            {"type":0,"value":1119,"count":1},
            {"type":0,"value":1089,"count":1},
            {"type":0,"value":1179,"count":1},
            {"type":0,"value":1059,"count":1},
            {"type":0,"value":1209,"count":1}
        ],
        "levelId": 0,
        "pkTransId":220,
        "teammateTransId":260
    },
    {
        "classId": 218,
        "className": "大主教",
        "faction": "hero",
        "classType": 0,
        "avatar": "avatar3.ccbi",
        "emblem": [
            "emblem-priest.png",
            "emblem-priest2.png"
        ],
        "property": {
            "health": 25,
            "attack": 2,
            "critical": 2,
            "strong": 4,
            "accuracy": 4,
            "reactivity": 3,
            "speed": 6
        },
        "defaultArmors": [
            6,
            10,
            11,
            1239,
            1269,
            1299,
            1329,
            1359,
            1389
        ],
        "initialEquipment":[
            {"type":0,"value":1329,"count":1},
            {"type":0,"value":1299,"count":1},
            {"type":0,"value":1269,"count":1},
            {"type":0,"value":1359,"count":1},
            {"type":0,"value":1239,"count":1},
            {"type":0,"value":1389,"count":1}
        ],
        "levelId": 0,
        "pkTransId":221,
        "teammateTransId":261
    },
    {
        "classId": 219,
        "className": "pk狂战士",
        "faction": "monster",
        "classType": 4,
        "avatar": "avatar1.ccbi",
        "emblem": [
            "emblem-warrior.png",
            "emblem-warrior2.png"
        ],
        "defaultArmors": [
            6,
            10,
            11,
            879,
            909,
            939,
            969,
            999,
            1029
        ],
        "property": {
            "keyd":true,
            "counterAttack": true
        },
        "levelId": 7
    },
    {
        "classId": 220,
        "className": "pk魔导师",
        "faction": "monster",
        "classType": 4,
        "avatar": "avatar2.ccbi",
        "emblem": [
            "emblem-mage.png",
            "emblem-mage2.png"
        ],
        "defaultArmors": [
            6,
            10,
            11,
            1059,
            1089,
            1119,
            1149,
            1179,
            1209
        ],
        "property": {
            "keyd":true,
            "counterAttack": true
        },
        "levelId": 8
    },
    {
        "classId": 221,
        "className": "pk大主教",
        "faction": "monster",
        "classType": 4,
        "avatar": "avatar3.ccbi",
        "emblem": [
            "emblem-priest.png",
            "emblem-priest2.png"
        ],
        "defaultArmors": [
            6,
            10,
            11,
            1239,
            1269,
            1299,
            1329,
            1359,
            1389
        ],
        "property": {
            "keyd":true,
            "counterAttack": true
        },
        "levelId": 9
    },
    {
        "classId": 222,
        "className": "小恶魔",
        "faction": "monster",
        "classType": 1,
        "skeleton": "newboss7.json",
        "atlas": "newboss7.atlas",
        "property": {
            "health": 2,
            "attack": 0.45,
            "critical": 20,
            "strong": -20,
            "accuracy": 80,
            "reactivity": -10,
            "speed": -10,
            "counterAttack": true,
            "exp": 0,
            "gold": 0
        },
        "xproperty": {
            "balance": 0.2,
            "health": 1.5,
            "attack": 0.4,
            "critical": 1,
            "strong": 1,
            "accuracy": 1,
            "reactivity": 1,
            "speed": 1
        },
        "soundSpawn": "bianfu.mp3",
        "soundWound": "bianfuwound.mp3",
        "soundAttack": "bianfuattack.mp3",
        "soundDie": "bianfudie.mp3",
        "effectAttack": 9,
        "skill": [
            {
                "id": 290,
                "level": 1
            },
            {
                "id": 292,
                "level": 1
            }
        ]
    },
    {
        "classId": 223,
        "className": "恶灵骑士",
        "faction": "monster",
        "classType": 1,
        "skeleton": "newboss5.json",
        "atlas": "newboss5.atlas",
        "bossFlag": true,
        "property": {
            "health": 5,
            "attack": 0.65,
            "critical": 20,
            "strong": 0,
            "accuracy": 60,
            "reactivity": -40,
            "speed": -20,
            "counterAttack": true,
            "exp": 0,
            "gold": 0
        },
        "xproperty": {
            "balance": 0.1,
            "health": 2,
            "attack": 0.4,
            "critical": 1,
            "strong": 1,
            "accuracy": 1,
            "reactivity": 1,
            "speed": 1
        },
        "soundSpawn": "tulang.mp3",
        "soundWound": "tulangwound.mp3",
        "soundAttack": "tulangattack.mp3",
        "soundDie": "tulangdie.mp3",
        "effectAttack": 31,
        "skill": [
            {
                "id": 293,
                "level": 1
            },
            {
                "id": 27,
                "level": 1
            },
            {
                "id": 348,
                "level": 1
            },
            {
                "id": 350,
                "level": 1
            }
        ]
    },
    {
        "classId": 224,
        "className": "蜥蜴射手BOSS",
        "faction": "monster",
        "classType": 1,
        "skeleton": "newenemy1.json",
        "atlas": "newenemy1.atlas",
        "property": {
            "health": 2.5,
            "attack": 0.11,
            "critical": 0,
            "strong": 0,
            "accuracy": 50,
            "reactivity": -40,
            "speed": -20,
            "counterAttack": false,
            "exp": 0,
            "gold": 0
        },
        "xproperty": {
            "balance": 0.1,
            "health": 2,
            "attack": 0.4,
            "critical": 1,
            "strong": 1,
            "accuracy": 1,
            "reactivity": 1,
            "speed": 1
        },
        "soundWound": "shourenwound.mp3",
        "soundAttack": "shourenattack.mp3",
        "soundDie": "shourendie.mp3",
        "effectAttack": 9,
        "skill": [
            {
                "id": 26,
                "level": 1
            },
            {
                "id": 272,
                "level": 1
            },
            {
                "id": 27,
                "level": 1
            },
            {
                "id": 296,
                "level": 1
            },
            {
                "id": 298,
                "level": 1
            }
        ],
        "scale": 1.2
    },
    {
        "classId": 225,
        "className": "岩石巨人",
        "faction": "monster",
        "classType": 1,
        "skeleton": "newboss3.json",
        "atlas": "newboss3.atlas",
        "bossFlag": true,
        "property": {
            "health": 7,
            "attack": 0.6,
            "critical": 0,
            "strong": 30,
            "accuracy": 50,
            "reactivity": -90,
            "speed": -80,
            "counterAttack": true,
            "exp": 0,
            "gold": 0
        },
        "xproperty": {
            "balance": 0.1,
            "health": 2,
            "attack": 0.4,
            "critical": 1,
            "strong": 1,
            "accuracy": 1,
            "reactivity": 1,
            "speed": 1
        },
        "soundSpawn": "shirenmo.mp3",
        "soundWound": "shirenmodie.mp3",
        "soundAttack": "shirenmo.mp3",
        "effectAttack": 9,
        "skill": [
            {
                "id": 300,
                "level": 1
            },
            {
                "id": 301,
                "level": 1
            },
            {
                "id": 27,
                "level": 1
            },
            {
                "id": 303,
                "level": 1
            },
            {
                "id": 346,
                "level": 1
            }
        ]
    },
    {
        "classId": 226,
        "className": "宫廷弩手",
        "faction": "monster",
        "classType": 1,
        "skeleton": "newenemy2.json",
        "atlas": "newenemy2.atlas",
        "property": {
            "health": 0.3,
            "attack": 0.07,
            "critical": 10,
            "strong": -30,
            "accuracy": 70,
            "reactivity": -40,
            "speed": -20,
            "counterAttack": false,
            "exp": 0,
            "gold": 0
        },
        "xproperty": {
            "balance": 0.1,
            "health": 1.5,
            "attack": 0.4,
            "critical": 1,
            "strong": 1,
            "accuracy": 1,
            "reactivity": 1,
            "speed": 1
        },
        "soundWound": "youxiawound.mp3",
        "soundDie": "youxiadie.mp3",
        "effectAttack": 9,
        "skill": [
            {
                "id": 304,
                "level": 1
            },
            {
                "id": 305,
                "level": 1
            },
            {
                "id": 272,
                "level": 1
            },
            {
                "id": 27,
                "level": 1
            }
        ]
    },
    {
        "classId": 227,
        "className": "地狱三头犬",
        "faction": "monster",
        "classType": 1,
        "skeleton": "newboss8.json",
        "atlas": "newboss8.atlas",
        "property": {
            "health": 10,
            "attack": 0.2,
            "critical": 10,
            "strong": 20,
            "accuracy": 100,
            "reactivity": -40,
            "speed": 20,
            "counterAttack": true,
            "exp": 0,
            "gold": 0
        },
        "xproperty": {
            "balance": 0.1,
            "health": 1.5,
            "attack": 0.4,
            "critical": 1,
            "strong": 1,
            "accuracy": 1,
            "reactivity": 1,
            "speed": 1
        },
        "soundSpawn": "tulang.mp3",
        "soundWound": "tulangwound.mp3",
        "soundAttack": "tulangattack.mp3",
        "soundDie": "tulangdie.mp3",
        "effectAttack": 31,
        "skill": [
            {
                "id": 306,
                "level": 1
            },
            {
                "id": 307,
                "level": 1
            },
            {
                "id": 309,
                "level": 1
            },
            {
                "id": 310,
                "level": 1
            }
        ]
    },
    {
        "classId": 228,
        "className": "恶魔领主",
        "faction": "monster",
        "classType": 1,
        "skeleton": "newboss4.json",
        "atlas": "newboss4.atlas",
        "property": {
            "health": 3.5,
            "attack": 0.25,
            "critical": -20,
            "strong": 10,
            "accuracy": 100,
            "reactivity": -50,
            "speed": 0,
            "counterAttack": true,
            "exp": 0,
            "gold": 0
        },
        "xproperty": {
            "balance": 0.1,
            "health": 2,
            "attack": 0.4,
            "critical": 1,
            "strong": 1,
            "accuracy": 1,
            "reactivity": 1,
            "speed": 1
        },
        "soundSpawn": "shanzeitoumu.mp3",
        "soundWound": "shanzeiroumuwound.mp3",
        "soundAttack": "shanzeitoumuattack.mp3",
        "soundDie": "shanzeitoumudie.mp3",
        "effectAttack": 8,
        "skill": [
            {
                "id": 311,
                "level": 1
            },
            {
                "id": 306,
                "level": 1
            },
            {
                "id": 312,
                "level": 1
            }
        ]
    },
    {
        "classId": 229,
        "className": "堕落天使",
        "faction": "monster",
        "classType": 1,
        "skeleton": "newboss6.json",
        "atlas": "newboss6.atlas",
        "property": {
            "health": 3.5,
            "attack": 0.22,
            "critical": 0,
            "strong": 20,
            "accuracy": 100,
            "reactivity": -40,
            "speed": 0,
            "counterAttack": true,
            "exp": 0,
            "gold": 0
        },
        "xproperty": {
            "balance": 0.1,
            "health": 2,
            "attack": 0.4,
            "critical": 1,
            "strong": 1,
            "accuracy": 1,
            "reactivity": 1,
            "speed": 1
        },
        "soundWound": "liulangwound.mp3",
        "soundAttack": "liulangattack.mp3",
        "soundDie": "liulangdie.mp3",
        "effectAttack": 8,
        "skill": [
            {
                "id": 314,
                "level": 1
            },
            {
                "id": 317,
                "level": 1
            }
        ]
    },
    {
        "classId": 230,
        "className": "骷髅王",
        "faction": "monster",
        "classType": 1,
        "skeleton": "newboss2.json",
        "atlas": "newboss2.atlas",
        "property": {
            "health": 3.5,
            "attack": 0.15,
            "critical": 0,
            "strong": 0,
            "accuracy": 100,
            "reactivity": -40,
            "speed": 0,
            "counterAttack": true,
            "exp": 0,
            "gold": 0
        },
        "xproperty": {
            "balance": 0.1,
            "health": 2,
            "attack": 0.4,
            "critical": 1,
            "strong": 1,
            "accuracy": 1,
            "reactivity": 1,
            "speed": 1
        },
        "effectAttack": 8,
        "skill": [
            {
                "id": 318,
                "level": 1
            },
            {
                "id": 320,
                "level": 1
            },
            {
                "id": 295,
                "level": 1
            }
        ]
    },
    {
        "classId": 231,
        "className": "骑士长",
        "faction": "monster",
        "classType": 1,
        "skeleton": "newboss1.json",
        "atlas": "newboss1.atlas",
        "property": {
            "health": 1.5,
            "attack": 0.06,
            "critical": 0,
            "strong": 0,
            "accuracy": 40,
            "reactivity": -40,
            "speed": 0,
            "counterAttack": true,
            "exp": 0,
            "gold": 0
        },
        "xproperty": {
            "balance": 0.1,
            "health": 1.5,
            "attack": 0.4,
            "critical": 1,
            "strong": 1,
            "accuracy": 1,
            "reactivity": 1,
            "speed": 1
        },
        "effectAttack": 8,
        "skill": [
            {
                "id": 318,
                "level": 1
            },
            {
                "id": 295,
                "level": 1
            }
        ]
    },
    {
        "classId": 232,
        "className": "剑兵1",
        "faction": "monster",
        "classType": 1,
        "avatar": "enemy-sword1.ccbi",
        "property": {
            "health": 0.6,
            "attack": 0.35,
            "critical": 20,
            "strong": -20,
            "accuracy": 40,
            "reactivity": -50,
            "speed": -20,
            "counterAttack": true,
            "exp": 0,
            "gold": 0
        },
        "xproperty": {
            "balance": 0.1,
            "health": 1.5,
            "attack": 0.4,
            "critical": 1,
            "strong": 1,
            "accuracy": 1,
            "reactivity": 1,
            "speed": 1
        },
        "soundWound": "liulangwound.mp3",
        "soundAttack": "liulangattack.mp3",
        "soundDie": "liulangdie.mp3",
        "effectAttack": 8,
        "skill": [
            {
                "id": 185,
                "level": 1
            }
        ]
    },
    {
        "classId": 233,
        "className": "剑兵2",
        "faction": "monster",
        "classType": 1,
        "avatar": "enemy-sword12.ccbi",
        "property": {
            "health": 0.6,
            "attack": 0.35,
            "critical": 20,
            "strong": -20,
            "accuracy": 40,
            "reactivity": -50,
            "speed": -20,
            "counterAttack": true,
            "exp": 0,
            "gold": 0
        },
        "xproperty": {
            "balance": 0.1,
            "health": 1.5,
            "attack": 0.4,
            "critical": 1,
            "strong": 1,
            "accuracy": 1,
            "reactivity": 1,
            "speed": 1
        },
        "soundWound": "liulangwound.mp3",
        "soundAttack": "liulangattack.mp3",
        "soundDie": "liulangdie.mp3",
        "effectAttack": 8,
        "collectId": 220001,
        "skill": [
            {
                "id": 185,
                "level": 1
            }
        ]
    },
    {
        "classId": 234,
        "className": "剑兵3",
        "faction": "monster",
        "classType": 1,
        "avatar": "enemy-sword13.ccbi",
        "property": {
            "health": 0.6,
            "attack": 0.35,
            "critical": 20,
            "strong": -20,
            "accuracy": 40,
            "reactivity": -50,
            "speed": -20,
            "counterAttack": true,
            "exp": 0,
            "gold": 0
        },
        "xproperty": {
            "balance": 0.1,
            "health": 1.5,
            "attack": 0.4,
            "critical": 1,
            "strong": 1,
            "accuracy": 1,
            "reactivity": 1,
            "speed": 1
        },
        "soundWound": "liulangwound.mp3",
        "soundAttack": "liulangattack.mp3",
        "soundDie": "liulangdie.mp3",
        "effectAttack": 8,
        "skill": [
            {
                "id": 185,
                "level": 1
            }
        ]
    },
    {
        "classId": 235,
        "className": "剑兵4",
        "faction": "monster",
        "classType": 1,
        "avatar": "enemy-sword14.ccbi",
        "property": {
            "health": 0.6,
            "attack": 0.35,
            "critical": 20,
            "strong": -20,
            "accuracy": 40,
            "reactivity": -50,
            "speed": -20,
            "counterAttack": true,
            "exp": 0,
            "gold": 0
        },
        "xproperty": {
            "balance": 0.1,
            "health": 1.5,
            "attack": 0.4,
            "critical": 1,
            "strong": 1,
            "accuracy": 1,
            "reactivity": 1,
            "speed": 1
        },
        "soundWound": "liulangwound.mp3",
        "soundAttack": "liulangattack.mp3",
        "soundDie": "liulangdie.mp3",
        "effectAttack": 8,
        "skill": [
            {
                "id": 185,
                "level": 1
            }
        ]
    },
    {
        "classId": 236,
        "className": "亡灵法师",
        "faction": "monster",
        "classType": 1,
        "skeleton": "necromancer.json",
        "atlas": "necromancer.atlas",
        "property": {
            "health": 0.3,
            "attack": 0.1,
            "critical": 10,
            "strong": -40,
            "accuracy": 60,
            "reactivity": -60,
            "speed": -20,
            "counterAttack": false,
            "exp": 0,
            "gold": 0
        },
        "xproperty": {
            "balance": 0.1,
            "health": 1.5,
            "attack": 0.4,
            "critical": 1,
            "strong": 1,
            "accuracy": 1,
            "reactivity": 1,
            "speed": 1
        },
        "soundWound": "shanzeiroumuwound.mp3",
        "soundDie": "shanzeitoumudie.mp3",
        "effectAttack": 10,
        "skill": [
            {
                "id": 271,
                "level": 1
            },
            {
                "id": 214,
                "level": 1
            },
            {
                "id": 272,
                "level": 1
            },
            {
                "id": 27,
                "level": 1
            }
        ]
    },
    {
        "classId": 237,
        "className": "吸血鬼",
        "faction": "monster",
        "classType": 1,
        "skeleton": "vamp1.json",
        "atlas": "vamp1.atlas",
        "property": {
            "health": 0.45,
            "attack": 0.3,
            "critical": 20,
            "strong": -20,
            "accuracy": 40,
            "reactivity": -20,
            "speed": -20,
            "counterAttack": true,
            "exp": 0,
            "gold": 0
        },
        "xproperty": {
            "balance": 0.1,
            "health": 1.5,
            "attack": 0.4,
            "critical": 1,
            "strong": 1,
            "accuracy": 1,
            "reactivity": 1,
            "speed": 1
        },
        "soundWound": "liulangwound.mp3",
        "soundAttack": "liulangattack.mp3",
        "soundDie": "liulangdie.mp3",
        "effectAttack": 9,
        "collectId": 215001,
        "skill": [
            {
                "id": 332,
                "level": 1
            }
        ]
    },
    {
        "classId": 238,
        "className": "水元素",
        "faction": "monster",
        "classType": 1,
        "skeleton": "water.json",
        "atlas": "water.atlas",
        "property": {
            "health": 0.4,
            "attack": 0.3,
            "critical": 10,
            "strong": -10,
            "accuracy": 60,
            "reactivity": -40,
            "speed": -30,
            "counterAttack": true,
            "exp": 0,
            "gold": 0
        },
        "xproperty": {
            "balance": 0.1,
            "health": 1.5,
            "attack": 0.4,
            "critical": 1,
            "strong": 1,
            "accuracy": 1,
            "reactivity": 1,
            "speed": 1
        },
        "soundSpawn": "shilaimu.mp3",
        "soundWound": "shilaimuwound.mp3",
        "soundAttack": "shilaimuattack.mp3",
        "soundDie": "shilaimudie.mp3",
        "effectAttack": 9,
        "collectId": 216001,
        "skill": [
            {
                "id": 102,
                "level": 1
            }
        ]
    },
    {
        "classId": 239,
        "className": "盾兵",
        "faction": "monster",
        "classType": 1,
        "skeleton": "shield1.json",
        "atlas": "shield1.atlas",
        "property": {
            "health": 0.7,
            "attack": 0.25,
            "critical": 10,
            "strong": 0,
            "accuracy": 20,
            "reactivity": -60,
            "speed": -30,
            "counterAttack": true,
            "exp": 0,
            "gold": 0
        },
        "xproperty": {
            "balance": 0.1,
            "health": 1.5,
            "attack": 0.4,
            "critical": 1,
            "strong": 1,
            "accuracy": 1,
            "reactivity": 1,
            "speed": 1
        },
        "soundSpawn": "shanzeitoumu.mp3",
        "soundWound": "shanzeiroumuwound.mp3",
        "soundAttack": "shanzeitoumuattack.mp3",
        "soundDie": "shanzeitoumudie.mp3",
        "effectAttack": 8,
        "skill": [
            {
                "id": 191,
                "level": 1
            }
        ]
    },
    {
        "classId": 240,
        "className": "亡灵法师BOSS",
        "faction": "monster",
        "classType": 1,
        "skeleton": "necromancer.json",
        "atlas": "necromancer.atlas",
        "property": {
            "health": 1.5,
            "attack": 0.12,
            "critical": 20,
            "strong": -10,
            "accuracy": 60,
            "reactivity": -30,
            "speed": -20,
            "counterAttack": false,
            "exp": 0,
            "gold": 0
        },
        "xproperty": {
            "balance": 0.1,
            "health": 1.5,
            "attack": 0.4,
            "critical": 1,
            "strong": 1,
            "accuracy": 1,
            "reactivity": 1,
            "speed": 1
        },
        "soundWound": "shanzeiroumuwound.mp3",
        "soundDie": "shanzeitoumudie.mp3",
        "effectAttack": 10,
        "skill": [
            {
                "id": 271,
                "level": 1
            },
            {
                "id": 214,
                "level": 1
            },
            {
                "id": 272,
                "level": 1
            },
            {
                "id": 27,
                "level": 1
            }
        ],
        "scale": 1.2
    },
    {
        "classId": 241,
        "className": "吸血鬼BOSS",
        "faction": "monster",
        "classType": 1,
        "skeleton": "vamp1.json",
        "atlas": "vamp1.atlas",
        "property": {
            "health": 2.5,
            "attack": 0.5,
            "critical": 30,
            "strong": -20,
            "accuracy": 40,
            "reactivity": -20,
            "speed": -20,
            "counterAttack": true,
            "exp": 0,
            "gold": 0
        },
        "xproperty": {
            "balance": 0.1,
            "health": 1.5,
            "attack": 0.4,
            "critical": 1,
            "strong": 1,
            "accuracy": 1,
            "reactivity": 1,
            "speed": 1
        },
        "soundWound": "liulangwound.mp3",
        "soundAttack": "liulangattack.mp3",
        "soundDie": "liulangdie.mp3",
        "effectAttack": 9,
        "skill": [
            {
                "id": 332,
                "level": 1
            }
        ],
        "scale": 1.2
    },
    {
        "classId": 242,
        "className": "宫廷弩手BOSS",
        "faction": "monster",
        "classType": 1,
        "skeleton": "newenemy2.json",
        "atlas": "newenemy2.atlas",
        "property": {
            "health": 1.5,
            "attack": 0.09,
            "critical": 20,
            "strong": -20,
            "accuracy": 80,
            "reactivity": -30,
            "speed": -20,
            "counterAttack": false,
            "exp": 0,
            "gold": 0
        },
        "xproperty": {
            "balance": 0.1,
            "health": 1.5,
            "attack": 0.4,
            "critical": 1,
            "strong": 1,
            "accuracy": 1,
            "reactivity": 1,
            "speed": 1
        },
        "soundWound": "youxiawound.mp3",
        "soundDie": "youxiadie.mp3",
        "effectAttack": 9,
        "skill": [
            {
                "id": 304,
                "level": 1
            },
            {
                "id": 305,
                "level": 1
            },
            {
                "id": 272,
                "level": 1
            },
            {
                "id": 27,
                "level": 1
            }
        ],
        "scale": 1.2
    },
    {
        "classId": 243,
        "className": "剑兵1BOSS",
        "faction": "monster",
        "classType": 1,
        "avatar": "enemy-sword1.ccbi",
        "property": {
            "health": 3,
            "attack": 0.45,
            "critical": 20,
            "strong": 0,
            "accuracy": 50,
            "reactivity": -50,
            "speed": -20,
            "counterAttack": true,
            "exp": 0,
            "gold": 0
        },
        "xproperty": {
            "balance": 0.1,
            "health": 1.5,
            "attack": 0.4,
            "critical": 1,
            "strong": 1,
            "accuracy": 1,
            "reactivity": 1,
            "speed": 1
        },
        "soundWound": "liulangwound.mp3",
        "soundAttack": "liulangattack.mp3",
        "soundDie": "liulangdie.mp3",
        "effectAttack": 8,
        "skill": [
            {
                "id": 185,
                "level": 1
            }
        ],
        "scale": 1.2
    },
    {
        "classId": 244,
        "className": "水元素BOSS",
        "faction": "monster",
        "classType": 1,
        "skeleton": "water.json",
        "atlas": "water.atlas",
        "property": {
            "health": 3,
            "attack": 0.5,
            "critical": 20,
            "strong": -10,
            "accuracy": 60,
            "reactivity": -50,
            "speed": -20,
            "counterAttack": true,
            "exp": 0,
            "gold": 0
        },
        "xproperty": {
            "balance": 0.1,
            "health": 1.5,
            "attack": 0.4,
            "critical": 1,
            "strong": 1,
            "accuracy": 1,
            "reactivity": 1,
            "speed": 1
        },
        "soundSpawn": "shilaimu.mp3",
        "soundWound": "shilaimuwound.mp3",
        "soundAttack": "shilaimuattack.mp3",
        "soundDie": "shilaimudie.mp3",
        "effectAttack": 9,
        "skill": [
            {
                "id": 102,
                "level": 1
            }
        ],
        "scale": 1.2
    },
    {
        "classId": 245,
        "className": "盾兵BOSS",
        "faction": "monster",
        "classType": 1,
        "skeleton": "shield1.json",
        "atlas": "shield1.atlas",
        "property": {
            "health": 3.5,
            "attack": 0.45,
            "critical": 10,
            "strong": 0,
            "accuracy": 20,
            "reactivity": -50,
            "speed": -30,
            "counterAttack": true,
            "exp": 0,
            "gold": 0
        },
        "xproperty": {
            "balance": 0.1,
            "health": 1.5,
            "attack": 0.4,
            "critical": 1,
            "strong": 1,
            "accuracy": 1,
            "reactivity": 1,
            "speed": 1
        },
        "soundSpawn": "shanzeitoumu.mp3",
        "soundWound": "shanzeiroumuwound.mp3",
        "soundAttack": "shanzeitoumuattack.mp3",
        "soundDie": "shanzeitoumudie.mp3",
        "effectAttack": 8,
        "skill": [
            {
                "id": 191,
                "level": 1
            }
        ]
    },
    {
        "classId": 246,
        "className": "卡塔巫师",
        "faction": "monster",
        "classType": 1,
        "skeleton": "wizard.json",
        "atlas": "wizard.atlas",
        "bossFlag": true,
        "property": {
            "health": 3,
            "attack": 0.2,
            "critical": 10,
            "strong": -20,
            "accuracy": 60,
            "reactivity": -60,
            "speed": -20,
            "counterAttack": false,
            "exp": 0,
            "gold": 0
        },
        "xproperty": {
            "balance": 0.1,
            "health": 1.5,
            "attack": 0.4,
            "critical": 1,
            "strong": 1,
            "accuracy": 1,
            "reactivity": 1,
            "speed": 1
        },
        "soundWound": "shanzeiroumuwound.mp3",
        "soundDie": "shanzeitoumudie.mp3",
        "effectAttack": 10,
        "skill": [
            {
                "id":328,
                "level": 1
            },
            {
                "id": 160,
                "level": 1
            },
            {
                "id": 214,
                "level": 1
            },
            {
                "id": 27,
                "level": 1
            },
            {
                "id": 55,
                "level": 1
            },
            {
                "id": 329,
                "level": 1
            },
            {
                "id": 334,
                "level": 1
            }
        ]
    },
    {
        "classId": 247,
        "className": "卡塔狂战士",
        "faction": "monster",
        "classType": 1,
        "avatar": "avatar1.ccbi",
        "emblem": [
            "emblem-warrior.png",
            "emblem-warrior2.png"
        ],
        "defaultArmors": [
            6,
            10,
            11,
            879,
            909,
            939,
            969,
            999,
            1029
        ],
        "property": {
            "health": 4.5,
            "attack": 0.45,
            "critical": 0,
            "strong": 10,
            "accuracy": 50,
            "reactivity": -30,
            "speed": 0,
            "counterAttack": true,
            "exp": 0,
            "gold": 0
        },
        "xproperty": {
            "balance": 0.1,
            "health": 1.5,
            "attack": 0.4,
            "critical": 1,
            "strong": 1,
            "accuracy": 1,
            "reactivity": 1,
            "speed": 1
        },
        "soundAttack": "attackcut.mp3",
        "skill": [
            {
                "id": 273,
                "level": 1
            },
            {
                "id": 276,
                "level": 1
            },
            {
                "id": 278,
                "level": 1
            },
            {
                "id": 330,
                "level": 1
            }
        ]
    },
    {
        "classId": 248,
        "className": "卡塔魔导师",
        "faction": "monster",
        "classType": 1,
        "avatar": "avatar2.ccbi",
        "emblem": [
            "emblem-mage.png",
            "emblem-mage2.png"
        ],
        "defaultArmors": [
            6,
            10,
            11,
            1059,
            1089,
            1119,
            1149,
            1179,
            1209
        ],
        "property": {
            "health": 2.5,
            "attack": 0.8,
            "critical": 20,
            "strong": -30,
            "accuracy": 40,
            "reactivity": -40,
            "speed": 0,
            "counterAttack": true,
            "exp": 0,
            "gold": 0
        },
        "xproperty": {
            "balance": 0.1,
            "health": 1.5,
            "attack": 0.4,
            "critical": 1,
            "strong": 1,
            "accuracy": 1,
            "reactivity": 1,
            "speed": 1
        },
        "soundAttack": "attackfire.mp3",
        "skill": [
            {
                "id": 279,
                "level": 3
            },
            {
                "id": 280,
                "level": 1
            },
            {
                "id": 284,
                "level": 1
            },
            {
                "id": 330,
                "level": 1
            }
        ]
    },
    {
        "classId": 249,
        "className": "卡塔主教",
        "faction": "monster",
        "classType": 1,
        "avatar": "avatar3.ccbi",
        "emblem": [
            "emblem-priest.png",
            "emblem-priest2.png"
        ],
        "defaultArmors": [
            6,
            10,
            11,
            1239,
            1269,
            1299,
            1329,
            1359,
            1389
        ],
        "property": {
            "health": 3,
            "attack": 0.4,
            "critical": -20,
            "strong": -10,
            "accuracy": 60,
            "reactivity": -10,
            "speed": 20,
            "counterAttack": true,
            "exp": 0,
            "gold": 0
        },
        "xproperty": {
            "balance": 0.1,
            "health": 1.5,
            "attack": 0.4,
            "critical": 1,
            "strong": 1,
            "accuracy": 1,
            "reactivity": 1,
            "speed": 1
        },
        "soundAttack": "attackhit.mp3",
        "skill": [
            {
                "id": 285,
                "level": 1
            },
            {
                "id": 286,
                "level": 1
            },
            {
                "id": 288,
                "level": 1
            },
            {
                "id": 330,
                "level": 1
            }
        ]
    },
    {
        "classId": 250,
        "className": "剑兵2BOSS",
        "faction": "monster",
        "classType": 1,
        "avatar": "enemy-sword12.ccbi",
        "property": {
            "health": 3,
            "attack": 0.45,
            "critical": 20,
            "strong": 0,
            "accuracy": 50,
            "reactivity": -50,
            "speed": -20,
            "counterAttack": true,
            "exp": 0,
            "gold": 0
        },
        "xproperty": {
            "balance": 0.1,
            "health": 1.5,
            "attack": 0.4,
            "critical": 1,
            "strong": 1,
            "accuracy": 1,
            "reactivity": 1,
            "speed": 1
        },
        "soundWound": "liulangwound.mp3",
        "soundAttack": "liulangattack.mp3",
        "soundDie": "liulangdie.mp3",
        "effectAttack": 8,
        "skill": [
            {
                "id": 185,
                "level": 1
            }
        ],
        "scale": 1.2
    },
    {
        "classId": 251,
        "className": "蜥蜴射手",
        "faction": "monster",
        "classType": 1,
        "skeleton": "newenemy1.json",
        "atlas": "newenemy1.atlas",
        "property": {
            "health": 2.5,
            "attack": 0.11,
            "critical": 0,
            "strong": 0,
            "accuracy": 50,
            "reactivity": -40,
            "speed": -20,
            "counterAttack": false,
            "exp": 0,
            "gold": 0
        },
        "xproperty": {
            "balance": 0.1,
            "health": 2,
            "attack": 0.4,
            "critical": 1,
            "strong": 1,
            "accuracy": 1,
            "reactivity": 1,
            "speed": 1
        },
        "soundWound": "shourenwound.mp3",
        "soundAttack": "shourenattack.mp3",
        "soundDie": "shourendie.mp3",
        "effectAttack": 9,
        "collectId": 236001,
        "skill": [
            {
                "id": 26,
                "level": 1
            },
            {
                "id": 272,
                "level": 1
            },
            {
                "id": 27,
                "level": 1
            },
            {
                "id": 296,
                "level": 1
            },
            {
                "id": 298,
                "level": 1
            }
        ]
    },
    {
        "classId": 252,
        "className": "鳄鱼怪1",
        "faction": "monster",
        "classType": 1,
        "skeleton": "crocodile1.json",
        "atlas": "crocodile1.atlas",
        "property": {
            "health": 0.7,
            "attack": 0.37,
            "critical": 30,
            "strong": -10,
            "accuracy": 20,
            "reactivity": -60,
            "speed": -20,
            "counterAttack": true,
            "exp": 0,
            "gold": 0
        },
        "xproperty": {
            "balance": 0.1,
            "health": 1.5,
            "attack": 0.4,
            "critical": 1,
            "strong": 1,
            "accuracy": 1,
            "reactivity": 1,
            "speed": 1
        },
        "soundSpawn": "shouren.mp3",
        "soundWound": "shourenwound.mp3",
        "soundAttack": "shourenattack.mp3",
        "soundDie": "shourendie.mp3",
        "collectId": 243001,
        "skill": [
            {
                "id": 335,
                "level": 1
            },
            {
                "id": 336,
                "level": 1
            }
        ],
        "effectAttack": 8
    },
    {
        "classId": 253,
        "className": "土元素",
        "faction": "monster",
        "classType": 1,
        "skeleton": "earth.json",
        "atlas": "earth.atlas",
        "property": {
            "health": 1,
            "attack": 0.3,
            "critical": -20,
            "strong": 10,
            "accuracy": 40,
            "reactivity": -70,
            "speed": -50,
            "counterAttack": true,
            "exp": 0,
            "gold": 0
        },
        "xproperty": {
            "balance": 0.1,
            "health": 1.5,
            "attack": 0.4,
            "critical": 1,
            "strong": 1,
            "accuracy": 1,
            "reactivity": 1,
            "speed": 1
        },
        "soundSpawn": "shilaimu.mp3",
        "soundWound": "shilaimuwound.mp3",
        "soundAttack": "shilaimuattack.mp3",
        "soundDie": "shilaimudie.mp3",
        "effectAttack": 9,
        "collectId": 227001,
        "skill": [
            {
                "id": 188,
                "level": 1
            }
        ]
    },
    {
        "classId": 254,
        "className": "鳄鱼怪1BOSS",
        "faction": "monster",
        "classType": 1,
        "skeleton": "crocodile1.json",
        "atlas": "crocodile1.atlas",
        "property": {
            "health": 3.5,
            "attack": 0.6,
            "critical": 35,
            "strong": -10,
            "accuracy": 20,
            "reactivity": -60,
            "speed": -20,
            "counterAttack": true,
            "exp": 0,
            "gold": 0
        },
        "xproperty": {
            "balance": 0.1,
            "health": 1.5,
            "attack": 0.4,
            "critical": 1,
            "strong": 1,
            "accuracy": 1,
            "reactivity": 1,
            "speed": 1
        },
        "soundSpawn": "shouren.mp3",
        "soundWound": "shourenwound.mp3",
        "soundAttack": "shourenattack.mp3",
        "soundDie": "shourendie.mp3",
        "effectAttack": 8 ,
        "skill": [
            {
                "id": 335,
                "level": 1
            },
            {
                "id": 336,
                "level": 1
            }
        ],
        "scale": 1.2
    },
    {
        "classId": 255,
        "className": "土元素BOSS",
        "faction": "monster",
        "classType": 1,
        "skeleton": "earth.json",
        "atlas": "earth.atlas",
        "property": {
            "health": 3,
            "attack": 0.5,
            "critical": -20,
            "strong": 10,
            "accuracy": 60,
            "reactivity": -60,
            "speed": -50,
            "counterAttack": true,
            "exp": 0,
            "gold": 0
        },
        "xproperty": {
            "balance": 0.1,
            "health": 1.5,
            "attack": 0.4,
            "critical": 1,
            "strong": 1,
            "accuracy": 1,
            "reactivity": 1,
            "speed": 1
        },
        "soundSpawn": "shilaimu.mp3",
        "soundWound": "shilaimuwound.mp3",
        "soundAttack": "shilaimuattack.mp3",
        "soundDie": "shilaimudie.mp3",
        "effectAttack": 9,
        "skill": [
            {
                "id": 188,
                "level": 1
            }
        ],
        "scale": 1.2
    },
    {
        "classId": 256,
        "className": "战士(队友)",
        "faction": "monster",
        "classType": 4,
        "avatar": "avatar.ccbi",
        "emblem": [
            "emblem-warrior.png",
            "emblem-warrior2.png"
        ],
        "defaultArmors": [
            6,
            10,
            11,
            40,
            41,
            42,
            43,
            662,
            712
        ],
        "property": {
            "keyd":true,
            "counterAttack": true
        },
        "levelId": 4
    },
    {
        "classId": 257,
        "className": "法师(队友)",
        "faction": "monster",
        "classType": 4,
        "avatar": "avatar.ccbi",
        "emblem": [
            "emblem-mage.png",
            "emblem-mage2.png"
        ],
        "defaultArmors": [
            6,
            10,
            11,
            32,
            33,
            34,
            35,
            652,
            742
        ],
        "property": {
            "keyd":true,
            "counterAttack": true
        },
        "levelId": 5
    },
    {
        "classId": 258,
        "className": "牧师(队友)",
        "faction": "monster",
        "classType": 4,
        "avatar": "avatar.ccbi",
        "emblem": [
            "emblem-priest.png",
            "emblem-priest2.png"
        ],
        "defaultArmors": [
            6,
            10,
            11,
            36,
            37,
            38,
            39,
            682,
            772
        ],
        "property": {
            "keyd":true,
            "counterAttack": true
        },
        "levelId": 6
    },   {
        "classId": 259,
        "className": "狂战士(队友)",
        "faction": "monster",
        "classType": 4,
        "avatar": "avatar1.ccbi",
        "emblem": [
            "emblem-warrior.png",
            "emblem-warrior2.png"
        ],
        "defaultArmors": [
            6,
            10,
            11,
            879,
            909,
            939,
            969,
            999,
            1029
        ],
        "property": {
            "keyd":true,
            "counterAttack": true
        },
        "levelId": 10
    },
    {
        "classId": 260,
        "className": "魔导师(队友)",
        "faction": "monster",
        "classType": 4,
        "avatar": "avatar2.ccbi",
        "emblem": [
            "emblem-mage.png",
            "emblem-mage2.png"
        ],
        "defaultArmors": [
            6,
            10,
            11,
            1059,
            1089,
            1119,
            1149,
            1179,
            1209
        ],
        "property": {
            "keyd":true,
            "counterAttack": true
        },
        "levelId": 10
    },
    {
        "classId": 261,
        "className": "大主教(队友)",
        "faction": "monster",
        "classType": 4,
        "avatar": "avatar3.ccbi",
        "emblem": [
            "emblem-priest.png",
            "emblem-priest2.png"
        ],
        "defaultArmors": [
            6,
            10,
            11,
            1239,
            1269,
            1299,
            1329,
            1359,
            1389
        ],
        "property": {
            "keyd":true,
            "counterAttack": true
        },
        "levelId": 10
    },
	{
		"classId": 262,
		"className": "哥布林土豪",
		"faction": "monster",
		"classType": 1,
		"avatar": "enemy-thgoblin3.ccbi",
		"property": {
			"health": 1.5,
			"attack": 0.12,
			"critical": 2,
			"strong": 2,
			"accuracy": 15,
			"reactivity": 30,
			"speed": 0,
			"counterAttack": false,
			"exp": 0,
			"gold": 0
		},
		"xproperty": {
			"balance": 0.1,
			"health": 4,
			"attack": 0.4,
			"critical": 1,
			"strong": 1,
			"accuracy": 1,
			"reactivity": 1,
			"speed": 1
		},
		"soundSpawn": "gebulintou.mp3",
		"soundWound": "gebulinwound.mp3",
		"soundAttack": "shouren.mp3",
		"soundDie": "gebulindie.mp3",
		"effectAttack": 9,
		"skill": [
			{
				"id": 122,
				"level": 1
			},
			{
				"id": 124,
				"level": 1
			},
			{
				"id": 125,
				"level": 1
			}
		]
	}
]
