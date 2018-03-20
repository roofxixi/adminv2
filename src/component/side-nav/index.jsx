import React from 'react';
import {Link, NavLink} from 'react-router-dom';


class NavSide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: {title: '首页', url: '/'}, flag: false},
        {
          name: {title: '商品', url: '/product'}, flag: true,
          erji: [{title: '商品管理', url: '/product'},
            {title: '品类管理', url: '/product-category'}]
        },
        {
          name: {title: '订单', url: '/order'}, flag: true,
          erji: [{title: '订单管理', url: '/order'}]
        },
        {
          name: {title: '用户', url: '/user'}, flag: true,
          erji: [{title: '用户管理', url: '/user'}]
        },
      ]
    }
  }
  render() {
    return (
      <div className="navbar-default navbar-side" role="navigation">
        <div className="sidebar-collapse">
          <ul className="nav" id="main-menu">

            <li className='active'>
            <NavLink exact activeClassName="active-menu" to="/"><i className="fa fa-dashboard"></i>
            <span>首页</span>
            </NavLink>
            </li>


            <li className='active'>
            {/*二级菜单*/}
            <Link to="/product" className=""><i className="fa fa-list "></i>商品<span
            className="fa arrow"></span></Link>
            <ul className="nav nav-second-level collapse in">
            <li>
            <NavLink to="/product" activeClassName="active-menu">商品管理</NavLink>
            </li>
            <li>
            <NavLink to="/product-category" activeClassName="active-menu">品类管理</NavLink>
            </li>
            </ul>
            </li>
            <li className='active'>
            {/*二级菜单*/}
            <Link to="/order" className=""><i className="fa fa-check-square-o "></i>订单<span
            className="fa arrow"></span></Link>
            <ul className="nav nav-second-level collapse in">
            <li>
            <NavLink to="/order" activeClassName="active-menu">订单管理</NavLink>
            </li>
            </ul>
            </li>
            <li className='active'>
            {/*二级菜单*/}
            <Link to="/user" className=""><i className="fa fa-user-o "></i>用户<span
            className="fa arrow"></span></Link>
            <ul className="nav nav-second-level collapse in">
            <li>
            <NavLink to="/user" activeClassName="active-menu">用户管理管理</NavLink>
            </li>
            </ul>
            </li>


          </ul>

        </div>

      </div>
    )
  }
}

export default NavSide;