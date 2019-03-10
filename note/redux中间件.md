### Redux-thunk

1. 安装

   ~~~bash
   yarn add redux-thunk
   ~~~

2. 配置

   ~~~javascript
   import { createStore, applyMiddleware, compose } from 'redux';
   import thunk from 'redux-thunk';
   import reducer from './reducer';
   
   const composeEnhancers =
     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
   
   const enhancer = composeEnhancers(
     applyMiddleware(thunk),
     // other store enhancers if any
   );
   
   const store = createStore(reducer, enhancer);
     //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
   export default store;
   ~~~

3. 之前创建action只能是一个对象，当使用了redux-thunk之后可以返回一个函数。当dispatch发现action是一个函数， 就会自动执行这个函数

   ~~~javascript
   export const getTodoList = () => {
     // 在创建action的时候会自动接收到一个dispatch ，可以直接使用
     return (dispatch) => {
       axios.get('http://localhost:8080/').then((res) => {
         const data = res.data;
         const action = initListAction(data);
         dispatch(action);
       })
     }
   };
   ~~~

   

