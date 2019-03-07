1. state 数据

2. JSX 模板

3. 生成虚拟DOM (虚拟DOM就是一个JS对象， 它用来描述真实的DOM）（损耗了性能）

   ['div', {id: 'abc'}, ['span', {}, 'hello world']]

4. 数据 + 模板结合， 生成真实的DOM， 来显示

   <div id='abc'><span>hello world</span></div>

5. state 发生变化

6. 数据 + 模板 生成新的虚拟DOM（极大的提升了性能）

   ~~~javascript
   ['div', {id: 'abc'}, ['span', {}, 'bye bye']]
   ~~~

   

7. 比较(diff算法)原始虚拟DOM和新的虚拟DOM的区别， 找到区别是span中的内容发生了变化（极大的提升了性能）

8. 直接操作DOM， 改变span中的内容

   ~~~javascript
   React.createElement('div', {} ,React.createElement('span', {} ,'item'))
   ~~~

### 优点

1. 性能提升了
2. 它使得夸端应用得以实现。React Native

**key值的作用： 在diff比对的时候， 元素的key要是唯一的，可以提高性能， 所以不建议用index作为key值**

