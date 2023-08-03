## 容器
首先得有一个容器，设置为`display:flex`。
```css
.box {
		display: flex;
  	display: inline-flex;		/* inline元素 */
  	display: -webkit-flex; /* Safari */
  
}
```

## 容器项目
在`flex`容器中的元素为容器项目，这里用`item`表示。

## 容器属性

- flex-direction
- flex-wrap
- flex-flow
- justify-content
- align-item
- align-center

### flex-direction
表示主轴的方向

- row（默认值）：主轴为水平方向，起点在左端。
- row-reverse：主轴为水平方向，起点在右端。
- column：主轴为垂直方向，起点在上沿。
- column-reverse：主轴为垂直方向，起点在下沿。

### flex-wrap
表示轴线换行设置

- nowrap（默认值）：不换行
- wrap：在第一行下方
- wrap-reverse：在第一行上方

[点击查看【codepen】](https://codepen.io/lwrench/embed/xxLqovv)

### flex-flow
flex-direction和flex-wrap的简写

### justify-content
主轴上的对齐方式

- flex-start（默认值）：左对齐
- flex-end：右对齐
- center：居中
- space-between：两端对齐，项目之间的间隔都相等
- space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍

### align-items
交叉轴上的对齐方式

- flex-start：交叉轴起点对齐
- flex-end：交叉轴终点对齐
- center：交叉轴中点对齐
- baseline：项目的第一行文字的基线对齐
- stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度

### align-content
多根轴线的对齐方式

- flex-start
- flex-end
- center
- space-between
- space-around
- stretch（默认值）：占满交叉轴

## 项目属性

- order
- flex-grow
- flex-shrink
- flex-basis
- flex
- align-self
### order
定义项目排列顺序，数值越小，排列越靠前

### flex-grow
定义项目的放大比例，默认为`0`，即如果存在剩余空间，也不放大

### flex-shrink
定义了项目的缩小比例，默认为`1`，即如果空间不足，该项目将缩小

### flex-basis
定义了在分配多余空间之前，项目占据的主轴空间，默认为auto，即项目的本来大小，可以像设定width和height一样设定值，在计算的时候将占据固定大小

### flex
flew-grow、flex-shrink和flex-basis简写，默认为 `0,1,auto`，有两个快捷值`auto`（1,1,auto）和`none`（0,0,auto）

### align-self
允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性
