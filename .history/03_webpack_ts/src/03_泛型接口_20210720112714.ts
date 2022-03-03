// 泛型接口：在定义接口时, 为接口中的属性或方法定义泛型类型
// 在使用接口时, 再指定具体的泛型类型
(() => {

    // 需求：定义一个类，用来存储用户的相关信息(id,name,age)
    // 通过一个类的实例对象，调用相关方法可以添加多个用户信息对象，通过getUserId可以根据id获取某个指定用户对象

    // 定义一个泛型接口
    interface IBaseCRUD<T> {
        data: Array<T>
        add: (t: T) => T
        getUserId: (id: number) => T
    }

    // 定义一个用户信息的内
    class User {
        id?: number
        name: string
        age: number
    }
    // 定义一个类，可以针对用户的信息对象进行增加和查询的操作
    // CRUD---->Create,Read,Update,Delete
    class UserCRUD implements IBaseCRUD<User>{
        // 用来保存多个User类型的用户信息对象
        data: Array<User> = []
        // 方法用来存储用户信息对象的
        add(user: User): User {
            //产生id
            user.id = Date.now() + Math.random()
            // 把用户信息对象添加到data中
            this.data.push(user)
            return user
        }
        // 方法根据id查询指定用户信息对象
        getUserId(id: number): User {
            return this.data.find(user => user.id === id)
        }
    }
})()