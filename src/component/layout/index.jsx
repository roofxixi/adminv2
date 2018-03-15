import React from 'react';

import './theme.css';
import NavTop from 'Component/top-nav/index.jsx';
import NavSide from 'Component/side-nav/index.jsx'

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='wrapper'>
        <NavTop></NavTop>
        <NavSide></NavSide>
        {this.props.children}
      </div>
    )
  }
}

export default Layout;
