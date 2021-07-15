// 为了使用接口表示函数类型，我们需要给接口定义一个调用签名。它就像是一个只有参数列表和返回值类型的函数定义。
// 参数列表里的每个参数都需要名字和类型。
(() => {
    // 函数类型：通过接口的方式作为函数的类型来使用
    // 定义一个接口，来作为函数类型使用
    interface ISearchFunc {
        // 定义一个调用类型
        (source: string, subString: string): boolean
    }

    //定义一个函数，该类型就是上面定义的接口
    const searchString = function (source: string, subString: string): boolean {
        return source.search(subString) > -1
    }

    // 调用函数 
    console.log(searchString('我又变胖了', '胖'))
})()