// 函数：封装了一些重复使用的代码，在需要的时候直接调用即可
(() => {
    // 函数声明，命名函数
    function add(x, y) {
        return x + y
    }
    // 函数表达式，匿名函数
    const add2 = function (x, y) {
        return x + y
    }
})()