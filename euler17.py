#!/usr/bin/python3.4
words = {
        '1':    ["one"      , ''   ], '2':    ['two'      , ''   ],
        '3':    ['three'    , ''   ], '4':    ['four'     , ''   ],
        '5':    ['five'     , ''   ], '6':    ['six'      , ''   ],
        '7':    ['seven'    , ''   ], '8':    ['eight'    , ''   ],
        '9':    ['nine'     , ''   ], '10':   ['ten'      , ''   ],
        '11':   ['eleven'   , ''   ], '12':   ['twelve'   , ''   ],
        '13':   ['thirteen' , ''   ], '14':   ['fourteen' , ''   ],
        '15':   ['fifteen'  , ''   ], '16':   ['sixteen'  , ''   ],
        '17':   ['seventeen', ''   ], '18':   ['eighteen' , ''   ],
        '19':   ['nineteen' , ''   ], '20':   ['twenty'   , ''   ],
        '30':   ['thirty'   , ''   ], '40':   ['forty'    , ''   ],
        '50':   ['fifty'    , ''   ], '60':   ['sixty'    , ''   ],
        '70':   ['seventy'  , ''   ], '80':   ['eighty'   , ''   ],
        '90':   ['ninety'   , ''   ], '100':  ['hundred'  , 'and'],
        '1000': ['thousand' , 'and'], '0':    [''         , '']
        }

def spellWord(words, num):
    if num <= 20:
        return words[str(num)][0]
    else:
        if num < 100:
            return words[str(int(num/10)) +"0"][0] + words[str(int(num%10))][0]
        else:
            if num < 1000:
                if num/100 == num//100:
                    return words[str(num//100)][0] + words[str(100)][0]
                else:
                    return str(words[str(num//100)][0]) + str(words[str(100)][0]) + "and" + str(spellWord(words, num%100))
            else:
                if num == 1000:
                    return str(words[str(num//1000)][0]) + str(words[str(num)][0])

sum1 = 0
for x in range(1, 1001):
    sum1 += len(spellWord(words, x))
print(sum1)
