# 模拟数据

快速的启动模拟数据服务器

## 安装

 * 克隆本项目
 * 安装依赖
 * 启动服务

```
git clone git@github.com:eyasliu/mock-server.git
npm i && npm start
```

服务启动后会监听 3000 端口，请按需修改

访问 `http://localhost:3000/post` 即可访问服务

## 使用方法

 `api` 目录是模拟数据定义的地方，文件以es6语法书写，形式大概为

```js
export default {
	'get /post': (param, query) => ({
		"post|1-10": [{
			title: "@title"
		}]
	}),
	'get /post/:id': param => ({
		id: param.id,
		title: "@title",
		content: "@paragraph"
	})
}
```

#### 语法解析

 * `export default {}` 为es6语法暴露出对象给mock server使用
 * 对象的键 `get /post` ,两个占位符以空格隔开
 	 - 第一个是请求方式，可忽略，默认为get
 	 - 第二个是请求路径，可以使用 `:param` 定义路由参数
 * 值是函数，函数有`[params, query]`两个参数，返回值是用 `mock.js` 生成的模拟数据
 	 - params 路由参数
 	 - query url查询参数
 	 - [mock.js 语法详解](https://github.com/nuysoft/Mock/wiki)


