import React, { Component, Fragment } from "react";
import GuozongItem from './guozongItem'
import Ani from './animation'
import axios from 'axios'
import './style.css'

class Guozong extends Component {
  constructor(props) {
    super(props)//调用父类
    this.state = {
      inputValue: '',//输入框的值
      list: []
    }
  }

  // 生命周期

  componentWillMount() {
    console.log('组件将要挂载的时刻,最适合进行获取数据操作');
  }

  componentDidMount() {
    console.log('组件挂载完成的时刻,拿取数据最佳时刻');
    axios.post('https://www.easy-mock.com/mock/5d2833c78d26e660360ad882/example/react') //easymock模拟获取数据
      .then(res => {
        let data = res.data.data
        console.log(data)
        this.setState({
          list: data
        })
      })
      .catch(err => { console.log(err); })
  }

  shouldComponentUpdate() {
    console.log('组件内部数据更新');
    // 如果return false  那么组件就不会进行渲染
    return true
  }

  componentWillUpdate() {
    console.log('组件内部数据将要更新')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('组件数据已更新');

  }

  componentWillUnmount() {
    console.log('组件被删除时');
  }


  // 生命周期


  render() {
    console.log('组件挂载中')
    return (
      <Fragment>
        {/* 阿斯顿 */}
        <div>
          <label htmlFor="jspang">增加服务:</label>
          <input
            ref={(input) => { this.input = input }}
            id="jspang"
            className="input"
            value={this.state.inputValue}
            onChange={this.inputChange.bind(this)}
          />
          <button onClick={this.addList.bind(this)}>增加服务</button>
        </div>
        <ul ref={(ul) => { this.ul = ul }}>
          {
            this.state.list.map((item, index) => {
              return (
                // 循环渲染
                // <li
                //   key={index + item}
                //   onClick={this.deleteItem.bind(this, index)}
                //   dangerouslySetInnerHTML={{ __html: item }}
                // >
                // </li>
                //组件化拆分
                <GuozongItem
                  key={item + index}
                  content={item}
                  index={index}
                  list={this.state.list}
                  deleteItem={this.deleteItem.bind(this)}
                />
              )
            })
          }
        </ul>
        <Ani></Ani>
      </Fragment>
    );
  }

  inputChange() {
    this.setState({//修改数据方法
      inputValue: this.input.value
    })
  }

  addList(e) {//增加列表项目
    this.setState({ //异步方法
      inputValue: '',
      list: [...this.state.list, this.state.inputValue]
    }, () => {
      console.log(this.ul.querySelectorAll('li').length)
    })
  }

  deleteItem(index) {
    console.log(index);
    let list = this.state.list
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
}

export default Guozong;
