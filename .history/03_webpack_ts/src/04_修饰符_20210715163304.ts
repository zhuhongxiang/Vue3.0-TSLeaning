// 修饰符(类中成员的修饰符)：主要是描述类中的成员(属性，构造函数，方法)的可访问性
// 类中的成员都有自己默认的访问修饰符：public
// public修饰符，类中成员默认的修饰符，代表的是公共的，任何位置都可以访问类中的成员
// private修饰符，类中的成员如果用private来修饰，那么外部是无法访问这个成员数据的,当然子类中也是无法访问该成员数据的
// protected修饰符,类中的成员如果用protected来修饰，那么外部是无法访问这个成员数据的,但子类中是可以访问该成员数据的
(() => {
    // 定义一个父类
    class Person {
        // 属性 public修饰了属性成员
        // public name: string
        // 属性 public修饰了属性成员
        // private name: string
        // 属性 protected修饰了属性成员
        protected name: string
        // 定义构造函数
        public constructor(name: string) {
            // 更新属性值
            this.name = name
        }

        // 实例方法
        public eat() {
            console.log('这个骨头真好吃', this.name)
        }
    }
    // 定义一个子类
    class Student extends Person {
        constructor(name: string) {
            super(name)
        }
        play() {
            console.log('我就喜欢玩游戏', this.name)
        }
    }
    // 实例化对象
    const per = new Person('大蛇丸')
    // 类的外部可以访问类中的属性成员
    // console.log(per.name)
    per.eat()
    const stu = new Student('小猪')
    stu.play()
    // console.log(stu.name)
})()