// 修饰符(类中成员的修饰符)：主要是描述类中的成员(属性，构造函数，方法)的可访问性
(() => {
    // 定义一个父类
    class Person {
        // 定义一个属性
        name: string

        // 定义构造函数
        constructor(name: string) {
            // 更新属性值
            this.name = name
        }

        // 实例方法
        eat() {
            console.log('这个骨头真好吃', this.name)
        }
    }
    // 实例化对象
    const per = new Person('大蛇丸')
    // 类的外部可以访问类中的属性成员
    console.log(per.name)
    per.eat()
})()