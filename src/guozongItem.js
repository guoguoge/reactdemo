import React, { Component } from "react";
import PropTypes from 'prop-types'//数字校验

// imrc

// cc

class GuozongItem extends Component {
  constructor(props) {
    super(props)
    this.handlerClick = this.handlerClick.bind(this)
    //全局绑定方法
  }


  // 条件:组件第一次存在dom中,函数不会被执行
  // 如果已经存在在dom中的函数才会被执行
  // 只有在子组件中才能够触发
  componentWillReceiveProps() {
    console.log('子组件数据更新');
  }

  componentWillUnmount() {
    console.log('组件被删除时');
  }

  shouldComponentUpdate(nextProps,nextState) {//数据发生变化的时候才进行渲染 否则不渲染
    return nextProps.content !== this.props.content
  }

  render() {
    return (
      <li onClick={this.handlerClick}>{this.props.guoname}- {this.props.content}</li>
    );
  }

  handlerClick() {//调用父组件传递过来的方法
    console.log(this.props.list);
    this.props.deleteItem(this.props.index)
  }
}

GuozongItem.propTypes = {//数据校验
  guoname: PropTypes.string,
  content: PropTypes.string.isRequired,
  index: PropTypes.number,
  deleteItem: PropTypes.func,
}

GuozongItem.defaultProps = { //默认数据
  guoname: '國总'
}

export default GuozongItem;
