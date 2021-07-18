// 抽象类：包含抽象方法(抽象方法一般没有任何具体内容的实现)，也可以包含实例方法，抽象类是不能被实例化
// 为了让子类进行实例化及实现内部的抽象方法
(() => {
    // 定义一个抽象类
    abstract class Animal {
        abstract name: string
        abstract eat(): any
        // 抽象方法(报错，抽象方法不能有具体实现)
        // abstract eat(){
        //     console.log('趴着吃')
        // }
        // 实例方法
        sayHi() {
            console.log('嗯嗯嗯')
        }
    }
    class Dog extends Animal {
        name: string = '小黑'
        // 重新实现抽象类中的方法，此时这个方法就是当前Dog类的实例方法了
        eat() {
            console.log('舔着吃')
        }
    }

    // 实例化Dog对象
    const dog: Dog = new Dog()
    dog.eat()
    // 调用的是抽象类中的实例方法
    dog.sayHi()
    console.log(dog.name)
    // 不能实例化抽象的对象
    // const ani:Animal = new Animal()
})()