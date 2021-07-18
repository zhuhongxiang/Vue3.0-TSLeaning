// readonly修饰符：首先是一个关键字，对类中的属性成员进行修饰，修饰后该属性成员就不能在外部被随意修改了
// 构造函数中，可以对只读的属性成员的数据进行修改
// 如果构造函数中没有任何的参数，类中的属性成员此时已经使用readonly进行修饰了，那么外部也是不能修改的
(() => {
    //定义一个类
    // class Person {
    //     // 属性
    //     readonly name: string
    //     constructor(name: string = '大甜甜') {
    //         this.name = name
    //     }
    //     sayHi() {
    //         console.log('hello', this.name)
    //         // 类中的普通方法中，也是不能修改readonly修饰的成员属性值
    //         // this.name = '白月光'
    //     }
    // }
    class Person {
        // 构造函数
        // 构造函数中的name参数，一旦用readonly进行修饰后，那么该name参数可以叫参数属性，Person类中就有了一个name的属性成员
        constructor(readonly name: string = '大甜甜') {
            this.name = name
        }
    }
    // 实例化对象
    const person: Person = new Person('莉莉')

    console.log(person)
    console.log(person.name)
    // 此时属性无法修改，因为name属性是只读的
    // person.name = '白月光'
    // console.log(person.name)

})()