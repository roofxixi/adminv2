import React from 'react';
import {Link} from 'react-router-dom';
import MUtil from '@/util/mm.jsx';
import User from '@/service/user-service.jsx';

const _mm = new MUtil();
const _user = new User();

class NavTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: _mm.getStorage('userInfo').username|| ''
    }

  }

  //退出登陆
  onLogout() {
    _user.logout().then(res => {
      _mm.removeStorage('userInfo');
      // this.props.history.push('/login');
    }, err => {
      _mm.errorTips(errMsg);
    })
  }

  goLogin(e) {
    window.location.href = '/login';
  }

  render() {
    return (
      <div className="navbar navbar-default top-navbar" role="navigation">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/"><b>roofxixi</b></Link>
        </div>
        <ul className="nav navbar-top-links navbar-right">

          <li className="dropdown">
            <Link className="dropdown-toggle" to="#">
              <i className="fa fa-user fa-fw"></i>
              {this.state.username
                ? <span>欢迎,{_mm.getStorage('userInfo').username}</span>
                : <span>欢迎,请<span style={{color: 'blue', cursor: 'pointer'}}
                                  onClick={e => this.goLogin(e)}>登录</span></span>
              }
              <i className="fa fa-caret-down"></i>
            </Link>
            <ul className="dropdown-menu dropdown-user">
              <li><Link to='/login'>
                <div onClick={
                  () => {
                    this.onLogout()
                  }}><i className="fa fa-sign-out fa-fw"></i> 退出登陆
                </div>
              </Link>
              </li>
            </ul>

          </li>

        </ul>
      </div>
    )
  }
}

export default NavTop;
