import ReactDOM from "react-dom";
import React from "react";


function Component(){
  return <h1>我是屋檐下的西西</h1>
}
class ES6Component extends React.Component{
  render(){
    return <h1>我是es6</h1>
  }
}
ReactDOM.render(
  <div>
    <Component/>
    <ES6Component/>
  </div>
  ,document.getElementById('app')
)
