>  https://7km.top/algorithm/bitfield/
## React 中的位运算

### js中的位运算
操作数被转化为32位整数，并由一系列位表示。超过 32 位的数字将丢弃其最高有效位（见mdn）。其实就是在js中的位运算会把“整数”转为32位2进制数，其中最左一位表示符号为，为0表示该数为正数，为1表示该数为负数。(对于“浮点数”的2进制暂不做讨论)

#### 按位与(&)
|a|b|a AND b|
|---|---|---|
|0|0|0|
|0|1|0|
|1|0|0|
|1|1|1|

#### 按位或 (|)
|a|b|a OR b|
|---|---|---|
|0|0|0|
|0|1|1|
|1|0|1|
|1|1|1|

#### 按位非 (~)
|a|NOT a|
|---|---|
|0|1|
|1|0|

#### 取补码(-)
正数的补码就是其原码；负数的反码+1就是补码 ？

#### 组合操作
- 属性增加 ｜
```
ABC = A | B | C
```
- 属性删除
```
AB = ABC & ~C
```
- 属性比较
```
AB 当中包含 B: AB & B === B
AB 当中不包含 C: AB & C === 0
A 和 B 相等: A === B
```

### 确认执行上下文
```
export const NoContext = /*             */ 0b0000000;

const BatchedContext = /*               */ 0b0000001;

const EventContext = /*                 */ 0b0000010;

const DiscreteEventContext = /*         */ 0b0000100;

const LegacyUnbatchedContext = /*       */ 0b0001000;

const RenderContext = /*                */ 0b0010000;

const CommitContext = /*                */ 0b0100000;

export const RetryAfterError = /*       */ 0b1000000;
```
关于上下文的操作：
```
// 当前所处上下文 
let curContext = 0; 

// 进入A上下文 
curContext |= A;

// 是否处在A上下文中 true 
(curContext & A) !== NoContext 

// 是否处在B上下文中 false 
(curContext & B) !== NoContext

// 从当前上下文中移除上下文A 
curContext &= ~A; 

// 是否处在A上下文中 false 
(curContext & A) !== NoContext

```
### 获取lane最高/最低优先级
```
//类型定义

export opaque type Lanes = number;

export opaque type Lane = number;

// 变量定义

export const NoLanes: Lanes = /*                        */ 0b0000000000000000000000000000000;

export const NoLane: Lane = /*                          */ 0b0000000000000000000000000000000;

export const SyncLane: Lane = /*                        */ 0b0000000000000000000000000000001;

export const SyncBatchedLane: Lane = /*                 */ 0b0000000000000000000000000000010;

export const InputDiscreteHydrationLane: Lane = /*      */ 0b0000000000000000000000000000100;

const InputDiscreteLanes: Lanes = /*                    */ 0b0000000000000000000000000011000;

const InputContinuousHydrationLane: Lane = /*           */ 0b0000000000000000000000000100000;

const InputContinuousLanes: Lanes = /*                  */ 0b0000000000000000000000011000000;

// ...

// ...

const NonIdleLanes = /*                                 */ 0b0000111111111111111111111111111;

export const IdleHydrationLane: Lane = /*               */ 0b0001000000000000000000000000000;

const IdleLanes: Lanes = /*                             */ 0b0110000000000000000000000000000;

export const OffscreenLane: Lane = /*                   */ 0b1000000000000000000000000000000;
```
可以利用一些位运算计算出优先级
`getHighestPriorityLane`:
```
// -lanes = ~lanes+1
// lanes  = 0110
// ~lanes = 1001
// -lanes = 1010
// lanes & -lanes = 0010
// (lanes & -lanes & SyncBatchedLane) !== NoLanes 可知最高lanes 为 SyncBatchedLane

function getHighestPriorityLane(lanes: Lanes) {

  return lanes & -lanes;

}
```
`getLowestPriorityLane`:
```
function getLowestPriorityLane(lanes: Lanes): Lane {

  // This finds the most significant non-zero bit.
  
  const index = 31 - clz32(lanes);
  
  return index < 0 ? NoLanes : 1 << index;

}
```
`getHighestPriorityLanes`:
```
function getHighestPriorityLanes(lanes: Lanes | Lane): Lanes {

  // 判断 lanes中是否包含 SyncLane
  
  if ((SyncLane & lanes) !== NoLanes) {
  
	return_highestLanePriority = SyncLanePriority;
    
    return SyncLane;
  
  }
  
  // 判断 lanes中是否包含 SyncBatchedLane
  if ((SyncBatchedLane & lanes) !== NoLanes) {
  
    return_highestLanePriority = SyncBatchedLanePriority;
    
    return SyncBatchedLane;
    
  }

  // ...
  
  // ... 省略其他代码
  
  return lanes;
}
```

