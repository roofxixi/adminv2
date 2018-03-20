import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';

//页面
import Home from 'Page/home/index.jsx';
import Layout from 'Component/layout/index.jsx';
import Login from 'Page/login/index.jsx';
import UserList from 'Page/user/index.jsx';
import ErrorPage from '@/page/error/index.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    let LayoutRouter = (
      <Layout>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/product' component={Home}></Route>
          <Route path='/product-category' component={Home}></Route>
          <Route exact path='/user/index' component={UserList}></Route>
          <Route exact path='/user/' component={UserList}></Route>
          <Route component={ErrorPage}></Route>
          {/*这里可以把任何匹配不到的都转到根目录上*/}
          {/*<Redirect from='*' to='/'/>*/}
        </Switch>
      </Layout>
    )

    return (
      <div>
        <Router>
          <Switch>
            <Route path='/login' component={Login}></Route>
            {/*除开login的其他网页*/}
            <Route path='/'
                   render={
                     () => (
                       LayoutRouter
                     )
                   }
            />


          </Switch>
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
