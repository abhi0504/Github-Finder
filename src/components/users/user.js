import React, { Component } from 'react'
import UserItem from './userItem'
import Search from './search'


const gridStyle = {
  display : 'grid',
  gridTemplateColumns : 'repeat(3, 1fr)',
  gridGap : '1rem'

}

class User extends Component {

  render() {
     return (
       <div style={gridStyle}>
       {this.props.users.map(user => (
           <UserItem key={user.id} user={user} />
       ))}
      </div>
    );
    }
}

export default User
