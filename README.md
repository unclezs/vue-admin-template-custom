# vue-admin-template-custom

> 基础[vue-admin-template](https://github.com/PanJiaChen/vue-admin-template/blob/master/README-zh.md)二改根据自己需求二改而来

## 变化
1.把快捷导航(标签栏导航)移植进来了

2.把前端控制页面权限动态显示菜单，改成后端传入路由表来动态生成菜单

3.移除部分我觉得没有用得功能，比如设置和Log显示

4.其他微修改看源码。。

## 主要用途

省去了每次开发做登录，和权限控制，拿来直接上手CRUD，不过后端的权限控制还是不能少的

## 后端路由表格式

```json
{
	"message": "success",
	"success": true,
	"code": 20000,
	"data": {
		"name": "Uncle",
		"avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
		"roles": ["admin"],
		"routers": [{
			"name": "Test_It",
			"path": "/test",
			"component": "Layout",
			"children": [{
				"name": "Test_It_c",
				"path": "index",
				"component": "Test",
				"meta": {
					"icon": "example",
					"title": "后台"
				},
			}]
		}]
	}
}
```

## 预览
![preview](https://github.com/unclezs/vue-admin-template-custom/raw/master/src/assets/preview.png)