import React, { Component } from 'react'

class Search extends Component {

state = {
  text : " "
};

onChange = (e) => {
  this.setState({[e.target.name] : e.target.value})
}

onSubmit = (e) => {
  e.preventDefault();
  this.props.searchUsers(this.state.text);
  this.setState({text: " "});
}

  render() {
    return (
      <div>
       <form onSubmit={this.onSubmit} className="form">
        <input placeholder="search user..." type="text" name="text"  value={this.state.text} onChange={this.onChange} />
        <input className="btn btn-dark btn-block" type="submit" value="submit" />
       </form>
       {this.props.showClear && <button className="btn btn-white btn-block" type="submit" value="clear" onClick={this.props.clearUsers}> clear </button> }
      </div>
    )
  }
}

export default Search
