exports.data = [
    {//0
        "interval":{"value":10,"unit":"second"},//second minite hour day
        "diamond":{"1":0},
        "basic_times":3,
        "advanced_option":[//若存在，优先读取advanced_option
            {
                "condition":"less",//less 小于 equal 等于 more 大于
                "count_value":[2],
                "basic_prize": [
                    {
                        "type": 2,
                        "count":5
                    },
                    {
                        "type": 2,
                        "count":10
                    }
                ]
            },
            {
                "condition":"equal",//less 小于 equal 等于 more 大于
                "count_value":[3,4],
                "basic_prize": [
                    {
                        "type": 2,
                        "count":15
                    },
                    {
                        "type": 2,
                        "count":20
                    }
                ]
            },
            {
                "condition":"more",//less 小于 equal 等于 more 大于
                "count_value":[7],
                "basic_prize": [
                    {
                        "type": 2,
                        "count":25
                    },
                    {
                        "type": 2,
                        "count":30
                    }
                ]
            }
        ],
        "basic_prize":[
            {
                "rate": 1,
                "prize": [
                    {
                        "weight": 13,
                        "type": 0,
                        "value":871 ,
                        "count": 5
                    },
                    {
                        "weight": 13,
                        "type": 0,
                        "value":538 ,
                        "count": 1
                    },
                    {
                        "weight": 13,
                        "type": 0,
                        "value":540 ,
                        "count": 1
                    },
                    {
                        "weight": 13,
                        "type": 1,
                        "count": 500
                    },
                    {
                        "weight": 12,
                        "type": 0,
                        "value":1475 ,
                        "count": 1
                    },
                    {
                        "weight": 4,
                        "type": 0,
                        "value":1475 ,
                        "count": 3
                    }
                ]
            }
        ],
        "advanced_prize":[
            {
                "rate": 1,
                "prize": [
                    {
                        "weight": 13,
                        "type": 0,
                        "value":871 ,
                        "count": 5
                    },
                    {
                        "weight": 13,
                        "type": 0,
                        "value":538 ,
                        "count": 1
                    },
                    {
                        "weight": 13,
                        "type": 0,
                        "value":540 ,
                        "count": 1
                    },
                    {
                        "weight": 13,
                        "type": 1,
                        "count": 500
                    },
                    {
                        "weight": 12,
                        "type": 0,
                        "value":1475 ,
                        "count": 1
                    },
                    {
                        "weight": 4,
                        "type": 0,
                        "value":1475 ,
                        "count": 3
                    }
                ]
            }
        ]
    },
    { //1
        "interval":{"value":1,"unit":"second"},
        "diamond":{"1":30,"10":290},
        "basic_times":3,
        "basic_prize":[
            {
                "rate": 1,
                "prize": [
                    {
                        "weight": 13,
                        "type": 0,
                        "value":871 ,
                        "count": 10
                    },
                    {
                        "weight": 13,
                        "type": 0,
                        "value":538 ,
                        "count": 1
                    },
                    {
                        "weight": 13,
                        "type": 0,
                        "value":540 ,
                        "count": 2
                    },
                    {
                        "weight": 13,
                        "type": 1,
                        "count": 800
                    },
                    {
                        "weight": 12,
                        "type": 0,
                        "value":1475 ,
                        "count": 1
                    },
                    {
                        "weight": 4,
                        "type": 0,
                        "value":1475 ,
                        "count": 5
                    },
                    {
                        "weight": 2,
                        "type": 0,
                        "value":1476 ,
                        "count": 1
                    },
                    {
                        "weight": 2,
                        "type": 0,
                        "value":1478 ,
                        "count": 1
                    },
                    {
                        "weight": 3,
                        "type": 0,
                        "value":1480 ,
                        "count": 1
                    },
                    {
                        "weight": 2,
                        "type": 0,
                        "value":1482 ,
                        "count": 1
                    }
                ]
            }
        ],
        "advanced_prize":[
            {
                "rate": 1,
                "prize": [
                    {
                        "rare":true,
                        "weight": 1,
                        "type": 0,
                        "value":1476 ,
                        "count": 1
                    },
                    {
                        "rare":true,
                        "weight": 2,
                        "type": 0,
                        "value":1478 ,
                        "count": 1
                    },
                    {
                        "rare":true,
                        "weight": 4,
                        "type": 0,
                        "value":1480 ,
                        "count": 1
                    },
                    {
                        "rare":true,
                        "weight": 3,
                        "type": 0,
                        "value":1482 ,
                        "count": 1
                    }
                ]
            }
        ]
    }
]