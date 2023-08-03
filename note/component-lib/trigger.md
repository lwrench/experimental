[React + TypeScript 从零开发Popup组件并发布到 npm - 掘金](https://juejin.cn/post/6844904162497757192)

#### 偏移尺寸
![image.png](https://cdn.nlark.com/yuque/0/2023/png/1334308/1683626997065-8e1860bd-45e1-4c8f-b968-b188060d6490.png#averageHue=%23e8e8e8&clientId=uc4d8be43-f25e-4&from=paste&id=ufbb76ab5&originHeight=372&originWidth=613&originalType=binary&ratio=2&rotation=0&showTitle=false&size=29088&status=done&style=none&taskId=uf3d5bb58-c8d9-475f-bb13-d6740e9170a&title=)
```javascript
function getElementLeft (ele) {
    let actualLeft = ele.offsetLeft;
    let current = ele.offsetParent;

    while (current !== null) {
        actualLeft += current.offsetLeft;
        current = current.offsetParent;
    }
    return actualLeft;
}

function getElementTop (ele) {
	let actualTop = ele.offsetTop;
  let current = ele.offsetParent;

  while (current !== null) {
    current = current.offsetParent;
  }
  return actualTop;
}
```
#### 客户端尺寸
![image.png](https://cdn.nlark.com/yuque/0/2023/png/1334308/1683628501694-b72c664a-eac1-4f12-aab6-c671d096de49.png#averageHue=%23eaeaea&clientId=uc4d8be43-f25e-4&from=paste&id=u806ecf5c&originHeight=377&originWidth=624&originalType=binary&ratio=2&rotation=0&showTitle=false&size=24258&status=done&style=none&taskId=u6d159fab-aa6a-4b65-8aba-3b762d02a1c&title=)
#### 滚动尺寸
![image.png](https://cdn.nlark.com/yuque/0/2023/png/1334308/1683628869521-cc465447-338a-42b8-870c-16531d3e86d7.png#averageHue=%23d1d1d1&clientId=uc4d8be43-f25e-4&from=paste&id=u9704578b&originHeight=412&originWidth=702&originalType=binary&ratio=2&rotation=0&showTitle=false&size=31038&status=done&style=none&taskId=u0cb38603-da42-419f-af17-7fe08978346&title=)

#### getBoundingClientRect()

