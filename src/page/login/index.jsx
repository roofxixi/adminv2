import React from 'react';

import './index.scss';
import User from '@/service/user-service.jsx';
import MUtil from '@/util/mm.jsx';

const _user = new User();
const _mm = new MUtil();
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      redirect: _mm.getUrlParam('redirect')||'/',
    }
  }

  componentWillMount(){
    document.title = '登陆 - ROOFXIXI'
  }

  //这个是es6里面的新赋值写法
  onValueChange(e) {
    let inputValue = e.target.value;
    let inputName = e.target.name;
    this.setState({
      [inputName]: inputValue
    })
  }

  //提交
  onSubmit(e) {
    let check = _user.checkLoginInfo(this.state);
    //表单验证
    if(check.status){
      //这里是一个promise对象
      _user.login({
        username: this.state.username,
        password: this.state.password
      }).then((res) => {
        //加载网页
        this.props.history.push(this.state.redirect);
        console.log('执行')
        _mm.setStorage('userInfo',res);
        console.log('执行成功')
      }, (errMsg) => {
        _mm.errorTips(errMsg)
      })
    }else{
      _mm.errorTips(check.msg);
    }
  }
  //键盘提交
  onInputKeyUp(e){
    if(e.keyCode ===13){
      this.onSubmit(e);
    }
  }

  render() {
    return (
      <div className="col-md-4 col-md-offset-4">
        <div className="login-panel panel panel-default">
          <div className="panel-heading">欢迎登陆ROOFXIXI管理系统</div>
          <div className="panel-body">
            <div className="form-group">
              <input onKeyDown={e => this.onInputKeyUp(e)} name="username" onChange={e => this.onValueChange(e)} type="email" className="form-control"
                     placeholder="请输入用户名"/>
            </div>
            <div className="form-group">
              <input name="password" onChange={e => this.onValueChange(e)} type="password" className="form-control"
                     placeholder="请输入密码"/>
            </div>
            <button onKeyDown={e => this.onInputKeyUp(e)} onClick={e => {
              this.onSubmit(e)
            }} type="button" className="btn btn-primary btn-lg btn-block">登陆
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
