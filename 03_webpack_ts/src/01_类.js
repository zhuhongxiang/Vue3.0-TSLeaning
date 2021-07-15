"use strict";
// 类可以理解为模板，通过类来实例化对象
// 面向对象的编程思想
(function () {
    // ts中类的定义和使用
    var Person = /** @class */ (function () {
        // 构造方法，初始化属性值
        function Person(name, age, gender) {
            if (name === void 0) { name = '莉莉'; }
            if (age === void 0) { age = 18; }
            if (gender === void 0) { gender = '女'; }
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
        // 定义实例方法
        Person.prototype.sayHi = function (str) {
            console.log("\u4F60\u597D\uFF0C\u6211\u53EB" + this.name + ",\u4ECA\u5E74" + this.age + ",\u662F\u4E2A" + this.gender + "\u5B69\u5B50,", str);
        };
        return Person;
    }());
    // ts中使用类，实例化对象，可以直接进行初始化条件
    var person = new Person('术洪祥', 18, '男');
    person.sayHi('我喜欢你');
})();
