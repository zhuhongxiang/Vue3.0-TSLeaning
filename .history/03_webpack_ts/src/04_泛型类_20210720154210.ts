(() => {
    // 定义一个类，类中的属性值的类型是不确定的，方法中的参数及返回值的类型也是不确定
    // 定义一个泛型类
    class GenericNumber<T>{
        defaultValue: T
        add(x: T, y: T)=> T
    }

    // 在实例化类的对象的时候，再确定泛型的类型
    const g1: GenericNumber<number> = new GenericNumber<number>()
})()