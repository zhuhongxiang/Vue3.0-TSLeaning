// 类 类型：类的类型，可以通过接口来实现
(() => {
    // 定义一个接口
    interface IFly {
        // 该方法没有任何的实现(方法中什么都没有)
        fly(): any
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

    // 定义一个接口
    interface ISwim {
        swim(): any
    }

    // 定义一个类，该类的类型就是IFly和ISwim(当前的类可以实现多个接口，一个类同时也可以对多个接口进行约束)
    class Person2 implements IFly, ISwim {
        fly() {
            console.log('我飞了2')
        }
        swim() {
            console.log('我会游泳了2')
        }
    }
    // 实例化对象
    const person2 = new Person2
    person2.fly()
    person2.swim()

})()