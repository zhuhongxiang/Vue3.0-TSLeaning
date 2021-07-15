"use strict";
// 为了使用接口表示函数类型，我们需要给接口定义一个调用签名。它就像是一个只有参数列表和返回值类型的函数定义。
// 参数列表里的每个参数都需要名字和类型。
(function () {
    //定义一个函数，该类型就是上面定义的接口
    var searchString = function (source, subString) {
        return source.search(subString) > -1;
    };
    // 调用函数 
    console.log(searchString('我又变胖了', '胖'));
})();
