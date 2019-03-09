### action和reducer

1. 创建一个action

   ~~~JavaScript
   // 创建action 固定格式
       const action = {
         type: 'change_input_value', // 描述要做怎样的事情
         value: e.target.value     // 吧value传过去
       };
       // 调用store中的dispatch()方法把action传过去
       store.dispatch(action);
   ~~~

2. reducer中接受action，拷贝一份newState， 并且改变newState中的数据，之后返回给store

   **注意reducer可接受state， 但是不可以修改state**

   ~~~JavaScript
   //state是上一次仓库里存储的数据， action 是用户穿过李的那句话
   // reducer可以接受state， 但是不可以修改state
   export default (state = defaultState, action) => {   // action 行动,作用
     console.log(state, action);
     //
     if (action.type === 'change_input_value') {
       // 拷贝一份state中的数据
       const newState = JSON.parse(JSON.stringify(state));
       // 改变 newState 中的inputValue中的值
       newState.inputValue = action.value;
       // 返回newState 固定写法  返回给了store
       return newState
     }
     return state
   }
   ~~~

3. 组件订阅store， 并且通过store.subscribe()方法来更新store中的数据；subscribe方法接受一个参数是一个**函数**， 只要store中的数据发生改变**函数**就会自动执行

   ~~~JavaScript
   	this.handleStoreChange = this.handleStoreChange.bind(this);
       // 组件订阅store  subscribe中有一个函数， 只要store中的数据发生改变， 函数就会被自动执行
   	store.subscribe(this.handleStoreChange);
   	// 自动执行的方法
   	handleStoreChange() {
         //组件感知到store中的数据发生变换的时候 重新获取store中的数据
         this.setState(store.getState())
       }
   ~~~

   

