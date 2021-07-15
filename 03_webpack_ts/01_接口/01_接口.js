"use strict";
// 接口是对象的状态(属性)和行为(方法)的抽象(描述)
// 接口:是一种规范，能力，约束
// 接口类型的对象
//     多了或者少了属性是不允许的
//     可选属性: ?
//    只读属性 : readonly
(function () {
    // 需求: 创建人的对象, 需要对人的属性进行一定的约束
    // 定义一个对象，该对象的类型就是我定义的接口IPerson
    var person = {
        id: 1,
        name: '小甜甜',
        age: 18,
        // sex这个属性没有是可以的
        //sex: '女'
    };
    console.log(person);
    // id属性此时是可读可写
    // person.id = 100
    person.sex = '女';
    console.log(person);
})();
