// 静态成员：在类中通过static修饰的属性或者方法，那么就是静态的属性或静态的方法，称之为静态成员
// 静态成员在使用的时候是通过类名.的这种语法来调用的
(() => {
    class Person {
        name: string
        constructor(name: string) {
            this.name = name
        }
        sayHi() {
            console.log('萨瓦迪卡')
        }
    }
})()