/**
 * User: hammer
 * Date: 13-9-13
 * Time: 下午3:24
 */
/*** TABLE NAMES ***/
TABLE_ROLE = "roles";
TABLE_ITEM = "items";
TABLE_STAGE = "stages";
TABLE_EFFECT = "effects";
TABLE_CARD = "cards";
TABLE_SKILL = "skills";
TABLE_VERSION = "version";
TABLE_LEVEL = "levels";
TABLE_DUNGEON = "dungeons";
TABLE_UPGRADE = "upgrade";
TABLE_ENHANCE = "enhance";
TABLE_QUEST = "quests";
TABLE_STORE = "store";
TABLE_CONFIG = "config";
TABLE_DROP = "drop";
TABLE_DIALOGUE = "dialogue";
TABLE_CAMPAIGN = "campaigns";
TABLE_VIP = "vip";
TABLE_TRIGGER = "triggers";
TABLE_BROADCAST = "broadcast";
TABLE_TUTORIAL = "tutorialList";
TABLE_TUTORIAL_CONFIG = "tutorialConfig";
TABLE_BAN = "bans";
TABLE_LEADBOARD = "leadboard";
TABLE_FACTION = "faction";
TABLE_COSTS = "costs";
TABLE_COST = "costs";
TABLE_DP = "dailyPrize";
TABLE_ARENA = "arena";
TABLE_LOCALIZE = "localize";
TABLE_PRELOAD = "preload";
TABLE_IAPLIST = "iaplist";
TABLE_SERVERLIST = "serverlist";
TABLE_PKREWARD = "pkReward";
TABLE_FRAGMENT = "fragment";
TABLE_BOUNTY = "bounty";
TABLE_IAP = "iaplist";
TABLE_UNIT = "units";
TABLE_SHOP_MASTER = "shop_master";
TABLE_PRENTICE = "prentices"

/*** GAME CONSTANTS ***/
ItemId_RevivePotion = 540;

/*** RPC COMMANDS ***/
RET_OK = 0;
RET_NotEnoughGold = 1;
RET_NotEnoughDiamond = 2;
RET_NotEnoughEnergy = 3;
RET_RoleClassNotMatch = 4;
RET_RoleLevelNotMatch = 5;
RET_PlayerNotExisit = 6;
RET_ItemNotExist = 7;
RET_InventoryFull = 8;
RET_InsufficientEquipXp = 9;
RET_NoEquip = 10;
RET_NoEnhanceStone = 11;
RET_EquipCantUpgrade = 12;
RET_Unknown = 13;
RET_PlayerInfoError = 13;
RET_NotEnoughItem = 14;
RET_TooMuchChat = 15;
RET_ServerError = 16;
RET_FriendListFull = 17;
RET_OtherFriendListFull = 18;
RET_ExceedMaxEnhanceLevel = 19;
RET_SyncError = 20;
RET_EnhanceFailed = 21;
RET_DungeonNotExist = 22;
RET_StageIsLocked = 23;
RET_AppVersionNotMatch = 24;
RET_ResourceVersionNotMatch = 25;
RET_AccountHaveNoHero = 26;
RET_WrongAccountID = 27;
RET_InvalidName = 28;
RET_PlayerNotExists = 29;
RET_NameTaken = 30;
RET_NoKey = 31;
RET_CantInvite = 32;
RET_Issue33 = 33;
RET_LoginFailed = 34;
RET_HireFriendFailed = 35;
RET_RequireMercenaryFailed = 36;
RET_Issue37 = 37;
RET_Issue38 = 38;
RET_VipLevelIsLow = 39;
RET_SoldOut = 40;
RET_Issue41 = 41;
RET_LoginByAnotherDevice = 42;
RET_NewVersionArrived = 43;
RET_SessionOutOfDate = 44;
RET_NeedTeammate = 45;
RET_NeedReceipt = 46;
RET_InsufficientIngredient = 47;
RET_InvalidPaymentInfo = 48;
RET_SweepPowerNotEnough = 49;
RET_NotEnoughTimes = 50;
RET_CantReceivePkAward = 51;
RET_RewardAlreadyReceived = 52;
RET_QuestNotExists = 53;
RET_QuestNotAccepted = 54;
RET_QuestNotCompleted = 55;
RET_QuestCompleted = 56;
RET_UseItemFailed = 57;
RET_TargetNotExists = 58;
RET_EquipedItemCannotBeSold = 59;
RET_ItemSoldFailed = 60;
RET_ClaimCostFailed = 61;
RET_FriendNotExists = 62;
RET_GetLeaderboardInfoFailed = 63;
RET_ShopVersionNotMatch = 64;
RET_NoParameter = 65;
RET_SameMessageExist = 66;
RET_ReviveLimit = 67;
RET_EnergyLimit = 68;
RET_RedeemFailed = 69;
RET_NothingTodo = 70;
RET_NotEnough = 71;
RET_ClassNotUnlock = 72;
RET_GetInfoFailed = 73;
RET_PurchaseFailed = 74;
RET_PrenticeUplimit = 75;
RET_PrenticeNotExist = 76;
RET_PrenticeUplimit = 77;
RET_PrenticeClassLock = 78;
RET_PrenticeUpdateLimit = 79;
RET_PrenticeInvalidate = 80;
ErrorMsgs = [
    "操作成功",//0
    "金币数量不足",
    "宝石数量不足",
    "精力值不足",
    "角色职业不符合要求",
    "角色等级不符合要求",//5
    "玩家不存在",
    "道具不存在",
    "背包已满",
    "装备熟练度不足",
    "缺少装备",//10
    "缺少强化宝石",
    "装备无法再次升级",
    "玩家数据有误",
    "道具数量不足",
    "聊天信息发送过于频繁，请稍等片刻",//15
    "服务器状态异常，请稍后再试",
    "你的好友列表已经满了",
    "对方的好友列表已经满了",
    "这个属性不能再强化了",
    "与服务器数据同步出错，请重新登陆",//20
    "强化失败",
    "副本不存在",
    "关卡尚未解锁",
    "程序版本不匹配",
    "资源版本不匹配",//25
    "需要创建角色",
    "错误的登录信息",
    "不允许的名字",
    "角色不存在",
    "名字已被占用",//30
    "没有匹配的钥匙",
    "无法添加对方为好友",
    "错误:33",
    "登录失败",
    "雇佣队友失败",//35
    "获取队友列表失败",
    "错误:37",
    "错误:38",
    "VIP等级不足",
    "物品已经售完",//40
    "错误:41",
    "从另外一个设备登录",
    "有新版本更新，请重新登录",
    "与服务器断开连接",
    "Need Teammate",//45
    "缺少配方",
    "缺少材料",
    "付费信息错误，请联系工作人员",
    "战斗力不足",
    "挑战次数已用尽",//50
    "无法领取PK奖励",
    "奖励已领取",
    "任务不存在",
    "任务未领取",
    //"任务未完成\n可能是由于数据未同步，请尝试点\n击设置界面中的清空数据缓存按钮",//55
    "任务未完成\n即将进行数据同步",//55
    "任务已完成",
    "使用物品失败",
    "目标不存在",
    "已装备的道具无法出售",
    "道具出售失败",//60
    "获取材料失败",
    "好友不存在",
    "获取排名信息失败",
    "商店版本不匹配",
    "参数不正确",//65
	"请求已发送",
	"复活次数已用尽",
	"购买体力次数已用尽",
    "兑换失败",
    "RET_NothingTodo",//70
    "RET_NotEnough", 
    "RET_ClassNotUnlock",
    "信息获取失败",
    "购买失败",
    "RET_PrenticeUplimit", // = 75;
    "RET_PrenticeNotExist",
    "RET_PrenticeUplimit",
    "RET_PrenticeClassLock",
    "RET_PrenticeUpdateLimit",
    "RET_PrenticeInvalidate", // 80;,
];

/*** ITEM CATEGORY ***/
ITEM_USE = 0;//使用（无）
ITEM_EQUIPMENT = 1;//装备 (绿）
ITEM_GEM = 2;//宝石（紫）
ITEM_RECIPE = 3;//配方（蓝）
ITEM_USELESS = 4;//无用的（灰）

/*** Subcategory of ITEM_EQUIPMENT ***/
EquipSlot_MainHand = 0;//主手装备
EquipSlot_SecondHand = 1;//副手装备
EquipSlot_Chest = 2;//胸甲装备
EquipSlot_Finger = 3;//戒指装备
EquipSlot_Legs = 4;//腿甲装备
EquipSlot_Neck = 5;//护符装备
EquipSlot_Face = 6;//脸
EquipSlot_Eye = 7;//眼镜
EquipSlot_Brow = 8;//眉毛
EquipSlot_Hair = 9;//头发

/*** Subcategory of ITEM_EQUIPMENT ***/
EquipSlot_StoreMainHand = 10;//主手
EquipSlot_StoreSecondHand = 11;//副手
EquipSlot_StoreSuit = 12;//套装
EquipSlot_StoreHead = 13;//头盔
EquipSlot_StoreHair = 14;//发型
EquipSlot_StoreGear = 15;//头饰
EquipSlot_StoreBack = 16;//背部
EquipSlot_StoreHallows = 17;//圣器
EquipSlot_StoreGlasses = 18;//眼镜
EquipSlot_StoreArms = 19;//护臂
EquipSlot_StoreLegs = 20;//腿甲

/*** 装备类型 ***/
ITEMSTATUS_NONE = 0;
ITEMSTATUS_EQUIPED = 1;

/*** Subcategory of ITEM_USE ***/
ItemUse_ItemPack = 0;
ItemUse_Function = 1;
ItemUse_TreasureChest = 2;

/*** Subcategory of ENHANCE ***/
ENHANCE_SEVEN = 0;
ENHANCE_FIVE = 1;
ENHANCE_THREE = 2;
ENHANCE_ATTACK = 3;
ENHANCE_HEALTH = 4;
ENHANCE_SPEED = 5;
ENHANCE_CRITICAL = 6;
ENHANCE_STRONG = 7;
ENHANCE_ACCURACY = 8;
ENHANCE_REACTIVITY = 9;
ENHANCE_VOID = 10;
ENHANCE_COUNT = 11;

/*** Enhance Result ***/
RES_ATTACK = 0;
RES_HEALTH = 1;
RES_SPEED = 2;
RES_CRITICAL = 3;
RES_STRONG = 4;
RES_ACCURACY = 5;
RES_REACTIVITY = 6;
RES_LEECH = 7;
RES_REFLECT = 8;
RES_COUNTER = 9;
RES_STUN = 10;
RES_CRIDMG = 11;
RES_GOLD = 12;
RES_WXP = 13;
RES_EXP = 14;

Sweep_Vip_Level = 3;

LOGIN_ACCOUNT_TYPE_TG = 0;
LOGIN_ACCOUNT_TYPE_AD = 1;
LOGIN_ACCOUNT_TYPE_PP =  2;
LOGIN_ACCOUNT_TYPE_91_iOS =  3;
LOGIN_ACCOUNT_TYPE_KY =  4;
LOGIN_ACCOUNT_TYPE_GAMECENTER =  5;
LOGIN_ACCOUNT_TYPE_91_Android =  6;
LOGIN_ACCOUNT_TYPE_DK_Android =  7;
LOGIN_ACCOUNT_TYPE_TB_IOS =  8;
LOGIN_ACCOUNT_TYPE_TB_Android =  10;
LOGIN_ACCOUNT_TYPE_Android =  9;

Max_tutorialStage = 3;

MonthCardID = 8;

/*** Quest Status ***/
QUESTSTATUS_ONGOING = 0;
QUESTSTATUS_COMPLETE = 1;

/*** Bounty Status ***/
BOUNTYSTATUS_ONGOING = 0;
BOUNTYSTATUS_COMPLETE = 1;

/*** Prize Type ***/
PRIZETYPE_ITEM = 0;
PRIZETYPE_GOLD = 1;
PRIZETYPE_DIAMOND = 2;
PRIZETYPE_EXP = 3;
PRIZETYPE_WXP = 4;
PRIZETYPE_FUNCTION = 5;

/*** FUNCTION-Prize Type ***/
FPT_DUOMUDAILLY = 0;

/*** Message Type ***/
MESSAGETYPE_PLAYER = 0;
MESSAGETYPE_SYSTEM = 1;
MESSAGETYPE_BROADCAST = 2;
MESSAGETYPE_WHISPER = 3;

MESSAGE_REWARD_TYPE_OFFLINE = 0;
MESSAGE_REWARD_TYPE_SYSTEM = 1;

/*** Broadcast Type ***/
BROADCAST_TREASURE_CHEST = 0;
BROADCAST_INFINITE_LEVEL = 1;
BROADCAST_ENHANCE = 2;
BROADCAST_ITEM_LEVEL = 3;
BROADCAST_PLAYER_LEVEL = 4;
BROADCAST_CRAFT = 5;
BROADCAST_SYSTEM_MSG = 6;
BROADCAST_ITEM_HIGHT_QULITY = 7; 

/*** FEATURES ***/
FEATURE_ENERGY_RECOVER = 0;
FEATURE_INVENTORY_STROAGE = 1;
FEATURE_FRIEND_STROAGE = 2;
FEATURE_FRIEND_GOLD = 3;
FEATURE_PK_COOLDOWN = 4;
FEATURE_PK_COUNT = 5;
FEATURE_REVIVE = 6;

/*** NOTIOFICATION OP ID ***/
NTFOP_ACCEPT = 1;
NTFOP_DECLINE = 0;

Global_Card_Drop_Config = {
  "cardRate":0.2,
  "cards": [
    { "weight": 2, "type": 0 },
    { "weight": 2, "type": 1 }, 
    //{ "weight": 2, "type": 2 },
    { "weight": 2, "type": 3 },
    { "weight": 1, "type": 4 },
    { "weight": 2, "type": 5 },
    { "weight": 2, "type": 6 },
    { "weight": 2, "type": 7 },
    { "weight": 2, "type": 8 }
  ]
};

EquipSlotDesc = [
        "主武器",//0
        "副武器",
        "胸甲",
        "戒指",
        "腿甲",
        "饰品",//5
        "脸部",
        "眼部",
        "眉毛",
        "头发",
        "主手装饰",//10
        "副手装饰",
        "外套",
        "头盔",
        "发型",
        "头饰",//15
        "翅膀",
        "圣器",
        "眼镜",
        "护臂",
        "腿甲"
    ];

ServerPropertyTable ={
        health: "生命",
        speed: "速度",
        attack: "攻击",
        critical: "暴击",
        strong: "韧性",
        accuracy: "命中",
        reactivity: "反应"
    };

Rate_Gold_Diamond = 10/1;

CONFIG_FOR_BIN = {
    teebikGuestLogin: true,
    transformEnabled: true,
    treasureLottery: true
};

DEF_CHANNEL = "AppStore";
