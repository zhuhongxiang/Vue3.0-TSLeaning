"use strict";
// 类 类型：类的类型，可以通过接口来实现
(function () {
    // 定义一个类，该类的类型就是上面的接口(也可以理解为IFly接口约束了Person类)
    var Person = /** @class */ (function () {
        function Person() {
        }
        Person.prototype.fly = function () {
            console.log('我会飞了');
        };
        return Person;
    }());
    // 实例化对象
    var person = new Person;
    person.fly();
    // 定义一个类，该类的类型就是IFly和ISwim(当前的类可以实现多个接口，一个类同时也可以对多个接口进行约束)
    var Person2 = /** @class */ (function () {
        function Person2() {
        }
        Person2.prototype.fly = function () {
            console.log('我飞了2');
        };
        Person2.prototype.swim = function () {
            console.log('我会游泳了2');
        };
        return Person2;
    }());
    // 实例化对象
    var person2 = new Person2;
    person2.fly();
    person2.swim();
    // 定义一个类，直接实现
    var Person3 = /** @class */ (function () {
        function Person3() {
        }
        Person3.prototype.fly = function () {
            console.log('我飞了3');
        };
        Person3.prototype.swim = function () {
            console.log('我会游泳了3');
        };
        return Person3;
    }());
    var person3 = new Person3;
    person3.fly();
    person3.swim();
    // 总结：接口和接口之间叫继承(使用的是extends)，类和接口之间叫实现(implements)
})();
