// readonly修饰符：首先是一个关键字，对类中的属性成员进行修饰，修饰后该属性成员就不能在外部被随意修改了
(() => {
    //定义一个类
    class Person {
        // 属性
        name: string
        constructor(name: string) {
            this.name = name
        }
        sayHi() {
            console.log('hello', this.name)
        }
    }
    // 实例化对象
    const person: Person = new Person('莉莉')

    console.log(person)
    console.log(person.name)
    person.name = '白月光'
    console.log(person.name)

})()