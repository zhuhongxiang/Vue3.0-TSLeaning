// 多态：父类型的引用指向了子类型的对象，不同类型的对象针对相同的方法，产生了不同的行为
(() => {
    // 定义一个父类
    class Animal {
        // 定义一个属性
        name: string

        // 定义构造函数
        constructor(name: string) {
            // 更新属性值
            this.name = name
        }

        // 实例方法
        run(distance: number = 0) {
            console.log(`跑了${distance}米那么远的距离`)
        }
    }
    // 定义一个子类
    class Dog extends Animal {
        // 构造函数
        constructor(name: string) {
            // 调用父类的构造函数，实现子类中属性的初始化条件
            super(name)
        }
        // 实例方法，重写父类中的实例方法
        run(distance: number = 5) {
            console.log(`跑了${distance}米那么远的距离`)
        }
    }
    // 定义一个子类
    class Pig extends Animal {
        // 构造函数
        constructor(name: string) {
            // 调用父类的构造函数，实现子类中属性的初始化条件
            super(name)
        }
        // 实例方法，重写父类中的实例方法
        run(distance: number = 10) {
            console.log(`跑了${distance}米那么远的距离`)
        }
    }
    // 实例化父类对象
    const ani: Animal = new Animal('动物')
    ani.run()
    // 实例化子类 对象
    const dog: Dog = new Dog('大黄')
    dog.run()
    // 实例化子类 对象
    const pig: Pig = new Pig('八戒')
    pig.run()
})()