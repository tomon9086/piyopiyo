{"changed":true,"filter":false,"title":"index_2.js","tooltip":"/index_2.js","value":"// 一気にコメントアウト\n//     →選択して「⌘+/」\n\n\n// 復習1\n/*\nvar x = 0;\nif(x >= 0){\n    console.log(x + \"は非負の数\");\n}else{\n    console.log(x + \"は負の数\");\n}\n*/\n\n// 復習2\n/*\nvar num = 8;\nvar ii2 = 1;\nvar sum = 1;\nvar str = \"1\";\nfor (var i = 1; i < num; i++){\n    ii2 = i + 1;\n    str = str + \" + \" + ii2;\n    sum = sum + ii2;\n}\nconsole.log(str + \" = \" + sum);\n*/\n\n// 復習3\n/*\nvar utl = 22;\nvar str = \"[1]\";\nvar ppp = 2;\nvar pvs = 1;\nfor (var j = 2; j < utl + 1; j++){\n    if(j == pvs + ppp){\n        str = str + \" \" + \"[\" + j + \"]\";\n        pvs = pvs + ppp;\n        ppp++;\n    }else{\n        str = str + \" \" + j;\n    }\n}\nconsole.log(str);\n*/\n\n//break\n/*\nvar i = 0;\nwhile(true){\n  console.log(i + \"だよ！\");\n  if(i == 10){\n    break;\n  }\n  i += 1;\n}\nconsole.log(\"おわったよ！\");\n*/\n\n//補題(Fibonacci Number)\n/*\nvar i = 1;\nvar pvs1 = 1;\nvar pvs2 = 1;\nvar result = 1;\nvar str = \"1, 1\";\nvar utl = 30;\nwhile(true){\n    result = pvs1 + pvs2;\n    str = str + \", \" + result;\n    if(i == utl - 2){\n        break;\n    }\n    i++;\n    pvs2 = pvs1;\n    pvs1 = result;\n}\nconsole.log(str);\n*/\n\n//補題(0と1で4つの並べ替え)\n/*\nvar digit = 4;\nvar utl = 1;\nvar ppp = 1;\nvar str = \"\";\n//for(var factrial = 1; factrial <= utl; factrial++){}\nutl = Math.pow(2, 4);\nfor(var i = 1; i <= utl; i++){\n    str = \"\";\n    ppp = utl - i;\n    for(var j = 1; j <= digit; j++){\n        if(ppp % 2 == 0){\n            str = str + \" \" + 0;\n            ppp = ppp / 2;\n        }else if (ppp % 2 == 1){\n            str = str + \" \" + 1;\n            ppp = (ppp - 1) / 2;\n        }\n    }\n    console.log(str);\n}\n*/\n\n//補題・模範解答\n/*\nvar c = 2;\nvar scale = 4;\n\nfor (var i = 0; i <= Math.pow(scale, c) - 1; i++) {\n  var number = '';\n  for (var j = 1; j <= scale * c; j *= c) {\n    number += (i - i % j) / j % c;\n  }\n  console.log(number);\n}\n*/\n\n//関数\n/*\nfunction greet(name){\n    if(typeof name == \"string\"){\n        console.log(\"こんにちは\" + name + \"くん！\");\n        console.log(\"今日は曇りやね。\");\n        console.log(\"なんちゃかかんちゃか(長い文字列)\");\n    }else{\n        throw new Error(\"ちゃんと名前を呼んであげてください！\");\n    }\n}\ngreet(123);\n*/\n\n//問1\n/*\nfunction sayHi(){\n    console.log(\"Hi!\");\n}\nsayHi();\n*/\n\n//問2\n/*\nfunction canMakeTriangle(a, b, c){\n    var isPositives = a > 0 && b > 0 && c > 0;\n    var canMake = a + b > c && b + c > a && c + a > b;\n    if (isPositives && canMake){\n        console.log(\"三角形が作れる\");\n    }else{\n        console.log(\"三角形は作れない\");\n    }\n}\ncanMakeTriangle(3, 4, 5);\n*/\n\n//問3\n/*\nfunction multiplesOf(num){\n    var mularray = [];\n    var add = 1;\n    for(var i = 1; i <= 20; i++){\n        add = num * i;\n        mularray.push(add);\n    }\n    return mularray;\n}\nconsole.log(multiplesOf(3));\n*/\n\n//問4\n/*\nfunction greetAll(array){\n    var name = \"\";\n    for (var i = 0; i <= array.length - 1; i++) {\n        name = array[i];\n        console.log(\"こんにちは\" + name + \"くん!\");\n        console.log(\"今日は曇りやね。\");\n        console.log(\"なんちゃかかんちゃか(長い文字列)\");\n    }\n}\nvar people = [\"田中\", \"田口\", \"田村\", \"田辺\", \"田川\"];\ngreetAll(people);\n*/\n\n//問5\n/*\nfunction hasOdd(num){\n    var result = false;\n    for(var i = 0; i <= num.length - 1; i++){\n        if(num[i] % 2 == 1){\n            result = true;\n        }\n    }\n    return result;\n}\nvar numbers = [2,4,6,8];\nconsole.log(hasOdd(numbers));\n*/\n\n//問6\n/*\nfunction makeTriangle(height){\n    var dollar = \"\";\n    for(var i = 1; i <= height; i++){\n        dollar = \"\";\n        for(var j = 1; j <= i; j++){\n            dollar += \"$\";\n        }\n        console.log(dollar);\n    }\n}\nmakeTriangle(5);\n*/\n\n//問7\n/*\nfunction multiplesOf2(num){\n    var mularray = [];\n    var add = 1;\n    for(var i = 1; i <= 9; i++){\n        add = num * i;\n        mularray.unshift(add);\n    }\n    return mularray;\n}\nconsole.log(multiplesOf2(7));\n*/\n\n//問8(冗長)\n\n// var a = 10;\n// var b = 8;\n// var _ref = b;\n// b = a;\n// a = _ref;\n// function swap(array, i, j){\n//     var ppp = 1;\n//     var qqq = 1;\n//     if(i <= j){         // ppp <= qqq\n//         ppp = i;\n//         qqq = j;\n//     }else{\n//         ppp = j;\n//         qqq = i;\n//     }\n//     var _deb = array.toString();\n//     var ref_ary = array;\n//     var ref1 = array[ppp];\n//     var ref2 = array[qqq];\n//     var ary = array.slice(0, ppp - 1);\n//     _deb = ary.toString();\n    \n//     array.push(ref2);\n//     _deb = array.toString();\n    \n//     for(var me = 1; me <= qqq - ppp - 1; me++){\n//         array.push(ref_ary[ppp + me]);\n//     }\n//     _deb = array.toString();\n//     array.push(ref1);\n//     _deb = array.toString();\n//     for(var re = 0; re <= ref_ary.length - qqq; re++){\n//         array.push(ref_ary[qqq + re]);\n//     }\n//     _deb = array.toString();\n//     return array;\n// }\n\n// var test = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];\n// console.log(swap(test, 1, 2));\n\n//問8\n\nfunction swap(array, i, j){\n    var ref_i = array[i];\n    var ref_j = array[j];\n    array[i] = ref_j;\n    array[j] = ref_i;\n}\n\nfunction randomSwap(ary){\n    var randomInteger1 = Math.floor(Math.random() * ary.length);\n    var randomInteger2 = Math.floor(Math.random() * ary.length);\n    var result = swap(ary, randomInteger1, randomInteger2);\n    return result;\n}\n\nfunction randomizeArray(array){\n    for(var i = 1; i <= 3 * Math.pow(array.length, 2); i++){\n        var result = randomSwap(array);\n    }\n    return result;\n}\n\nfunction isAscendingOrder(array){\n    var result = true;\n    for(var i = 0; i < array.length; i++){\n        if(array[i + 1] < array[i]){\n            result = false;\n            break;\n        }\n    }\n    return result;\n}\n\nfunction getMax(array){\n    var first = 0;\n    var num = 0;\n    if(array.length < 0){\n        return false;\n    }\n    first = array[0];\n    for(var i = 0; i <= array.length; i++){\n        if(array[i + 1] > array[i]){\n            first = array[i + 1];\n            num = i + 1;\n        }\n    }\n    // temp = array.slice(0, num - 1);\n    // temp.push(array.slice(num + 1, array.length));\n    // for(j = 0; j <= array.length; j++){\n    //     second = array[0];\n        \n    // }\n    // for(k = 0; k <= array.length; k++){\n    //     first = array[0];\n    // }\n    return [first, num];    //0:最大値, 1:その順位\n}\n\nvar test = [3,9,10,0,2,10];\nwhile(true){\n    var ans = randomizeArray(test);\n    if(isAscendingOrder(test)){\n        break;\n    }\n    console.log(test);\n}\nconsole.log(\"↑これが答え\");\n\n\n\n//補題(絶対値を返す関数)\n\n// function abs(num){\n//     if(num >= 0){\n//         return num;\n//     }\n//     return num * -1;\n// }\n\n// console.log(abs(-7) == 7);","undoManager":{"mark":14,"position":36,"stack":[[{"start":{"row":295,"column":16},"end":{"row":295,"column":17},"action":"remove","lines":["1"],"id":7376}],[{"start":{"row":295,"column":16},"end":{"row":295,"column":17},"action":"insert","lines":["0"],"id":7377}],[{"start":{"row":295,"column":39},"end":{"row":295,"column":40},"action":"remove","lines":["1"],"id":7378}],[{"start":{"row":295,"column":38},"end":{"row":295,"column":39},"action":"remove","lines":[" "],"id":7379}],[{"start":{"row":295,"column":37},"end":{"row":295,"column":38},"action":"remove","lines":["+"],"id":7380}],[{"start":{"row":295,"column":36},"end":{"row":295,"column":37},"action":"remove","lines":[" "],"id":7381}],[{"start":{"row":296,"column":18},"end":{"row":296,"column":19},"action":"insert","lines":[" "],"id":7382}],[{"start":{"row":296,"column":19},"end":{"row":296,"column":20},"action":"insert","lines":["+"],"id":7383}],[{"start":{"row":296,"column":20},"end":{"row":296,"column":21},"action":"insert","lines":[" "],"id":7384}],[{"start":{"row":296,"column":21},"end":{"row":296,"column":22},"action":"insert","lines":["1"],"id":7385}],[{"start":{"row":296,"column":36},"end":{"row":296,"column":37},"action":"remove","lines":["1"],"id":7386}],[{"start":{"row":296,"column":35},"end":{"row":296,"column":36},"action":"remove","lines":[" "],"id":7387}],[{"start":{"row":296,"column":34},"end":{"row":296,"column":35},"action":"remove","lines":["-"],"id":7388}],[{"start":{"row":296,"column":33},"end":{"row":296,"column":34},"action":"remove","lines":[" "],"id":7389}],[{"start":{"row":295,"column":22},"end":{"row":295,"column":23},"action":"remove","lines":["="],"id":7390}],[{"start":{"row":300,"column":5},"end":{"row":301,"column":0},"action":"insert","lines":["",""],"id":7391},{"start":{"row":301,"column":0},"end":{"row":301,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":301,"column":4},"end":{"row":301,"column":5},"action":"insert","lines":["i"],"id":7392}],[{"start":{"row":301,"column":5},"end":{"row":301,"column":6},"action":"insert","lines":["f"],"id":7393}],[{"start":{"row":301,"column":6},"end":{"row":301,"column":7},"action":"insert","lines":[" "],"id":7394}],[{"start":{"row":301,"column":6},"end":{"row":301,"column":7},"action":"remove","lines":[" "],"id":7395}],[{"start":{"row":301,"column":6},"end":{"row":301,"column":8},"action":"insert","lines":["()"],"id":7396}],[{"start":{"row":301,"column":7},"end":{"row":301,"column":8},"action":"insert","lines":["r"],"id":7397}],[{"start":{"row":301,"column":8},"end":{"row":301,"column":9},"action":"insert","lines":["e"],"id":7398}],[{"start":{"row":301,"column":9},"end":{"row":301,"column":10},"action":"insert","lines":["s"],"id":7399}],[{"start":{"row":301,"column":10},"end":{"row":301,"column":11},"action":"insert","lines":["u"],"id":7400}],[{"start":{"row":301,"column":11},"end":{"row":301,"column":12},"action":"insert","lines":["l"],"id":7401}],[{"start":{"row":301,"column":12},"end":{"row":301,"column":13},"action":"insert","lines":["k"],"id":7402}],[{"start":{"row":301,"column":12},"end":{"row":301,"column":13},"action":"remove","lines":["k"],"id":7403}],[{"start":{"row":301,"column":12},"end":{"row":301,"column":13},"action":"insert","lines":["t"],"id":7404}],[{"start":{"row":301,"column":14},"end":{"row":301,"column":15},"action":"insert","lines":["{"],"id":7405}],[{"start":{"row":301,"column":15},"end":{"row":303,"column":5},"action":"insert","lines":["","        ","    }"],"id":7406}],[{"start":{"row":301,"column":0},"end":{"row":303,"column":5},"action":"remove","lines":["    if(result){","        ","    }"],"id":7407}],[{"start":{"row":300,"column":5},"end":{"row":301,"column":0},"action":"remove","lines":["",""],"id":7408}],[{"start":{"row":302,"column":1},"end":{"row":303,"column":0},"action":"insert","lines":["",""],"id":7409}],[{"start":{"row":303,"column":0},"end":{"row":304,"column":0},"action":"insert","lines":["",""],"id":7410}],[{"start":{"row":303,"column":0},"end":{"row":304,"column":0},"action":"insert","lines":["",""],"id":7411}],[{"start":{"row":304,"column":0},"end":{"row":327,"column":1},"action":"insert","lines":["function getMax(array){","    var first = 0;","    var num = 0;","    if(array.length < 0){","        return false;","    }","    first = array[0];","    for(var i = 0; i <= array.length; i++){","        if(array[i + 1] > array[i]){","            first = array[i + 1];","            num = i + 1;","        }","    }","    // temp = array.slice(0, num - 1);","    // temp.push(array.slice(num + 1, array.length));","    // for(j = 0; j <= array.length; j++){","    //     second = array[0];","        ","    // }","    // for(k = 0; k <= array.length; k++){","    //     first = array[0];","    // }","    return [first, num];    //0:最大値, 1:その順位","}"],"id":7412}]]},"ace":{"folds":[],"customSyntax":"javascript","scrolltop":4236,"scrollleft":0,"selection":{"start":{"row":330,"column":12},"end":{"row":330,"column":12},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":301,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1463544882251}