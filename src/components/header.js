import React, { Component } from "react";

class Header extends Component {

  constructor(props){
    super(props);

    this.state = {
      keyword: ''
    }
    console.log(props)
  }

  inputChange(event) {
    this.setState({keyword:event.target.value});
    this.props.newsSearch(event.target.value)
  }

  render() {
    return (
      <header>
        <div className="logo">
          Enter title to search
        </div>
        <input onChange={this.inputChange.bind(this)} />
      </header>
    );
  }
}

export default Header;
