import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';

//页面
import Home from 'Page/home/index.jsx';
import Layout from 'Component/layout/index.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Layout>
            <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route path='/product' component={Home}></Route>
              <Route path='/product-category' component={Home}></Route>
              {/*这里可以把任何匹配不到的都转到根目录上*/}
              {/*<Redirect from='*' to='/'/>*/}
            </Switch>
          </Layout>
        </Router>
      </div>
    )
  }
}

ReactDOM.render(
  <App></App>
  ,
  document.getElementById('app')
)
