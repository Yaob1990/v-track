# v-track
一个简单易用的埋点工具(兼容 vue2 vue3)

## 安装
```shell
npm install @aocoding/v-track
```

## 使用
main.js 引入插件
```shell
// main.js
import track from '@aocoding/v-track'
app.use(track,(value)=>{
  // 伪代码
  sendAjax(value)
})
```
模板中使用指令
```html
<div v-track="123"></div>
<div v-track="{a:1,b:2}"></div>
```


