### 一个event loop的流程
- 从task队列取一个任务执行（setTimtout、setInteval回调，postMessage，script...）
- 遍历microtask（Promise，MutationObserver，queueMicroTask...）队列执行，如果产生新的microtask，也会在这一轮eventloop执行
- 浏览器判断是否需要更新渲染，只有需要重新渲染才会触发rAF
  - 保持页面帧率稳定60fps或者30fps，而不是波动
  - 重新渲染不回带来页面的改变
  - 有时候如果task
- 如果判定需要渲染，则会依次执行onResize回调、onScoll回调、rAF回调、IntersectionObserver回调、
- 重新渲染
- 如果有时间空闲或者timeout，调用requestIdleCallback回调