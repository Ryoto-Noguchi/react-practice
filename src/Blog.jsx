import React from "react";
import Article from "./Article";
import * as FooBar from './components/FooBar'; // 名前付きexportであり{}を使う。別名ファイルであれば* as [名前]。fromのあとは相対パス
import Hoge from './components/Hoge'; // 名前なしexport

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPublished: false,
      count: 0,
    };
  }

  componentDidMount() {
    // ボタンが押下されたらいいねをカウントアップ
    document.getElementById("counter").addEventListener("click", this.countUp); // this.countUp()としてしまうと無限レンダーが起きてしまう
  }

  componentDidUpdate() {
    console.log(this.state.count)
    if (this.state.count >= 10) {
      this.setState({
        count: 0
      })
    }
  }

  componentWillUnmount() {
    document.getElementById('counter').removeEventListener('click', this.countUp)
  }



  // 公開状態の反転
  togglePublished = () => {
    this.setState({
      isPublished: !this.state.isPublished,
    });
  };

  countUp = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <>
        <Article
          title={"Reactの使い方"}
          isPublished={this.state.isPublished}
          toggle={() => this.togglePublished()}
          count={this.state.count}
        />
        <FooBar.Foo/>
        <FooBar.Bar/>
        <Hoge/>
      </>
    );
  }
}

export default Blog;
