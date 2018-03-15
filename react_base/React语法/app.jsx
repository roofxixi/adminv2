import React from 'react';
import ReactDOM from 'react-dom';

// import 'font-awesome/css/font-awesome.css';
// import './theme.css';
// import './index.scss';
//
//
// ReactDOM.render(
//   <div>
//     <h1>动词</h1>
//     <i className="fa fa-address-book"></i>
//   </div>,
//   document.getElementById('app')
// );

// let name = "roofxixi";
// let flag = false;
// let names = ['roofxixi','snowcake','foursea']
// let jsx = (
//   <div>
//     {/*变量的使用*/}
//     <p>我是{name}</p>
//     {/*这个是条件判断*/}
//     {
//       flag?<p>我是{name}</p>:<p>我不是{name}</p>
//     }
//     {/*数组循环*/}
//     {names.map((name,index)=><p key={index}>hello,{name}</p>
//     )}
//   </div>
// )
// ReactDOM.render(jsx,
//   document.getElementById("app"));

// function Component(){
//   return <h1>我是屋檐下的西西</h1>
// }
// //state和props的用法，全是一个this.state和this.props
// class ES6Component extends React.Component{
//   constructor(name){
//     //把父类的东西先拿过来
//     super();
//     this.state = {
//       name:"roofxixi"
//     };
//   }
//   render(){
//     //可以用setState
//     setTimeout(()=>{
//       this.setState({
//         name:"roofxoxo"
//       })
//     },2000);
//     // return <h1>我是{this.state.name}</h1>
//     return <h1>我是{this.props.name}</h1>
//   }
// }
// ReactDOM.render(
//   <div>
//     <Component />
//     <ES6Component name="test123"/>
//   </div>
//   ,document.getElementById('app')
// )

//=========================================
// class Component extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: 'roofxixi',
//       age: 18,
//     }
//     //因为已经是onClick的回调函数了。
//     // this.add = this.add.bind(this);
//
//
//   }
//
//   add() {
//     this.setState({
//       age: this.state.age + 1
//     })
//   }
//
//   onValue(e) {
//     this.setState({
//       name: e.target.value
//     })
//   }
//
//   render() {
//     return (
//       <div>
//         <h1>我是{this.state.name}</h1>
//         <p>岁数:{this.state.age}</p>
//         {/*这里又作用域的说法*/}
//         {/*<button onClick={this.add}>增加一岁</button>*/}
//         {/*箭头函数是没有作用于的所有可以用*/}
//         <button onClick={(e) => this.add(e)}>增加一岁</button>
//         <input type="text" onChange={(e) => this.onValue(e)}/>
//       </div>
//     )
//   }
// }
//
// class Title extends React.Component{
//   constructor(props){
//     super(props);
//   }
//   render(props){
//     return (
//       {/*<h1>我是另一传值的方式{this.props.title}</h1>*/},
//         //两种方式,容器式的组件
//       <h1>我是另一传值的方式{this.props.children}</h1>
//     )
//   }
// }
//
// class App extends React.Component {
//   render() {
//     return (
//       <div className="">
//         {/*<Title title="App的专用title"></Title>*/}
//         <Title><span>App的专用title</span></Title>
//
//         <h1>我是App</h1>
//         <hr/>
//         <Component/>
//       </div>
//     )
//   }
// }
//
// ReactDOM.render(
//   <App/>,
//   document.getElementById('app')
// )

//============================================
//父组件
// class Father extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       bgColor: "#999"
//     }
//   }
//
//   onBgColorChange(color) {
//     console.log("我是父组件的东西" + color)
//     this.setState({
//       bgColor: "red"
//     })
//     console.log(this.state.bgColor)
//
//   }
//
//   render(props) {
//     return (
//       <div style={{background: this.state.bgColor}}>
//         <h1>父组件传过去的值:{this.state.bgColor}</h1>
//         <Son bgColor={this.state.bgColor} ColorChange={(color) => {
//           this.onBgColorChange(color)
//         }}></Son>
//         <Son1></Son1>
//       </div>
//     )
//   }
// }
//
// //子组件
// class Son extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//
//   add() {
//     this.props.ColorChange("red");
//   }
//
//   render(props) {
//     return (
//       <div>
//         <h1>子组件接收到的值:{this.props.bgColor}</h1>
//         <button onClick={(e) => {
//           this.add(e)
//         }}>点击更换颜色
//         </button>
//       </div>
//     )
//   }
// }
//
// class Son1 extends React.Component {
//
//   constructor() {
//     super();
//   }
//
//   render(props) {
//     return (
//       <div style={{background:"blue"}}>
//         <h1>兄弟组件传值利用父组件传值</h1>
//       </div>
//     )
//   }
// }
//
// ReactDOM.render(
//   <Father></Father>,
//   document.getElementById('app')
// )

//=========================================
//生命周期:挂载阶段(Mounting),运行阶段(Updating),卸载阶段(Unmounting),错误处理(Error Handing)

// class App extends React.Component{
//   constructor(){
//     super();
//     this.state = {
//       data:"旧的值",
//       flag:true
//     }
//     console.log('构造函数');
//   }
//   componentWillMount(){
//     console.log('组件将要加载');
//   }
//   componentDidMount(){
//     console.log('组件已经挂载完成');
//   }
//   handleClick(){
//     if(this.state.flag){
//       this.setState({
//         data:"我改变了值",
//         flag:false
//       })
//     }else{
//       this.setState({
//         data:'我又改变回来了',
//         flag:true
//       })
//     }
//   }
//   componentWillReceiveProps(){
//     //传值的时候触发
//     console.log('传值时候触发')
//   }
//   //子组件是否应该更新
//   shouldComponentUpdate(){
//     console.log('子组件是否应该更新,返回false怎么都不会更新')
//     return true
//   }
//   //组件将要更新
//   componentWillUpdate(){
//     console.log('将要更新');
//   }
//   componentDidUpdate(){
//     console.log('组件更新完成')
//   }
//   render(){
//     console.log('正在渲染')
//     return (
//       <div>
//         <div>{this.state.data}</div>
//         <button onClick={()=>{this.handleClick()}}>更新组件</button>
//       </div>
//     )
//   }
// }
// ReactDOM.render(
//   <App/>,
//   document.getElementById('app')
// )
//

//哈希路由
// import {HashRouter as Router,Route,Link}from 'react-router-dom'
//模拟浏览器路由
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

class A extends React.Component {
  constructor(props) {
    super(props);
  }

  render(props) {
    return (
      <div>
        组件A{this.props.match.path}
        <Switch>
          <Route exact path={`${this.props.match.path}/:id`}
                 render={(props) => {
                   return <div>
                     当前组件是带参数的A,参数是{props.match.params.id}
                   </div>
                 }}/>
          <Route exact path={`${this.props.match.path}`}
                 render={() => {
                   return <div>
                     当前组件不带参数的A
                   </div>
                 }}/>
        </Switch>
      </div>
    )
  }
}

class B extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        这个是B组件
      </div>
    )
  }
}

class Wrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //记住这个用法
    return (
      <div>
        <Link to="/a">组件A</Link><br/>
        <Link to="/a/123">带参数的组件A</Link><br/>
        <Link to="/b">组件B</Link>
        {this.props.children}
      </div>
    )
  }
}

ReactDOM.render(
  <Router>
    <Wrapper>
      <Route path='/a' component={A}></Route>
      <Route path='/b' component={B}></Route>
    </Wrapper>
  </Router>
  , document.getElementById('app')
)





