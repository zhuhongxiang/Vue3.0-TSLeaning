// 类 类型：类的类型，可以通过接口来实现
(() => {
    // 定义一个接口
    interface IFly {
        // 该方法没有任何的实现(方法中什么都没有)
        fly()
    }

    // 定义一个类，该类的类型就是上面的接口(也可以理解为IFly接口约束了Person类)
    class Person implements IFly {
        fly() {
            console.log('我会飞了')
        }

    }
    // 实例化对象
    const person = new Person
    person.fly()

})()