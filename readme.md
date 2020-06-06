### freedom-middleware-serve中间件

# 概述

本地开启服务预览本地项目，一般用于测试本地执行webpack的build操作以后，用于校验构建以后的项目是否能同线上执行环境一样，正常访问

### 参数说明

```json
{
  "port":"本地环境dev启动的端口后",
  "build":"监听本地项目目录，此目录为项目根目录下的文件夹名称，比如：build",
  "proxy":{//反向代理设置
    "context":["/api", "/auth","/award"],//要拦截的url
    "options":{//设置代理端口
      "target": 'http://localhost:8080'	
    }
  }
}
```

### 如何使用

#### 安装依赖

```
cnpm install @51npm/freedom-middleware-serve 
```

#### js中调用

```js
var serveFn = require("@51npm/freedom-middleware-serve");
(async function () {
  var params = {
    port: 9090,
    build: `build`,
    proxy: {
      context: ["/api", "/auth","/award"],
      options: {
        target: 'http://localhost:8080'
      }
    }
  };
  await serveFn(params);
})();
```



