### Redux 设计和使用的三项原则

1. `store`是唯一的

2. 只有`store`能够改变自己的内容

3. `Reducer`必须是纯函数

   ***纯函数指的是， 给定固定的输入，就一定会有固定的输出，而且不会有任何副作用***

### Redux的核心API

~~~javascript
createStore	// 可以创建一个store
store.dispatch	// 派发action	这个action会传递给store
store.getStete	// 获取store中所有的数据内容
store.subscribe	// 订阅store的改变， 只要store改变函数就会自动执行
~~~

