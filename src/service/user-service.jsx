import MUtil from '@/util/mm.jsx'

const _mm = new MUtil();


class User {
  login(loginInfo) {
    return _mm.request({
      url: '/manage/user/login.do',
      type: 'post',
      data: loginInfo,
    })
  }

  //检查登陆接口数据
  checkLoginInfo(loginInfo) {
    let username = $.trim(loginInfo.username);
    let password = $.trim(loginInfo.password);
    if (typeof username !== 'string' || username.length === 0) {
      return {
        status: false,
        msg: '用户名不能为空'
      }
    }
    if (typeof password !== 'string' || password.length === 0) {
      return {
        status: false,
        msg: '密码不为空'
      }
    }
    return {
      status: true,
      msg: '登陆成功'
    }
  }

//获取用户数据
  getUserList(pageNum){
    return _mm.request({
        type:'post',
        url:'/manage/user/list.do',
        data :{
          pageNum:pageNum
        }
    })
  }


  //退出登陆
  logout(){
    return _mm.request({
      url: '/user/logout.do',
      type: 'post',
    })
  }

}

export default User
