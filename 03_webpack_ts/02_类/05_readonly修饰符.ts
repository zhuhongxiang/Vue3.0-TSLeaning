// readonly修饰符：首先是一个关键字，对类中的属性成员进行修饰，修饰后该属性成员就不能在外部被随意修改了
// 构造函数中，可以对只读的属性成员的数据进行修改
// 如果构造函数中没有任何的参数，类中的属性成员此时已经使用readonly进行修饰了，那么外部也是不能修改的
// 构造函数中的参数可以使用readonly,public,private,protected，那么该类中都会自动添加这么一个属性成员
(() => {
    //定义一个类
    class Person {
        // 属性
        readonly name: string
        constructor(name: string = '大甜甜') {
            this.name = name
        }
        sayHi() {
            console.log('hello', this.name)
            // 类中的普通方法中，也是不能修改readonly修饰的成员属性值
            // this.name = '白月光'
        }
    }
    // class Person {
    // 构造函数
    // 构造函数中的name参数，一旦用readonly进行修饰后，那么该name参数可以叫参数属性，
    // Person类中就有了一个name的属性成员，外部也是无法修改类中的name属性成员值的
    // constructor(readonly name: string = '大甜甜') {
    //     // this.name = name
    // }
    // 构造函数中的name参数，一旦用public进行修饰后，那么Person类中就有了一个公共的name的属性成员，
    // constructor(public name: string = '大甜甜') {
    //     // this.name = name
    // }
    // 构造函数中的name参数，一旦用private进行修饰后，那么Person类中就有了一个私有的name的属性成员，
    // constructor(private name: string = '大甜甜') {
    //     // this.name = name
    // }
    // 构造函数中的name参数，一旦用protected进行修饰后，那么Person类中就有了一个公共的name的属性成员，
    // constructor(protected name: string = '大甜甜') {
    //     // this.name = name
    // }
    // }
    // 实例化对象
    const person: Person = new Person('莉莉')

    console.log(person)
    // person.name = '白月光'
    console.log(person.name)
    // 此时属性无法修改，因为name属性是只读的
    // person.name = '白月光'
    // console.log(person.name)

})()