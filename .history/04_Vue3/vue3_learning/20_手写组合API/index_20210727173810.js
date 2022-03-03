// shallowReactive(浅的劫持、监视、响应式数据) 与 reactive(深的)

// 定义一个reactiveHandler处理对象
const reactiveHandler ={
    // 获取属性值
    get(target,prop){
        const result =  Reflect.get(target,prop)
        console.log('拦截了读取数据',prop,result)
        return result
    },
    // 修改属性或添加属性
    set(target,prop,value){
        const result =  Reflect.set(target,prop,value)
        console.log('拦截了修改或添加数据',prop,value)
        return result
    },
    // 删除某个属性
    deleteProperty(target,prop){
        const result = Reflect.deleteProperty(target,prop)
        console.log('拦截了删除数据',prop)
        return result
    }
}
// 定义一个shallowReactive函数，传入一个目标对象
function shallowReactive(target){
    // 判断当前的目标对象是不是object类型(对象/数组)
    if(target&&typeof target === 'object'){
        return new Proxy(target,reactiveHandler)
    }

    // 如果传入的数据是基本类型的数据，那么就直接返回
    return target
}
