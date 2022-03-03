// 泛型接口：在定义接口时, 为接口中的属性或方法定义泛型类型
// 在使用接口时, 再指定具体的泛型类型
(() => {

    // 需求：定义一个类，用来存储用户的相关信息(id,name,age)


    // 定义一个用户信息的内
    class User {
        id?: number
        name: string
        age: number
    }
})()