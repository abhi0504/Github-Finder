import React, { Component } from 'react';
import Navbar from './components/layout/navbar'
import User from './components/users/user'
import Search from './components/users/search'
import axios from "axios"
import './App.css';


class App extends Component {

  state = {
    users : [],
    loading: false
  };

  searchUsers = async text => {
    this.setState({loading : true})
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

      this.setState({users: res.data.items , loading : false});

};

clearUsersFunc = () => {
  this.setState({users : [] , loading : false});
}


  render () {
    return (
    <div>
     <div>
      <Navbar />
     </div>
     <div className='container'>
     <Search searchUsers={this.searchUsers} clearUsers={this.clearUsersFunc} showClear={this.state.users.length > 0 ? true : false}/>
     <User loading={this.state.loading} users={this.state.users}/>
     </div>
    </div>
);
}
}
export default App;
