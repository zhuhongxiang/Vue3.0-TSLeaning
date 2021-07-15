// 类可以理解为模板，通过类来实例化对象
// 面向对象的编程思想
(() => {
    // ts中类的定义和使用
    class Person {
        // 定义属性
        name: string
        age: number
        gender: string

        // 构造方法，初始化属性值
        constructor(name: string = '莉莉', age: number = 18, gender: string = '女') {
            this.name = name
            this.age = age
            this.gender = gender
        }

        // 定义实例方法
        sayHi(str: string) {
            console.log('你好，我叫${this.name},今年${this.age},是个${this.gender}孩子,', str)
        }
    }

    // ts中使用类，实例化对象，可以直接进行初始化条件
    const person = new Person
    person.sayHi('我喜欢你')
})()