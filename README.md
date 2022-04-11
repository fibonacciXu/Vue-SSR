# vue-ssr

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 启动一个服务器，做以下几件事

* 从dist/server/js/app.xx.js中获取createApp方法
* 使用createApp创建vue应用
* 使用renderToString方法将vue应用转换成字符串
* 以client/index.html为模板，将字符串插入到指定的vue容器中。
* 监听一个端口，返回插入了vue应用的html
* 代理静态资源

[搭建地址](https://mp.weixin.qq.com/s?__biz=Mzg4NTE3NTY4Mg==&mid=2247485472&idx=1&sn=2f19b803a927e96315e34e17a1e161fa&chksm=cfadaccdf8da25db05029f555f2ac3df74414cf0005d465e55df235f21574d9acd4e65f3e288&scene=178&cur_album_id=2331042167361830914#rd)
