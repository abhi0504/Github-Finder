import React, { useState, useEffect } from 'react'
import UserItem from './userItem'

const gridStyle = {
  display : 'grid',
  gridTemplateColumns : 'repeat(3, 1fr)',
  gridGap : '1rem'

}

const User = () => {

   const [error, setError] = useState(null);
   const [isLoaded, setIsLoaded] = useState(false);
   const [users, setUsers] = useState([]);

    useEffect(() => {
    fetch("https://api.github.com/users")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setUsers(result);

        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [users])

  if (error) {
      return <div>Error: {error.message}</div>;
    }
    else if (!isLoaded) {
      return <div>Loading...</div>;
    }
    else {
     return (
       <div style={gridStyle}>
       {users.map(user => (
           <UserItem key={user.id} user={user} />
       ))}
      </div>
    );
}



}
export default User
