// 剩余参数（rest参数）
(() => {
    // ...args:string[----->剩余的参数，放在了一个字符串的数组args中
    function showMsg(str: string, ...args: string[]) {
        console.log(str)
        console.log(args)
    }
    showMsg('a', 'b', 'c', 'd', 'e')
})()