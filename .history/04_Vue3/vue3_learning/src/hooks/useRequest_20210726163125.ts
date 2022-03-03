// 引入axios
import axios from 'axios'
import { ref } from 'vue'
// 发送ajax的请求
export default function (url: string) {
    // 加载的状态
    const loading = ref(true)
    // 请求成功的数据
    const data = ref(null) // 坑
    // 错误信息
    const errorMsg = ref('')
    // 发送请求
    axios.get(url).then(response => {
        //改变加载状态
        loading.value = false
        data.value = response.data
    }).catch(error => {
        //改变加载状态
        loading.value = false
        errorMsg.value = error.message || '未知错误'

    })

    return {
        loading,
        data,
        errorMsg
    }
}