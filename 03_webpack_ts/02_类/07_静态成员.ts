// 静态成员：在类中通过static修饰的属性或者方法，那么就是静态的属性或静态的方法，称之为静态成员
// 静态成员在使用的时候是通过类名.的这种语法来调用的
(() => {
    class Person {
        // 类中有一个内置的name属性
        // 静态属性
        static name1: string = '莉莉'
        constructor() {
            // // 此时this是实例对象，name是静态属性，不能通过实例对象直接调用静态属性来使用
            // this.name = name
        }
        // 静态方法
        static sayHi() {
            console.log('撒浪嘿呦')
        }
    }
    const person: Person = new Person()
    // console.log(person.name)
    // person.sayHi()
    // 通过类名.静态属性的方式来设置该成员数据
    console.log(Person.name1)
    Person.name1 = '属性'
    console.log(Person.name1)
    // 通过类名.静态方法的方式来调用内部的静态方法
    Person.sayHi()
})()