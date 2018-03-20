//工具箱
class MUtil {
  //改造成promise的链式调用
  request(param) {
    return new Promise((resolve, reject) => {
      $.ajax({
        type: param.type || 'get',
        url: param.url || '',
        dataType: param.dataType || 'json',
        data: param.data || null,
        success: res => {
          //数据请求成功
          if (0 === res.status) {
            typeof  resolve === 'function' && resolve(res.data, res.msg)
          } else if (10 === res.status) {
            //做登陆,没有登陆状态强制登陆
            this.doLogin();
          } else {
            //其他错误情况
            typeof  reject === 'function' && reject(res.msg || res.data)
          }
        },
        error: err => {
          typeof  reject === 'function' && reject(err.statusText)
        },
      })
    });
  }

  //登陆跳转
  doLogin() {
    window.location.href = `/login?redirect=${encodeURIComponent(window.location.pathname)}`
  }

  //取url
  getUrlParam(name) {
    //xxx.com?param=123
    console.log(window.location.search.split('?')[1]);
    let queryString = window.location.search.split('?')[1] || '';
    let reg = new RegExp("(^|&)" + name + '=([^&]*)(&|$)');
    let result = queryString.match(reg);
    return result ? decodeURIComponent(result[2]) : null
  }

  //错误提示
  errorTips(errMsg) {
    alert(errMsg || '好像哪里不对了')
  }

  //设置localStorage
  setStorage(name, value) {
    let dataType = typeof data;
    if (typeof value === 'object') {
      //json
      window.localStorage.setItem(name, JSON.stringify(value))
    } else if (['number', 'string', 'boolean'].indexOf(dataType)) {
      //基础数据类型
      window.localStorage.setItem(name, value)
    } else {
      alert("该类型不能用于本地存储");
    }
  }

  //获取localStorage
  getStorage(name) {
    let data = window.localStorage.getItem(name);
    if (data) {
      return JSON.parse(data);
    } else {
      return '';
    }
  }

  //删除localStorage
  removeStorage(name) {
    window.localStorage.removeItem(name)
    return '删除成功'
  }


}

export default MUtil;