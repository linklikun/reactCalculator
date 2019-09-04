// console.log('123');
import React from 'react'
import ReactDOM from 'react-dom'

// const h1tr= React.createElement('h1',{id:'myh1',title:'this is h1h1'},'this is h1!')
// const divtr=React.createElement('div',null,'this is div', h1tr)
// const h1tr=<h1>123</h1>
// const element=<div id="div1" title="haha">this is div!{h1tr}</div>
// 元素渲染


// const arr=['xiaomi', 'xiaoyu','xiaolan','xiaolji']
// const strarr=[]
// arr.forEach((item,index,value)=>{
//     const temp=<h5>{item}</h5>
//     // console.log(index);
//     value[index]=item+'~~~'
   
    
//     strarr.push(temp)
// })

// var array = [10,34,57,43,76];  
// var res = array.map(function (item,index,input) {  
//        return item*10;   
// })  
// console.log(res);
// console.log(array);
// ReactDOM.render(strarr,document.getElementById('app'))


//组件与props
// 1.函数组件与class组件
// 1.1 函数组件
// function Welcome(props) {
//     return <h1>hello, {props.name}</h1>
// }
// const element = <Welcome name="Likun"></Welcome>
// ReactDOM.render(element,document.getElementById('app'))

// 1.2 es6 class组件
// class Welcome extends React.Component{
//     render(){
//         return <h1>hello {this.props.name}</h1>
//     }
// }
// const element = <Welcome name="Lik"></Welcome>
// ReactDOM.render(element,document.getElementById('app'))
// 1.3 组合组件
// function Welcome(props) {
//     return <h1>hello {props.name}</h1>
// }
// function App(props) {
//     return (
//     <div>
//         {props.id}
//         <Welcome name="Sara"></Welcome>
//         <Welcome name="Aline"></Welcome>
//         <Welcome name="Wliilem"></Welcome>
//         <Welcome name="Tigier"></Welcome>
//     </div>)
// }
// const element = <App id="1"></App>
// ReactDOM.render(element,document.getElementById("app"))
// 1.4 提取组件
// function formatDate(date) {
//     return date.toLocaleDateString();
//   }
  
//   function Comment(props) {
//     return (
//       <div className="Comment">
//         <div className="UserInfo">
//           <img
//             className="Avatar"
//             // src={props.author.avatarUrl}
//             // alt={props.author.name}
//           />
//           <div className="UserInfo-name">
//             {props.author.name}
//           </div>
//         </div>
//         <div className="Comment-text">{props.text}</div>
//         <div className="Comment-date">
//           {console.log(props.date)}
          
//         </div>
//       </div>
//     );
//   }
  
//   const comment = {
//     date: new Date(),
//     text: 'I hope you enjoy learning React!',
//     author: {
//       name: 'Hello Kitty',
//     //   avatarUrl: 'https://placekitten.com/g/64/64',
//     },
//   };
//   ReactDOM.render(
//     <Comment
//       date={comment.date}
//       text={comment.text}
//       author={comment.author}
//     />,
//     document.getElementById('app')
//   );

// 2 jsx 语法
const a = 2
const boo = true;
ReactDOM.render(
    <div>
        {a + 2}
        {boo ? 'true' : 'false'}

    </div>
    ,
    document.getElementById('app')
)
