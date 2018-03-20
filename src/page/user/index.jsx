import React from 'react';
import {Link} from 'react-router-dom';

// import './index.scss';
import PageTile from '@/component/page-title/index.jsx';
import Paginations from '@/util/pagination/index.jsx';

import User from '@/service/user-service.jsx';
import MUtil from '@/util/mm.jsx';

const _user = new User();
const _mm = new MUtil;

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNum: 1,
      list:[],
      fristLoading: true
    }
  }
  //定义页数变化的时候触发
  onPageNumChange(pageNum){
    this.setState({
      pageNum:pageNum
    },()=>{
      this.loadUserList()
    })
  }

  loadUserList() {
    _user.getUserList(this.state.pageNum)
      .then(res => {
        this.setState(res,()=>{
          this.setState({
            fristLoading : false
          })
        });
        console.log('请求回来的数据:', res);
      }, err => {
        this.setState({
          list:[]
        })
        _mm.errorTips(err);
      });
  }

  componentDidMount() {
    this.loadUserList();

  }


  render() {
    //加载时候状态
    let listBody = (this.state.list.map((user, index) => {
      return (
        <tr key={index}>
          <td>{user.id}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td>{new Date(user.createTime).toLocaleString()}</td>
        </tr>
      )
    }));
    //不加载时候状态
    let listError =(
      <tr>
        <td colSpan='5' className='text-center'>
          {this.state.fristLoading?'正在加载数据~':'没有找到相应的结果~'}
        </td>
      </tr>
    );

    let tableBody = this.state.list.length>0?listBody:listError

    return (
      <div id="page-wrapper">
        <PageTile title='用户列表'/>
        <div className="row">
          <div className="col-md-12">
            <table className='table table-striped table-bordered'>
              <thead>
              <tr>
                <th>ID</th>
                <th>用户名</th>
                <th>邮箱</th>
                <th>电话</th>
                <th>注册时间</th>
              </tr>
              </thead>
              <tbody>
              {tableBody}
              </tbody>
            </table>
          </div>
        </div>
        <Paginations
          current={this.state.pageNum}
          total={this.state.total}
          onChange={(num) => {
            return this.onPageNumChange(num)
          }}

        />
      </div>
    )
  }
}

export default UserList;


