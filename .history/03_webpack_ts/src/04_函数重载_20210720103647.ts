// 函数重载：函数名字相同，函数的参数及个数不同
(() => {
    // 定义一个函数
    // 需求：我们有一个add函数，它可以接收两个string类型的参数进行拼接，也可以接收两个number类型的参数进行相加

    function add(x: string | number, y: string | number) {
        if (typeof x === 'string' && typeof y === 'string') {
            return x + y // 字符串拼接
        } else if (typeof x === 'number' && typeof y === 'number') {
            return x + y // 数字相加
        }
    }

    // 函数调用
    // 两个参数都是字符串
    console.log(add('诸葛', '孔明'))
    // 两个参数都是数字
    console.log(add(10, 20))
    //此时如果传入的是非法的数据
    console.log(add('真香', 10))
    console.log(add(100, '真香'))
})()