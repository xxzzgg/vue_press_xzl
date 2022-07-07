# 性能体验规范 (TODO: 建设中...)
## Specifications
![performance](/images/performance.png)
### FP
FP (First Paint) 为首次渲染的时间点，从用户开始访问 Web 页面的时间点到 FP 的时间点这段时间可以被视为 白屏时间，也就是说在用户访问 Web 网页的过程中，FP 时间点之前，用户看到的都是没有任何内容的白色屏幕，用户在这个阶段感知不到任何有效的工作在进行。

### 如何优化FP - first paint
优化 FP 指标，关键是缩短资源的下载时间，以及减少阻塞浏览器渲染 DOM 的任务的执行时间。常见方法有：
1. 减少外链 CSS 资源的数量 。
2. 减少同步加载的外链 JS 资源数量。
3. 合理使用 HTTP 缓存。
4. 压缩静态资源。
5. 优化页面加载过程中的 JS 执行时间。
### FCP - first contentful paint
FCP 指标通常会反映页面的首次出现内容的时间

### performance.getEntriesByType('paint')
![fp_fcp](/images/fp_fcp.png)

### FMP（First Meaningful Paint）
即首次绘制有意义内容的时间，
### 可交互时间 TTI

### 耗时较长的任务 Long Task

### MutationObserver
[MutationObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver)
