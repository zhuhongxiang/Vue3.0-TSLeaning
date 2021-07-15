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

    // 总结：类可以通过接口的方式来定义类的类型
    // 类可以实现一个接口，也可以实现多个接口，要注意接口中的内容都要真正实现

    // 接口可以继承多个其他的接口

    // 定义了一个接口，继承多个其他的接口
    interface IMyFlyAndSwim extends IFly, ISwim { }

    // 定义一个类，直接实现
    class Person3 implements IMyFlyAndSwim {
        fly() {
            console.log('我飞了3')
        }
        swim() {
            console.log('我会游泳了3')
        }
    }

    const person3 = new Person3
    person3.fly()
    person3.swim()

    // 总结：接口和接口之间叫继承(使用的是extends)，类和接口之间叫实现(implements)


})()