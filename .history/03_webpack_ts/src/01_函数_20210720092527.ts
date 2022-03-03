// 函数：封装了一些重复使用的代码，在需要的时候直接调用即可
(() => {
    // js中的书写方式
    // // 函数声明，命名函数
    // function add(x, y) {
    //     return x + y
    // }
    // // 函数表达式，匿名函数
    // const add2 = function (x, y) {
    //     return x + y
    // }

    // ts中的书写方式

    // 函数声明，命名函数
    // 函数中的x和y参数的类型都是string类型的，小括号后面的:string代表的是返回值也是string类型
    function add(x: string, y: string): string {
        return x + y
    }
    const result1: string = add('111', '222')
    console.log(result1)
    // 函数表达式，匿名函数
    // 函数中的x和y参数的类型都是number类型的，小括号后面的:string代表的是返回值也是number类型
    const add2 = function (x: number, y: number): number {
        return x + y
    }
    console.log(add2(10, 20))

    // 函数的完整写法
    const add3: (x: number, y: number) => number = fuction(x: number, y: number): number{
        return x+y
}
}) ()