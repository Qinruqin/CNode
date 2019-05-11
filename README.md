# cnode

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 遇到的问题

1. 安装axios : npm install axios并引用。
2. 在main.js中设置全局的根路径：Vue.prototype.$http = axios。
3. 在main.js中定义时间过滤器，可全局使用。
4. 当多个不同的vue页面的内容在同一页面中显示，可通过一个容器包裹，并写样式。
5. 直接v-html时会出现代码样式错乱，需引用markdown-github.css。
