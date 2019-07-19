import React, { Component, Fragment } from "react";
class Ani extends Component {
  constructor(props) {
    super(props);
    this.handlerToggle = this.handlerToggle.bind(this);
    this.state = {
      isShow: false
    };
  }
  render() {
    return (
      <Fragment>
        <div>
          <p className={this.state.isShow ? "show" : "hide"}>我是大魔王</p>
        </div>
        <div>
          <button onClick={this.handlerToggle}>点击我</button>
        </div>
      </Fragment>
    );
  }

  handlerToggle() {
    this.setState({
      isShow: !this.state.isShow
    });
  }
}

export default Ani;
