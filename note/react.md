### 无状态组件（负责渲染， 不做任何逻辑处理）

如果一个组件中只有render函数， 可以使用无状态组件。无状态组件可以提高性能， 因为无状态组件中没有生命周期函数

~~~javascript
const TodoListUI = (props) => {
    return (
    	<div>.......</div>
    )
}
~~~

