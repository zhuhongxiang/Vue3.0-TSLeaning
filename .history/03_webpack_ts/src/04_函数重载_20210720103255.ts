// 函数重载：函数名字相同，函数的参数及个数不同
(() => {
    // 定义一个函数
    // 需求：我们有一个add函数，它可以接收两个string类型的参数进行拼接，也可以接收两个number类型的参数进行相加

    function add(x: string | number, y: string | number): string | number {
        if (typeof x === 'string' && typeof y === 'string') {
            return x + y // 字符串拼接
        } else if (typeof x === 'number' && typeof y === 'number') {
            return x + y
        }
    }
})()