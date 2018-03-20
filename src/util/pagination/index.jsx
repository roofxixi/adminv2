import Select from 'rc-select';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import 'rc-select/assets/index.css';
import React from 'react';


class pagination extends React.Component {

  constructor(props) {
    super(props);
    this.state={

    }

  }


  render() {

    return (
      <div>
        <Pagination
          {...this.props}
          //只有一页就不显示
          hideOnSinglePage
          //快速跳转
          showQuickJumper
        />
      </div>
    )
  }
}

export default pagination


