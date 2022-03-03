// 泛型：在定义函数、接口、类的时候不能预先确定要使用的数据的类型，而是在使用函数、接口、类的时候才能确定数据的类型
(() => {
    // 需求：定义一个函数，传入两个参数，第一个参数是数据，第二个参数是数量，函数的作用：根据数量产生对应个数的数据，存放在一个数组中
    // 定义一个函数
    function getArr(value: number, count: number): number[] {
        // 根据数据和数量产生一个数组
        const arr: number[] = []
        for (let i = 0; i < count; i++) {
            arr.push(value)
        }
        return arr
    }
    const arr1 = getArr(100.123, 3)
    console.log(arr1)
})()
