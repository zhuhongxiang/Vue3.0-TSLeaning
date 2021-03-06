// 可选参数:函数在声明的时候，内部的参数是用了?进行修饰，那么表示该参数可以传入也可以不传入，叫可选参数
// 默认参数:函数在声明的时候，内部的参数有自己的默认值，此时这个参数可以叫做默认参数
(() => {
    // 定义一个函数：传入姓氏和名字可以得到姓名
    // 需求：如果不传入任何内容，那么就返回默认的姓氏
    // 需求：如果只传入，那么就返回来姓氏
    // 需求：如果传入姓氏和名字，那么返回来的就是姓名
    const getFullName = function (firstName: string = '东方', lastName?: string) {
        // 判断名字是否传入了
        if (lastName) {
            return firstName + '_' + lastName
        } else {
            return firstName
        }
    }

    // 函数调用
    console.log(getFullName())
    // 只传入姓氏
    console.log(getFullName('诸葛'))
    // 传入姓氏和名字
    console.log(getFullName('诸葛', '孔明'))
})()